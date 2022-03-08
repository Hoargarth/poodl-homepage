<template>
    <div class="content">

        <!-- Hero Section -->
        <poodl-section :section-color="sectionColors.hero">
            <poodl-row>
                <poodl-column :mobile="12" :tablet="8" :desktop="6">
                    <poodl-heading heading-level="h1">
                        <template v-slot:heading><span class="highlight">$POODL</span><br/>The Future of DeFi</template>
                        <template v-slot:subheading>over 30,000 DEX holders</template>
                    </poodl-heading>
                    <poodl-textblock>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </poodl-textblock>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="4" :desktop="6" hAlign="center" vAlign="center">
                    <poodl-image src="/gifs/metalCoinSpin.gif" alt="$POODL Token Spinning Coin" maxWidth="350px" />
                </poodl-column>
            </poodl-row>
            <div class="buttons-wrapper-row">
                <poodl-button url="/buy">Buy $POODL</poodl-button>
                <poodl-button url="/whitepaper">Whitepaper</poodl-button>
            </div>
        </poodl-section>

        <!-- Secure Section -->
        <poodl-section :section-color="sectionColors.secure">
            <poodl-row>
                <poodl-column :mobile="12" :tablet="8" :desktop="6">
                    <poodl-heading>
                        <template v-slot:heading>We keep Your<br/>Investments <span class="highlight">SECURE</span></template>
                        <template v-slot:subheading>because we love our community</template>
                    </poodl-heading>
                </poodl-column>
            </poodl-row>

            <!-- USPs (locked, verified, audited) -->
            <poodl-usp>
                <poodl-column :mobile="12" :tablet="4" :desktop="3" hAlign="center" textAlign="center">
                    <poodl-image src="/icons/locked.png" alt="Locked Liquidity" maxWidth="100px" />
                    <poodl-heading heading-level="h3">
                        <template v-slot:heading>5 Years Locked Liquidity</template>
                    </poodl-heading>
                    <poodl-textblock>
                        Our POODL/wBNB pool is locked at UniCrypt, this means during the next five years you will always be able to buy and sell your POODL
                    </poodl-textblock>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="4" :desktop="3" hAlign="center" textAlign="center">
                    <poodl-image src="/icons/verified.png" alt="Verified Social Media" maxWidth="100px" />
                    <poodl-heading heading-level="h3">
                        <template v-slot:heading>Verified<br/>Channels</template>
                    </poodl-heading>
                    <poodl-textblock>
                        In order to keep you save from fake groups, we are applying to be verified where possible.<br />Currently we are verified at: Twitter, Telegram, Opensea and CoinMarketCap
                    </poodl-textblock>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="4" :desktop="3" hAlign="center" textAlign="center">
                    <poodl-image src="/icons/audited.png" alt="Security Audit" maxWidth="100px" />
                    <poodl-heading heading-level="h3">
                        <template v-slot:heading>Passed Security<br />Audit</template>
                    </poodl-heading>
                    <poodl-textblock>
                        The POODL smart contract has been audited and approved by Solidity Finance. The contract is also running since over a year without any bugs or glitches.                    </poodl-textblock>
                </poodl-column>
            </poodl-usp>
        </poodl-section>

        <!-- Tokenomics Section -->
        <poodl-section :section-color="sectionColors.tokenomics">
            <poodl-row>
                <poodl-column :mobile="12" :tablet="8" :desktop="6">
                    <poodl-heading>
                        <template v-slot:heading>Get Passive Income<br/>through our <span class="highlight">TOKENOMICS</span></template>
                        <template v-slot:subheading>simply by HODLing $POODL</template>
                    </poodl-heading>
                </poodl-column>
            </poodl-row>

            <poodl-row vAlign="center">
                <poodl-column :mobile="12" :tablet="4" :desktop="4">
                    <div class="poodl-tokenomic"><poodl-image src="/icons/tokenomic.png" alt="Tokenomics Icon" maxWidth="35px" /> 1% Redistribution</div>
                    <div class="poodl-tokenomic"><poodl-image src="/icons/tokenomic.png" alt="Tokenomics Icon" maxWidth="35px" /> 1% Burned</div>
                    <div class="poodl-tokenomic"><poodl-image src="/icons/tokenomic.png" alt="Tokenomics Icon" maxWidth="35px" /> 0.33% to Charity</div>
                    <div class="poodl-tokenomic"><poodl-image src="/icons/tokenomic.png" alt="Tokenomics Icon" maxWidth="35px" /> 0.33% to Liquidity</div>
                    <div class="poodl-tokenomic"><poodl-image src="/icons/tokenomic.png" alt="Tokenomics Icon" maxWidth="35px" /> 0.33% to Marketing</div>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="8" :desktop="6">
                    <div class="poodl-twoline-info">
                        <span class="highlight bold">Contract</span><br/>
                        <strong>0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d</strong>
                    </div>
                    <div class="poodl-twoline-info">
                        <span class="highlight bold">Total Supply</span><br/>
                        <strong>100,000,000,000,000</strong>
                    </div>
                    <div class="poodl-twoline-info">
                        <span class="highlight bold">Circulating Supply</span><br/>
                        <strong>80,000,000,000,000</strong>
                    </div>
                    <div class="poodl-twoline-info">
                        <span class="highlight bold">🔥Burned🔥</span><br/>
                        <strong>20,000,000,000,000</strong>
                    </div>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <!-- Roadmap Section -->
        <poodl-section :section-color="sectionColors.roadmap">
            <poodl-row>
                <poodl-column :mobile="12" :tablet="8" :desktop="6">
                    <poodl-heading>
                        <template v-slot:heading>Ambitious <span class="highlight">ROADMAP</span><br/>to Shape the Year 2022</template>
                        <template v-slot:subheading>innovation is key of our success</template>
                    </poodl-heading>
                </poodl-column>
            </poodl-row>

            <poodl-roadmap />
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
import PoodlImage from '../components/PoodlImage.vue'
import PoodlRow from '../layouts/PoodlRow.vue'
    export default {
  components: { PoodlRow, PoodlImage },
        name: 'Home',
        props: {},
        data: () => ({
            sectionColors: {
                hero: 'rgba(0,0,0,.5)',
                secure: 'rgba(0, 18, 7, .5)',
                tokenomics: 'rgba(12, 29, 0, .5)',
                roadmap: 'rgba(23, 0, 19, .5)',
                nft: 'rgba(25, 5, 0, .5)',
                community: 'rgba(0, 20, 12, .5)',
            },
        }),
    }
</script>