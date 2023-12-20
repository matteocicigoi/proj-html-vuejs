<script>
import Jumbotron from './Jumbotron.vue';
import Features from './Features.vue';
import QuickStart from './QuickStart.vue';
export default{
    components: {
        Jumbotron,
        Features,
        QuickStart
    }
};
</script>

<template>
    <main>
        <Jumbotron />
        <div class="container">
            <Features />
            <QuickStart />
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