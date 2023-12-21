<script>
import ListIcon from './ListIcon.vue';
import Button from './Button.vue';
import Badge from './Badge.vue';
import Best from './Best.vue';
export default {
    components : {
        ListIcon,
        Button,
        Badge,
        Best
    },
    props: ['border', 'icon', 'title', 'description', 'link', 'list', 'button', 'type', 'btSize', 'infoP', 'badge', 'best', 'iconBt', 'listColor']
};
</script>

<template>
    <!-- Card -->
    <div class="card" :class="{border : border === true, big :type === 'big'}">
        <Best v-if="best === true" />
        <div v-if="'string' === typeof icon" class="icon">
            <div class="hidden"><font-awesome-icon :icon="icon" /></div>
            <font-awesome-icon :icon="icon" />
        </div>
        <Badge v-if="(typeof badge) === 'string'" :text="badge" :big="true"/>
        <h3 v-if="title !== false"  :class="{big : btSize === 'big'}">{{  title }}</h3>
        <p v-if="description !== false">{{ description }}</p>
        <hr v-if="infoP === true">
        <ListIcon v-if="(typeof list) === 'object'" :list="list" :listColor="listColor" />
        <a v-if="button !== true" :href="link[0]">{{ link[1] }} <font-awesome-icon :icon="'string' ===  typeof iconBt ? iconBt : link[2]" /></a>
        <template v-else>
            <Button :text="link[1]" :class="'primary'"  :size="btSize" :icon="'string' ===  typeof iconBt ? iconBt : link[2]"/>
        </template>
        <h6 v-if="infoP === true">*No credit card required</h6>
    </div>
    <!-- Fine Card -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;

    .card {
        margin-bottom:  25px;
        position: relative;

        &.border {
            border: 1px solid $brCard;
            padding: 25px;
            border-radius: 7px;
        }

        .icon {
            width: max-content;
            padding: 20px;
            background-color: $bgIcon;
            border-radius: 7px;
            font-size: 25px;
            color: $textInteraction;
            z-index: 2;
        }

        a{
            color: $textInteractionSecondary;
        }
        
        h3 {
            margin-top: 30px;
            color: $textNav;
            margin-bottom: 15px;
            z-index: 2;
            &.big {
                font-size: 35px;
            }
        }

        p {
            color: $textPrimary;
            line-height: 25px;
            margin-bottom: 20px;
        }

        hr {
            border: 1px solid $brJumbo;
            border-bottom: none;
            margin-bottom: 15px;
        }

        h6 {
            margin-top: 15px;
            font-size: 13px;
            color: $textPrimary;
        }

        &.big {
            h3 {
                font-size: 25px;
                margin-right: 280px;
                margin-bottom: 40px;
            }
            p {
                margin-bottom: 15px;
            }
        }

        .hidden {
            display: none;
            position: absolute;
            z-index: -1;
            top: calc(50% - 100px);
            left: 0;
            right: 0;
            bottom: 0;
            color: $iconbgHover;
            text-align: center;
            font-size: 200px;
        }
        
        &:hover  .hidden{
                display: block;
            }
    }
</style>