<template>
    <div class="base-button">
        <a :href="url" v-if="isExternal">
            <span class="button-line"></span>
            <slot />
        </a>
        <router-link :to="url" v-else>
            <span class="button-line"></span>
            <slot />
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'PoodlButton',
        props: {
            url: String,
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