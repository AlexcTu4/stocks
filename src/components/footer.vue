<template>
  <div :class="$style.footer_wrapper">
      <div :class="$style.footer__item">
          <div :class="$style.item__logo">
              <img src="@/assets/images/quotes.png" alt="Quotes">
          </div>
          <div :class="{[$style.item__info] : true,[$style.active] : true}">
              Quotes
          </div>
      </div>
      <div :class="$style.footer__item">
          <div :class="$style.item__logo">
              <img src="@/assets/images/portfolio.png" alt="Portfolio">
          </div>
          <div :class="$style.item__info">
              Portfolio
          </div>
      </div>
      <div :class="$style.footer__item">
          <div :class="$style.item__logo">
              <img src="@/assets/images/ideas.png" alt="Ideas">
          </div>
          <div :class="$style.item__info">
              Ideas
          </div>
      </div>
      <div :class="$style.footer__item">
          <div :class="$style.item__logo">
              <img src="@/assets/images/ipo.png" alt="IPO">
          </div>
          <div :class="$style.item__info">
              IPO
          </div>
      </div>
      <div :class="$style.footer__item">
          <div :class="$style.item__logo">
              <img src="@/assets/images/menu.png" alt="Menu">
          </div>
          <div :class="$style.item__info">
              Menu
          </div>
      </div>
  </div>
</template>
<script  lang="ts">
export default {

}
</script>

<style module lang="scss">
  .footer_wrapper{
    height: 10%;
    width: 100%;
    position: sticky;
    background: white;
    bottom: 0;
    border-top: 1px solid #E5E7EB;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
      .footer__item{
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .item__info{
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          text-align: center;
          letter-spacing: -0.24px;
          color: #9CA3AF;
          &.active{
              color: #007AFF;
          }
        }


        .item__logo{
            width: 20px;
            height: auto;
        }
    }
  }
</style>