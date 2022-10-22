<template>
    <div class="hot">
        <div class="title">最热文章</div>
        <div class="article">
            <div class="item">
                <div class="img"><a href=""><img src="//tvax1.sinaimg.cn/large/006MWoJqgy1h7bim68e27j315o0ssne5.jpg" alt=""
                        srcset=""></a></div>
                <div class="introd">
                    <div class="ar-title">
                        122
                    </div>
                    <div class="at-all">
                        <span>2022-10-11</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="img"><img src="//tvax1.sinaimg.cn/large/006MWoJqgy1h7bim68e27j315o0ssne5.jpg" alt=""
                        srcset=""></div>
                <div class="introd">
                    <div class="ar-title">
                        122
                    </div>
                    <div class="at-all">
                        <span>2022-10-11</span>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.hot {
    margin: 5px 5px 20px;
    padding: 5px;
    padding-bottom: 10px;
    background: #ffffff;
    border-radius: 3px;
    transition: all 0.9s;
    box-shadow: #dcdcdc 0px 0px 20px;

    .title {
        margin: 10px 20px;
        font-size: 16px;
    }

    .article {
        height: 100%;
        .item{
            height: 60px;
            padding: 0 10px;
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
            margin-left: 52%;

            .ar-title {
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 1px;
                color: #1f2d3d;
            }

            .at-all {
                span {
                    font-size: 10px;
                    color: #333435;
                }

            }
        }
    }

}
</style>