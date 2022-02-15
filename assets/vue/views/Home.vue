<template>
    <poodl-section :section-color="sectionColors.hero">
        <poodl-heading heading-level="h1">
            <template v-slot:heading>This is some <span class="highlight">heading</span></template>
            <template v-slot:subheading>This is some <span class="highlight">subheading</span></template>
        </poodl-heading>
        <poodl-textblock>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </poodl-textblock>
    </poodl-section>
</template>

<script>
import PoodlHeading from '../components/PoodlHeading.vue'
    export default {
  components: { PoodlHeading },
        name: 'Home',
        props: {},
        data: () => ({
            sectionColors: {
                hero: 'rgba(0,0,0,.45)',
            },
        }),
    }
</script>