<script>
export default {
    props: ['titolo', 'descrizione']
};
</script>

<template>
    <!-- Info: Titolo - Descrizione -->
    <div class="info">
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

        h2 {
            color: $textTitle;
            margin-bottom: 30px;
        }

        p {
            color: $textPrimary;
        }
    }
</style>