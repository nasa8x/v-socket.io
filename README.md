Socket.io bindings for Vue.js and Vuex
===============


## Get Started

```
npm i v-socket.io
```

```

import Vue from 'vue'
import App from './app.vue'
import store from './store'

import SocketIO from 'v-socket.io';

Vue.use(new SocketIO("http://localhost:8081"));

new Vue({
  el: '#app',
  render: h => h(App)
});

```

```js

Vue.use(new SocketIO("http://localhost:8081"), { 
    store, 
    prefix:'SOCKET_' // action & mutations prefix
});

```

```js

export default {
    state: {
        connected: false
    },

    mutations: {

        SOCKET_CONNECT(state, data) {
            state.connected = true;

            console.log("socket event connected");
        },

        SOCKET_DISCONNECT(state, data) {
            state.connected = false;
            console.log("socket event disconnected");
        },

    },

    getters: {


    },
    actions: {

        SOCKET_JOIN({commit}) {
           
            console.log("socket joined");
        },
    }
}

```

```js

 mounted() {
        this.$socket.on('time', function (data) {

            console.log(data);

        });           

        this.$socket.emit('ping-pong', { cmd: 'hello' }, function (res) {
            // res is the result from the hapi route
            console.log(res);
        });
        
    }
```


## Donate

[![](https://i.imgur.com/z0p6RvA.png)](http://vrl.to/ec5cfbae)[![](https://i.imgur.com/bEUNBGz.png)](http://vrl.to/ec5cfbae)

### MIT License

Copyright (c) 2018 Nasa8x

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.