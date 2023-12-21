<script>
import ListIcon from '../common/ListIcon.vue';
export default {
    components : {
        ListIcon,
    },
    data() {
        return {
            current: 0,
            list : {
                icon : 'fa-regular fa-circle-check',
                text : ['Organize your data', 'Work with any team']
            },
            installText : [
                '<span style="color: #2ECA8B;">$ </span>npm install <span style="color: #2ECA8B;">-g </span>claps.js',
                '<span style="color: #2ECA8B;">$ </span>nuget install <span style="color: #2ECA8B;">-g </span>claps.js',
                '<span style="color: #2ECA8B;">$ </span>spm install <span style="color: #2ECA8B;">-g </span>claps.js',
                '<span style="color: #2ECA8B;">$ </span>git <span style="color: #2ECA8B;">clone</span> https://landrick.com/claps.js'
            ]
        }
    },
    methods : {
        currentFn(i){
            this.current = i;
        }
    }
};
</script>

<template>
    <!-- Install -->
    <div class="install-info">
        <div class="install">
            <ul>
                <li :class="{selected : current === 0}" @click="currentFn(0)">npm</li>
                <li :class="{selected : current === 1}" @click="currentFn(1)">nuget</li>
                <li :class="{selected : current === 2}" @click="currentFn(2)">spm</li>
                <li :class="{selected : current === 3}" @click="currentFn(3)">github</li>
            </ul>
            <h3 v-html="installText[current]"></h3>
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
    margin-bottom: 87px;
    
    .install {
    background-color: $textNav;
    color: $textPrimary;
    padding: 25px;
    border-radius: 7px;
    margin-bottom: 15px;
    width: max-content;
        
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