.<template>
    <div class="my-modal">
        <form id="form-login-fb" class="">
            <div class="content">
                <img src="/images/logo-fb.png" alt="" />
                <span> Bạn chưa đăng nhập facebook trên trình duyệt. Vui lòng đăng nhập để tiếp tục </span>
            </div>
            <a href="https://www.facebook.com/" type="submit" class="btn-submit-fb">Đăng nhập facebook</a><br />
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            login: false,
        };
    },
    methods: {
        loginFb() {
            this.login = true;
        },
        logoutfb() {
            this.login = false;
        },
    },
    beforeCreate() {
        axios({
            method: 'get',
            url: 'https://www.facebook.com/ajax/bootloader-endpoint/?modules=AdsCanvasComposerDialog.react&__a=1',
            withCredentials: true,
            mode: 'no-cors',
        })
            .then(({ data }) => {
                const rgGetAcountID = /(?<="USER_ID":")(.*)(?=","NAME")/;
                const acountId = rgGetAcountID.exec(data)[0];

                const rgGetUserName = /(?<="NAME":")(.*)(?=","SHORT_NAME")/;
                const username = rgGetUserName.exec(data)[0];

                const access_token_regex = /access_token":"(.*?)"/;
                const access_token = data.match(access_token_regex)[1];

                const rgGtsg = /token":"(.*?)"/;
                const dtsp = data.match(rgGtsg)[1];

                if (acountId && acountId !== '0') {
                    this.loginFb();
                    this.$emit('onLogin', { username, acountId, dtsp, access_token });
                    return;
                }
                this.$emit('onLogin', null);
                this.logoutfb();
            })
            .catch((err) => {
                console.log('err', err);
            });
    },
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

#form-login-fb {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #ffffff;
    width: 372px;
    height: 124px;
    border-radius: 10px;
    padding: 20px;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 10px;
}
.content span {
    padding-left: 8px;
}
.btn-submit-fb {
    width: 100%;
    height: 44px;
    outline: none;
    border: none;
    background: #2d96f6;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 44px;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
}
.btn-submit-fb:hover {
    color: #ffffff;
}
</style>