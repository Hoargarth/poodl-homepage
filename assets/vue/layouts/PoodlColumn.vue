<template>
    <div class="poodl-column" :class="widthClasses" :style="{justifyContent: vAlign, alignItems: hAlign, textAlign: textAlign}">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'PoodlColumn',
        props: {
            mobile: {
                default: 12,
                type: Number,
            },
            tablet: {
                default: 12,
                type: Number,
            },
            desktop: {
                default: 12,
                type: Number,
            },
            vAlign: {
                default: 'flex-start',
                type: String,
            },
            hAlign: {
                default: 'flex-start',
                type: String,
            },
            textAlign: {
                default: 'left',
                type: String,
            }
        },
        data: () => ({
        }),
        computed: {
            widthClasses: function() {
                return `column-mobile-${this.mobile} column-tablet-${this.tablet} column-desktop-${this.desktop}`;
            }
        }
    }
</script>