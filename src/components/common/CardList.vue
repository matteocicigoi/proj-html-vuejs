<script>
import CardType from './CardType.vue';
export default {
    props: ['elements', 'type'],
    components : {
        CardType
    }
};
</script>

<template>
    <div class="list" :class="{'features-list' : type === 'features', 'subscriptions-list' : type === 'subscriptions'}">
        <template v-if="type === 'features'">
            <article v-for="(element, index) in elements.title">
                <CardType :border="true" :icon="'fa-brands fa-github'" :title="element" :description="elements.description[index]" :link="['#', elements.link[index], 'fa-solid fa-angle-right']" />
            </article>
        </template>
        <template v-else>
            <article v-for="(element, index) in elements.title">
                <CardType :best="index === elements.best ? true : false" :badge="elements.badge[index]" :infoP="true" :btSize="'big'" :button="true" :border="true" :icon="false" :title="element" :description="elements.description[index]" :link="['#', elements.link[index]]" :list="elements.list[index]"/>
            </article>
        </template>
    </div>
</template>

<style scoped lang="scss">
    .list{
        &.features-list, &.subscriptions-list {
            display: flex;
            gap: 30px;
            justify-content: space-between;
        
            &.subscriptions-list {
                flex-wrap: wrap;
                article {
                    width: calc((100% - 60px) / 3);
                    position: relative;
                    overflow: hidden;
                    padding: 5px;
                }
            }
        }
    }
</style>