.<template>
    <div class="my-modal">
        <form id="form-login" class="">
            <div class="login-shadow">
                <img class="logo" src="/images/switch_account.png" alt="" />
            </div>
            <h2 class="login-title">FRIENDS FILTER</h2>
            <span class="login-subtitle">
                <span class="login-subtitle-content">Mới sử dụng tiện ích? </span
                ><a class="login-register" href="">Đăng ký tài khoản SMIT.</a>
            </span>
            <input class="input login-input-email" type="text" placeholder="Địa chỉ email" /><br />
            <input class="input login-input-pwd" type="password" placeholder="Password..." /><br />

            <button type="submit" class="btn-submit" @click="onLogin">Login</button><br />
            <a href="" class="login-forgot">Quên tài khoản- mật khẩu?</a>

            <span class="login-powered">
                <span>Powered by</span>
                <img src="/images/logo-smit.png" alt="" />
            </span>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        onLogin() {
        }
    }
};
</script>

<style>
.my-modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

#form-login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    width: 468px;
    height: 525px;
    border-radius: 10px;
    padding: 100px 56px 26px 56px;
}
.login-shadow {
    position: relative;
    width: 50px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.07), inset 0px -3px 5px rgba(0, 0, 0, 0.14);
    border-radius: 5px;
}
.logo {
    display: block;
    padding-top: 8px;
    margin: auto;
}
.login-title {
    font-weight: 800;
    font-family: 'SF UI Display';
    font-size: 20px;
    line-height: 24px;
    background: linear-gradient(96.37deg, #30cf68 -25.44%, #4ac9ff 118.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    padding-top: 6px;
}
.login-subtitle {
    display: block;
    font-family: 'SF UI Display';
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
}

.login-subtitle-content {
    color: #414755;
}
.login-register {
    text-decoration: none;
    color: #1877f2;
}
.input {
    width: 100%;
    height: 44px;
    font-family: 'SF UI Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #414755;
    background: #ffffff;
    border: 1px solid rgba(24, 119, 242, 0.8);
    border-radius: 6px;
    padding-left: 12px;
}
.input::placeholder {
    color: #9aa7b2;
}
.input:focus {
    border: 1px solid rgba(24, 119, 242, 0.8);
    outline: none;
}
.login-input-email {
    margin-top: 24px;
}
.login-input-pwd {
    margin: 10px 0 26px;
}
.btn-submit {
    width: 100%;
    height: 44px;
    outline: none;
    border: none;
    background: linear-gradient(96.37deg, #30cf68 -25.44%, #4ac9ff 118.75%), #d9d9d9;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    color: #ffffff;
}
.login-forgot {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #1877f2;
    text-align: center;
    display: block;
    margin-top: 12px;
}
.login-powered {
    display: flex;
    margin-top: 60px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #78889b;
}
.login-powered span {
    padding-right: 2px;
}
</style>