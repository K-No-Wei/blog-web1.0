<template>
    <div>
        <header>
            <div class="head">
                <div class="fl">
                    <div class="logo">
                        <img src="@/assets/img/logo.png" alt="">
                    </div>
                </div>

                <div class="fr">
                    <ul class="first">
                        <li class="first-item">
                            <router-link to="/">首页</router-link>
                        </li>
                        <li class="first-item"><a href="#">分类</a>
                            <ul class="next">
                                <li class="next-item"><router-link to="/category">博客</router-link></li>
                                <li class="next-item"><a href="">java</a></li>
                                <li class="next-item"><a href="">C++</a></li>
                                <li class="next-item"><a href="">1</a></li>
                            </ul>
                        </li>
                        <li class="first-item"><a href="#">标签</a>
                            <ul class="next">
                                <li class="next-item"><a href="">博客</a></li>
                                <li class="next-item"><a href="">java</a></li>
                                <li class="next-item"><a href="">C++</a></li>
                                <li class="next-item"><a href="">1</a></li>
                            </ul>
                        </li>
                        <li class="first-item">
                            <router-link to="/friend">友链</router-link>
                        </li>
                        <li class="first-item"><a href="#">视频</a></li>
                        <li class="first-item"><a href="#">我的</a></li>
                    </ul>
                </div>
            </div>

        </header>
    </div>
</template>

<script>
import "@/assets/js/header"
export default {

}
</script>

<style lang="less" scoped>
header {

    z-index: 1;
    position: relative;
    height: 70px;
    position: fixed;
    justify-content: space-between;
    width: 100%;
    top: 0;
    display: flex;
    align-items: center;
    background: #ffffff;
    transition: all 0.7s ease-in-out;

    .fl {
        float: left;
        line-height: 70px;

        input {
            background: #f6fbff;
            padding: 10px;
        }
    }

    .logo {
        // font-weight: 700;
        // letter-spacing: 2px;
        // font-size: 2rem;
        img{
            transition: all 0.9s ;
            height: 70px;
        }
    }

    .fr {
        position: absolute;
        // line-height: 70px;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);

        .first .first-item {
            float: left;
            margin: 0 20px;
            // padding: 10px 10px;
            text-align: center;
            font-weight: 700;
            letter-spacing: 1px;

            a {
                color: #7e7e7e;
                text-decoration: none;
                transition: all 0.9s ease-in-out;
            }

            a:hover {
                color: #1b6d95;
            }

            &:hover .next {
                display: block;
                animation-name: mycat;
                animation-duration: 0.5s;
                transition: all 0.9s ease-in-out;
            }

        }

        @keyframes mycat {
            0% {
                transform: translate(-40%, 20px);
            }

            100% {
                transform: translate(-40%, 0px);
            }
        }

        // 二级菜单
        .next {
            border-radius: 10px;
            position: absolute;
            transform: translate(-40%, 0);
            background: white;
            transition: all 0.9s ease-in-out;

            .next-item {
                padding-top: 5px;
                width: 100px;
                height: 40px;
                text-align: center;
                transition: all 0.9s ease-in-out;

                &:nth-child(1) {
                    padding: 10px 0 !important;
                }
            }

            .next-item:hover {
                background: rgba(17, 172, 228, 0.806);
            }

            .next-item {
                a {
                    color: #1c1c1c;
                    display: inline;
                    line-height: 20px;
                }
            }

            display: none;
        }

    }

    .head {
        width: 90%;
        margin: 0 auto;
    }
}

.sticky {
    height: 50px !important;
    background: #ffffffa3 !important;
    .logo{

        img{
            margin-top:  15px;
            height: 40px;
        }
    }
}

@media screen and (max-width: 600px) {
    .fr {
        display: none;

    }
}
</style>