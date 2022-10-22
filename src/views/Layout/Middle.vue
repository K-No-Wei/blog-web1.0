<template>
    <div class="middle">
        <section class="article">
            <div class="item">
                <div class="img"><router-link to="/article"><img src="//tvax1.sinaimg.cn/large/006MWoJqgy1h7bim68e27j315o0ssne5.jpg" alt=""
                        srcset=""></router-link> </div>
                <div class="introd">
                    <div class="ar-title">
                        <router-link to="/article">
                        122</router-link>
                    </div>

                    <div class="at-all">
                        <ul>
                            <li><i class="fa fa-calendar-minus-o" aria-hidden="true"></i>发表2022-10-11</li>
                            <li><i class="fa-solid fa-inbox"></i>java</li>
                            <li><i class="fa-solid fa-comment"></i>2</li>
                        </ul>
                    </div>
                    <div class="dirsc">
                        <span>缓存穿透就是客户端请求的数据再缓存和数据库中都不存在，在请求缓存时都不会进入redis中，请求会直接打到数据库之中。</span>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    methods: {
        indexs() {
            const div = document.querySelector(".article");
            console.log(div.offsetHeight)
            const left = document.querySelector(".left");

            $('section').css({ 'height': div.offsetHeight > left.offsetHeight ? div.offsetHeight + 100: left.offsetHeight +100});
        },
        // 在data里面定义mode为false
        /*
        * 模式切换
        * */
        fnChangeMode() {
            this.mode = !this.mode;
            if (this.mode == true) {
                window.document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                window.document.documentElement.setAttribute('data-theme', 'light')
            }
        }

    },
    mounted() {
        this.indexs()
    },
}
</script>

<style lang="less" scoped>
.middle {
    margin: 5px 0 0;

    .article {
        .item {
            background: white;
            height: 260px;
            margin-bottom: 20px;
            border-radius: 3px;
            transition: all 0.9s;
            box-shadow: #dcdcdc 0px 0px 20px;
            overflow: hidden;

            &:hover {
                box-shadow: #adadad 0px 0px 20px;
            }

            .img {
                height: 100%;
                width: 50%;
                overflow: hidden;
                float: left;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    transition: all 0.9s;

                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }

            .introd {
                margin: 20px 10px;
                margin-left: 55%;
                padding: 0 10px;

                .ar-title {
                    font-size: 20px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    color: #1f2d3d;

                    a{
                        text-decoration: none;
                    }
                }

                .at-all {
                    ul {
                        margin: 10px 0px;
                    }

                    ul li {
                        display: inline;
                        width: 33%;
                        color: #858585;

                        &:nth-child(2n) {
                            &::after {
                                content: '|';
                                margin: 2px 10px;
                                height: 20px;
                                width: 1px;

                            }

                            &::before {
                                content: '|';
                                margin: 2px 10px;
                                height: 20px;
                                width: 1px;

                            }
                        }

                        i{
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .article {}

    .item {
        height: 380px !important;

        .img {
            height: 50% !important;
            width: 100% !important;
            cursor: pointer;
        }

        .introd {
            width: 100% !important;
            clear: both !important;
            margin: 0 0 !important;
        }
    }
}
</style>