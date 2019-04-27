import Vue from "vue";
import Vuex from "vuex";

import Socket from "./modules/socket";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        socket: Socket,
    }

});

export default store