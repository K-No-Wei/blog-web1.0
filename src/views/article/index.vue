<template>
  <div class="article">
    <div class="title">
      <h1>文章标题</h1>
      <div class="see"><i class="fa-solid fa-eye"></i>123</div>
      <hr>
    </div>
    <div class="article-content">
      <p>针对中文,演示Markdown的各种语法</p>
      大标题一般显示工程名,类似html的

      <h2 id="-">中标题</h2>
      中标题一般显示重点项,类似html的
      <h2>
        你只要在标题下面输入------即可</h2>

      <h3 id="-">小标题</h3>
      小标题类似html的
      <h3>
        小标题的格式如下 ### 小标题<br>
        注意#和标题字符中间要有空格</h3>

      <h3 id="-">注意!!!下面所有语法的提示我都先用小标题提醒了!!!</h3>
      <h3 id="-">单行文本框</h3>
      <pre><code>这是一个单行的文本框,只要两个Tab再输入文字即可
</code></pre>
      <h3 id="-">多行文本框</h3>
      <pre><code>这是一个有多行的文本框
你可以写入代码等,每行文字只要输入两个Tab再输入文字即可
这里你可以输入一段代码
</code></pre>
      <h3 id="-java-helloworld-">比如我们可以在多行文本框里输入一段代码,来一个Java版本的HelloWorld吧</h3>
      <pre><code><span class="keyword">public</span> <span class="keyword">class</span> HelloWorld {

  <span class="comment">/**
  * @param args
    */</span>
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        System.out.println(<span class="string">"HelloWorld!"</span>);

    }

}
</code></pre>
      <h3 id="-">链接</h3>
      <p>1.<a href="javascript:;">点击这里你可以链接到www.google.com</a><br>
        2.<a href="javascript:;">点击这里我你可以链接到我的博客</a><br></p>
      <h3 id="-">只是显示图片</h3>
      <p><img src="https://tva1.sinaimg.cn/large/006MWoJqgy1h6x29h10jzj31e00ugtw3.jpg" alt="github" title="github"></p>
      <h3 id="-github-icorn-www-github-com">想点击某个图片进入一个网页,比如我想点击github的icorn然后再进入www.github.com</h3>
      <p><a href="javascript:;"><img src="https://tva1.sinaimg.cn/large/006MWoJqgy1h6x29h10jzj31e00ugtw3.jpg"
            alt="image" title="github"></a></p>
      <h3 id="-">文字被些字符包围</h3>
      <blockquote>
        <p>文字被些字符包围</p>
        <p>只要再文字前面加上&gt;空格即可</p>
        <p>如果你要换行的话,新起一行,输入&gt;空格即可,后面不接文字
          但&gt; 只能放在行首才有效</p>
      </blockquote>
      <h3 id="-">文字被些字符包围,多重包围</h3>
      <blockquote>
        <p>文字被些字符包围开始</p>
        <blockquote>
          <p>只要再文字前面加上&gt;空格即可</p>
          <blockquote>
            <p>如果你要换行的话,新起一行,输入&gt;空格即可,后面不接文字</p>
            <blockquote>
              但&gt; 只能放在行首才有效
            </blockquote>
          </blockquote>
        </blockquote>
      </blockquote>
      <h3 id="-">特殊字符处理</h3>
      <p>有一些特殊字符如&lt;,#等,只要在特殊字符前面加上转义字符即可<br>
        你想换行的话其实可以直接用html标签<br></p>
    </div>

    <div class="article-end">
      <span> 发布于2022-10-21</span><br>
      <div class="tag">
        <div class="item">java</div>
        <div class="item">java</div>
        <div class="item">java</div>
        <div class="share">
          <share :config="config"></share>
        </div>

      </div>

    </div>
    <hr>
    <div class="article-comment">
      <div class="head">
        评论区
      </div>
      <div class="middle">

        <div class="avator"> <img src="@/assets/img/person.png" alt="" /></div>
        <div class="reply"><textarea placeholder="评论内容"></textarea></div>
        <div class="submit"><button>发布</button></div>


      </div>
      <hr>
      <div class="comment-box">
        <div class="items">
          <div class="it-avator">
            <img src="@/assets/img/测试.png" alt="">
          </div>
          <div class="it-con">
            <div class="it-head">2022-10-10 <i>level1</i>回复</div>
            <div class="it-content">主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题</div>
            <div class="children">
              <div class="ch-avator">
                <img src="@/assets/img/测试.png" alt="">
              </div>
              <div class="it-con" style="border: none">
                <div class="it-head">2022-10-10 <i>level1</i></div>
                <div class="it-content">主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题</div>
              </div>
            </div>
          </div>
        </div>

        <div class="items">
          <div class="it-avator">
            <img src="@/assets/img/测试.png" alt="">
          </div>
          <div class="it-con">
            <div class="it-head">2022-10-10 <i>level1</i>回复</div>
            <div class="it-content">主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题</div>
            <div class="children">
              <div class="ch-avator">
                <img src="@/assets/img/测试.png" alt="">
              </div>
              <div class="it-con" style="border: none">
                <div class="it-head">2022-10-10 <i>level1</i></div>
                <div class="it-content">主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题主题</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import "@/assets/js/test"
