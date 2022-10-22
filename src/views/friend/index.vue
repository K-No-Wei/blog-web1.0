<template>
  <div class="friend">
    <h1>我的小伙伴</h1>
    <div class="items">
      <div class="item">
        <a href="https://inis.cn/page/links.html" target="_blank" title="兔子老大">
          <img src="@/assets/img/person.png" alt="兔子老大">
          <span>
            <h2>兔子老大</h2><br>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介介绍介绍介绍介绍介绍介绍介绍绍
          </span>
        </a>
      </div>

      <div class="item">
        <a href="https://inis.cn/page/links.html" target="_blank">
          <img src="@/assets/img/person.png" alt="">
          <span>
            <h2>兔子老大</h2><br>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介介绍介绍介绍介绍介绍介绍介绍绍
          </span></a>
      </div>
    </div>

    <div class="friends-f">
      <div class="f-title">添加友链</div>
      <div class="f-input">
        <div class="f-in-l">
          <input class="f-nick" type="text" name="" id="" placeholder="昵称">
          <input class="f-av" type="text" name="" id="" placeholder="头像url">
          <input class="f-uri" type="text" name="" id="" placeholder="网址">
          <input class="f-introd" type="text" name="" id="" placeholder="介绍">
        </div>

        <button>发送</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    indexs() {
      const div = document.querySelector(".friend");
      console.log(div.offsetHeight)
      const left = document.querySelector(".left");

      $('section').css({'height':div.offsetHeight > left.offsetHeight ? div.offsetHeight : left.offsetHeight});
    }
  },
  mounted(){
    this.indexs()
  }
}
</script>

<style lang="less" scoped>
.friend {
  margin: 5px;
  padding: 5px;
  transition: all 0.9s;
  box-shadow: #dcdcdc 0px 0px 20px;

  &:hover {
    box-shadow: #cacaca 0px 0px 20px;
  }

  background: white;
  height: 1000px;
  border-radius: 3px;

  h1 {
    font-size: 2em;
    letter-spacing: 2px;
    margin: 0 0 0 30px;
    padding: 20px 0;
  }

  hr {
    width: 80%;
    margin: 0 auto;
  }

  .items {
    border-bottom: 2px solid rgb(63, 61, 61);

    .item {
      width: 90%;
      margin: 20px;
      padding: 20px 30px;
      cursor: pointer;
      border-radius: 10px;
      transition: all 0.9s ease-in-out;

      &:hover {
        background: rgb(211, 210, 207);
      }

      a {
        padding: 0 auto;
        margin: 17px auto;
      }

      img {
        border-radius: 100%;
        height: 60px;
        width: 60px;
        vertical-align: super;
        display: inline-block;
      }

      h2 {
        display: inline;
      }

      span {
        max-width: 70%;
        margin-left: 30px;
        display: inline-block;
        font-size: 1em;
        text-overflow: ellipsis;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  // 友链样式
  .friends-f {
    .f-in-l {
      // float: left;
    }

    .f-title {
      font-size: 2em;
      letter-spacing: 2px;
      margin: 20px 0 10px 30px;
    }

    .f-input {

      input {
        display: block;
        width: 80%;
        margin: 10px 40px 0;
        height: 70px;
        font-size: 16px;
        padding-top: 10px;
        border-bottom: 2px solid rgb(107, 104, 104);
        transition: all 0.8s;

        &:focus {
          border-bottom: 2px solid #49b1f5;
        }
      }

      button {
        display: block;
        margin: 40px 60px 0;
        font-size: 20px;
        width: 60%;
        padding: 10px 100px;
        border-radius: 10px;
        background-color: #49b1f5;
        cursor: pointer;
        transition: all 0.6s ease-in-out;

        &:hover {
          background: rgb(4, 191, 91);
        }
      }
    }

  }


}
</style>