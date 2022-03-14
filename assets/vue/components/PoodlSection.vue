<template>
    <section
        :id="sectionAnchor"
        class="section"
        :style="{backgroundColor: sectionColor}">
        <slot />
    </section>
</template>

<script>
    export default {
        name: 'PoodlSection',
        props: {
            sectionColor: String,
            sectionAnchor: String,
        },
        data: () => ({
        }),
    }
</script>