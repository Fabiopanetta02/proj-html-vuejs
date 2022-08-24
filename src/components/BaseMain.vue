<template>
    <main>
        <TheCompany />
        <TheServices />

    </main>
</template>

<script>
import TheCompany from './TheCompany.vue';
import TheServices from './TheServices.vue';

export default {
    name: 'BaseMain',
    components: {
    TheCompany,
    TheServices,
}
}
</script>

<style lang="scss" scoped>
</style>