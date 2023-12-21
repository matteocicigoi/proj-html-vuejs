<script>
import Info from '../common/Info.vue';
import CardList from '../common/CardList.vue';
export default {
    components : {
        Info,
        CardList
    },
    data(){
        return {
            subscriptions : {
                best : 1,
                badge : [
                    'Basic',
                    'Business',
                    'Enterprise'
                ],
                title : [
                    '$9.00',
                    '$39.00',
                    '$79.00',
                ],
                description : [
                    'All the basics for businesses that are just getting started.',
                    'Better for growing businesses that want more customers',
                    'Advanced features for provs who need more customization.',
                ],
                link : [
                    'Buy Now',
                    'Buy Now',
                    'Buy Now',
                ],
                list : [
                    {
                        icon : 'fa-regular fa-circle-check',
                        text :
                        [
                            'Full Access',
                            'Enchanced Security',
                            'Source Files',
                            '1 Domain Free',
                            'Enchanced Security'
                        ]
                    },
                    {
                        icon : 'fa-regular fa-circle-check',
                        text :
                        [
                            'Full Access',
                            'Enchanced Security',
                            'Source Files',
                            '1 Domain Free',
                            'Enchanced Security'
                        ]
                    },
                    {
                        icon : 'fa-regular fa-circle-check',
                        text :
                        [
                            'Full Access',
                            'Enchanced Security',
                            'Source Files',
                            '1 Domain Free',
                            'Enchanced Security'
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<template>
    <div class="quickstart">
        <Info :align="'center'" :titolo="'Our rates for developer from landrick team'" :descrizione="`Start working with <a href='#'>Landrick</a> that can provide everything you nees to generate awareness, drive traffic, connect.`"/>
        <CardList  :elements="subscriptions" :type="'subscriptions'" :listColor="'secondary'"/>
    </div>
</template>