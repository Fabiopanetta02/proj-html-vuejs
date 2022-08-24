<template>
    <main>
        <HumanCorePerformance />
        <TheCompany />
        <TheServices />
        <MonthlyPlans />
        <TheNews />
        <TheNewsletter />
        <GetInTouch />
    </main>
</template>

<script>
import TheCompany from './TheCompany.vue';
import TheServices from './TheServices.vue';
import TheNews from './TheNews.vue';
import TheNewsletter from './TheNewsletter.vue';
import HumanCorePerformance from './HumanCorePerformance.vue';
import MonthlyPlans from './MonthlyPlans.vue';
import GetInTouch from './GetInTouch.vue';
export default {
    name: 'BaseMain',
    components: {
    TheCompany,
    TheServices,
    TheNews,
    TheNewsletter,
    HumanCorePerformance,
    MonthlyPlans,
    GetInTouch
}
}
</script>

<style lang="scss" scoped>
</style>