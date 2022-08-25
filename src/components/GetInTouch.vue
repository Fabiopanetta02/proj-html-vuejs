<template>
    <section class="">
        <div class="container justify-content-between">
            <div class="col-7">
                <SectionTitle class="section-dark-title" :sectionTitle="Title"/>
                <form class="row justify-content-between w-100">
                    <input type="text" placeholder="Name" class="col-5 ms-2">
                    <input type="text" placeholder="Email" class="col-5">  
                    <input type="text" placeholder="Phone" class="col-5 ms-2">
                    <input type="text" placeholder="More info" class="col-5">  
                    <input type="text" placeholder="Message" class="text-area ms-2">            
                    <button href="#" class="btn btn-inline w-25 ms-2">Send</button>
                </form>
            </div>
            <div class="col-4">
                <div class="contacts">
                    <h3 class="fw-bold mb-3">Example inc.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Praesent diam lacus, dapibus sed imperdiet consectetur</p>
                    <span>
                        <font-awesome-icon icon="fas fa-phone" />
                        +1 (305) 1234-5678
                    </span>
                    <span>
                        <font-awesome-icon icon="fas fa-envelope" />
                        hello@example.com
                    </span>
                    <span>
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        Main Avenue, 987
                    </span>
                    <a href="#" class="btn btn-outline">VIEW MAP </a>
                </div>
            </div>
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
                class: '',
                subtitle: 'SEND A MESSAGE',
                titleHTML: 'Get in <span>Touch</span> ',
                firstText: 'We will respond to your message as soon as possible'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/global.scss';
    @import '../assets/style/variables.scss';
    section {
        color: #000;
        .container {
            display: flex;
            form {
                & > * {
                    margin-bottom: 20px;
                }
                input {
                    width: 48%;
                }
                select{
                    width: 48%;
                }
                input.text-area{
                    width: 99%;
                    height: 100px;
                }
                button.btn-inline {
                    align-self: flex-start;
                    background-color: #038483;
                    color: #fff;
                }
            }
            .contacts {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding-right: 15px;
                    font-weight: 200;
                    .logo {
                        color: $white80;
                        span {
                            font-size: 26px;
                            &:first-child {
                                border-top-left-radius: 50px;
                                border-bottom-left-radius: 50px;
                            }
                        }                        
                    }
                    i {
                        margin-right: 10px;
                    }
                    p {
                        padding-bottom: 20px;
                    }
                    span {
                        font-size: 20px;
                        color: #038483;
                        margin-bottom: 15px;
                    }
                    .btn {
                        color: #038483;
                        margin-top: 20px;
                        border: 1px solid #038483
                    }
                    ul{
                        padding-left: 0
                    }
                }
        }
    }
</style>