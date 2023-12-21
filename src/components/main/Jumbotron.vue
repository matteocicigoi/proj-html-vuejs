<script>
import Badge from '../common/Badge.vue';
import Button from '../common/Button.vue';
import ListaImg from '../common/ListaImg.vue';
export default{
    components: {
        Badge,
        Button,
        ListaImg
    }
};
</script>

<template>
<!-- Jumbotron-->
<div class="jumbotron">
    <div class="jumbotron-info">
        <div class="jumbotron-text">
            <Badge :text="'Development'"/>
            <h1>A Complete Developer Toolset</h1>
            <p>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap5 html page.</p>
            <Button :text="'Get Started'" :class="'primary'"/>
            <Button :text="'Documentation'" :class="'secondary'"/>
            <h4>Current Version: v2.6.0</h4>
        </div>
        <div class="jumbotron-image">
            <img src="../../assets/img/about.png" alt="about">
        </div>
    </div>
    <ListaImg :border="'top100'" :flex="true" :images="['amazon.svg', 'google.svg', 'lenovo.svg', 'paypal.svg', 'shopify.svg', 'spotify.svg']"/>
</div>
<!-- Fine Jumbotron-->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    .jumbotron {
        background-color: $bgPrimary;
        padding-top: 115px;
        .jumbotron-info {
            width: $sizeContainer;
            margin: 0 auto;
            display: flex;
            .jumbotron-text {
                margin-top: 74px;

                h1 {
                    margin-top: 10px;
                    padding-right: 200px;
                    margin-bottom: 15px;
                    line-height: 50px;
                    font-size: 45px;
                    color: $textTitle;
                }

                p {
                    padding-right: 50px;
                    font-size: 18px;
                    color: $textPrimary;
                    margin-bottom: 35px;
                }

                h4 {
                    margin-top: 20px;
                    color: $textPrimary;
                    font-size: 15px;
                }
            }
            .jumbotron-image {
                display: block;
                padding-right: 35px;
            }
        }
    }
</style>