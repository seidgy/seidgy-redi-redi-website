<template>
  <article>
    <rr-header image="/images/hero-bg.webp">
      <div class="center">
        <section class="hero-content">
          <div class="hero-content__info">
            <p class="text--xl text--display hero-content__brow">Catálogo de Produtos + Gestão de clientes + Inteligência de vendas com IA:</p>
            <h2 class="hero-content__title">Aumente suas vendas em 20% vendendo mais para os clientes que você já tem.</h2>
          </div>
          <rr-hero-try></rr-hero-try>
        </section>
      </div>
    </rr-header>
    <rr-solution></rr-solution>
    <rr-text-image :bg="true" image="/images/hero-iphone-ptbr.webp">
      <img src="/images/arch.webp" alt="Arch" class="text-image__arch" aria-hidden="true" />
      <div class="flex flex--col flex--22">
        <h2>O catálogo que valoriza seus produtos e atrai mais vendas</h2>
        <p class="text--xl">A RediRedi transforma sua vitrine em um catálogo profissional, bonito e fácil de atualizar direto do celular.</p>
        <p class="text--xl">Em poucos minutos, sua loja está pronta para vender no WhatsApp, no Instagram ou onde seus clientes estiverem.</p>
        <p class="flex flex--center row--16 text--sb">Veja exemplos de alguns de nossos catálogos <img src="/images/arrow-down.svg" alt="Seta para baixo" aria-hidden="true" /></p>
      </div> 
      <div class="flex flex--16 catalog-list">
        <nuxt-link to="https://petshop.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--3 flex--between">
          <p class="text--2xs text--sb flex flex--3 flex-center">
            <img width="20px" src="/images/circle-brazil.svg" alt="Brazil" />
            Pet shop
          </p>
          <img src="/images/dog.png" alt="Dog" />
        </nuxt-link>
        <nuxt-link to="https://cosmetico.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--3 flex--between">
          <p class="text--2xs text--sb flex flex--3 flex-center">
            <img width="20px" src="/images/circle-colombia.svg" alt="Colombia" />
            Cosméticos
          </p>
          <img src="/images/lipstick.png" alt="Lipstick" />
        </nuxt-link>
        <nuxt-link to="https://moda.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--3 flex--between">
          <p class="text--2xs text--sb flex flex--3 flex-center">
            <img width="20px" src="/images/circle-mexico.svg" alt="Mexico" />
            Moda
          </p>
          <img src="/images/shoe.png" alt="Shoe" />
        </nuxt-link>
        <nuxt-link to="https://supplements.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--3 flex--between">
          <p class="text--2xs text--sb flex flex--3 flex-center">
            <img width="20px" src="/images/circle-usa.svg" alt="USA" />
            Suplementos
          </p>
          <img src="/images/whey.png" alt="Whey protein" />
        </nuxt-link>
        <nuxt-link to="https://eletronicos.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--3 flex--between">
          <p class="text--2xs text--sb flex flex--3 flex-center">
            <img width="20px" src="/images/circle-spain.svg" alt="Spain" />
            Eletrônicos
          </p>
          <img src="/images/headphone.png" alt="Headphone" />
        </nuxt-link>
      </div>
      <div class="flex flex--col flex-center flex--16">
        <rr-trial-button label="Crie o catálogo da sua loja"></rr-trial-button>
        <rr-store-buttons></rr-store-buttons>
      </div>
    </rr-text-image>
    <rr-text-image image="/images/smartphone2-ptbr.webp">
      <div class="flex flex--col flex--22">
        <h2 class="cap-size">Conecte-se melhor com quem já compra de você</h2>
        <p class="text--xl">Com o cadastro de clientes simples da RediRedi(CRM), você registra preferências, hábitos, datas especiais e até detalhes como “compra mensal” ou “cliente antigo”. </p>
        <p class="text--xl">Tudo isso pra identificar quem está pronto pra comprar, e vender mais pra quem já conhece seus produtos e confia na sua loja.</p>
      </div> 
      <div class="flex flex--col flex-center flex--16">
        <rr-trial-button></rr-trial-button>
        <rr-store-buttons></rr-store-buttons>
      </div>
    </rr-text-image>
    <rr-text-image class="text-image--padding" :bg="true" :half="true" image="/images/copiloto.webp">
      <div class="flex flex--col flex--22">
        <h2 class="cap-size">Redi: O Copiloto de vendas com iA</h2>
        <p class="text--xl">CoA Redi analisa o comportamento dos seus clientes, identifica padrões e mostra onde estão as melhores oportunidades de venda. </p>
        <p class="text--xl">Ela sugere ações simples, ajuda você a reativar quem sumiu e mantém seus clientes recorrentes no radar. Como um cérebro de vendas.</p>
      </div> 
      <div class="flex flex--col flex-center flex--16">
        <rr-trial-button></rr-trial-button>
        <rr-store-buttons></rr-store-buttons>
      </div>
    </rr-text-image>
    <rr-cta>
      <p class="text--2xl text--sb text--white align-center">+20% de aumento na média de pedidos recebidos com a Redi* </p>
    </rr-cta>
    <div class="base-section">
      <div class="center flex flex--col flex-center flex--44">
        <h2 class="align-center">Ferramentas para você potencializar seu marketing e vendas</h2>
        <p class="text--xl align-center">A RediRedi cria artes profissionais para seus produtos em segundos, prontas para Stories, Reels, WhatsApp e outras redes. Inclui formatos para promoções, lançamentos e datas comemorativas. Você escolhe o produto, e em segundos já pode divulgar nos canais sociais da sua loja, ganhando tempo, visibilidade e aumentando suas vendas.</p>
        <img src="/images/ferramentas.webp" alt="Ferramentas" aria-hidden="true">
        <div class="flex flex--col flex-center flex--16">
          <rr-trial-button></rr-trial-button>
          <rr-store-buttons></rr-store-buttons>
        </div>
      </div>
    </div>
    <rr-gradient-section>
      <div class="center recursos">
        <h2>Vários recursos para deixar seus produtos profissionais</h2>
        <rr-resources></rr-resources>
        <nuxt-link class="button" visuals="primary" color="white">Veja todas as funcionalidades </nuxt-link>
        <rr-features></rr-features>
      </div>
      <rr-marketing></rr-marketing>
    </rr-gradient-section>
    <rr-footer></rr-footer>
  </article>
</template>

<script setup>
</script>

<style scoped lang="scss">
  .hero-content__brow {
    line-height: 2.4em;
  }

  .hero-content__title {
    line-height: 1.2em;
    max-width: 1080px;
    margin: 0 auto;
  }

  .cta-text {
    text-align: center;
    font-size: 1.5em;
    font-weight: 600;
    color: var(--white-color);
  }

  .recursos {
    display: flex;
    flex-direction: column;
    gap: 100px;
    align-items: center;
    & > h2 {
      max-width: 1000px;
      text-align: center;
    }
  }

  .image-button {
    padding: 9px 0 0 0;
    border: 1px solid hsla(0, 0%, 81%, 1);
    border-radius: 8px;
    box-shadow: 0px 0.89px 1.78px 0px hsla(222, 33%, 6%, 0.03);
    background: hsla(0, 0%, 95%, 1);
    p {
      text-decoration: none;
    }
  }

  .text-image--padding {
    padding-bottom: 46px;
  }

  .catalog-list {
    @media (max-width: 36em) {
        flex-flow:  row wrap;
        justify-content: center;
    }
  }

  .text-image__arch {
    position: absolute;
    width: 48%;
    left: 52%;
    top: 25%;
    @media (max-width: 1240px) {
      display: none;
    }
  }

</style>
