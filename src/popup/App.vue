<template>
    <div id="app">
        <div v-if="!isLoggedFb">
            <LoginFb />
        </div>
        <div v-if="isLoggedFb && !isLogged">
            <Login />
        </div>
        <Content />
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
        Content
    },
    data() {
        return {
            isLogged: false,
            isLoggedFb: false,
        };
    },
    name: 'App',
};
</script>

<style>
@font-face {
  font-family: 'SF UI Display';
  src: url(../../src/assets/fonts/regular.ttf);
}

</style>
