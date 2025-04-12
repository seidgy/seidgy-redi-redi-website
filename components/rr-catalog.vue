<template>

<section class="catalogo">
      <div class="center">
        <div class="catalogo__header">
          <h2>Um catálogo de produtos profissional, pronto para vender mais</h2>
          <p>A RediRedi não é apenas um catálogo, é uma ferramenta poderosa de vendas. Com automações inteligentes que ajuda a criar um catálogo de produtos para sua loja que impressiona, atrai clientes e converte vendas em minutos.</p>
        </div>
        <div class="catalogo__cta">
          <p>Veja exemplos de catálogos</p>
          <img src="/images/arrow-right.svg" alt="Arrow down" aria-hidden="true">
        </div>
        <div class="catalogo__button-list">
          <div class="catalogo__button">
            <img src="/images/circle-brazil.svg" alt="Brazil" aria-hidden="true">
            <p>Pet Shop</p>
          </div>
          <div class="catalogo__button">
            <img src="/images/circle-colombia.svg" alt="Colombia" aria-hidden="true">
            <p>Cosméticos</p>
          </div>
          <div class="catalogo__button">
            <img src="/images/circle-mexico.svg" alt="Mexico" aria-hidden="true">
            <p>Moda</p>
          </div>
          <div class="catalogo__button">
            <img src="/images/circle-usa.svg" alt="United States" aria-hidden="true">
            <p>Suplementos</p>
          </div>
          <div class="catalogo__button">
            <img src="/images/circle-spain.svg" alt="Spain" aria-hidden="true">
            <p>Eletrônicos</p>
          </div>
        </div>
        <div class="catalogo__display">
          <div class="catalogo__scene catalogo__scene--0" v-show="data.activeDisplay == 0">
            <img src="/images/monitor.png" alt="Website" aria-hidden="true" />
            <p class="catalogo__url">https://cosmeticosfloralis.rdi.store/products</p>
            <img src="/images/balloon.png" alt="Balloon" class="catalogo__balloon" aria-hidden="true" />
            <p class="catalogo__tag">https://<b>cosmeticosfloralis.rdi.store/</b>products</p>
          </div>
          <div class="catalogo__scene catalogo__scene--1" v-show="data.activeDisplay == 1">
            <img src="/images/cosmetics.png" alt="Website" aria-hidden="true" />
            <p class="catalogo__tag">Posts e vídeos com design profissional</p>
          </div>
          <div class="catalogo__scene catalogo__scene--1" v-show="data.activeDisplay == 2">
            <img src="/images/copilot.png" alt="Website" aria-hidden="true" />
            <p class="catalogo__tag">Redi: Sua co-pioto de vendas!</p>
          </div>
          <div class="catalogo__scene catalogo__scene--1" v-show="data.activeDisplay == 3">
            <img src="/images/management.png" alt="Website" aria-hidden="true" />
            <p class="catalogo__tag">Gestão simples e facilitada</p>
          </div>
        </div>
        <div class="catalogo__info">
          <div class="catalogo__option" :class="{'catalogo__option--active': data.activeDisplay == 0}" @click="data.activeDisplay = 0">
            <p class="catalogo__option-title">Domínio personalizado para você</p>
            <p class="catalogo__option-text">URLs personalizadas: Eu crio um endereço exclusivo e gratuito para o catálogo da sua loja, ou você pode usar o domínio que já possui. Flexível e prático.</p>
          </div>
          <div class="catalogo__option" :class="{'catalogo__option--active': data.activeDisplay == 1}" @click="data.activeDisplay = 1">
            <p class="catalogo__option-title">Gaste tempo com o que importa de verdade</p>
            <p class="catalogo__option-text">Design profissional: Economize tempo e recursos. Eu crio posts e vídeos promocionais de qualidade profissional, prontos para redes sociais e mensagens.</p>
          </div>
          <div class="catalogo__option" :class="{'catalogo__option--active': data.activeDisplay == 2}" @click="data.activeDisplay = 2">
            <p class="catalogo__option-title">Não perca nenhuma venda com WhatsApp</p>
            <p class="catalogo__option-text">Assistência no WhatsApp: Estou sempre no seu WhatsApp, pronta para ajudar. Organizo seus produtos, crio promoções e ofereço insights sobre seus clientes.</p>
          </div>
          <div class="catalogo__option" :class="{'catalogo__option--active': data.activeDisplay == 3}" @click="data.activeDisplay = 3">
            <p class="catalogo__option-title">Gestão simplificada da sua loja</p>
            <p class="catalogo__option-text">Gestão simplificada: Atualizo estoque, analiso desempenho de produtos e sugiro melhorias, para que você foque no que realmente importa: vender mais.</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

const data = reactive({
  activeDisplay: 0
})
</script>

<style scoped lang="scss">
.catalogo {
  padding-block: 65px;
  & > .center {
    background-color: #D9DBEB;
    border-radius: 24px;
    padding: 52px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

  .catalogo__header {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .catalogo__cta {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 700;
    }
  }

  .catalogo__button-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

    .catalogo__button {
      padding: 12px 40px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 4px;
      background-color: var(--primary-color);
      border-radius: 12px;
      p {
        color: var(--white-color);
        font-weight: 700;
      }
    }

    .catalogo__display {
      background-image: url(/images/display.svg);
      background-position: center top;
      background-size: cover;
      padding: 88px 100px 0;
      border-radius: 20px;
    }

      .catalogo__scene {
        position: relative;
        margin: 0 auto;
        margin-bottom: -3px;
        display: flex;
        justify-content: center;
      }

        .catalogo__scene--1 {
          .catalogo__tag {
            left: 50%;
            transform: translate(-50%, -120%);
          }
        }

      .catalogo__url {
        font-size: 0.625em;
        color: var(--white-color);
        position: absolute;
        top: 44.5px;
        left: 120px;
      }

      .catalogo__balloon {
        position: absolute;
        top: 17px;
        left: 111px;

      }

      .catalogo__tag {
        padding: 10px 12px;
        border-radius: 6px;
        background: linear-gradient(90deg, #AF37FF 0%, #EC56C6 100%);
        font-size: 1.125em;
        color: var(--white-color);
        position: absolute;
        top: 0px;
        left: 500px;
        font-weight: 600;
        transform: translateY(-50%);
        b {
          color: var(--white-color);
        }
      }

      .catalogo__info {
        padding-block: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 32px;
      }

        .catalogo__option {
          position: relative;
          display: flex;
          flex-flow: column nowrap;
          gap: 12px;
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.2s ease-out;
          .catalogo__option-title {
            font-size: 1.25em;
            line-height: 1.5em;
            color: #909090;
          }
          .catalogo__option-text {
            font-size: 0.875em;
            line-height: 1.4em;
            color: #909090;
          }
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background-color: transparent;
            transition: all 0.2s ease-out;
          }
        }

        .catalogo__option--active {
          &::before {
            top: -8px;
            background-color: #787878;
          }
          .catalogo__option-title {
            color: #161E2D;
          }
          .catalogo__option-text {
            color: #5C6368;
          }
        }
</style>