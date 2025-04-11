<template>
  <article>
    <rr-header image="/images/hero-bg.jpg">
      <div class="center">
        <section class="hero-content">
          <div>
            <div class="hero-content__info">
              <h2 class="hero-content__title" visuals="h1">Olá, eu sou a Redi!</h2>
              <span class="hero-content__separator"></span>
              <p class="hero-content__subtitle" visuals="h3">A assistente de marketing e vendas para a sua loja</p>
              <p class="hero-content__text base-text--lg">Eu crio seu catalogo de produtos, encontro as melhores imagens, escrevo descrições, preparo promoções, faço artes e vídeos para suas redes sociais e muito mais. Tudo para te ajudar a vender mais com menos esforço.</p>
            </div>
            <rr-trial-button></rr-trial-button>
            <rr-store-buttons></rr-store-buttons>
          </div>
          <rr-think></rr-think>
        </section>
      </div>
    </rr-header>
    <rr-cta>
      <p class="cta-text">+20% de aumento na média de pedidos recebidos com a Redi* </p>
    </rr-cta>
    <section class="solucao">
      <div class="center">
        <h2 class="align-center">A solução de vendas completa com AI para sua loja vender pelo WhatsApp e redes sociais</h2>
        <div class="solucao__grid">
          <div class="solucao-card">
            <div class="solucao-card__cta">
              <img src="/images/profile1.png" alt="Gestão de catálogo" class="solucao-card__profile" aria-hidden="true" />
              <div>
                <p class="solucao-card__cta-title">Gestão de catálogo:</p>
                <p class="solucao-card__cta-text">Inclua um produto no meu catálogo</p>
              </div>
            </div>
            <rr-decor-card aria-hidden="true">
              <div class="product-div product-div--1">
                <img src="/images/vector-grad-1.svg" alt="Vector" class="product-div__vector product-div__vector--sm" />
                <img src="/images/vector-grad-2.svg" alt="Vector" class="product-div__vector product-div__vector--md" />
                <img src="/images/vector-grad-3.svg" alt="Vector" class="product-div__vector product-div__vector--lg" />
                <img src="/images/switch-redi.svg" alt="Switch" class="product-div__images product-div__switch" />
                <img src="/images/product-image1.png" alt="Product" class="product-div__images product-div__product" />
                <img src="/images/chat.svg" alt="Chat" class="product-div__images product-div__chat" />
                <img src="/images/image.svg" alt="Chat" class="product-div__images product-div__image-icon" />
                <div class="product-div__images product-div__images--text">sualoja.com</div>
              </div>
            </rr-decor-card>
            <div class="solucao-card__info">
              <h3>Gerenciamento de catálogo fácil e rápido</h3>
              <p>Precisa cadastrar novos produtos? Em segundos, nosso copiloto de IA gera descrições otimizadas e encontra imagens profissionais. Um catálogo de produtos organizado atrai mais clientes e aumenta suas vendas.</p>
            </div>
          </div>
          <div class="solucao-card">
            <div class="solucao-card__cta">
              <img src="/images/profile2.png" alt="Gestão de catálogo" class="solucao-card__profile" aria-hidden="true" />
              <div>
                <p class="solucao-card__cta-title">Promoções::</p>
                <p class="solucao-card__cta-text">Crie uma campanha de liquidação</p>
              </div>
            </div>
            <rr-decor-card aria-hidden="true">
              <div class="product-div product-div--2">
                <img src="/images/vector-grad-1.svg" alt="Vector" class="product-div__vector product-div__vector--sm" />
                <img src="/images/vector-grad-2.svg" alt="Vector" class="product-div__vector product-div__vector--md" />
                <img src="/images/vector-grad-3.svg" alt="Vector" class="product-div__vector product-div__vector--lg" />
                <img src="/images/switch-redi.svg" alt="Switch" class="product-div__images product-div__switch" />
                <img src="/images/discount.svg" alt="Chat" class="product-div__images product-div__discount" />
                <div class="product-div__images product-div__images--text">Criar img <rr-minimal-logo></rr-minimal-logo></div>
                <div class="product-div__images product-div__images--text product-div__images--text-alt">seucupom</div>
              </div>
            </rr-decor-card>
            <div class="solucao-card__info">
              <h3>Gerenciamento de catálogo fácil e rápido</h3>
              <p>Precisa cadastrar novos produtos? Em segundos, nosso copiloto de IA gera descrições otimizadas e encontra imagens profissionais. Um catálogo de produtos organizado atrai mais clientes e aumenta suas vendas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
</script>

<style scoped lang="scss">
  .cta-text {
    text-align: center;
    font-size: 1.5em;
    font-weight: 600;
    color: var(--white-color);
  }

  .solucao {
    padding-block: 65px;
    & > .center {
      display: flex;
      flex-flow: column nowrap;
      gap: 80px;
      align-items: center;
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
      border-radius: 16px;
      padding-left: 42px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(135deg,rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
        backdrop-filter: blur(53px);
        border-radius: 16px;
      }
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
</style>
