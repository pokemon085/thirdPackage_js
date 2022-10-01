<template>
  <div>
    <div>
        當前圖像 ID:
         <div  v-for="item of swiperList" :key="item.id" class="image-number-id">{{item.id}},</div>
    </div>
   
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <div class="swiper-img">
            <img :src="item.imgUrl" />
          </div>

          <div class="swiper-id">{{ item.id }}</div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <input
      type="text"
      v-model="currentId"
      @keyup.enter="goPage()"
      placeholder="please enter img id"
    />
    <button @click="goPage()">goPage</button>
  </div>
</template>

<script>
//swiper vue-awesome-swiper@2.6.7 --save
export default {
  name: "HomeSwiper",
  data: function () {
    return {
      currentId: "",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },
      swiperList: [
        {
          id: "1",
          imgUrl:
            "https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg",
        },
        {
          id: "2",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg",
        },
        {
          id: "3",
          imgUrl:
            "https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg",
        },
        {
          id: "4",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg",
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  methods: {
    goPage() {
    //slideTo(id,speed)
      this.$refs.mySwiper.swiper.slideTo(this.currentId, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-number-id{
display: inline-block;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 30.474%;
  background-color: #ccc;
  overflow: hidden;
}
.swiper-img {
  width: 100%;
}
.swiper-img img {
  width: 100%;
}
.swiper-id {
  position: fixed;
  color: #000;
  top: 0;
  font-size: 18px;
}
</style>