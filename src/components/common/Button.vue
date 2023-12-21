<script>
export default {
    props : ['text', 'class', 'icon', 'size'],
    data() {
        return {
            classM : `${this.class} ${this.size !== undefined ? this.size : ''}`
        }
    }
}
</script>

<template>
    <button :class="classM">{{ text }}
        <font-awesome-icon v-if="'string' === ( typeof icon)" :icon="icon" />
    </button>
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
                background-color: $textHover;
                color: $textInteraction;
                border: 1px solid $textInteraction;
                box-shadow: none;
            }
        }
        &.secondary {
            border: 1px solid $textInteraction;
            color: $textInteraction;
            border-radius: 5px;
            padding-left: 20px;
            padding-right: 20px;

            &:hover{
                background-color: $textInteraction;
                color: $textHover;
            }
        }
        &.big {
            margin-right: 0;
            padding: 10px 0;
            width: calc(100%);
            display: block;
            text-align: center;
        }
    }
</style>