<template>
    <main>
        <TheCompany />
        <TheServices />
        <TheNews />
        <TheNewsletter />

    </main>
</template>

<script>
import TheCompany from './TheCompany.vue';
import TheServices from './TheServices.vue';
import TheNews from './TheNews.vue';
import TheNewsletter from './TheNewsletter.vue';

export default {
    name: 'BaseMain',
    components: {
    TheCompany,
    TheServices,
    TheNews,
    TheNewsletter
}
}
</script>

<style lang="scss" scoped>
</style>