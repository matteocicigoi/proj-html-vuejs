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
                ]
            }
        }
    }
};
</script>

<template>
    <div class="features">
        <Info :titolo="'Key Features'" :descrizione="`Start working with <a href='#'>Landrick</a> that can provide everything you nees to generate awareness, drive traffic, connect.`"/>
        <CardList  :elements="features" :type="'features'"/>
    </div>
</template>
