<template>
    <div class="poodl-row" :style="{justifyContent: vAlign, gap: gap}">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'PoodlRow',
        props: {
            vAlign: {
                default: 'flex-start',
                type: String,
            },
            gap: {
                default: '0',
                type: String,
            },
        },
        data: () => ({
        }),
    }
</script>