import $ from 'jquery'
export default {
  data() {
    return {
      config: {
        url: '', // 网址，默认使用 window.location.href
        source: '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        description: '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image: '', // 图片, 默认取网页中第一个img标签
        sites: ['qzone', 'qq', 'weibo', 'wechat'], // 启用的站点
        wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
        wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
      },
      clientHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    // 动态加载高度
    indexs() {
      let div = document.querySelector(".article");
      let left = document.querySelector(".comm-left");

      $('section').css({ 'height': div.offsetHeight > left.offsetHeight ? div.offsetHeight + 50 : left.offsetHeight + 50 });
    }
  },
  // 乱七八糟
  mounted() {
    window.onresize = () => {
      let div = document.querySelector(".article");
      let left = document.querySelector(".comm-left");
      this.clientHeight = div.offsetHeight > left.offsetHeight ? div.offsetHeight + 50 : left.offsetHeight + 50;
    }
    const listImg = document.querySelectorAll("img");
    if (listImg[listImg.length - 1].width != null) {
      this.indexs()
    }
  },
  watch: {
    clientHeight(newValue, oldValue) {
      if (newValue) {
        this.indexs()
      }
    }
  }

}
</script>

<style scoped lang="less" >
@import url("@/assets/css/markdown");

.article {

  margin: 5px;
  padding: 10px 40px;
  background: @primaryBackground;
  border-radius: 5px;
  transition: all 0.9s;
  // box-shadow: #dcdcdc 0px 0px 20px;

  &:hover {
    box-shadow: #cacaca 0px 0px 20px;
  }

  .title {
    position: relative;

    h1 {
      font-weight: 1000;
      display: inline-block;
    }

    .see {
      display: inline-block;
      position: absolute;
      right: 10%;
      top: 40%;
      transform: translateY(-50%);

      i {
        color: rgb(124, 124, 124);
        margin-right: 3px;
      }
    }
  }

  hr {

    margin: 20px 0 !important;
  }

  .article-content {

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      &::before {
        height: 30px;
        content: "";
        display: inline-block;
        background: #f5d349;
        opacity: 1;
        pointer-events: none;
        border-radius: 20px;
        width: 7px;
        vertical-align: middle;
        margin-right: 15px;
      }
    }
  }

  .article-end {
    span {
      color: #898989;
      font-size: 14px;
    }

    .tag {
      margin-top: 10px;
      display: block;

      div {
        display: inline-block;
      }

      .item {
        display: inline-block;
        margin-right: 10px;
        background: white;
        border: 2px solid #74b7ea;
        border-radius: 15px;
        padding: 0 10px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &:hover {
          background: #74b7ea;
          color: white;
        }
      }
    }

    .share {
      float: right;
      justify-content: center;
    }

  }

  // 评论区样式
  .article-comment {
    width: 100%;
    margin: 40px 0 0;

    .head {
      font-size: 24px;
      color: black;
      font-weight: 700;
      border-bottom: 1px solid rgb(33, 32, 32);
    }

    .middle {
      margin: 20px 0 0;
      height: 70px;
      width: 100%;
      display: flex;
      align-items: center;

      .avator,
      .reply,
      .submit {
        display: inline-block;
        margin: 10px;
        height: 100%;
        display: flex;
        align-items: center;
      }

      .avator {
        width: 15%;
        // height: 70px;

        img {
          height: 50px;
          width: 50px;
          border-radius: 100%;
        }
      }

      .reply {
        width: 70%;

        textarea {
          width: 100%;
          height: 50px;
          border: none;
          outline: none;
          resize: none;
          background: #f1f2f3;
          border-radius: 10px;
          padding: 5px;
          font-weight: 600;
          font-size: 15px;
        }
      }

      .submit {
        // height: 70px;
        width: 10%;

        button {
          width: 100%;
          height: 50px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 1px;
          border-radius: 5px;
          background: #80d7f6;
          transition: all 0.5s;

          &:hover {
            background: #36b0dd;
          }
        }
      }

    }

    .comment-box {
      position: relative;
      width: 80%;
      margin: 50px auto;
      width: 100%;
      align-items: center;

      .items {
        margin-top: 20px;
        .it-avator {
          left: 6px;
          position: absolute;
        }

        .it-con {
          margin-left: 66px;
          padding-bottom: 10px;
          border-bottom: 1px solid #adadad;
        }

        img {
          height: 50px;
          width: 50px;
          border-radius: 100%;
          vertical-align: text-bottom;
        }

        .it-con,
        .it-avator {
          display: inline-block;
        }
      }

      .children {
        margin-top: 20px;
        position: relative;
        height: 100px;
        width: 100%;

        .ch-avator {
          left: 6px;
          position: absolute;
        }
      }
    }
  }


}
</style>
