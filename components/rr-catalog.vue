<template>
  <rr-text-image :bg="true" :image="pageContent.imageObj['catalogo smartphone'].url" class="catalogo rr-catalogo">
    <img src="/images/arch.webp" alt="Arch" class="text-image__arch" aria-hidden="true" />
    <div class="prose-content">
      <div v-html="content.conteudo"></div>
    </div> 
    <div class="flex flex--col flex--60 flex--start">
      <div class="flex flex--col flex--44">
        <p class="flex flex--center flex--16 text--sb">{{ pageContent.textObj['veja exemplos catalogo'] }} <img src="/images/arrow-down.svg" alt="Seta para baixo" aria-hidden="true" /></p>
        <div class="flex flex--16 catalog-list">
          <nuxt-link to="https://petshop.rdi.store/products" class="image-button flex flex-center flex--col flex--between">
            <p class="text--2xs text--sb flex flex--3 flex-center">
              <img width="20px" src="/images/circle-brazil.svg" alt="Brazil" />
              {{ pageContent.textObj['pet shop'] }}
            </p>
            <img src="/images/dog.webp" alt="Dog" />
          </nuxt-link>
          <nuxt-link to="https://cosmetico.rdi.store/products" class="image-button flex flex-center flex--col flex--between">
            <p class="text--2xs text--sb flex flex--3 flex-center">
              <img width="20px" src="/images/circle-colombia.svg" alt="Colombia" />
              {{ pageContent.textObj['cosmeticos'] }}
            </p>
            <img src="/images/lipstick.webp" alt="Lipstick" />
          </nuxt-link>
          <nuxt-link to="https://moda.rdi.store/products" class="image-button flex flex-center flex--col flex--between">
            <p class="text--2xs text--sb flex flex--3 flex-center">
              <img width="20px" src="/images/circle-mexico.svg" alt="Mexico" />
              {{ pageContent.textObj['moda'] }}
            </p>
            <img src="/images/shoe.webp" alt="Shoe" />
          </nuxt-link>
          <nuxt-link to="https://supplements.rdi.store/products" class="image-button flex flex-center flex--col flex--between">
            <p class="text--2xs text--sb flex flex--3 flex-center">
              <img width="20px" src="/images/circle-usa.svg" alt="USA" />
              {{ pageContent.textObj['suplementos'] }}
            </p>
            <img src="/images/whey.webp" alt="Whey protein" />
          </nuxt-link>
          <nuxt-link to="https://eletronicos.rdi.store/products" class="image-button flex flex-center flex--col flex--between">
            <p class="text--2xs text--sb flex flex--3 flex-center">
              <img width="20px" src="/images/circle-spain.svg" alt="Spain" />
              {{ pageContent.textObj['eletronicos'] }}
            </p>
            <img src="/images/headphone.webp" alt="Headphone" />
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex--col flex-center flex--16 button-container">
        <rr-trial-button :label="pageContent.textObj['crie o catalogo']"></rr-trial-button>
      </div>
    </div>
  </rr-text-image>
</template>

<script setup>
const { locale } = useI18n()
const pageContent = await queryContent(locale.value !== 'pt' ? `paginas-fixas/${locale.value}` : 'paginas-fixas', 'homepage').findOne();

const props = defineProps({
    content : {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="scss">
.catalogo {
  @media (max-width: 36em) {
      padding-top: 50px;
  }
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
    top: auto;
    width: 98%;
    bottom: -79px;
    left: 50%;
    transform: translateX(-50%);
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
</style>