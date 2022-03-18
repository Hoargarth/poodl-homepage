<template>
    <img class="poodl-image"
        :src="require('/assets/images' + src)"
        :alt="alt"
        :style="{maxWidth: computedMaxWidth, minWidth: minWidth}"/>
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
            },
            mobileMaxWidth: {
                type: String,
            }
        },
        computed: {
            computedMaxWidth () {
                const mediaQuery = window.matchMedia('(max-width: 1023px)');
                
                if (mediaQuery.matches && this.mobileMaxWidth) {
                    return this.mobileMaxWidth;
                }

                return this.maxWidth;
            }
        },
        data: () => ({
        }),
    }
</script>