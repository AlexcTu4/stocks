<script  lang="ts">
// @ts-ignore
import {mapState, useStore} from "vuex";
import {key} from "@/store";
import myFooter from '@/components/footer.vue'
import {type Stocks} from '@/types/stock'
import Stock from "@/components/stock.vue";

export default {
    components:{
      Stock,
        myFooter
    },
    setup () {
        let stocks : Stocks;
    },
    created() {
        this.$store.dispatch('getData');
    },
    computed: mapState([
        'stocks',
        'loading'
    ])

}
</script>


<template>
  <main>
      <div :class="{[$style.wrapper]:true}">
          <div
            v-if="loading"
            :class="$style.spinner"
          >
            <img src="@/assets/images/spinner.gif" alt="spinner">
          </div>
          <div :class="$style.item" v-for="stock in stocks" :key="stock['c']" >
            <stock
                :stock="stock"
            />
          </div>
      </div>
      <my-footer></my-footer>
  </main>
</template>

<style module lang="scss">
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    background: white;
    height: 90%;
    width: 100%;
    overflow-y: auto;
    position: relative;
    .spinner{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      text-align: center;
      img{
        margin: 150px auto;
      }
    }
    &.spinner > .item{
      opacity: 0.3;
    }
  .item{
    width: 100%;
  }

  }
</style>