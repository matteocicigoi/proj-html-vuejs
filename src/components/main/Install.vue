<script>
import ListIcon from '../common/ListIcon.vue';
export default {
    components : {
        ListIcon,
    },
    data() {
        return {
            list : {
                icon : 'fa-brands fa-github',
                text : ['Organize your data', 'Work with any team']
            }
        }
    }
};
</script>

<template>
    <!-- Install -->
    <div class="install-info">
        <div class="install">
            <ul>
                <li class="selected">npm</li>
                <li>nuget</li>
                <li>spm</li>
                <li>github</li>
            </ul>
            <h3><span>$ </span>npm install <span>-g </span>claps.js</h3>
        </div>
        <ListIcon :list="list" :flex="true"/>
    </div>
    <!-- Fine Install -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;

.install-info {
    width: 730px;
    margin: 0 auto;
    margin-bottom: 110px;
    
    .install {
    background-color: $textNav;
    color: $textPrimary;
    padding: 25px;
    border-radius: 7px;
    margin-bottom: 22px;
        
        ul {
            list-style-type: none;
            display: flex;
            border: 1px solid $bgInstall;
            background-color: $bgInstall;
            border-radius: 10px;
            margin-bottom: 15px;

            li {
                padding: 13px 65px;
                color: $textHover;
                border-radius: 10px;
                cursor: pointer;

                &.selected {
                    background-color: $textNav;
                }
            }
        }
        span {
            color: $textInstallSecondary;
        }
    }

}
</style>