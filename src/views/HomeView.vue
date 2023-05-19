<script  lang="ts">
// @ts-ignore
import {mapState, useStore} from "vuex";
import {key} from "@/store";
import myFooter from '@/components/footer.vue'
import {type Stocks} from '@/types/stock'

export default {
    components:{
        myFooter
    },
    setup () {
        let stocks : Stocks;
      // @ts-ignore
        const store = useStore(key)

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
      <div :class="{[$style.wrapper]:true, [$style.spinner] : loading}">
          <div :class="$style.item" v-for="stock in stocks" :key="stock['c']" >
              <div :class="$style.item__half">
                  <div :class="$style.item__ticker">
                      {{ stock['c'] }}
                  </div>
                  <div :class="$style.item__info">
                      <div :class="$style.item__ltr">
                          {{ stock['ltr'] }}
                      </div>
                      <div :class="$style.item__name">
                          {{ stock['name'] }}
                      </div>
                  </div>
              </div>

              <div :class="$style.item__half">
                  <div :class="{[$style.item__ltp]: true, [$style.positive] : stock['ltp_positive'], [$style.negative] : stock['ltp_negative']}">
                      {{ stock['ltp'] }}
                  </div>
                  <div :class="$style.item__info">
                      <div :class="{[$style.item__pcp]: true, [$style.positive]: stock['pcp'] > 0,[$style.negotive]: stock['pcp'] < 0}">
                          {{ stock['pcp'] }}
                      </div>
                      <div :class="{[$style.item__chg]: true,[$style.positive]: stock['chg'] > 0,[$style.negotive]: stock['chg'] < 0}">
                          {{ stock['chg'] }} %
                      </div>
                  </div>

              </div>


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
    &.spinner{
      background-image: url("./src/assets/images/spinner.gif");
      background-repeat: no-repeat;
      background-position: center;
    }
    &.spinner > .item{
      opacity: 0.3;
    }

    .item{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        height: 60px;
        border-top: 1px solid #E5E7EB;
        .item__half{
            display: flex;
            flex-direction: column;
            .item__ticker{
                font-weight: 400;
                font-size: 17px;
                line-height: 22px;
                color: #1F2937;
                letter-spacing: -0.408px;
                padding-right: 12px;
            }
            .item__ltp{
                align-self: end;
                border-radius: 4px;
                padding: 0 4px;
                font-size: 17px;
                line-height: 22px;
                &.positive{
                    background: #72BF44;
                    color: #FFFFFF;
                }
                &.negative{
                    background: #FF3B30;
                    color: #FFFFFF;
                }
            }
            .item__info{
                font-size: 13px;
                line-height: 18px;
                letter-spacing: -0.078px;
                color: #6B7280;
                display: flex;
                align-self: end;
                .item__pcp{
                    margin-right: 8px;
                }
                .item__pcp,
                .item__chg{
                  color: #000000
                }

                div.positive{
                    color: #72BF44;
                }
                div.negotive{
                    color: #FF3B30;
                }

            }
            .item__ltr{
                padding-right: 5px;
                margin-right: 5px;
                border-right: 1px solid #6B7280;
            }
        }

    }
  }
</style>