<template>
    <section class="features">
        <div>
            <div class="feature-card feature-card--logo" style="background-image: url(/images/psychodelic1.png);"></div>
        </div>
        <div>

        </div>
    </section>
</template>

<script setup>

</script>   


<style scoped lang="scss">
    .features {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 24px;
        & > div {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 24px;
        }
        & > div:first-child {
            display: grid;
            grid-template-columns: 1fr 1fr 2fr;
            gap: 24px;
        }
    }

        .feature-card {
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-position: center;
            padding: 40px;
            font-size: 2.625em;
            font-weight: 600;
            letter-spacing: -1.69px;
        }
</style>