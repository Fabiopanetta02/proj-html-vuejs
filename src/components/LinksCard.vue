<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <ul class="px-0">
            <li v-for="link, index in links"
                :key="index">                
                <a :href="link.url">
                    <font-awesome-icon icon="fas fa-chevron-right" class="icon"/>
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LinksCard',
    props: {
        title: String,
        links: Array
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    .card {
        height: 100%;
        width: 100%;
        padding: 40px;
        border-radius: 15px;
        background-color: $white3;
        transition: $trans-time;
        &:hover {
            transform: $move-card-up;
        }
        
        h3 {
            margin-bottom: 20px;
        }
        ul {
            li {
                margin-bottom: 10px;
                i {
                    margin-right: 5px;
                }
                a {
                    font-weight: 300;
                    text-decoration: none;
                    color: $white60;
                    transition: $trans-time;
                    &:hover {
                        color: $brand-col;
                    }
                }
            }
        }
    }
</style>