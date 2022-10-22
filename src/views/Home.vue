<template>
  <div class="home">
    <Header />
    <canvas id="night-mode-cover"></canvas>
    <section style="margin-top: 100px;">
      <div class="comm">
        <div class="comm-left">
          <Left />
        </div>
        <div v-if="this.$route.path != '/'" class="other">
          <router-view>

          </router-view>
        </div>
        <div v-else>
          <div class="comm-middle">
            <Middle />
          </div>
        </div>
        
        <div class="comm-right">
            <Right />
          </div>
      </div>
    </section>
    <footer>
      <Footer />
    </footer>

    <div class="tools">
      <div class="sec">
        <div @click="fnChangeMode"><i class="fa fa-adjust" aria-hidden="true"></i></div>
        <div><i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
          <span class="sr-only">Loading...</span>
        </div>
        <div><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Left from './Layout/Left.vue';
import Middle from './Layout/Middle.vue';
import Footer from '../components/Footer.vue';
import Right from './Layout/Right.vue';
// @ is an alias to /src
import { setTheme } from "@/theme/theme"
export default {
  name: 'Home',
  data() {
    return {
      themeCo: false
    }
  },
  components: {
    Header,
    Left,
    Middle,
    Footer,
    Right
  },
  data() {
    return {
      mode: false
    }
  },
  methods: {
    init() {
      setTheme("default")
    },
    // 在data里面定义mode为false
    /*
      * 模式切换
      * */
    fnChangeMode() {
      const can = document.querySelector("#night-mode-cover")
      this.themeCo = !this.themeCo
      if(this.themeCo){
        can.style.visibility = "visible"
      }else{
        can.style.visibility = "hidden"
      }
      
    }

  },
  mounted() {
    window.onresize = () => {    //写在mounted中,onresize事件会在页面大小被调整时触发
    return (() => {
        window.screenHeight = document.body.clientHeight;
        this.height = window.screenHeight+ 200;
    })();
};
    this.init()
  }
}
</script>
<style lang="less" scoped>
#night-mode-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: rgba(86, 86, 86, 0.205);
  pointer-events: none;
  visibility: hidden;
}

section {

  // 文章主题
  .comm {
    position: relative;
    width: 94%;
    margin: 20px auto 0;

    .other {
      position: absolute;
      left: 400px;
      width: 61%;
      margin: 0 auto;
      height: 100%;
      transition: all 0.9s;
    }

    .comm-left {
      position: absolute;
      left: 2%;
      width: 300px;
      height: 100%;
      transition: all 0.9s;
    }

    .comm-middle {
      position: absolute;
      left: 400px;
      width: 61%;
      margin: 0 auto;
      height: 100%;
      transition: all 0.9s;
    }

    .comm-right {
      position: absolute;
      right: 2%;
      width: 300px;
      height: 100%;
      transition: all 0.9s;

    }

    @media screen and (max-width: 2100px) {

      .comm-middle {
        width: 50%;
      }

      .other {
        width: 40%;
      }

      .comm-right {
        width: 18%;
      }

      .other {
        width: 50%;
      }

    }

    @media screen and (max-width: 2000px) {

      .comm-middle {
        width: 50%;
      }

      .comm-right {
        width: 18%;
      }

      .other {
        width: 50%;
      }

    }

    @media screen and (max-width: 1500px) {

      .comm-middle {
        width: 60%;
      }

      .comm-right {
        display: none;
      }

      .other {
        width: 60%;
      }

    }


    @media screen and (max-width: 1200px) {
      .comm-left {
        width: 25%;
      }

      .comm-middle {
        position: absolute;
        left: 30%;
        right: 2%;
        width: 65%;
      }

      .other {
        position: absolute;
        left: 30%;
        right: 2%;
        width: 65%;
      }

    }

    @media screen and (max-width: 900px) {
      .comm-left {
        display: none;
      }

      .comm-middle,
      .other {
        position: absolute;
        left: 0;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
}

footer {
  margin-top: 50px;
  width: 100%;
  height: 150px;
  background: rgb(187, 182, 182);
  // background: @primaryColor;
}

.tools {
  position: fixed;
  right: 48px;
  bottom: 40px;

  .sec {
    div {
      width: 35px;
      height: 35px;
      background: #49b1f5;
      margin-bottom: 5px;
      border-radius: 4px;
      line-height: 35px;
      text-align: center;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      &:hover {
        background: orange;
      }

      i {
        color: white;
        font-size: 20px;
      }
    }
  }
}
</style>
