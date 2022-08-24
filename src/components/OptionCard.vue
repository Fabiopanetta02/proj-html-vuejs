<template>
    <div class="option">
        <div>
            <font-awesome-icon :icon="option.icon" class="icon"/>         
        </div>        
        <h3>{{ option.text }}</h3>
        <p>{{ option.description }}</p>
        <button type="button" class="btn btn-outline">READ MORE</button>
    </div>
</template>

<script>
export default {
    name: 'OptionCard',
    props: {
        option: Object
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    .option {
        width: calc((100% - 60px) / 3);
        margin-bottom: 30px;
        padding: 50px;
        border-radius: 10px;
        background-color: #24333d;
        color: #fff;
        div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            .icon{
                font-size: 48px;
                color: $brand-dark-col;
                &.fa-arrow-right {
                    font-size: 24px;
                    color: $brand-dark50-col;
                }
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