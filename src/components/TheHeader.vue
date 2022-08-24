<template>
    <header>
        <!-- top bar -->
        <div class="top-bar">
            <ul class="container inline-list">
                <li v-for="contact, index in contactsLinks"
                    :key="index">
                    <a :href="contact.url">
                        <font-awesome-icon :icon="contact.icon" />
                        {{ contact.text }}
                    </a>
                </li>
            </ul>
        </div>
        <!-- /top bar -->

        <!-- menu -->
        <nav>
            <div class="bg-dark">
                <div class="container">
                    <a href="#">
                        <img src="../assets/img/logo.svg" alt="">
                    </a>
                    <ul class="inline-list">
                        <li v-for="link, index in headerLinks"
                            :key="index">
                            <a :href="link.url">{{ link.text.toUpperCase() }}</a>
                        </li>
                        <li>
                            <a class="btn btn-solid" href="#">Get in touch</a>
                        </li>
                    </ul>
                </div>
                <div class="jumbotron">
                    <h1>Lead ~ Customer</h1>
                    <p>Successful startegies require data analysis, creativity and customer focus, taking advantage of the latest technologies to offer excellent services</p>
                    <div>
                        <a href="#" class="btn btn-solid">Get in touch</a>
                        <a href="#" class="btn btn-outline">Read more</a>
                    </div>
                </div>
            </div>
        </nav>
        <!-- /menu -->
    </header>
</template>

<script>
import headerLinks from '../data/header-links.js';
import contactsLinks from '../data/contacts-links.js';
export default {
    name: 'TheHeader',
    data() {
        return {
            headerLinks,
            contactsLinks
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    @import '../assets/style/mixins.scss';
    header {
        a{
            text-decoration: none
        }
        .top-bar {
            @include flex-center ('cross');
            height: 50px;
            background-color: $text-dark-col;
            font-weight: 300;

            ul {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: $white60;
                li {
                    &:first-child {
                        flex-grow: 1;
                    }
                    &:not(:first-child) {
                        margin-left: 30px;
                    }
                    * {
                        color: $white60;
                    }
                    i {
                        margin-right: 5px;
                    }
                    a:not(.btn) {
                        color: $white60;
                        text-decoration: none; 
                    }                        
                }
            }
        }  
        nav {
            background-image: url('../assets/img/hero-image.png');
            background-repeat: no-repeat;
            height: 900px;
            background-size: cover;
            background-position: center bottom;
            div.bg-dark{
                background-color: rgba($color: #000000, $alpha: 0.7);
                height: 900px;

                div.container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 20px;
                }

                a {
                font-size: 18px;
                    img{
                        width: 50%;
                    }
                }
                ul {
                    li {
                        margin-left: 40px;
                    }
                }
                .jumbotron{
                    height: 820px;
                    text-align: center;

                    h1{
                        font-size: 60px;
                        margin-top: 200px;
                    }
                    p{
                        width: 730px;
                        margin: 20px auto;
                    }
                    div{
                        display: flex;
                        justify-content: center;
                        a{
                            margin: 0 10px;
                        }
                    }
                }
            }
        }
    } 
</style>