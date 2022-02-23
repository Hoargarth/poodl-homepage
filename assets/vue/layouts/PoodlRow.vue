<template>
    <div class="poodl-row" :style="{justifyContent: vAlign}">
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
        },
        data: () => ({
        }),
    }
</script>