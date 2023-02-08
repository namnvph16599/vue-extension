<template>
    <div id="app">
        <b-overlay :show="show" style="width:100%;height:100vh">
            <b-card title="Card with overlay" :aria-hidden="show ? 'true' : null">
                <div v-if="!isLoggedFb">
                    <LoginFb @onLogin="handleLoginFb" />
                </div>
                <div v-if="isLoggedFb && !isLogged">
                    <Login />
                </div>
                <Content :infomation="infomation" />
            </b-card>
        </b-overlay>
    </div>
</template>

<script>
import Login from './../components/Login.vue';
import LoginFb from './../components/LoginFb.vue';
import Content from './../components/Content.vue';

export default {
    components: {
        Login,
        LoginFb,
        Content,
    },
    data() {
        return {
            isLogged: false,
            isLoggedFb: false,
            infomation: {},
            show: true,
        };
    },
    methods: {
        handleLoginFb(data) {
            this.show = false;
            if (!data) {
                this.isLoggedFb = false;
                this.infomation = null;
                return;
            }
            this.isLoggedFb = true;
            this.infomation = data;
        },
    },
};
</script>

<style>
@font-face {
    font-family: 'SF UI Display';
    src: url(../../src/assets/fonts/regular.ttf);
}
</style>
