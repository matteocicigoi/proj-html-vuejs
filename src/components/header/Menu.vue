<script>
export default {}
</script>

<template>
    <!-- Menu -->
    <ul>
        <li>home</li>
        <li class="dropdown">
            <select class="selected" name="landing" id="landing">
            <option>landing</option>
            <option>lorem</option>
            </select>
        </li>
        <li class="dropdown">
            <select name="pages" id="pages">
            <option>pages</option>
            <option>lorem</option>
            <option>lorem</option>
            </select>
        </li>
        <li class="dropdown">
            <select name="docs" id="docs">
            <option>docs</option>
            <option>lorem</option>
            <option>lorem</option>
            </select>
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

            select {
                text-transform: uppercase;
                color: $textNav;
                font-size: 14px;
                font-weight: bold;
                border: none;
                background-color: $bgPrimary;
                cursor: pointer;
                &.selected {
                    color: $textInteraction;
                }
                &:hover {
                color: $textInteraction;
            }
            }
            &.dropdown {
                padding-right: 0;
            }
        }
    }
</style>
