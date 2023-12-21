<script>
import Jumbotron from './Jumbotron.vue';
import Features from './Features.vue';
import QuickStart from './QuickStart.vue';
import Subscriptions from './Subscriptions.vue';
import Contact from './Contact.vue';
export default{
    components: {
        Jumbotron,
        Features,
        QuickStart,
        Subscriptions,
        Contact
    }
};
</script>

<template>
    <!-- Main -->
    <main>
        <Jumbotron />
        <div class="container">
            <Features />
            <QuickStart />
            <Subscriptions />
            <Contact />
        </div>
    </main>
    <!-- Fine Main -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    .container{
        width: $sizeContainer;
        margin: 0 auto;
        margin-bottom: 120px;
    }
</style>