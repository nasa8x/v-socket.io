<template>
    <div>

        <header>
            <h1>V-SOCKET.IO</h1>
            <h4>Socket.io bindings for Vue.js and Vuex</h4>
        </header>      


        <div class="container">
         

        </div>

     
    </div>
</template>

<script>
    export default {

        methods: {


        },

        mounted() {
            this.$socket.on('time', function (data) {

                console.log(data);

            });           

            this.$socket.emit('ping-pong', { cmd: 'hello' }, function (res) {
                // res is the result from the hapi route
                console.log(res);
            });
           
        }

    }
</script>