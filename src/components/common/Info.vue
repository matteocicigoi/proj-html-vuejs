<script>
export default {
    props: ['align', 'titolo', 'descrizione', 'info']
};
</script>

<template>
    <!-- Info: Titolo - Descrizione -->
    <div class="info" :class="{center : align === 'center'}">
        <h6 v-if="info !== false">{{ info }}</h6>
        <h2 v-if="titolo !== false">{{ titolo }}</h2>
        <p v-if="descrizione !== false" v-html="descrizione"></p>
    </div>
    <!-- Fine Info: Titolo - Descrizione -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    .info {
        margin-top: 110px;
        margin-bottom: 70px;
        width: 600px;

        &.center {
            margin: 110px auto;
            text-align: center;
        }

        h2 {
            color: $textTitle;
            margin-bottom: 30px;
        }

        p {
            color: $textPrimary;
        }

        h6 {
            color: $textInteraction;
            margin-bottom: 20px;
            font-size: 15px;
        }
    }
</style>