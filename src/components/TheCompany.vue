<template>
    <section>
        <div class="container">
            <div class="left">
                <div>
                    <h5 class="fs-6 mb-3 fw-boldm">ABOUT THE NETWORK</h5>
                    <h2 class="fw-bold"><span>The</span> Company</h2>
                    <p class="mt-4">For 12 years we have been providing audit and warranty, financial advice, taxes and related services to select clients</p> 
                </div>
                <div class="row">
                    <div class="col-6">
                        <font-awesome-icon icon="fas fa-award" class="icon"/>
                        <h3 class="d-inline ms-2">Tradition</h3>
                        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-6">
                        <font-awesome-icon icon="fas fa-lock" class="icon"/>
                        <h3 class="d-inline ms-2">Security</h3>
                        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-6">
                        <font-awesome-icon icon="fas fa-edit" class="icon"/>
                        <h3 class="d-inline ms-2">Certificate</h3>
                        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-6">
                        <font-awesome-icon icon="fas fa-graduation-cap" class="icon"/>
                        <h3 class="d-inline ms-2">Expertise</h3>
                        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div class="right">
                <img src="../assets/img/about-3.jpg" alt="" class="img-fluid">
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'TheCompany',
    components: {
    },
    data() {
        return {
            Title: {
                class: 'section-light-title',
                subtitle: 'About the network',
                titleHTML: '<span>The</span> Company',
                firstText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem sint quisquam accusamus unde, earum numquam dolores modi, inventore debitis.',
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    @import '../assets/style/mixins.scss';
    section {
        background-color: $text-col;
        color: #000;
        position: relative;
        .container {
            @include flex-center ('both');
            justify-content: space-between;
            height: 100%;
            .right,
            .left {
                width: calc((100% - 60px) / 2);
                h2 span{
                    color: $brand-dark-col;
                }
            }
            .left {
                & > * {
                    margin-bottom: 20px;
                }
                .icon{
                    color: #058283;
                    font-size: 1.75rem;
                }
            }
            .right {
                & > div {
                    width: calc((100% - 30px) / 2);
                }
                img{
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%

                };
            }
        }
    }
</style>