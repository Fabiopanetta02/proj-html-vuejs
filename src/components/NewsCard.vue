<template>
    <div class="news-card">
        <img :src="require(`../assets/img/news-${this.item.pic}.jpg`)" :alt="`News pic-${this.item.pic}`">
        <div>
            <h3>{{ item.title }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsCard',
    props: {
        item: Object
    },
    data() {
        return {
            imgPath: require(`../assets/img/news-${this.item.pic}.jpg`)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    .news-card {
        position: relative;
        height: 360px;
        width: 360px;
        border-radius: 15px;
        overflow: hidden;
        
        img {
            width: 100%;
            height: 100%;
        }
        div {
            display: flex;
            align-items: flex-end;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            padding: 40px;
            text-align: center;
            background-color: $black40;
            color: $text-col;
        }
        &:hover {
            img {
               filter: blur(0); 
            }
        }
    }
</style>