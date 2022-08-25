<template>
    <section>
        <div class="container">
            <SectionTitle :sectionTitle="Title"/>

            <!-- Option cards -->
            <div class="option-cards">
                <OptionCard 
                    v-for="item, index in services"
                    :key="index"
                    :option="item"/>
            </div>
            <!-- /Option cards -->

        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
import OptionCard from './OptionCard.vue';
import services from '../data/links/services.js'
export default {
    name: 'TheServices',
    components: {
        SectionTitle,
        OptionCard
    },
    data() {
        return {
            Title: {
                class: 'section-light-title',
                subtitle: 'OUR BUSINESS AREAS',
                titleHTML: 'Excellence in <span>Services</span>',
                firstText: 'We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire.',
                button: {
                    class: "btn btn-outline",
                    url: "#",
                    text: "See all"
                }
            },
            services
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/global.scss';
    @import '../assets/style/variables.scss';
    @import '../assets/style/mixins.scss';
    section {
        background-color: #121117;  
              
        
        .option-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>