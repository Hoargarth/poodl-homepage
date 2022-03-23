<template>
    <a :href="url" v-if="isExternal">
        <slot />
    </a>
    <router-link :to="url" v-else>
        <slot/>
    </router-link>
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
        computed: {
            isExternal () {
                return this.url.includes('://');
            }
        },
    }
</script>