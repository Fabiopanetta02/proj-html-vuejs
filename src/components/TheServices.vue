<template>
    <section class="light">
        <div class="container">
            <h5>Our business areas</h5>
            <h2>Excellence in <span>Services</span></h2>
            <div class="description">
                <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire.</p>
                <button class="btn btn-outline" href="#">See all</button>
            </div>

            <!-- Option cards -->
            <div class="option-cards">
                <TheOption 
                    v-for="item, index in services"
                    :key="index"
                    :option="item"/>
            </div>
            <!-- /Option cards -->
        </div>
    </section>
</template>

<script>
import TheOption from './TheOption.vue';
import services from '../data/links/services.js'
export default {
    name: 'TheServices',
    components: {
        TheOption
    },
    data() {
        return {
            services
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    @import '../assets/style/mixins.scss';
    section {
        background-color: $bg-light-col;
        // height: 1100px;
        padding: 130px 0;
    
        .container {
            h2 {
                color: $text-col;
                margin: 20px 0;
                span {
                    color: $text-col;
                }
            }
            .description {
                @include flex-center ('cross');
                justify-content: space-between;
                margin-bottom: 50px;
                p {
                    width: 80%;
                    color: $text-col;
                }
                button{
                    border: 1px solid #038483;
                    color: #fff;
                }
            }
            .option-cards {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }
    }
</style>