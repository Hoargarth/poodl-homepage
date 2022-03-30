<template>
    <div class="poodl-roadmap">
        <strong>{{ $t("component.poodlRoadmap.goalOne") }}</strong>
        <ul class="roadmap-list first">
            <li class="checked">{{ $t("component.poodlRoadmap.arApp") }}</li>
            <li class="checked">{{ $t("component.poodlRoadmap.academy") }}</li>
            <li class="checked">{{ $t("component.poodlRoadmap.nftMint") }}</li>
            <li class="checked">{{ $t("component.poodlRoadmap.artistCollab") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.generateNft") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.wagmifier") }}</li>
            <li class="checked">{{ $t("component.poodlRoadmap.ama") }}</li>
            <li class="checked">{{ $t("component.poodlRoadmap.teamExpand") }}</li>
        </ul>

        <strong>{{ $t("component.poodlRoadmap.goalTwo") }}</strong>
        <ul class="roadmap-list second">
            <li class="">{{ $t("component.poodlRoadmap.gaming") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.geocaching") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.sideScroller") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.nftMintTwo") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.bridgeExpl") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.poodlverse") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.bridgeNarrow") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.incMarketing") }}</li>
        </ul>

        <strong>{{ $t("component.poodlRoadmap.goalThree") }}</strong>
        <ul class="roadmap-list third">
            <li class="">{{ $t("component.poodlRoadmap.bridgeDecided") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.bridgeFunding") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.addPoodlApp") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.charity") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.communityCharity") }}</li>
            <li class="">{{ $t("component.poodlRoadmap.firstBridge") }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PoodlRoadmap',
        props: {
        },

        data: () => ({
        }),
    }
</script>