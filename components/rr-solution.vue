<template>
    <section class="solucao" id="solucao">
      <div class="center">
        <div class="header header--sm">
          <h2 class="align-center">{{ content.textObj['section2 title'] }}</h2>
          <p class="text--xl align-center">{{ content.textObj['section2 subtitle'] }}</p>
        </div>
        <img :src="content.imageObj['solucao de vendas'].url" :alt="content.imageObj['solucao de vendas'].alt" />
      </div>
    </section>
</template>

<script setup>
const props = defineProps({
    content: {
        type: Object
    }
})
</script>


<style scoped lang="scss">

.solucao {
    padding-block: 95px 0;
    & > .center {
      display: flex;
      flex-flow: column nowrap;
      gap: 80px;
      align-items: center;
      img {
        margin-bottom: -14%;
        max-width: 880px;
      }
    }
    h2 {
      max-width: 930px;
    }
  }

    .solucao__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      width: 100%;
    }

  .solucao-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

    .solucao-card__cta {
      z-index: 1;
      width: 440px;
      height: 80px;  
      position: absolute;
      top: -16px;
      right: -12px;
      display: flex;
      flex-flow: row nowrap;
      gap: 34px;
      align-items: center;
      background: linear-gradient(135deg,rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
      backdrop-filter: blur(53px);
      border-radius: 16px;
      padding-left: 42px;

      & > * {
        position: relative;
      }
    }

    .solucao-card__profile {
      width: 58px;
      height: 58px;
    }

    .solucao-card__cta-title {
      font-size: 0.75em;
      font-weight: 700;
    }

    .solucao-card__cta-text {
      font-size: 0.875em;
      font-weight: 500;
    }

    .solucao-card__info {
      padding-block: 19px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }


    .product-div {
      position: absolute;
      left: 50px;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

      .product-div__vector {
        position: absolute;
        top: 16px;
        z-index: 1;
      }

        .product-div__vector--lg {
          right: 47px;
        }

        .product-div__vector--md {
          right: 157px;
        }

        .product-div__vector--sm {
          right: 266px;
        }

      .product-div__images {
        position: absolute;
        z-index: 2;
      }

      .product-div__switch {
        top: 5px;
        right: 320px;
      }

      .product-div__product {
        top: 0;
        right: 380px;
      }

      .product-div__images--text {
        border-radius: 6px;
        background-color: var(--white-color);
        color: #2577B1;
        font-size: 0.75em;
        line-height: 1.3em;
        font-weight: 500;
      }

    .product-div--1 {
      top: 35%;
      .product-div__images--text {
        height: 22px;
        width: 100px;
        top: 62px;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .product-div__chat {
        top: 57px;
        right: 236px;
      }

      .product-div__image-icon {
        top: 52px;
        right: 140px;
      }
    }

    .product-div--2 {
      top: 35%;
      .product-div__images--text {
        height: 32px;
        width: 116px;
        top: 65px;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: var(--accent-color);
        :deep(.rr-logo) {
          width: 13px;
          height: 13px;
          path {
            fill: var(--accent-color);
          }
        }
      }
      .product-div__images--text-alt {
        height: 32px;
        width: 108px;
        top: 65px;
        right: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: #737F9C;
      }

      .product-div__switch {
        top: 0px;
        right: 367px;
        width: 132px;
        height: 84px;
      }

      .product-div__vector {
        top: 35px;
      }

        .product-div__vector--lg {
          right: 50px;
        }

        .product-div__vector--md {
          right: 190px;
        }

        .product-div__vector--sm {
          right: 305px;
        }

      .product-div__discount {
        top: 70px;
        right: 289px;
      }
    }

.product-div--3 {
  top: 35%;
  right: 30px;
  .product-div__images--text {
    height: 49px;
    width: 355px;
    top: 31px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    span {
      font-size: 2.125em;
      font-weight: 500;
      color: #8693B4;
    }
    .number {
      font-size: 1.875em;
      color: var(--base-color);
    }
  }

  .product-div__images--tag {
    height: 24px;
    width: 117px;
    top: 71px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: var(--white-color);
    background-color: var(--primary-color);
  }

  .product-div__product {
    right: 413px;
  }

  .product-div__switch {
    top: 7px;
    right: 357px;
  }


  .product-div__vector {
    top: 18px;
  }

    .product-div__vector--md {
      right: 190px;
    }

}

.product-div--4 {
  top: 35%;
  right: 50px;
  .product-div__images--text {
    height: 40px;
    width: 240px;
    top: 32px;
    right: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    span {
      font-size: 0.875em;
      font-weight: 500;
      color: #8693B4;
    }
    .number {
      font-size: 1.66em;
      color: var(--base-color);
    }
  }
  .product-div__images--text2 {
    height: 40px;
    width: 280px;
    top: 83px;
    right: 0px;
  }

  .product-div__product {
    right: 395px;
  }

  .product-div__switch {
    top: 9px;
    right: 331px;
  }

    .product-div__vector--md {
      top: 19px;
      right: 187px;
    }

}
</style>