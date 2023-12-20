<script>
export default{
    props : ['text']
};
</script>

<template>
<div class="primary">
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
    }
</style>