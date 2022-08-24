<template>
    <div :class="sectionTitle.class">
        <h5 class="fs-6 fw-bold">{{ sectionTitle.subtitle }}</h5>
        <h2 class="fw-bold" v-html="sectionTitle.titleHTML"></h2>
        <div v-if="sectionTitle.button"
            class="description">
            <div>
                <p>{{ sectionTitle.firstText }}</p>
            </div>
            <button  :class="sectionTitle.button.class" 
                :href="sectionTitle.button.url">
                {{ sectionTitle.button.text}}
            </button>
        </div>
        <div v-else>
            <p>{{ sectionTitle.firstText }}</p>
            <p v-if="sectionTitle.secondText">{{ sectionTitle.secondText }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        sectionTitle: Object
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/mixins.scss';
    
    div > * {
        margin-bottom: 20px;
        .description {
            @include flex-center ('cross');
            justify-content: space-between;
            div {
                width: 80%;
            }
            button.btn-inline{
                background-color: #038483;
                color: #fff;
            }
        }
    }
</style>