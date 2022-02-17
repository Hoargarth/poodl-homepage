<template>
    <div class="content">

        <!-- Hero Section -->
        <poodl-section :section-color="sectionColors.hero">
            <poodl-heading heading-level="h1">
                <template v-slot:heading><span class="highlight">$POODL</span><br/>The Future of DeFi</template>
                <template v-slot:subheading>over 30,000 DEX holders</template>
            </poodl-heading>
            <poodl-textblock>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </poodl-textblock>
            <div class="buttons-wrapper-row">
                <poodl-button url="/buy">Buy $POODL</poodl-button>
                <poodl-button url="/whitepaper">Whitepaper</poodl-button>
            </div>
        </poodl-section>

        <!-- Secure Section -->
        <poodl-section :section-color="sectionColors.secure">
            <poodl-heading>
                <template v-slot:heading>We keep Your<br/>Investments <span class="highlight">SECURE</span></template>
                <template v-slot:subheading>because we love our community</template>
            </poodl-heading>
        </poodl-section>

        <!-- Tokenomics Section -->
        <poodl-section :section-color="sectionColors.tokenomics">
            <poodl-heading>
                <template v-slot:heading>Get Passive Income<br/>through our <span class="highlight">TOKENOMICS</span></template>
                <template v-slot:subheading>simply by HODLing $POODL</template>
            </poodl-heading>
        </poodl-section>

        <!-- Roadmap Section -->
        <poodl-section :section-color="sectionColors.roadmap">
            <poodl-heading>
                <template v-slot:heading>Ambitious <span class="highlight">TOKENOMICS</span><br/>to Shape the Year 2022</template>
                <template v-slot:subheading>innovation is key of our success</template>
            </poodl-heading>
        </poodl-section>

        <!-- NFTs Section -->
        <poodl-section :section-color="sectionColors.nft">
            <poodl-heading>
                <template v-slot:heading><span class="highlight">3D NFTs</span> with<br/>an Actual Usecase</template>
                <template v-slot:subheading>we call the: NFT 2.0</template>
            </poodl-heading>
        </poodl-section>

        <!-- Community Section -->
        <poodl-section :section-color="sectionColors.community">
            <poodl-heading>
                <template v-slot:heading>Become a Part<br/>of the <span class="highlight">COMMUNITY</span></template>
                <template v-slot:subheading>we call the: NFT 2.0</template>
            </poodl-heading>
        </poodl-section>

    </div>
</template>

<script>
import PoodlHeading from '../components/PoodlHeading.vue'
    export default {
  components: { PoodlHeading },
        name: 'Home',
        props: {},
        data: () => ({
            sectionColors: {
                hero: 'rgba(0,0,0,.6)',
                secure: 'rgba(0, 18, 7, .6)',
                tokenomics: 'rgba(12, 29, 0, .6)',
                roadmap: 'rgba(23, 0, 19, .6)',
                nft: 'rgba(25, 5, 0, .6)',
                community: 'rgba(0, 20, 12, .6)',
            },
        }),
    }
</script>