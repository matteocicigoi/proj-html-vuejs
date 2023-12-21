<script>
export default{
    props : ['flex', 'images', 'border', 'classT']
};
</script>

<template>
    <!-- Lista di immagini -->
    <div :class="{top100 : border === 'top100', payament : classT === 'payament'}">
        <ul :class="{flex : flex === true, payament : classT === 'payament'}">
            <li v-for="img in images">
                <img :src="`/img/${img}`" alt="sponsor">
            </li>
        </ul>
    </div>
    <!-- Fine Lista di immagini -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
div{
    margin-top: 85px;
    ul {
        width: $sizeContainer;
        margin: 0 auto;
        list-style-type: none;
        position: relative;
        &.flex {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        img {
            width: 75px;
            display: block;
            margin-top: 50px;
            margin-bottom: 40px;
        }

        &.payament {
            width: 100%;
            img {
                width: 37px;
                margin: 0;
            }
        }
    }
    &.top100 {
        width: 100%;
        border-top: 1px solid $brJumbo;
    }
    &.payament {
        margin: 0;
    }
}
</style>