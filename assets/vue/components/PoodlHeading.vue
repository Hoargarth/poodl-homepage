<template>
    <div class="heading">
        <component :is="headingLevel"><slot name="heading"></slot></component>
        <div class="subheading"><slot name="subheading"></slot></div>
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
        },
        data: () => ({
        }),
    }
</script>