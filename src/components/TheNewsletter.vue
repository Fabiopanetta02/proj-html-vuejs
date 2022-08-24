<template>
    <section class="light-text">
        <div class="container">
            <SectionTitle :sectionTitle="Title"/>
            <form>
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Email">                
                <button href="#" class="btn btn-inline">Subscribe</button>
            </form>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
export default {
    name: 'TheNewsletter',
    components: {
        SectionTitle
    },
    data() {
        return {
            Title: {
                class: 'section-light-title',
                subtitle: 'NEWSLETTER',
                titleHTML: '<span>Know</span> First',
                firstText: 'Follow closely and receive content about our company and the news of the current market.'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    section {
        background: url('../assets/img/bg-1.jpg') center;
        background-size: cover;
        .container {
            display: flex;
            width: 50%;
            & > div {
                padding-right: 20px;
                width: 50%;
            }
            form {
                width: 50%;
                padding-left: 20px;
                display: flex;
                flex-direction: column;
                & > * {
                    margin-bottom: 20px;
                }
                input {
                    background-color: $white50;
                }
                button.btn-inline {
                    align-self: flex-start;
                    background-color: #038483;
                    color: #fff;
                }
            }
        }
    }
</style>