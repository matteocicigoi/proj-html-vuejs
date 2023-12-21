<script>
export default {
    props : ['list', 'flex', 'listColor']
};
</script>

<template>
    <!-- Lista con le icone -->
    <ul :class="{flex : flex === true}">
        <li v-for="(element, index) in list.text">
            <font-awesome-icon :icon="list.icon" :class="{secondary : listColor === 'secondary'}" />
            <span>{{ list.text[index] }}</span>
        </li>
    </ul>
    <!-- Fine Lista con le icone -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    ul {
        list-style-type: none;
        margin-bottom: 23px;
        &.flex {
            display: flex;
            align-items: center;
        }

        li {
            padding-right: 55px;
            padding-top: 7px;
            padding-bottom: 7px;
            color: $textInstallSecondary;

            .secondary {
                color: $textInteraction;
            }
        }

        span {
            padding-left: 10px;
            color: $textPrimary;
        }
    }
</style>