<script>
export default {
    props: ['border', 'icon', 'title', 'description', 'link']
};
</script>

<template>
    <!-- Card -->
    <div class="card" :class="{border : border === true}">
        <div v-if="icon !== false" class="icon">
            <font-awesome-icon :icon="icon" />
        </div>
        <h3 v-if="title !== false" >{{  title }}</h3>
        <p v-if="description !== false">{{ description }}</p>
        <a :href="link[0]">{{ link[1] }} <font-awesome-icon :icon="link[2]" /></a>
    </div>
    <!-- Fine Card -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;

    .card {
        margin-bottom:  25px;

        &.border {
            border: 1px solid $brCard;
            padding: 25px;
            border-radius: 7px;
        }

        .icon {
            width: max-content;
            padding: 20px;
            background-color: $bgIcon;
            border-radius: 7px;
            font-size: 25px;
            color: $textInteraction;
        }

        a{
            color: $textInteractionSecondary;
        }
        
        h3 {
            margin-top: 30px;
            color: $textNav;
            margin-bottom: 15px;
        }

        p {
            color: $textPrimary;
            line-height: 25px;
            margin-bottom: 20px;
        }
        
    }
</style>