<template>
    <section class="section" :style="{backgroundColor: sectionColor}">
        <slot />
    </section>
</template>

<script>
    export default {
        name: 'PoodlSection',
        props: {
            sectionColor: String,
        },
        data: () => ({
        }),
    }
</script>