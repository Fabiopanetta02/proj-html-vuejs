<template>
  <section class="dark-text">
    <div class="container text-center">
        <h5 class="mb-3">MONTHLY PLANS</h5>
        <h2 class="mb-4"><span>Pricing</span> Table</h2>
        <p class="mb-4">We can help deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation </p>
        <div class="row justicy-content-space-beetwen">
            <div class="col-3 p-4">
                <font-awesome-icon icon="fas fa-rocket" class="fs-2 mb-2"/>
                <h4 class="mb-2">Standard</h4>
                <h5>$ <span class="display-5">490</span> /mo</h5>
                <ul class="ps-0 text-start">
                    <li>
                        Standard Accounting
                        <font-awesome-icon icon="fas fa-rocket"/>
                    </li>
                </ul>
            </div>
            <div class="col-3">
                 <font-awesome-icon icon="fas fa-briefcase" />
            </div>
            <div class="col-3">
                 <font-awesome-icon icon="fas fa-envelope" />
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    @import '../assets/style/mixins.scss';
    section{
        background-color: #E3E7DF;

        p{
            width: 750px;
            margin: 0 auto;
        }
        div.col-3{
            background-color: #fff;
        }
    }
</style>