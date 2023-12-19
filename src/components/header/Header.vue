<script>
import Menu from './Menu.vue';
import Logo from '../common/Logo.vue';
import ButtonSm from '../common/ButtonSm.vue';
export default {
    components : {
        Menu,
        Logo,
        ButtonSm
    }
}
</script>

<template>
    <header>
        <div class="nav">
            <div class="logo">
                <Logo :img="'/img/logo-dark.png'"/>
            </div>
            <Menu />
            <div class="profile-buttons">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon"/>
                <ButtonSm :icon="'fa-brands fa-github'"/>
                <ButtonSm :icon="'fa-brands fa-stack-overflow'"/>
                <ButtonSm :icon="'fa-regular fa-user'"/>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    .nav {
        max-width: $sizeContainer;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding: 17px 0;
        font-size: 14px;
        .profile-buttons, .logo {
            width: 20%;
        }
        .profile-buttons {
            .icon {
                color: $textPrimary;
                margin-right: 13px;
                font-size: 15px;
            }
        }
    }
</style>