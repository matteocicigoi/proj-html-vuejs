<script>
import Info from '../common/Info.vue';
import Install from './Install.vue';
import CardType from '../common/CardType.vue';
export default {
    components : {
        Info,
        Install,
        CardType
    },
    data() {
        return {
            list : {
                icon : 'fa-regular fa-circle-check',
                text : ['Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand']
            }
        }
    }
};
</script>

<template>
    <!-- Quickstart -->
    <div class="quickstart">
        <Info :info="'Quickstart'" :align="'center'" :titolo="'Awesome isn\'t it? Let\'s dive in!'" :descrizione="`Start working with <a href='#'>Landrick</a> that can provide everything you nees to generate awareness, drive traffic, connect.`"/>
        <Install />
        <div class="container">
            <CardType :type="'big'" :button="true" :icon="false" :listColor="'secondary'" :iconBt="'fa-solid fa-angle-right'" :list="list" :title="'Build tools and extensive documention'" :description="'You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.'" :link="['#', 'Read More', 'fa-solid fa-angle-right']"/>
            <img src="../../assets/img/1.png" alt="img">
        </div>
    </div>
    <!-- Fine Quickstart -->
</template>

<style scoped lang="scss">
    .quickstart {
        .container {
            display: flex;
            img {
                display: block;
                height: 420px;
                margin-left: 125px;
            }
        }
    }
</style>