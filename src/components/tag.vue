<template>
    <div class="tag">
        <div class="title">标签</div>
        <div class="item">
            <div class="items">
                <a>hexo</a>
                <a>java</a>
                <a>C++</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.tag {
    margin: 20px 5px;
    padding: 5px;
    background: @primaryBackground !important;
    border-radius: 3px;
    font-weight: 700;
    transition: all 0.9s;

    &:hover {
        box-shadow: #cacaca 0px 0px 20px;
    }

    .title {
        margin: 10px 20px;
        font-size: 16px;
    }
    .item{
        .items{
            margin: 0 20px;
            padding: 4px 0;
            a{
                width: 33%;
                display: inline-block;
                cursor: pointer;
                text-decoration: none;
                font-size: 16px;
                color: #b8b5a8;
                transition: all 0.9s ease-in-out;
                &:hover{
                    color: #a4a1a1;
                }
            }
        }
    }
}
</style>