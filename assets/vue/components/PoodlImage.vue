<template>
    <img class="poodl-image"
        :src="require('/assets/images' + src)"
        :alt="alt"
        :style="{maxWidth: maxWidth, minWidth: minWidth}"/>
</template>

<script>
    export default {
        name: 'PoodlImage',
        props: {
            src: {
                default: '/icons/poodl-head.png',
                type: String,
            },
            alt: {
                default: 'PoodlToken',
                type: String,
            },
            maxWidth: {
                default: 'initial',
                type: String,
            },
            minWidth: {
                default: 'initial',
                type: String,
            }
        },

        data: () => ({
        }),
    }
</script>