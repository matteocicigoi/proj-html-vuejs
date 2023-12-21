<script>
import CardType from './CardType.vue';
export default {
    props: ['elements', 'type', 'icon', 'listColor'],
    components : {
        CardType
    }
};
</script>

<template>
    <div class="list" :class="{'features-list' : type === 'features', 'subscriptions-list' : type === 'subscriptions'}">
        <template v-if="type === 'features'">
            <article v-for="(element, index) in elements.title">
                <CardType :border="true" :icon="typeof icon === 'object' ? icon[index] : ''" :title="element" :description="elements.description[index]" :link="['#', elements.link[index], 'fa-solid fa-angle-right']" />
            </article>
        </template>
        <template v-else>
            <article v-for="(element, index) in elements.title">
                <CardType :icon="typeof icon !== undefined ? icon : false" :listColor="listColor" :best="index === elements.best ? true : false" :badge="elements.badge[index]" :infoP="true" :btSize="'big'" :button="true" :border="true" :title="element" :description="elements.description[index]" :link="['#', elements.link[index]]" :list="elements.list[index]"/>
            </article>
        </template>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
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

                    .card {
                        position: static;
                        border-bottom: 3px solid $brSubscriptions;

                        &:hover {
                            border-bottom-color: $textInteraction;
                            box-shadow: -1px 1px 12px -1px #0000001a;
                        }
                    }
                }
            }
        }
    }
</style>