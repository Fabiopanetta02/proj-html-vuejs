<template>
    <header>
        <!-- top bar -->
        <div class="top-bar">
            <div class="container">
                <ul class="inline-list">
                    <li v-for="contact, index in contactsLinks"
                        :key="index">
                        <font-awesome-icon :icon="contact.icon" />
                        <a :href="contact.url">{{ contact.text }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /top bar -->

        <!-- menu -->
        <nav>
            <div>

            </div>
            <ul>

            </ul>
        </nav>
        <!-- /menu -->

        <div class="hero">
            <h5>Fusions & acquisitions</h5>
            <h1>Insurance consulting</h1>
            <form action="">

            </form>
        </div>

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
        .top-bar {
            @include flex-center ('cross');
            height: 50px;
            background-color: $text-dark-col;
            ul {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: $text-light-col;
                li {
                    &:first-child {
                        flex-grow: 1;
                    }
                    &:not(:first-child) {
                        margin-left: 30px;
                    }
                    * {
                        color: $text-light-col;
                    }
                    i {
                        margin-right: 10px;
                    }
                    a {
                        text-decoration: none;                        
                    }
                }
            }
        }
        
    }
    
</style>