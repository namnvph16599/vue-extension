.<template>
    <div class="my-modal">
        <form id="form-login-fb" class="">
            <div class="content">
                <img src="/images/logo-fb.png" alt="" />
                <span> Bạn chưa đăng nhập facebook trên trình duyệt. Vui lòng đăng nhập để tiếp tục </span>
            </div>
            <button type="submit" class="btn-submit-fb">Đăng nhập facebook</button><br />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {};
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
    line-height: 16px;
    color: #ffffff;
}
</style>