<script>
export default {
    props : ['list', 'flex']
};
</script>

<template>
    <!-- Lista con le icone -->
    <ul :class="{flex : flex === true}">
        <li v-for="(element, index) in list.text">
            <font-awesome-icon :icon="list.icon" />
            <span>{{ list.text[index] }}</span>
        </li>
    </ul>
    <!-- Fine Lista con le icone -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    ul {
        list-style-type: none;
        &.flex {
            display: flex;
            align-items: center;
        }

        li {
            padding-right: 55px;
            color: $textInstallSecondary;
        }

        span {
            padding-left: 10px;
            color: $textPrimary;
        }
    }
</style>