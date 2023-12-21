<script>
import Info from '../common/Info.vue';
import Button from '../common/Button.vue';
export default {
    components : {
        Info,
        Button
    },
    data() {
        return {
            email : ''
        }
    },
    methods : {
        sendEmail(){
            this.email = '';
        }
    }
}
</script>

<template>
    <!-- Contact -->
    <div class="contact">
        <Info :align="'center'" :titolo="'Want to be among the first to find out?'" :descrizione="`Start working with <a href='#'>Landrick</a> that can provide everything you nees to generate awareness, drive traffic, connect.`"/>
        <div class="input">
            <input type="email" placeholder="Email Address" v-model="email">
            <Button :text="'Get Started'" :class="'primary'" :size="'big'" @click="sendEmail()"/>
        </div>
    </div>
    <!-- Fine Contact -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    .input {
        display: flex;
        margin: 0 auto;
        margin-top: -75px;
        width: max-content;
        height: 55px;
        border: 1px solid $brJumbo;
        align-items: center;
        padding: 5px;
        border-radius: 28px;

        input {
            width: 450px;
            height: 100%;
            padding-left: 25px;
            border-radius: 20px;
            border: none;
        }

        button {
            width: 133px;
            border-radius: 20px;
        }
    }
</style>