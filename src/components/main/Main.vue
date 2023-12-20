<script>
import Jumbotron from './Jumbotron.vue';
import Features from './Features.vue';
import QuickStart from './QuickStart.vue';
import Subscriptions from './Subscriptions.vue';
export default{
    components: {
        Jumbotron,
        Features,
        QuickStart,
        Subscriptions
    }
};
</script>

<template>
    <main>
        <Jumbotron />
        <div class="container">
            <Features />
            <QuickStart />
            <Subscriptions />
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