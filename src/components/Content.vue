.
<template>
    <div>
        <div class="main-content justify-center">
            <div class="content-filter">
                <div class="filter-main">
                    <div class="content-filter-logo">
                        <img src="/images/switch_account.png" alt="" />
                        <h2 class="content-filter-brand">Friends Filter</h2>
                    </div>
                    <!-- tuong tac -->
                    <div :class="filter && filter === 'interac' ? 'active filter-interac' : 'filter-interac'">
                        <label class="filter-header__box align-center">
                            <div class="align-center">
                                <img src="/images/tuongtac.png" alt="" />
                                <span class="filter-interac__header-title"> Tương tác </span>
                            </div>
                            <input
                                type="radio"
                                id="interac-radio"
                                :checked="filter && filter === 'interac'"
                                @click="setActive('interac')"
                            />
                        </label>
                        <div class="filter-main__content" v-if="filter && filter === 'interac'">
                            <label class="title-filter" for="date-picker">Lọc kể từ ngày:</label>
                            <input type="date" name="date-picker" id="date-picker" />

                            <h4 class="title-filter">Nội dung lọc</h4>
                            <form @submit.prevent="getFormValuesInterac">
                                <div class="align-center filter-interac__checkbox">
                                    <div>
                                        <input
                                            type="checkbox"
                                            v-model="keys"
                                            name=""
                                            id="message"
                                            value="message"
                                        /><label class="filter-interac__checkbox-text" for="message">Tin nhắn</label>
                                    </div>
                                    <img class="info" src="/images/i.png" alt="" />
                                </div>
                                <div class="align-center filter-interac__checkbox">
                                    <div>
                                        <input
                                            type="checkbox"
                                            v-model="keys"
                                            name=""
                                            id="reaction"
                                            value="reaction"
                                        /><label class="filter-interac__checkbox-text" for="reaction">Reaction</label>
                                    </div>
                                    <img class="info" src="/images/i.png" alt="" />
                                </div>
                                <div class="align-center filter-interac__checkbox">
                                    <div>
                                        <input
                                            type="checkbox"
                                            v-model="keys"
                                            name=""
                                            id="comment"
                                            value="comment"
                                        /><label class="filter-interac__checkbox-text" for="comment">Bình luận</label>
                                    </div>
                                    <img class="info" src="/images/i.png" alt="" />
                                </div>
                                <div class="align-center filter-interac__checkbox">
                                    <div>
                                        <input type="checkbox" v-model="keys" name="" id="share" value="share" /><label
                                            class="filter-interac__checkbox-text"
                                            for="share"
                                            >Chia sẻ bài biết</label
                                        >
                                    </div>
                                    <img class="info" src="/images/i.png" alt="" />
                                </div>

                                <div class="align-center">
                                    <button class="btn-reset" type="reset">Đặt lại</button>
                                    <button class="btn-filter-main">Lọc</button>
                                </div>
                                <span class="note">
                                    Riêng tùy chọn lọc tin nhắn sẽ không thể lọc theo thời gian do giới hạn API của
                                    facebook.
                                </span>
                            </form>
                        </div>
                    </div>
                    <!-- tai khoan vo hieu hoa -->
                    <div :class="filter && filter === 'acount_disabled' ? 'active filter-interac' : 'filter-interac'">
                        <label class="filter-header__box align-center">
                            <div class="align-center">
                                <img src="/images/vohieuhoa.png" alt="" />
                                <span class="filter-interac__header-title"> TK bị vô hiệu hóa </span>
                            </div>
                            <input
                                type="radio"
                                id="interac-radio"
                                :checked="filter && filter === 'acount_disabled'"
                                @click="setActive('acount_disabled')"
                            />
                        </label>
                    </div>
                    <!-- banj chung -->
                    <div :class="filter && filter === 'same_friend' ? 'active filter-interac' : 'filter-interac'">
                        <label class="filter-header__box align-center">
                            <div class="align-center">
                                <img src="/images/same.png" alt="" />
                                <span class="filter-interac__header-title"> Bạn chung </span>
                            </div>
                            <input
                                type="radio"
                                id="interac-radio"
                                :checked="filter && filter === 'same_friend'"
                                @click="setActive('same_friend')"
                            />
                        </label>
                        <div class="filter-main__content" v-if="filter && filter === 'same_friend'">
                            <label class="title-filter">số lượng bạn chung</label>

                            <form>
                                <select name="" id="" class="friend-same__select">
                                    <option value="">Nhỏ hơn hoặc bằng</option>
                                    <option value="">Lớn hơn hoặc bằng</option>
                                </select>
                                <div class="friend-same_box">
                                    <input class="friend-same_input" type="string" placeholder="Điền số lượng..." />
                                    <img src="/images/pen.png" class="pen" alt="" />
                                </div>

                                <div class="align-center">
                                    <button class="btn-reset" type="reset">Đặt lại</button>
                                    <button class="btn-filter-main">Lọc</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- ban be -->
                    <div :class="filter && filter === 'friend' ? 'active filter-interac' : 'filter-interac'">
                        <label class="filter-header__box align-center">
                            <div class="align-center">
                                <img src="/images/friend.png" alt="" />
                                <span class="filter-interac__header-title"> Bạn bè </span>
                            </div>
                            <input
                                type="radio"
                                id="interac-radio"
                                :checked="filter && filter === 'friend'"
                                @click="setActive('friend')"
                            />
                        </label>
                        <div class="filter-main__content" v-if="filter && filter === 'friend'">
                            <label class="title-filter">số lượng bạn bè</label>

                            <form>
                                <select name="" id="" class="friend-same__select">
                                    <option value="">Nhỏ hơn hoặc bằng</option>
                                    <option value="">Lớn hơn hoặc bằng</option>
                                </select>
                                <div class="friend-same_box">
                                    <input class="friend-same_input" type="string" placeholder="Điền số lượng..." />
                                    <img src="/images/pen.png" class="pen" alt="" />
                                </div>

                                <div class="align-center">
                                    <button class="btn-reset" type="reset">Đặt lại</button>
                                    <button class="btn-filter-main">Lọc</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- ngay kh dang bai -->
                    <div :class="filter && filter === 'no_post' ? 'active filter-interac' : 'filter-interac'">
                        <label class="filter-header__box align-center">
                            <div class="align-center">
                                <img src="/images/nopost.png" alt="" />
                                <span class="filter-interac__header-title"> Ngày không đăng bài </span>
                            </div>
                            <input
                                type="radio"
                                id="interac-radio"
                                :checked="filter && filter === 'no_post'"
                                @click="setActive('no_post')"
                            />
                        </label>
                        <div class="filter-main__content" v-if="filter && filter === 'no_post'">
                            <label class="title-filter">Không đăng bài kể từ ngày:</label>

                            <form>
                                <input type="date" name="date-picker" id="date-picker" />
                                <div class="align-center">
                                    <button class="btn-reset" type="reset">Đặt lại</button>
                                    <button class="btn-filter-main">Lọc</button>
                                </div>
                            </form>
                        </div>
                    </div>
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
                        <!-- <div class="flex remove-friends">
                            <span class="remove-friends-selected">Đã chọn 129 người bạn</span>
                            <button class="flex">
                                <img class="icon-remove" src="/images/thung-rac.png" alt="" />
                                <span>Hủy kết bạn</span>
                            </button>
                        </div> -->
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
                            <img
                                class="btn-user__avatar"
                                :src="`https://graph.facebook.com/${this.infomation.acountId}/picture?access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`"
                                alt=""
                            />
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
                            <th style="width: 170px">Tên tài khoản</th>
                            <th v-if="interacs.includes('message')">Tin nhắn</th>
                            <th v-if="interacs.includes('reaction')">Reaction</th>
                            <th v-if="interacs.includes('comment')">Bình luận</th>
                            <th v-if="interacs.includes('share')">Chia sẻ bài viết</th>
                            <th>Tổng điểm</th>
                            <th>Hành dộng</th>
                        </thead>
                        <tbody>
                            <img class="empty" v-if="loading" src="/images/loading-.gif" style="width: 250px" />
                            <img
                                class="empty"
                                v-else-if="values.length === 0 && !loading"
                                src="/images/empty-data.png"
                            />
                            <tr v-else-if="values.length !== 0 && !loading" v-for="item in values" :key="item.id">
                                <td>
                                    <input type="checkbox" class="input-checkbox" />
                                </td>
                                <td>
                                    <div class="content-tabel__info">
                                        <img class="avatar" :src="item.url" alt="" />
                                        <div>
                                            <span class="content-table__name">{{ item.name }}</span>
                                            <span class="content-table__key">{{ item.id }}</span>
                                        </div>
                                    </div>
                                </td>
                                <!-- <td> -->
                                <td v-if="interacs.includes('message')">
                                    <span class="content-table__number">{{ item.messages }}</span>
                                    <span class="content-table__point">
                                        {{ item.messages * 0.5 }}
                                        điểm</span
                                    >
                                </td>
                                <!-- <td> -->
                                <td v-if="interacs.includes('reaction')">
                                    <span class="content-table__number">{{ item.reactions }}</span>
                                    <span class="content-table__point">
                                        {{ item.reactions }}
                                        điểm</span
                                    >
                                </td>
                                <!-- <td> -->
                                <td v-if="interacs.includes('comment')">
                                    <span class="content-table__number">{{ item.comments }}</span>
                                    <span class="content-table__point">
                                        {{ item.comments * 3 }}
                                        điểm</span
                                    >
                                </td>
                                <!-- <td> -->
                                <td v-if="interacs.includes('share')">
                                    <span class="content-table__number">{{ item.message }}</span>
                                    <span class="content-table__point">điểm</span>
                                </td>
                                <td>
                                    <span>{{ item.status }}</span>
                                </td>
                                <td>
                                    <button class="btn-unfriend flex">
                                        <img src="/images/delete.png" alt="" />
                                        <span> Unfriend </span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- <div class="remove-friends-success remove-friends-pending">
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
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
    props: {
        infomation: Object,
    },
    data() {
        return {
            values: [],
            friends: [],
            messages: [],
            reaction: [],
            comment: [],
            loading: true,
            acount_disabled: false,
            filter: null,
            interacs: ['message', 'reaction', 'comment', 'share'],
            keys: ['message', 'reaction', 'comment', 'share'],
        };
    },
    created() {},
    methods: {
        getFormValuesInterac() {
            this.interacs = this.keys;
        },
        setActive(key) {
            this.filter = key;
        },
        saveFriends() {
            console.log('save');
            this.values = this.friends.map((friend) => {
                const id = friend.id;
                const getMessageById = this.messages.find(
                    (values) => values.all_participants.nodes[0].messaging_actor.id === id,
                );
                const messages = getMessageById ? getMessageById.messages_count : 0;
                const getReactions = this.reaction.filter((item) => item.id === id);
                const getComments = this.comment.filter((item) => item.id === id);
                return {
                    id,
                    name: friend.title.text,
                    url: friend.url,
                    status: friend.status,
                    acount_disabled: friend.acount_disabled,
                    mutual_friend: friend.mutual_friend,
                    messages,
                    comments: getComments.length,
                    reactions: getReactions.length,
                };
            });
            console.log('this.values', this.values);
        },
        api(url, data) {
            return axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true,
                mode: 'no-cors',
                url,
                data,
            });
        },
        getListFriendRecursion(cursor) {
            return this.api(
                'https://www.facebook.com/api/graphql/',
                qs.stringify({
                    __a: 1,
                    dpr: 1,
                    fb_dtsg: this.infomation.dtsg,
                    variables: JSON.stringify({
                        count: 8,
                        cursor,
                        scale: 1,
                        search: null,
                        id: window.btoa(`app_collection:${this.infomation.acountId}:2356318349:2`),
                    }),
                    doc_id: 6227691327241927,
                }),
            )
                .then(async ({ data }) => {
                    console.log(1, data);
                    if (!data.data.node.pageItems) return;
                    const pageItems = data.data.node.pageItems;
                    console.log('pageItems', pageItems);
                    const edges = pageItems.edges;
                    console.log('edges', edges);
                    const edgesFormat = edges.map((friend) => {
                        console.log('friend', friend);
                        return {
                            id: friend.node.node.id,
                            name: friend.node.title.text,
                            url: friend.node.image.uri,
                            status: friend.node.actions_renderer.action.title.text,
                            acount_disabled: !!friend.node.subtitle_text,
                            mutual_friend: friend?.node,
                            // friend?.node?.subtitle_text?.aggregated_ranges[0].count || 'Người dùng đã ẩn bạn',
                            // mutual_friend: friend.node.subtitle_text && friend.node.subtitle_text.aggregated_ranges[0].count
                            //     ? friend.node.subtitle_text.aggregated_ranges[0].count
                            //     : 'Người dùng đã ẩn bạn',
                        };
                    });
                    this.friends = [...this.friends, ...edgesFormat];
                    // if (pageItems.page_info.has_next_page && pageItems.page_info.end_cursor) {
                    //     await this.getListFriendRecursion(pageItems.page_info.end_cursor);
                    //     return;
                    // }
                    this.getReactionAndCommentRecursion();
                })
                .catch((err) => {
                    console.log('1111111', err);
                });
        },
        getReactionAndCommentRecursion() {
            this.api(
                'https://www.facebook.com/api/graphql/',
                qs.stringify({
                    fb_dtsg: this.infomation.dtsg,
                    q: `node(${this.infomation.acountId}){timeline_feed_units.first(100).after(){page_info,edges{node{id,creation_time,feedback{reactors{nodes{id,name}},commenters{nodes{id,name}}}}}}}`,
                }),
            )
                .then(({ data }) => {
                    console.log(2, data);
                    const userId = this.infomation.acountId;
                    const res = data[userId].timeline_feed_units;
                    if (!res) return;
                    const edges = res.edges;
                    console.log('reactiton and comment', res);
                    let listReaction = [];
                    let listComment = [];

                    edges.forEach((item) => {
                        listReaction = [...listReaction, ...item.node.feedback.reactors.nodes];
                        listComment = [...listComment, ...item.node.feedback.commenters.nodes];
                    });

                    this.reaction = [...this.reaction, ...listReaction];
                    this.comment = [...this.comment, ...listComment];
                    // if (res.page_info.has_next_page) {
                    //     return;
                    //     getReactionAndCommentRecursion(res.page_info.end_cursor);
                    // }
                    console.log('listReaction', listReaction);
                    console.log('listComment', listComment);
                    this.getMessages();
                })
                .catch((err) => {
                    console.log('2222', err);
                });
        },
        getMessages() {
            this.api(
                'https://www.facebook.com/api/graphql/',
                qs.stringify({
                    fb_dtsg: this.infomation.dtsg,
                    q: `viewer(){message_threads{count,nodes{customization_info{emoji,outgoing_bubble_color,participant_customizations{participant_id,nickname}},all_participants{nodes{messaging_actor{name,id,profile_picture}}},thread_type,name,messages_count,image,id}}}`,
                }),
            )
                .then(({ data }) => {
                    if (!data.viewer.message_threads.nodes) return;
                    console.log('data', data);
                    console.log('call api messages', data.viewer.message_threads.nodes);
                    this.messages = data.viewer.message_threads.nodes;
                    this.saveFriends();
                    this.loading = false;
                })
                .catch((err) => {
                    console.log('33333', err);
                });
        },
    },
    mounted() {
        console.log(111);
        if (!Object.keys(this.infomation).length) return;
        console.log(222);
        this.getListFriendRecursion();
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
.filter-main {
    overflow: auto;
    display: inline;
    position: fixed;
    width: 300px;
    top: 0;
    left: 0;
    bottom: 0;
}
.content-filter {
    background-color: #fff;
    flex: 300px;
    border: 1px solid #efefef;
}
.filter-header__box {
    height: 50px;
    padding: 0 22px;
}
.filter-main__content {
    background: #f3f9ff;
    /* background: #ccc; */

    padding: 0 22px;
}
#date-picker {
    width: 100%;
    background: #ffffff;
    border-radius: 6px;
    height: 40px;
    color: #434f64;
    border: none;
    outline: none;
    font-family: Medium;
    padding: 0 10px;
    margin-bottom: 10px;
}
.title-filter {
    display: block;
    padding: 10px 0;
    font-weight: Bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #adb7c9;
    margin-bottom: 0px;
}
.active {
    background: #2d96f7;
}
.active .filter-interac__header-title {
    color: #fff;
}
.filter-interac__header-title {
    font-style: normal;
    font-weight: Bold;
    font-size: 14px;
    line-height: 20px;
    color: #434f64;
    padding-left: 8px;
}
.filter-interac__checkbox {
    padding-top: 22px;
}
.filter-interac__checkbox-text {
    font-weight: Medium;
    font-size: 14px;
    line-height: 20px;
    color: #434f64;
    padding-left: 8px;
}
.friend-same__select {
    padding: 10px;
    width: 100%;
    height: 40px;
    background: #ffffff;
    border-radius: 6px;
    border: none;
    outline: none;
    font-family: Medium;
    font-size: 14px;
    line-height: 16px;
    color: #434f64;
    margin-bottom: 10px;
}
.friend-same_box {
    position: relative;
}
.friend-same_input {
    padding: 10px;
    width: 100%;
    height: 40px;
    background: #ffffff;
    border-radius: 6px;
    border: none;
    outline: none;
    font-family: Medium;
    font-size: 14px;
    line-height: 20px;
    color: #a7aeb7;
}
.pen {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
}
.btn-reset {
    width: 120px;
    height: 36px;
    background: #fafeff;
    border-radius: 5px;
    padding: 10px;
    font-weight: Medium;
    font-size: 14px;
    line-height: 16px;
    color: #2d96f7;
    border-radius: 5px;
    border: none;
    outline: none;
}
.btn-filter-main {
    margin: 20px 0;
    width: 120px;
    height: 36px;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    font-weight: Medium;
    font-size: 14px;
    line-height: 16px;
    background: #2d96f7;
    border-radius: 5px;
    border: none;
    outline: none;
}
.note {
    font-family: Medium;
    font-size: 12px;
    line-height: 15px;
    display: block;
    padding: 0 0 22px;
    color: #fcb500;
}
.content-right {
    background-color: #fff;
    flex: 0 83%;
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
    height: 82px;
    padding: 0 22px;
}
.content-filter-logo img {
    padding-right: 8px;
}
.content-filter-logo h2 {
    font-style: normal;
    font-family: Bold;
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
    font-style: normal;
    font-family: Medium;
    font-size: 16px;
    line-height: 14px;
    color: #434f64;
}
.fb-info .id {
    font-style: normal;
    font-family: Medium;
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
    font-style: normal;
    font-family: Medium;
    font-size: 14px;
    line-height: 20px;
}
.icon-remove {
    padding-right: 4px;
}
.remove-friends-selected {
    font-style: normal;
    font-family: Medium;
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
    font-style: normal;
    font-family: Medium;
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
    font-style: normal;
    font-family: Medium;
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
.btn-user__avatar {
    width: 34px;
    height: 34px;
    border: 0.4px solid #ffffff;
    filter: drop-shadow(0px 2px 9px rgba(0, 0, 0, 0.1));
    border-radius: 4px;
}
.arrow-down {
    padding-left: 10px;
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
    font-family: Bold;
    font-style: normal;
    /* font-weight: 700; */
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
    font-style: normal;
    font-family: Medium;
    font-size: 14px;
    line-height: 17px;
    color: #434f64;
}
.content-table__key {
    font-style: normal;
    font-family: Medium;
    font-size: 14px;
    line-height: 17px;
    color: #78889b;
}
.content-table__number {
    display: block;
    font-style: normal;
    font-family: Medium;
    font-size: 14px;
    line-height: 17px;
    color: #434f64;
}
.content-table__point {
    font-style: normal;
    font-family: Medium;
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
    font-style: normal;
    font-family: Medium;
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
    font-style: normal;
    font-family: Medium;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
}
.remove-friends-pending__title-process {
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
    font-style: normal;
    font-family: Medium;
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
