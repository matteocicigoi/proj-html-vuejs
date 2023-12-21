<script>
export default {
    props : ['icon', 'class']
}
</script>

<template>
    <button :class="class"><font-awesome-icon :icon="icon" /></button>
</template>
<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    button {
        all: unset;
        cursor: pointer;
        padding: 10px;
        border-radius: 7px;
        &.primary {
            background-color: $btPrimary;
            border: 1px solid $btBrPrimary;
            box-shadow: -1px 3px 4px 0px $btBrPrimary;
            margin: 0 4px;
            color: $textInteraction;

            &:hover{
                background-color: $textInteraction;
                color: $textHover;
            }
        }

        &.secondary {
            border: 1px solid $brSubscriptions;
            margin: 0 8px 0 0;
            width: 32px;
            height: 32px;
            padding: 0;
            text-align: center;

            &:hover{
                background-color: $textInteraction;
                color: $textHover;
            }
        }
    }
</style>