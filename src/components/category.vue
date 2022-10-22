<template>
    <div class="card-category">
        <div class="title">分类</div>
        <ul class="cate">
            <li class="cate-item">
                <a href="#">
                    <span class="name">java</span>
                    <span class="count">1</span>
                </a>
            </li>
            <li class="cate-item">
                <a href="#">
                    <span class="name">java</span>
                    <span class="count">1</span>
                </a>
            </li><li class="cate-item">
                <a href="#">
                    <span class="name">java</span>
                    <span class="count">1</span>
                </a>
            </li>
        </ul>
       
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.card-category {
    // position: relative;
    margin: 20px 5px;
    padding: 5px;
    background: @primaryBackground;
    border-radius: 3px;
    font-weight: 700;
    transition: all 0.9s;

    &:hover {
        box-shadow: #cacaca 0px 0px 20px;
    }

    .title{
        margin: 10px 20px;
        font-size:16px;
    }

    .cate {
        margin-bottom: 20px;
        .cate-item {
            margin: 0 20px;
            padding: 4px 0;
            transition: all 0.5s;
            &:hover{
                background: #49b1f5;
                padding: 4px 6px;
            }
            a{
                
                display: inline-flex;
                width: 100%;
                height: 100%;
                text-decoration: none;
            }
            cursor: pointer;
            .name{
                padding-left: 10px;
                width: 90%;
            }

            .count{
                
            }
        }
    }
}
</style>