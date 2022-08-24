<template>
    <section class="dark-text">
        <div class="container">
            <!-- Option cards -->
            <div class="option-cards">
                <OptionCardJumbotron
                    v-for="item, index in humanjumbotron"
                    :key="index"
                    :option="item"/>
            </div>
            <!-- /Option cards -->
        </div>
    </section>
</template>

<script>
import humanjumbotron from '@/data/links/humanjumbotron';
import OptionCardJumbotron from './OptionCardJumbotron.vue';
export default {
    name: 'HumanCorePerformance',
    components: {
    OptionCardJumbotron
    },
    data() {
        return{
            humanjumbotron
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    @import '../assets/style/mixins.scss';
    section {
        background-color: #e3e7df;  
        .option-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

</style>