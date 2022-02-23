<template>
    <div class="heading">
        <component :is="headingLevel"><slot name="heading"></slot></component>
        <div v-if="hasSubHeading" class="subheading"><slot name="subheading"></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlHeading',
        props: {
            headingLevel: {
                default: 'h2',
                type: String,
            },
        },
        computed: {
            hasSubHeading () {
                return !!this.$slots['subheading'];
            }
        },
        data: () => ({
        }),
    }
</script>