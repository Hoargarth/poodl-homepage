<template>
    <div>{{ message }}</div>
</template>

<script>
    export default {
        name: 'Home',
        props: {},
        data: () => ({
          message: 'Hello Symfony + Vue.js!',
        }),
    }
</script>