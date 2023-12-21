<script>
import Logo from '../common/Logo.vue';
import ListIcon from '../common/ListIcon.vue';
import ButtonSm from '../common/ButtonSm.vue';
import Button from '../common/Button.vue';
import ListaImg from '../common/ListaImg.vue';
export default {
    components : {
        Logo,
        ListIcon,
        ButtonSm,
        Button,
        ListaImg
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
                ],
                email : '',
        }
    },
    methods : {
        scrollToTop() {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        },
        sendEmail(){
            this.email = '';
        }
    }
}
</script>

<template>
    <!-- Footer -->
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
                <h3>Newsletter</h3>
                <p>Sign up and receive the latest tips via email.</p>
                <label for="emailS">Write your email <span>*</span></label>
                <input type="email" id="emailS" placeholder="Your email:" v-model="email">
                <Button :text="'Subscribe'" :class="'footer'" @click="sendEmail()"/>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="bottom-info">
                <div class="info">
                    <p>© 2020 Landrick. Design with <span>&#10084;</span> by Shreethemes.</p>
                </div>
                <div class="payment-options">
                    <ListaImg :images="['american-ex.png', 'discover.png', 'master-card.png', 'paypal.png', 'visa.png']" :flex="true" :classT="'payament'" />
                </div>
            </div>
        </div>
        <ButtonSm  @click="scrollToTop()" :icon="'fa-solid fa-arrow-up'" :class="'top'"/>
    </footer>
    <!-- Fine Footer -->
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;

    footer{
        background-color: $bgFooter;
        position: relative;
        color: $textFooter;
        padding-top: 65px;

        .container {
            width: $sizeContainer;
            margin: 0 auto;
            display: flex;

            h3 {
                color: $textHover;
                margin-bottom: 30px;
            }

            p {
                margin-top: 20px;
                line-height: 25px;
                margin-bottom: 20px
            }

            .link {
                width: 320px;
            }

            .info {
                flex-grow: 1;
                display: flex;
                padding-left: 55px;
                .company {
                    margin-right: 50px;
                }
            }

            .newsletter {
                width: 255px;
                
                span{
                    color: $textFooterRequired;
                }

                input {
                    margin-top: 10px;
                    margin-bottom: 20px;
                    padding: 15px;
                    width: 100%;
                    border-radius: 7px;
                    border: none;
                    color: $brSubscriptions;
                    background-color: $bgFooterInput;
                    &::placeholder {
                        color: $brSubscriptions;
                    }
                }
            }
        }
        
        .footer-bottom {
            margin-top: 37px;
            border-top: 1px solid $brFooter;
            padding-top: 30px;
            padding-bottom: 35px;

            .bottom-info {
                width: $sizeContainer;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;

                span{
                    color: $textFooterRequired;
                }

                .payment-options {
                    width: 200px;
                }
            }
        }
    }
</style>