.<template>
    <div>
        <div class="main-content justify-center">
            <div class="content-filter">
                <div class="content-filter-logo">
                    <img src="/images/switch_account.png" alt="" />
                    <h2 class="content-filter-brand">Friends Filter</h2>
                </div>
            </div>
            <div class="content-right">
                <header>
                    <div class="fb-info">
                        <img src="/images/logo-fb.png" alt="" />
                        <div>
                            <span class="name"
                                >{{ infomation.username || 'Bạn chưa đăng nhập facebook trên trình duyệt.' }}
                            </span>
                            <br />
                            <span class="id"> {{ infomation.acountId || 'Vui lòng đăng nhập để tiếp tục' }} </span>
                        </div>
                    </div>
                    <nav class="flex">
                        <div class="flex remove-friends">
                            <span class="remove-friends-selected">Đã chọn 129 người bạn</span>
                            <button class="flex">
                                <img class="icon-remove" src="/images/thung-rac.png" alt="" />
                                <span>Hủy kết bạn</span>
                            </button>
                        </div>
                        <button class="flex btn-filter">
                            <img src="/images/icon-filter.png" alt="" />
                            <span>Lọc</span>
                        </button>
                        <form class="flex search">
                            <input class="input-search" type="text" placeholder="Search..." />
                            <button class="btn-icon-search">
                                <img src="/images/search.png" alt="" />
                            </button>
                        </form>
                        <div class="btn-user flex">
                            <img src="/images/avatar.png" alt="" />
                            <span class="arrow-down">
                                <img src="/images/down.png" alt="" />
                            </span>
                        </div>
                    </nav>
                </header>
                <div class="content-table">
                    <table>
                        <thead class="">
                            <th class="th-checkbox"></th>
                            <th>Tên tài khoản</th>
                            <th>Tin nhắn</th>
                            <th>Reaction</th>
                            <th>Bình luận</th>
                            <th>Chia sẻ bài viết</th>
                            <th>Trạng thái</th>
                            <th>Hành dộng</th>
                        </thead>
                        <tbody>
                            <img class="empty" v-if="data.length === 0" src="/images/empty-data.png" />
                            <tr v-else-if="data.length !== 0" v-for="item in data" :key="item.id">
                                <td>
                                    <input type="checkbox" class="input-checkbox" />
                                </td>
                                <td>
                                    <div class="content-tabel__info">
                                        <img
                                            class="avatar"
                                            src="https://res.cloudinary.com/vannam042/image/upload/v1649580351/z3330081096623_8be91a1ad0d803e7fa8056c4cf3b81f0_v15v8o.jpg"
                                            alt=""
                                        />
                                        <div>
                                            <span class="content-table__name">{{ item.name }}</span>
                                            <span class="content-table__key">{{ item.id }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="content-table__number">{{ item.message }}</span>
                                    <span class="content-tabel__point">điểm</span>
                                </td>
                                <td>
                                    <span class="content-table__number">{{ item.message }}</span>
                                    <span class="content-tabel__point">điểm</span>
                                </td>
                                <td>
                                    <span class="content-table__number">{{ item.message }}</span>
                                    <span class="content-tabel__point">điểm</span>
                                </td>
                                <td>
                                    <span class="content-table__number">{{ item.message }}</span>
                                    <span class="content-tabel__point">điểm</span>
                                </td>
                                <td>
                                    <span>item.status</span>
                                </td>
                                <td>
                                    <button class="btn-unfriend flex">
                                        <img src="/images/delete.png" alt="" />
                                        <span> Unfriend </span>
                                    </button>
                                </td>
                            </tr>
                            <div v-else-if="type === 'C'">C</div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="remove-friends-success remove-friends-pending">
            <div class="justify-between align-center">
                <div class="flex">
                    <img src="/images/success.png" alt="" />
                    <div class="remove-friends-pending__title">
                        <span class="remove-friends-pending__title-loading">Xóa thành công</span>
                        <span class="remove-friends-pending__title-process">124/190 bạn bè</span>
                    </div>
                </div>
                <button class="btn-cancel btn-close-noti">Close</button>
            </div>
        </div>
        <div class="remove-friends-pending">
            <div class="justify-between align-center">
                <div class="flex">
                    <img src="/images/remove-modal.png" alt="" />
                    <div class="remove-friends-pending__title">
                        <span class="remove-friends-pending__title-loading">Đang xóa</span>
                        <span class="remove-friends-pending__title-process">124/190 bạn bè</span>
                    </div>
                </div>
                <button class="btn-cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        infomation: Object,
    },
    data() {
        return {
            data: [
                {
                    avatar: 'https://res.cloudinary.com/vannam042/image/upload/v1649580351/z3330081096623_8be91a1ad0d803e7fa8056c4cf3b81f0_v15v8o.jpg',
                    name: 'Cao Hong Nhung',
                    id: 111111111111111,
                    message: 12,
                    reaction: 12,
                    comment: 12,
                    share: 12,
                    status: 'status',
                },
                {
                    avatar: 'https://res.cloudinary.com/vannam042/image/upload/v1649580351/z3330081096623_8be91a1ad0d803e7fa8056c4cf3b81f0_v15v8o.jpg',
                    name: 'Cao Hong Nhung',
                    id: 111111111111111,
                    message: 12,
                    reaction: 12,
                    comment: 12,
                    share: 12,
                    status: 'status',
                },
                {
                    avatar: 'https://res.cloudinary.com/vannam042/image/upload/v1649580351/z3330081096623_8be91a1ad0d803e7fa8056c4cf3b81f0_v15v8o.jpg',
                    name: 'Cao Hong Nhung',
                    id: 111111111111111,
                    message: 12,
                    reaction: 12,
                    comment: 12,
                    share: 12,
                    status: 'status',
                },
                {
                    avatar: 'https://res.cloudinary.com/vannam042/image/upload/v1649580351/z3330081096623_8be91a1ad0d803e7fa8056c4cf3b81f0_v15v8o.jpg',
                    name: 'Cao Hong Nhung',
                    id: 111111111111111,
                    message: 12,
                    reaction: 12,
                    comment: 12,
                    share: 12,
                    status: 'status',
                },
                {
                    avatar: 'https://res.cloudinary.com/vannam042/image/upload/v1649580351/z3330081096623_8be91a1ad0d803e7fa8056c4cf3b81f0_v15v8o.jpg',
                    name: 'Cao Hong Nhung',
                    id: 111111111111111,
                    message: 12,
                    reaction: 12,
                    comment: 12,
                    share: 12,
                    status: 'status',
                },
            ],
        };
    },
    onMounted() {
        console.log('infomation', infomation);
    },
};
</script>

