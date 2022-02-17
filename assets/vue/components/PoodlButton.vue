<template>
    <div class="base-button">
        <a :href="url">
            <span class="button-line"></span>
            <slot />
        </a>
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
    }
</script>