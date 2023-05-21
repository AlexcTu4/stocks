<template>
  <div :class="$style.stock">
    <div :class="$style.stock__half">
      <div :class="$style.stock__ticker">
        {{ stock['c'] }}
      </div>
      <div :class="$style.stock__info">
        <div :class="$style.stock__ltr">
          {{ stock['ltr'] }}
        </div>
        <div :class="$style.stock__name">
          {{ stock['name'] }}
        </div>
      </div>
    </div>

    <div :class="$style.stock__half">
      <div :class="{[$style.stock__ltp]: true, [$style.positive] : stock['ltp_positive'], [$style.negative] : stock['ltp_negative']}">
        {{ stock['ltp'] }}
      </div>
      <div :class="$style.stock__info">
        <div :class="{[$style.stock__pcp]: true, [$style.positive]: stock['pcp'] > 0,[$style.negotive]: stock['pcp'] < 0}">
          {{ stock['pcp'] }}
        </div>
        <div :class="{[$style.stock__chg]: true,[$style.positive]: stock['chg'] > 0,[$style.negotive]: stock['chg'] < 0}">
          {{ stock['chg'] }} %
        </div>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
  export default {
    props:{
      stock:{
        type: Object,
        required: true
      }
    },
  }
</script>
<style lang="scss" module>
.stock{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  height: 60px;
  border-top: 1px solid #E5E7EB;
  .stock__half{
    display: flex;
    flex-direction: column;
    .stock__ticker{
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      color: #1F2937;
      letter-spacing: -0.408px;
      padding-right: 12px;
    }
    .stock__ltp{
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
    .stock__info{
      font-size: 13px;
      line-height: 18px;
      letter-spacing: -0.078px;
      color: #6B7280;
      display: flex;
      align-self: end;
      .stock__pcp{
        margin-right: 8px;
      }
      .stock__pcp,
      .stock__chg{
        color: #000000
      }

      div.positive{
        color: #72BF44;
      }
      div.negotive{
        color: #FF3B30;
      }

    }
    .stock__ltr{
      padding-right: 5px;
      margin-right: 5px;
      border-right: 1px solid #6B7280;
    }
  }

}
</style>