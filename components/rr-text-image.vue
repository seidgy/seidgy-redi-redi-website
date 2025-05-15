<template>
    <section class="text-image" :class="{'text-image--bg': bg, 'text-image--half': half}">
      <div class="center">
        <div class="text-image__content flex flex--col flex--start sm-flex-center">
            <slot></slot>
        </div>
        <img :src="image" alt="Image" class="text-image__image" aria-hidden="true" />
      </div>
    </section>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    bg: {
        type: Boolean,
        default: false
    },
    half: {
        type: Boolean,
        default: false
    }
})
</script>


<style scoped lang="scss">

.text-image {
    padding-block: 160px 0;
    position: relative;
    & > .center {
      display: grid;
      grid-template-columns: auto 415px;
      align-items: flex-end;
        @media (max-width: 1240px) {
            grid-template-columns: 1fr;
        }
    }
}

    .text-image--bg {
        background-image: url(/images/hero-bg.webp);
        background-size: cover;
        background-position: center;
    }

    .text-image--half {
        & > .center {
            grid-template-columns: 1fr 1fr;
            @media (max-width: 1240px) {
                grid-template-columns: 1fr;
            }
        }
    }


    .text-image__image{
        width: 100%;
    }
    .text-image__content {
        gap: 22px;
        padding-bottom: 48px;
        :deep(p),
        :deep(.cap-size) {
            max-width: 70%;
            @media (max-width: 1240px) {
                max-width: none;
            }
        }
    }

</style>