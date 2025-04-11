<template>
    <div class="rr-think">
        <img src="/images/RediRedi.gif" alt="Redi" class="rr-think__background" aria-hidden="true" />
        <img src="/images/switch-on.svg" alt="Switch" class="rr-think__switch" aria-hidden="true" />
        <img src="/images/vector-grad.svg" alt="Vector" class="rr-think__vector" aria-hidden="true" />
        <div class="rr-think__ai-box">
            <div class="rr-think__logo-box">
                <rr-minimal-logo></rr-minimal-logo>
            </div>
            <div class="rr-think__text">
                <p class="rr-think__brow">Redi - A Inteligência Artificial da RediRedi</p>
                <p class="rr-think__cta">Vamos vender mais juntos?</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
})
</script>
<style scoped lang="scss">
    .rr-think {
        position: relative;
    }

        .rr-think__background {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            width: 120%;
            z-index: 3;
        }

        .rr-think__switch {
            position: absolute;
            top: 30px;
            left: 8%;
            z-index: 2;
        }

        .rr-think__vector {
            position: absolute;
            top: 50px;
            left: 12%;
            z-index: 1;
            height: 45%;
        }

        .rr-think__ai-box {
            z-index: 4;
            position: absolute;
            top: 30vw;
            left: 60%;
            display: flex;
            gap: 20px;
            align-items: center;
            transform: translateX(-50%);
            border-radius:  28px;
            padding: 10px 24px;
            background: linear-gradient(135deg,rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
            backdrop-filter: blur(60px);
            min-width: 420px;
        }

        .rr-think__logo-box {
            width: 47px;
            height: 47px;
            background-color: var(--white-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

            :deep(.rr-logo) {
                width: 22px;
                position: absolute;
                path {
                    fill: var(--accent-color);
                }
            }

        .rr-think__text {
            flex-shrink: 0;
            flex-flow: column nowrap;
            gap: 3px;
        }

            .rr-think__brow {
                font-size: 0.75em;
                font-weight: 700;
                color: var(--white-color);
            }

            .rr-think__cta {
                font-size: 1.25em;
                font-weight: 600;
                line-height: 1.5em;
                color: var(--white-color);
            }
</style>