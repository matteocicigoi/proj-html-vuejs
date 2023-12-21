<script>
import Info from '../common/Info.vue';
import CardList from '../common/CardList.vue';
export default {
    components : {
        Info,
        CardList
    },
    data() {
        return {
            features : {
                title : [
                    'Modular',
                    'Responsive',
                    'Customizable',
                    'Scalable'
                ],
                description : [
                    'Composed in a pseudo-Latin language which more or less corresponds.',
                    'Composed in a pseudo-Latin language which more or less corresponds.',
                    'Composed in a pseudo-Latin language which more or less corresponds.',
                    'Composed in a pseudo-Latin language which more or less corresponds.'
                ],
                link : [
                    'Read More',
                    'Read More',
                    'Read More',
                    'Read More'
                ],
                icon : [
                    'fa-solid fa-layer-group',
                    'fa-solid fa-tv',
                    'fa-solid fa-gears',
                    'fa-solid fa-maximize'
                ]
            }
        }
    }
};
</script>

<template>
    <!-- Funzionalità -->
    <div class="features">
        <Info :titolo="'Key Features'" :descrizione="`Start working with <a href='#'>Landrick</a> that can provide everything you nees to generate awareness, drive traffic, connect.`"/>
        <CardList :icon="features.icon"  :elements="features" :type="'features'"/>
    </div>
    <!-- Fine Funzionalità -->
</template>
