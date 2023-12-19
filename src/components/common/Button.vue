<script>
export default {
    props : ['text', 'class']
}
</script>

<template>
    <button :class="class">{{ text }}</button>
</template>
<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    button {
        all: unset;
        cursor: pointer;
        padding: 10px;
        border-radius: 7px;
        margin-right: 12px;
        &.primary {
            background-color: $textInteraction;
            color: $textHover;
            box-shadow: -1px 3px 4px 0px $textInteraction;
            border-radius: 5px;
            padding-left: 20px;
            padding-right: 20px;

            &:hover{
                background-color: $textInteraction;
                color: $textHover;
            }
        }
        &.secondary {
            border: 1px solid $textInteraction;
            color: $textInteraction;
            border-radius: 5px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }
</style>