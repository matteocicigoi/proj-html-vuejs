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
    <div class="list" :class="{'features-list' : type === 'features'}">
        <article v-for="(element, index) in elements.title">
            <CardType :border="true" :icon="'fa-brands fa-github'" :title="element" :description="elements.description[index]" :link="['#', elements.link[index], 'fa-solid fa-angle-right']" />
        </article>
    </div>
</template>

<style scoped lang="scss">
    .list{
        &.features-list {
            display: flex;
            gap: 30px;
            justify-content: space-between;
        }
    }
</style>