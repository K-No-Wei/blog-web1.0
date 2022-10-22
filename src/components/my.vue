<template>
    <div class="card-my">
        <div class="card-my-me">
            <img src="@/assets/img/person.png" alt="knowei">
            <h1>knowei</h1>
        </div>
        <span class="jieshao">喜欢编程以及一些有趣的东西</span>
        <div class="cat">
            <div class="cat-black">
                <div>文章</div>
                <div>12</div>
            </div>
            <div class="cat-black">
                <div>标签</div>
                <div>12</div>
            </div>
            <div class="cat-black">
                <div>分类</div>
                <div>12</div>
            </div>
        </div>

        <a class="github-a" href="#">
            <div class="github"><span style="z-index=10">github</span> </div>
        </a>

        <div class="other">
            <ul>
                <li><a href="">QQ</a></li>
                <li><a href="">Email</a> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.card-my {
    margin: 5px;
    padding: 5px;
    background: @primaryBackground;
    border-radius: 5px;
    font-weight: 700;
    text-align: center;
    transition: all 0.9s;
    &:hover{
        box-shadow: #cacaca 0px 0px 20px;  
    }

    .card-my-me {
        margin: 30px 0 0;
        img {
            margin-top: 3px;
            width: 100px;
            border-radius: 100%;
        }

        h1 {
            color: #6a6766;
            letter-spacing: 1px;
        }
    }

    .jieshao {
        letter-spacing: 1px;
        color: #b2b1b0;
        font-size: 10px;
    }

    .cat {
        max-width: 99%;
        margin: 0 auto;

        .cat-black {
            display: inline;
            float: left;
            width: 33%;
        }

        &::after {
            content: "";
            height: 0;
            line-height: 0;
            display: block;
            visibility: hidden;
            clear: both;
        }
    }

    .github-a {
        text-decoration: none;
        transition: all 0.9s ease-in-out;

    }

    .github {
        position: relative;
        transition: all 0.9s ease-in-out;
        margin: 15px auto;
        padding: 4px 0;
        background-color: #49b1f5;
        width: 80%;
        cursor: pointer;


        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 100%;
            z-index: -1;
            border-radius: 5px;
            background-color: #d9ad2b;
            transition: .3s ease;
        }

        &:hover {
            z-index: 0;

            &::after {
                left: 0;
                width: 100%;
            }
        }
    }

    .other {
        margin: 20px 0;

        ul li{
            display: inline;
            margin: 0 10px;

            a{
                text-decoration: none;
            }
        }
    }

}


</style>