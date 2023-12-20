<script>
export default{
    props : ['text', 'big']
};
</script>

<template>
<div class="primary" :class="{big : big === true}">
    <span>{{ text }}</span>
</div>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    div {
        padding: 4px 9px;
        border-radius: 7px;
        width: max-content;
        &.primary {
            background-color: $btPrimary;
            border: 1px solid $btBrPrimary;
            margin: 0 4px;
            border-radius: 20px;
            color: $textInteraction;
            font-size: 13px;
        }
        &.big {
            padding: 10px 25px;
        }
    }
</style>