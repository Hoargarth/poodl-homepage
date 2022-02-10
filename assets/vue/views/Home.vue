<template>
    <div>{{ message + $store.state.count }}</div>
</template>

<script>
    export default {
        name: 'Home',
        props: {},
        data: () => ({
          message: 'Hello Symfony + Vue.jss!',
        }),
        created() {
            this.$store.commit('increment');
        }
    }
</script>