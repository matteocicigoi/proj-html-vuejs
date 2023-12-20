<script>
import Jumbotron from './Jumbotron.vue';
import Features from './Features.vue';
export default{
    components: {
        Jumbotron,
        Features
    }
};
</script>

<template>
    <main>
        <Jumbotron />
        <div class="container">
            <Features />
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    .container{
        width: $sizeContainer;
        margin: 0 auto;
    }
</style>