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
    <rr-sollution></rr-sollution>
    <rr-catalog></rr-catalog>
    <rr-gradient-section>
      <div class="center recursos">
        <h2>Vários recursos para deixar seus produtos profissionais</h2>
        <rr-resources></rr-resources>
        <nuxt-link class="button" visuals="primary" color="white">Veja todas as funcionalidades </nuxt-link>
        <rr-features></rr-features>
      </div>
    </rr-gradient-section>
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

</style>
