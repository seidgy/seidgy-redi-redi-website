<template>
    <rr-catalog v-if="content.tipo == 'catalogo'" :content="content"></rr-catalog>
    <section v-else class="rr-section" :class="{'rr-section--text-image': content.tipo == 'texto_imagem', 'rr-section--padding': content.imagem_centralizada}" :style="getBackground()">
        <div class="center" size="wide">
            <div class="rr-section__content">
                <div class="prose-content">
                    <div v-html="content.conteudo"></div>
                </div>
                <div class="rr-section__icones" v-if="content.icones && content.icones.length >= 1">
                    <rr-icone v-for="icone in content.icones" :icone="icone" estilo="lg"></rr-icone>
                </div>
                <rr-trial-button :label="content.button_label"></rr-trial-button>
            </div>
            <img :src="content.imagem" :alt="content.alias" aria-hidden="true" v-if="content.tipo == 'texto_imagem'">
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    content : {
        type: Object,
        required: true
    }
})

const getBackground = () => {
    if (props.content.tipo_fundo == 'default') {
        return ''
    } else if (props.content.tipo_fundo == 'imagem') {
        return `background-image: url(${props.content.imagem_fundo});`;
    } else if (props.content.tipo_fundo == 'cor') {
        return `background-color: url(${props.content.cor_fundo});`;
    }
}
</script>
<style scoped lang="scss">
.rr-section {
    background-size: cover;
    background-position: center;
    padding-block: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 34px;
}

    .rr-section--text-image {
        & > .center {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: flex-end;
            gap: 24px;
        }
        .rr-section__content {
            padding-bottom: 45px;
        }
    }
    
    .rr-section--padding {
        & > .center {
            align-items: center;
            padding-bottom: 100px;
        }
    }

    .rr-section__content {
        display: flex;
        flex-direction: column;
        gap: 44px;
        align-items: flex-start;
    }

    .rr-section__icones {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
</style>