<script>
export default {};
</script>

<template>
    <div class="best">Best
        <div class="bottom"></div>
        <div class="right"></div>
    </div>
</template>

<style scoper lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    .best {
        position: absolute;
        text-align: center;
        top: 0;
        right: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: $textHover;
        background-color: $bgBest;
        transform: rotate(45deg) translate( calc(32% - 0px), -320%);
        &::before, &::after{
            content: '';
            height: 7px;
            width: 7px;
            color: black;
            font-size: 30px;
            background-color: $bgBestBottom;
            position: absolute;
            display: block;
            top: 30px;
            left: calc(calc(50% + -2px) - 50px);
        }
        &::after{
            left: calc(calc(50% - 2px) + 50px);
        }
        .bottom{
            position: absolute;
            width: 21px;
            height: 10px;
            background-color: white;
            top: 36px;
            left: calc(calc(50% + -2px) - 50px);
            transform: rotate(45deg);
        }
        .right {
            position: absolute;
            width: 21px;
            height: 10px;
            background-color: white;
            top: 36px;
            left: calc(calc(76% + -0px) - 50px);
            transform: rotate(45deg);
            z-index: 1;
        }
    }
</style>