<template>
    <footer>
         <div class="footer-top">
            <div class="container">

                <!-- contacts -->
                <div class="contacts">
                    <a class="logo" href="#">
                        <span>Nex</span>
                        <span>Gen</span>
                    </a>
                    <p>A Functional HTML Template for Corporate & Business.</p>
                    <span>
                        <font-awesome-icon icon="fas fa-phone" />
                        +1 (305) 1234-5678
                    </span>
                    <span>
                        <font-awesome-icon icon="fas fa-envelope" />
                        hello@example.com
                    </span>
                    <span>
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        Main Avenue, 987
                    </span>
                    <a href="#" class="btn btn-outline">Get in touch</a>
                </div>
                <!-- /contacts -->

                <!-- links -->
                <div>
                    <LinksCard 
                        :title="'About'"
                        :links="aboutLinks"/>
                </div>
                <div>
                    <LinksCard 
                        :title="'Services'"
                        :links="servicesLinks"/>
                </div>
                <div>
                    <LinksCard 
                        :title="'Support'"
                        :links="supportLinks"/>
                </div>
                <!-- /links -->
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <span>Enjoy the low price. We are tracking any intention of piracy.</span>
                <span>&copy; 2020 NEXGEN is Proudly Powered by <a href="#">Codings</a></span>
            </div>
        </div>

    </footer>
</template>

<script>
//links
import aboutLinks from '../data/links/about.js'
import servicesLinks from '../data/links/services.js'
import supportLinks from '../data/links/support.js'
//components
import LinksCard from './LinksCard.vue'
export default {
    name: 'TheFooter',
    data() {
        return {
            aboutLinks,
            servicesLinks,
            supportLinks
        }
    },
    components: {
        LinksCard
    }
}
</script>

<style lang="scss" scoped>
 @import '../assets/style/variables.scss';
    @import '../assets/style/mixins.scss';
    footer {
        
        a {
            text-decoration: none;
        }
        
        .footer-top {
            @include flex-center ('both');
            width: 100%;
            height: 620px;
            background-color: $bg-col;
            .container {
                display: flex;
                justify-content: space-between;
                & > div {
                    width: calc((100% - 90px) / 4);
                }
                .contacts {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding-right: 15px;
                    font-weight: 200;
                    color: $white80;
                    .logo {
                        color: $white80;
                        span {
                            font-size: 26px;
                            &:first-child {
                                border-top-left-radius: 50px;
                                border-bottom-left-radius: 50px;
                            }
                        }                        
                    }
                    i {
                        margin-right: 10px;
                    }
                    p {
                        padding: 30px 0;
                    }
                    
                    span {
                        margin-bottom: 15px;
                    }
                    .btn {
                        color: $text-col;
                        margin-top: 20px;
                    }
                }
            }
        }
        
        .footer-bottom {
            @include flex-center ('cross');        
            @include small-font;
            height: 90px;
            background-color: $bg-dark-col;
            .container {
                display: flex;
                justify-content: space-between;
                a{
                    font-size: 17px;
                    color: $brand-col;
                }
            }
        }
    }
</style>