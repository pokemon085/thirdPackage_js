<template>
  <div class="home">
    <div v-for="(item, index) in objList" :key="index" class="wrap">
      <div class="item">
        <div class="name">
          <span>go page: </span>
          <p @click="goPage(item.key)">{{ item.name }}</p>
        </div>

        <div class="url">
          <span>url: </span>
          <a :href="item.url" target="_black"> {{ item.url }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      objList: {
        slideVerify: {
          name: "滑動驗證(slideVerify)",
          key: "slideVerify",
          url: "https://juejin.cn/post/6844904073955639303",
        },
        swiperExample: {
          name: "swiperExample(swiperExample)",
          key: "swiperExample",
          url: "https://codeantenna.com/a/YKtCc2o5iy",
        },
      },
      list: ["slideVerify","swiperExample"],
    };
  },
  methods: {
    goPage(item) {
      this.$router.push("/" + item);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;

  .wrap {
    width: 1200px;
    height: 390px;
    padding: 5px;
    box-sizing: border-box;
    text-align: center;

    .item {
      width: 380px;
      height: 100px;
      padding: 10px;
      background: rgba(181, 208, 240,0.4);
      font-size: 16px;
      border-radius: 20px;
      

      .name {
        span {
          font-weight: bold;
        }
        > p {
          display: inline-block;
          cursor: pointer;
        }
        > p:hover {
          color: rgb(63, 49, 9);
          font-weight: bold;
          text-decoration:underline;
        }
      }

      .url {
        font-weight: bold;
        > p {
          font-weight: bold;
          font-size: 18px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
