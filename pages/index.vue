<template>
  <article>
    <rr-header image="/images/hero-bg.webp">
      <div class="center">
        <section class="hero-content">
          <div class="hero-content__info">
            <p class="text--xl text--display hero-content__brow">{{ pageContent.textObj['hero subtitle'] }}</p>
            <h2 class="hero-content__title">{{ pageContent.textObj['hero title'] }}</h2>
          </div>
          <rr-hero-try :content="pageContent"></rr-hero-try>
        </section>
      </div>
    </rr-header>
    <rr-solution :content="pageContent"></rr-solution>
    <rr-text-image :bg="true" :image="pageContent.imageObj['catalogo smartphone'].url" class="catalogo">
      <img src="/images/arch.webp" alt="Arch" class="text-image__arch" aria-hidden="true" />
      <div class="flex flex--col flex--12">
        <h2 class="catalogo__title">{{ pageContent.textObj['section3 title'] }}</h2>
        <div class="flex flex--col flex--36">
          <p class="text--xl text--1-4 catalogo__text">{{ pageContent.textObj['section3 paragraph 1'] }}</p>
          <p class="text--xl text--1-4 catalogo__text">{{ pageContent.textObj['section3 paragraph2'] }}</p>
        </div>
      </div> 
      <div class="flex flex--col flex--60 flex--start">
        <div class="flex flex--col flex--44">
          <p class="flex flex--center flex--16 text--sb">{{ pageContent.textObj['veja exemplos catalogo'] }} <img src="/images/arrow-down.svg" alt="Seta para baixo" aria-hidden="true" /></p>
          <div class="flex flex--16 catalog-list">
            <nuxt-link to="https://petshop.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--between">
              <p class="text--2xs text--sb flex flex--3 flex-center">
                <img width="20px" src="/images/circle-brazil.svg" alt="Brazil" />
                {{ pageContent.textObj['pet shop'] }}
              </p>
              <img src="/images/dog.webp" alt="Dog" />
            </nuxt-link>
            <nuxt-link to="https://cosmetico.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--between">
              <p class="text--2xs text--sb flex flex--3 flex-center">
                <img width="20px" src="/images/circle-colombia.svg" alt="Colombia" />
                {{ pageContent.textObj['cosmeticos'] }}
              </p>
              <img src="/images/lipstick.webp" alt="Lipstick" />
            </nuxt-link>
            <nuxt-link to="https://moda.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--between">
              <p class="text--2xs text--sb flex flex--3 flex-center">
                <img width="20px" src="/images/circle-mexico.svg" alt="Mexico" />
                {{ pageContent.textObj['moda'] }}
              </p>
              <img src="/images/shoe.webp" alt="Shoe" />
            </nuxt-link>
            <nuxt-link to="https://supplements.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--between">
              <p class="text--2xs text--sb flex flex--3 flex-center">
                <img width="20px" src="/images/circle-usa.svg" alt="USA" />
                {{ pageContent.textObj['suplementos'] }}
              </p>
              <img src="/images/whey.webp" alt="Whey protein" />
            </nuxt-link>
            <nuxt-link to="https://eletronicos.rdi.store/products" target="_blank" class="image-button flex flex-center flex--col flex--between">
              <p class="text--2xs text--sb flex flex--3 flex-center">
                <img width="20px" src="/images/circle-spain.svg" alt="Spain" />
                {{ pageContent.textObj['eletronicos'] }}
              </p>
              <img src="/images/headphone.webp" alt="Headphone" />
            </nuxt-link>
          </div>
        </div>
        <div class="flex flex--col flex-center flex--16">
          <rr-trial-button :label="pageContent.textObj['crie o catalogo']"></rr-trial-button>
        </div>
      </div>
    </rr-text-image>
    <rr-text-image :image="pageContent.imageObj['perfil smartphone'].url" class="conecte">
      <div class="flex flex--col flex--44 flex--start pb-80">
        <div class="flex flex--col flex--22">
          <h2 class="cap-size">{{ pageContent.textObj['section4 title'] }}</h2>
          <div class="flex flex--col flex--36">
            <p class="text--xl">{{ pageContent.textObj['section4 paragraph1'] }}</p>
            <p class="text--xl">{{ pageContent.textObj['section4 paragraph2'] }}</p>
          </div>
        </div> 
        <div class="flex flex--col flex-center flex--16">
          <rr-trial-button :label="pageContent.textObj['botao experimente']"></rr-trial-button>
        </div>
      </div>
    </rr-text-image>
    <rr-text-image class="text-image--padding copiloto" :bg="true" :half="true" :image="pageContent.imageObj['IA copiloto'].url">
      <div class="flex flex--col flex--12">
        <h2 class="cap-size">{{ pageContent.textObj['section5 title'] }}</h2>
        <div class="flex flex--col flex--36">
          <p class="text--xl">{{ pageContent.textObj['section5 paragraph1'] }}</p>
          <p class="text--xl">{{ pageContent.textObj['section5 paragraph2'] }}</p>
        </div>
      </div> 
      <div class="flex flex--col flex-center flex--16">
        <rr-trial-button :label="pageContent.textObj['botao experimente']"></rr-trial-button>
      </div>
    </rr-text-image>
    <rr-cta>
      <p class="text--2xl text--sb text--white align-center">{{ pageContent.textObj['20% de aumento'] }}</p>
    </rr-cta>
    <div class="base-section ferramentas">
      <div class="center flex flex--col flex-center flex--36">
        <div class="flex flex--col flex--22">
          <h2 class="align-center ferramentas__title">{{ pageContent.textObj['section6 title'] }}</h2>
          <p class="text--xl align-center ferramentas__text">{{ pageContent.textObj['section6 paragraph1'] }} {{ pageContent.textObj['section6 paragraph2'] }}</p>
        </div>
        <div class="flex flex--col flex--22">
          <img :src="pageContent.imageObj['ferramentas'].url" :alt="pageContent.imageObj['ferramentas'].alt" aria-hidden="true">
          <div class="flex flex--col flex-center flex--16">
            <rr-trial-button :label="pageContent.textObj['botao experimente']"></rr-trial-button>
          </div>
        </div>
      </div>
    </div>
    <rr-gradient-section>
      <div class="center recursos">
        <h2>{{ pageContent.textObj['section7 title'] }}</h2>
        <rr-resources :content="pageContent"></rr-resources>
        <nuxt-link to="https://rediredi.com/br/sobre-br/" target="_blank" class="button" visuals="primary" color="white" size="lg">{{ pageContent.textObj['veja todas as funcionalidades'] }}</nuxt-link>
        <rr-features :content="pageContent"></rr-features>
      </div>
      <rr-marketing :content="pageContent"></rr-marketing>
    </rr-gradient-section>
    <rr-footer></rr-footer>
  </article>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const pageContent = await queryContent(locale.value !== 'pt' ? `paginas-fixas/${locale.value}` : 'paginas-fixas', 'homepage').findOne();
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
    flex-shrink: 0;
    text-decoration: none;
    p {
      text-decoration: none;
    }
    & > img {
      width: 120px;
    }
  }

  .text-image--padding {
    padding-block: 100px 34px;
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
    top: 12%;
    max-width: 730px;
    @media (max-width: 1240px) {
      display: none;
    }
  }

  .conecte {
    :deep(.text-image__image) {
      margin-bottom: -35%;
    }
  }

  .ferramentas__title {
    max-width: 900px;
    margin: 0 auto;
  }

  .ferramentas__text {
    max-width: 1126px;
    margin: 0 auto;
  }

  .copiloto {
    :deep(.text-image__content p) {
      max-width: 80%;
    }
  }

</style>
