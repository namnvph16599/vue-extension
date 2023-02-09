<template>
    <div id="app">
        <div v-if="!isLoggedFb">
            <LoginFb @onLogin="handleLoginFb" />
        </div>
        <div v-if="isLoggedFb && !isLogged">
            <Login />
        </div>
        <div v-if="isLoggedFb && isLogged">
            <Content :infomation="infomation" />
        </div>
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
            isLogged: true,
            isLoggedFb: false,
            infomation: {},
        };
    },
    methods: {
        handleLoginFb(data) {
            console.log('data', data);
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
    font-family: Regular;
    src: url(../../src/assets/fonts/regular.ttf);
}
@font-face {
    font-family: Bold;
    src: url(../../src/assets/fonts/bold.otf);
}

@font-face {
    font-family: Medium;
    src: url(../../src/assets/fonts/regular.ttf);
}

#app {
    font-family: Bold;
}
</style>
