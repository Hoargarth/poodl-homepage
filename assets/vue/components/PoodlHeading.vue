<template>
    <div class="heading">
        <component :is="computedHeadingLevel"><slot name="heading"></slot></component>
        <div class="subheading"><slot name="subheading"></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlHeading',
        props: {
            headingLevel: String,
        },
        computed: {
            computedHeadingLevel: function() {
                if (this.headingLevel) {
                    return this.headingLevel;
                }

                return 'h2';
            }
        },
        data: () => ({
        }),
    }
</script>