<template>
    <main>
        <HumanCorePerformance />
        <TheCompany />
        <TheServices />
        <MonthlyPlans />
        <TheNews />
        <TheNewsletter />

    </main>
</template>

<script>
import TheCompany from './TheCompany.vue';
import TheServices from './TheServices.vue';
import TheNews from './TheNews.vue';
import TheNewsletter from './TheNewsletter.vue';
import HumanCorePerformance from './HumanCorePerformance.vue';
import MonthlyPlans from './MonthlyPlans.vue';

export default {
    name: 'BaseMain',
    components: {
    TheCompany,
    TheServices,
    TheNews,
    TheNewsletter,
    HumanCorePerformance,
    MonthlyPlans
}
}
</script>

<style lang="scss" scoped>
</style>