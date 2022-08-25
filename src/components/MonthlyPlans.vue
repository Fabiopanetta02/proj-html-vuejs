<template>
  <section class="dark-text">
    <div class="container text-center">
        <h5 class="mb-3 fs-6 fw-bold">MONTHLY PLANS</h5>
        <h2 class="mb-4 fw-bold"><span>Pricing</span> Table</h2>
        <p class="mb-4">We can help deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation </p>
        <div class="option-cards">
            <div class="option">
                <div class="rounded">
                    <font-awesome-icon icon="fas fa-rocket" class="icon"/>         
                </div>        
                <h3 class="fw-bold">Standard</h3>
                <div class="price">
                    <h6>$ <span class="fs-1">490</span> /mo </h6>
                </div>
                <ul class="ms-0 ps-0 text-start">
                    <li class="row my-3">
                        <div class="col-10">Standard Accounting</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Platform Access</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Business Orientation</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-xmark" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Dedicated Consultant</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-xmark" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Personal Assistance
                        </div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-xmark" class="icon-vantages"/>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="option">
                <div class="rounded">
                    <font-awesome-icon icon="fas fa-briefcase" class="icon"/>         
                </div>        
                <h3 class="fw-bold">Professional</h3>
                <div class="price">
                    <h6>$ <span class="fs-1">890</span> /mo </h6>
                </div>
                <ul class="ms-0 ps-0 text-start">
                    <li class="row my-3">
                        <div class="col-10">Standard Accounting</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Platform Access</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Business Orientation</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Dedicated Consultant</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-xmark" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Personal Assistance
                        </div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-xmark" class="icon-vantages"/>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="option">
                <div class="rounded">
                    <font-awesome-icon icon="fas fa-gem" class="icon"/>         
                </div>        
                <h3 class="fw-bold">Ultimate</h3>
                <div class="price">
                    <h6>$ <span class="fs-1">1.390</span> /mo </h6>
                </div>
                <ul class="ms-0 ps-0 text-start">
                    <li class="row my-3">
                        <div class="col-10">Standard Accounting</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Platform Access</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Business Orientation</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Dedicated Consultant</div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                    <li class="row my-3">
                        <div class="col-10">Personal Assistance
                        </div> 
                        <div class="col-2">
                            <font-awesome-icon icon="fas fa-check" class="icon-vantages"/>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'MonthlyPlans',
    components: {
},
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/global.scss';
    @import '../assets/style/variables.scss';
    @import '../assets/style/mixins.scss';
    section{
        background-color: #E3E7DF;

        p{
            width: 750px;
            margin: 0 auto;
        }
        .option-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
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
                color: #038483;
            }
        }
        h3, p {
            margin-bottom: 20px;
        }
        .price{
            color: #038483;
        }
        .vantages{
            margin-right: 150px;
        }
        .icon-vantages{
            color: #038483;
            font-size: 15px;
        }
    }
    }
</style>