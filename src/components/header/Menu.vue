<script>
export default {}
</script>

<template>
    <!-- Menu -->
    <ul>
        <li>home</li>
        <li class="dropdown selected">landing
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
        </li>
        <li class="dropdown">pages
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
        </li>
        <li class="dropdown">docs
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
        </li>
    </ul>
    <!-- Fine Menu -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    ul {
        flex-grow: 1;
        display: flex;
        list-style-type: none;
        justify-content: center;
        align-items: center;

        li {
            padding: 0 25px;
            position: relative;
            cursor: pointer;
            text-transform: uppercase;
            color: $textNav;
            font-size: 14px;
            &.dropdown {

                .icon {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    font-size: 10px;
                    transform: translate(-50%, -50%);
                }
            }
            &.selected {
                color: $textInteraction;
            }
        }
    }
</style>
