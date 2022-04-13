<template>
    <a :href="url" v-if="isNormalLink">
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
            isNormalLink () {
                if (this.url.includes('://') || this.url.includes('/#')) {
                    return true;
                }
                return false;
            }
        },
    }
</script>