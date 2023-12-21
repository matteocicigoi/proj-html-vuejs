<script>
import Menu from './Menu.vue';
import Logo from '../common/Logo.vue';
import ButtonSm from '../common/ButtonSm.vue';
export default {
    components : {
        Menu,
        Logo,
        ButtonSm
    },
    data() {
        return {
            search : false
        }
    },
    methods : {
        searchFn(){
            this.search = !this.search;
        }
    }
}
</script>

<template>
    <!-- Header -->
    <header>
        <div class="nav">
            <div class="logo">
                <Logo :img="'/img/logo-dark.png'"/>
            </div>
            <Menu />
            <div class="profile-buttons">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" @click="searchFn"/>
                <ButtonSm :class="'primary'" :icon="'fa-brands fa-github'"/>
                <ButtonSm :class="'primary'" :icon="'fa-brands fa-stack-overflow'"/>
                <ButtonSm :class="'primary'" :icon="'fa-regular fa-user'"/>
            </div>
        </div>
        <!-- Ricerca -->
        <div class="search" v-if="this.search === true"  @click="searchFn">
            <input type="text" placeholder="Search"  @click.stop="" @keyup.enter="searchFn">    
        </div>
        <!-- Fine Ricerca -->
    </header>
    <!-- Fine Header -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
header {
    background-color: $bgPrimary;
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
            text-align: end;
            .icon {
                color: $textPrimary;
                margin-right: 13px;
                font-size: 15px;
                cursor: pointer;
                
                &:hover {
                color: $textInteraction;
                }
            }
        }
    }
    .search {
        position: fixed;
        top: 0;
        padding: 100px;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 99;

        input {
            border-radius: 10px;
            height: 50px;
            width: 500px;
            border: 1px solid $textInteraction;
            padding-left: 30px;
            font-size: 20px;
            color: $textInteraction;
        } 
    }
}
</style>