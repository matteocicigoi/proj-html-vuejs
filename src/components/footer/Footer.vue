<script>
import Logo from '../common/Logo.vue';
import ListIcon from '../common/ListIcon.vue';
import ButtonSm from '../common/ButtonSm.vue';
export default {
    components : {
        Logo,
        ListIcon,
        ButtonSm
    },
    data() {
        return {
            list : [
                    {
                        icon : 'fa-solid fa-angle-right',
                        text :
                        [
                            'About us',
                            'Services',
                            'Team',
                            'Pricing',
                            'Careers',
                            'Blog',
                            'Login',
                        ]
                    },
                    {
                        icon : 'fa-solid fa-angle-right',
                        text :
                        [
                            'Terms of Services',
                            'Privacy Policy',
                            'Documentation',
                            'Changelog',
                            'Components'
                        ]
                    },
                ]
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="link">
                <Logo img="/img/logo-light.png"/>
                <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <ButtonSm :icon="'fa-brands fa-facebook-f'" :class="'secondary'"/>
                <ButtonSm :icon="'fa-brands fa-instagram'" :class="'secondary'"/>
                <ButtonSm :icon="'fa-brands fa-twitter'" :class="'secondary'"/>
                <ButtonSm :icon="'fa-brands fa-linkedin-in'" :class="'secondary'"/>
            </div>
            <div class="info">
                <div class="company">
                    <h3>Company</h3>
                    <ListIcon :list="list[0]" :listColor="'none'"/>
                </div>
                <div class="links">
                    <h3>Usefull Links</h3>
                    <ListIcon :list="list[1]" :listColor="'none'"/>
                </div>
            </div>
            <div class="newsletter">
                c
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;

    footer{
        background-color: $bgFooter;
        color: $textFooter;
        padding-top: 65px;

        .container {
            width: $sizeContainer;
            margin: 0 auto;
            display: flex;

            .link {
                width: 320px;

                p {
                    margin-top: 20px;
                    line-height: 25px;
                    margin-bottom: 20px
                }
            }

            .info {
                flex-grow: 1;
                display: flex;
                padding-left: 55px;

                h3 {
                    color: $textHover;
                    margin-bottom: 30px;
                }

                .company {
                    margin-right: 50px;
                }
            }

            .newsletter {
                width: 255px;
            }
        }
    }
</style>