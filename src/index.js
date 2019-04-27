

// var Msg = require('./msg.vue');

import IO from 'socket.io-client';
import Vue from 'vue';

class SocketIO {
    constructor(url, options) {
        this.url = url;
        this.options = options || {};
    }

    install(Vue, options) {
        const socket = new IO(this.url, this.options);
        this.options = Object.assign({ prefix: '' }, this.options, options);
        this.events = options && options.events || ['connect', 'error', 'disconnect', 'reconnect', 'reconnect_attempt', 'reconnecting', 'reconnect_error', 'reconnect_failed', 'connect_error', 'connect_timeout', 'connecting', 'ping', 'pong'];
        this.socket = socket;
        Vue.prototype.$socket = socket;
        Vue.socket = socket;
       
        this.register();
    };

    register() {

        var o = this.options;        

        if (o.store) {
            this.Bus = new Vue();
            
            this.events.forEach(event => this.socket.on(event, args => this.emit(event, args)));

            this.socket.onevent = (packet) => {
                let [event, ...args] = packet.data;
                if (args.length === 1) args = args[0];

                this.emit(event, args);
                this.Bus.$emit(event, args);
            }

            this.socket.on = (event, callback) => {                
                this.Bus.$on(event, callback);
            };
        }
       
    };
    emit(event, args) {
        var o = this.options;
        if (o.store && o.store._actions) {

            let evt = (o.prefix + event).toUpperCase();
            for (let key in o.store._actions) {

                let action = key.split('/').pop();
                if (action === evt) {
                    o.store.dispatch(key, args);
                }

            }
        }

        if (o.store && o.store._mutations) {
            let evt = (o.prefix + event).toUpperCase();

            for (let key in o.store._mutations) {

                let mutation = key.split('/').pop();
                if (mutation === evt) {
                    // console.info(`Commiting Mutation: ${key}, Data:`, args);
                    o.store.commit(key, args);

                }

            }

        }

       

    };
}

export default SocketIO