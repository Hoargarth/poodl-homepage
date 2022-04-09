<template>
    <div class="poodl-roadmap">
        <!-- NFT & Gaming -->
        <div class="roadmap-category">
            <poodl-heading heading-level="h3">
                <template v-slot:heading>NFT & Gaming</template>
            </poodl-heading>
            <div class="roadmap-category-inner">
                <poodl-roadmap-item v-for="(item, index) in itemsNFT" :key="index" :itemData="item"/>
            </div>
        </div>

        <!-- Bridging -->
        <div class="roadmap-category">
            <poodl-heading heading-level="h3">
                <template v-slot:heading>Bridging</template>
            </poodl-heading>
            <div class="roadmap-category-inner">
                <poodl-roadmap-item v-for="(item, index) in itemsBridge" :key="index" :itemData="item"/>
            </div>
        </div>

        <!-- Infrastructure -->
        <div class="roadmap-category">
            <poodl-heading heading-level="h3">
                <template v-slot:heading>Infrastructure</template>
            </poodl-heading>
            <div class="roadmap-category-inner">
                <poodl-roadmap-item v-for="(item, index) in itemsInfra" :key="index" :itemData="item"/>
            </div>
        </div>

        <!-- Marketing & Charity -->
        <div class="roadmap-category">
            <poodl-heading heading-level="h3">
                <template v-slot:heading>Marketing & Charity</template>
            </poodl-heading>
            <div class="roadmap-category-inner">
                <poodl-roadmap-item v-for="(item, index) in itemsMarketing" :key="index" :itemData="item"/>
            </div>
        </div>

        <!-- Community Projects -->
        <div class="roadmap-category">
            <poodl-heading heading-level="h3">
                <template v-slot:heading>Community Projects</template>
            </poodl-heading>
            <div class="roadmap-category-inner">
                <poodl-roadmap-item v-for="(item, index) in itemsCommunity" :key="index" :itemData="item"/>
            </div>
        </div>

        <!-- Project Backlog -->
        <div class="roadmap-category">
            <poodl-heading heading-level="h3">
                <template v-slot:heading>Project Backlog</template>
            </poodl-heading>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlRoadmap',
        props: {
        },

        data: () => ({
            itemsNFT: [
                {
                    title: '3D NFT Collection "AR Pets"',
                    timeframe: 'Date: Ongoing',
                    content: 'Currently gathering funds in order to set up the first bridge. At the same time, narrowing down the first network to bridge to.<br><br>Next stage: Setup',
                    funds: 100,
                    progress: 100,
                    ongoing: true,
                },
                {
                    title: 'AR APP for iOS',
                    timeframe: 'In Development',
                    content: 'Our Augmented Reality APP to view your 3D NFTs<br>in the real world through your phones camera, for iOS',
                    funds: 100,
                    progress: 10,
                    ongoing: false,
                },
                {
                    title: 'Generative 2D NFT Collection',
                    timeframe: 'Date: June',
                    content: '2D generative collection of about 1000 NFTs,to get more eyes on POODL<br><br>Leads to:<br>- Funds for the project (Marketing, Development, LP...)<br>- Some nice Merchandise',
                    funds: 100,
                    progress: 10,
                    ongoing: false,
                },
            ],
            itemsBridge: [
                {
                    title: 'Bridging',
                    timeframe: 'Stage: Funding',
                    content: 'Currently gathering funds in order to set up the<br>first bridge. At the same time, narrowing down the<br>first network to bridge to.<br><br>Next stage: Setup',
                    funds: 30,
                    progress: 40,
                    ongoing: false,
                },
            ],
            itemsInfra: [
                {
                    title: 'POODL Merch Store',
                    timeframe: 'Date: April',
                    content: 'We are currently setting up a store for merchandise. You ever wanted you NFT printed on a shirt, hoodie or mug? You will get it.<br><br>Leads to:<br>- Passive income for our NFT holders<br>- Merchandise to show your support for POODL',
                    funds: 100,
                    progress: 90,
                    ongoing: false,
                },
                {
                    title: 'Website Redesign',
                    timeframe: 'Date: April',
                    content: 'Launch of our redesigned website, for a better overview,modern look and foundation for future features.',
                    funds: 100,
                    progress: 90,
                    ongoing: false,
                },
            ],
            itemsMarketing: [
                {
                    title: 'Marketing',
                    timeframe: 'Date: Ongoing',
                    content: 'Currently gathering funds in order to set up the first bridge. At the same time, narrowing down the first network to bridge to.<br><br>Next stage: Setup',
                    funds: 100,
                    progress: 100,
                    ongoing: true,
                },
                {
                    title: 'Charity Donations',
                    timeframe: 'Date: Ongoing Monthly',
                    content: 'Monthly donation of 1,500$ towards our charity partner "Canines for Disabled Kids" at caninesforkids.org',
                    funds: 100,
                    progress: 100,
                    ongoing: true,
                },
            ],
            itemsCommunity: [
                {
                    title: 'Wagmifier',
                    content: 'Project done by "An Oversized Moose with Socks", which will give dead tokens a purpose again by burning them.',
                    funds: 0,
                    progress: 0,
                    ongoing: false,
                },
            ]   
        }),
    }
</script>