<style>
.justify-between {
    display: flex;
    justify-content: space-between;
}
.align-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.justify-center {
    display: flex;
    justify-content: center;
}
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
.content-filter {
    background-color: #f8fbff;
    flex: 300px;
}

.content-right {
    background-color: #fff;
    flex: 70%;
}
header {
    padding: 0 34px;
    display: flex;
    height: 82px;
    justify-content: space-between;
    align-items: center;
}
.content-filter-logo {
    display: flex;
    align-items: center;
    padding: 0 22px;
    height: 82px;
}
.content-filter-logo img {
    padding-right: 8px;
}
.content-filter-logo h2 {
    font-family: 'SF UI Display';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    background: linear-gradient(96.37deg, #30cf68 -25.44%, #4ac9ff 118.75%), #d9d9d9;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.fb-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.fb-info .name {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    color: #434f64;
}
.fb-info .id {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #78889b;
}
.remove-friends button {
    height: 42px;
    background: #db1515;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.16);
    border-radius: 6px;
    outline: none;
    border: none;
    color: #fff;
    padding: 0 10px;
    margin: 0 10px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}
.icon-remove {
    padding-right: 4px;
}
.remove-friends-selected {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #000000;
}
.btn-filter {
    height: 42px;
    background: #f0f6fc;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 0 16px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #78889b;
}
.btn-filter img {
    padding-right: 8px;
}
.search {
    position: relative;
    margin: 0 10px;
}
.input-search {
    height: 42px;
    padding: 8px 16px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #78889b;
    background: #f0f6fc;
    border-radius: 6px;
    border: none;
    outline: none;
}
.btn-icon-search {
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    right: 16px;
    top: 8px;
    bottom: 8px;
}
.btn-user {
    width: 70px;
    height: 42px;
    background: #f0f6fc;
    border-radius: 5px;
}
.content-table {
}
.content-table table {
    width: 100%;
    position: relative;
}
.content-table table thead {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #2d96f7;
    background: #f0f6fc;
    padding: 16px 0;
}
.th-checkbox {
    width: 18px;
}
.content-table table tbody tr {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 16px 0;
}
.content-table table tbody tr:nth-child(odd) {
    background: #fff;
}
.content-table table tbody tr:nth-child(even) {
    background: #f8fbff;
}
.content-tabel__info {
    display: flex;
    align-items: center;
}
.input-checkbox {
    width: 18px;
    height: 18px;
    border: none;
    outline: none;
}
.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 12px;
}
.content-table__name {
    display: block;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #434f64;
}
.content-table__key {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #78889b;
}
.content-table__number {
    display: block;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #434f64;
}
.content-table__point {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #78889b;
}
.btn-unfriend {
    height: 30px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    padding: 8px;
    background-color: #fff;
}
.btn-unfriend span {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #434f64;
    padding-left: 6px;
}
.empty {
}
.empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
}
.remove-friends-pending {
    position: absolute;
    bottom: 50px;
    right: 50px;
    background-color: #ccc;
    width: 368px;
    height: 78px;
    background: #ffffff;
    box-shadow: 0px 14px 41px rgba(0, 0, 0, 0.22);
    border-radius: 6px;
}
.remove-friends-pending .justify-between {
    padding: 20px;
}
.remove-friends-pending img:first-child {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    margin-right: 8px;
}
.remove-friends-pending__title span {
    display: block;
}
.remove-friends-pending__title-loading {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
}
.remove-friends-pending__title-process {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #000000;
}
.btn-cancel {
    width: 56px;
    height: 24px;
    background: #fff5f4;
    border-radius: 6px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ff423a;
    border: none;
    outline: none;
}
.btn-close-noti {
    color: #2d96f7;
    background: #f4fbff;
}
.remove-friends-success {
    position: absolute;
    bottom: 50px;
    right: 480px;
}
</style>