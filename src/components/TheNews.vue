<template>
    <section class="dark-text">
        <div class="container">
            <SectionTitle :sectionTitle="Title"/>
            <div class="news">
                <NewsCard 
                    v-for="item in news"
                    :key="item.pic"
                    :item="item"/>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
import NewsCard from './NewsCard.vue';
import news from '../data/news.js';
export default {
    name: 'TheNews',
    components: {
        SectionTitle,
        NewsCard
    },
    data() {
        return {
            Title: {
                class: 'section-dark-title',
                subtitle: 'OUR EDITORIAL CONTENT',
                titleHTML: 'Latest <span>News</span>',
                firstText: 'Every week we publish content about what is best in the business world.',
                button: {
                    class: "btn btn-inline",
                    url: "#",
                    text: "See all"
                }
            },
            news
        }
    }
}
</script>

<style lang="scss" scoped>
    span{
        color: #038483;
    }
    .news {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>