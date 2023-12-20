<script>
import Info from '../common/Info.vue';
export default {
    components : {
        Info
    }
};
</script>

<template>
    <div class="features">
        <Info :titolo="'Key Features'" :descrizione="`Start working with <a href='#'>Landrick</a> that can provide everything you nees to generate awareness, drive traffic, connect.`"/>
    </div>
</template>

<style scoped lang="scss">

    .features {
    }
</style>