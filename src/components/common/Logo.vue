<script>
export default {
    props : ['img']
}
</script>

<template>
    <img :src="img" alt="logo">
</template>

<style scoped lang="scss">
    img {
        display: block;
        height: 24px;
        cursor: pointer;
    }
</style>