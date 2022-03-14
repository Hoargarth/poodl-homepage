<template>
    <a class="navigation-button" :href="url">
        <slot/>
    </a>
</template>

<script>
    export default {
        name: 'PoodlNavigationButton',
        props: {
            url: {
                default: '/',
                type: String,
            },
        },
        data: () => ({
        }),
    }
</script>