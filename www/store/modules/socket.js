
export default {
    state: {
        connected: false
    },

    mutations: {

        CONNECT(state, data) {
            state.connected = true;

            console.log("socket event connected");
        },

        DISCONNECT(state, data) {
            state.connected = false;
            console.log("socket event disconnected");
        },

    },

    getters: {


    },
    actions: {

        JOIN({commit}) {
           
            console.log("socket joined");
        },
    }
}
