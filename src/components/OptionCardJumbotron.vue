<template>
    <div class="option">
        <div class="rounded">
            <font-awesome-icon :icon="option.icon" class="icon"/>         
        </div>        
        <h3>{{ option.text }}</h3>
        <p>{{ option.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'OptionCardJumbotron',
    props: {
        option: Object
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    div.option {
        width: calc((100% - 60px) / 3);
        margin-bottom: 30px;
        padding: 50px;
        border-radius: 10px;
        background-color: #fff;
        color: #000;
        div.rounded {
            margin-bottom: 20px;
            .icon{
                font-size: 48px;
                color: $brand-dark-col;
            }
        }
        h3, p {
            margin-bottom: 20px;
        }
        button.btn-outline{
            border: 1px solid #038483;
            color: #fff;
        }
    }
</style>