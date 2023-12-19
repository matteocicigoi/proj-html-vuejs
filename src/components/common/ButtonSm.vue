<script>
export default {
    props : ['icon']
}
</script>

<template>
    <button class="primary"><font-awesome-icon :icon="icon" /></button>
</template>
<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    button {
        all: unset;
        cursor: pointer;
        padding: 10px;
        border-radius: 7px;
        &.primary {
            background-color: $btPrimary ;
            border: 1px solid $btBrPrimary;
            box-shadow: -1px 3px 4px 0px $btBrPrimary;
            margin: 0 4px;
        }
    }
</style>