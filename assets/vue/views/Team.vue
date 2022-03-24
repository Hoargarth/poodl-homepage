<template>
    <div class="content">
        <!-- Team heading -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h1">
                        <template v-slot:heading>{{ $t("views.team.viewTitle") }}</template>
                        <template v-slot:subheading>{{ $t("views.team.viewSubTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.team.titleTextblock") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <!-- Core Team -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h2">
                        <template v-slot:heading>{{ $t("views.team.coreTitle") }}</template>
                    </poodl-heading>
                </poodl-column>
            </poodl-row>
            <poodl-row gap="20px">
                <poodl-team-card name="Sasha"
                    position="Admin / Marketing"
                    comment="20+yrs experience of delivering high end tech projects from startup to corporate. Sales/marketing expert."
                    :contacts="[
                        {type: 'twitter', handle: 'poodletoken'},
                        {type: 'telegram', handle: 'POODLH00DLER'},
                ]" />
                <poodl-team-card name="An Oversized Moose With Socks"
                    position="Lead Developer"
                    comment="20yrs+ development experience as a software developer in the web and computer graphics industry."
                    :contacts="[
                        {type: 'twitter', handle: 'undacappn'},
                        {type: 'telegram', handle: 'AnOversizedMooseWithSocks'},
                ]" />
                <poodl-team-card name="Joe"
                    position="Admin / PoodlCast Host"
                    comment="Joe has been a stalwart of POODL and hosts our weekly show poodlcast every week. A great guy, always on point."
                    :contacts="[
                        {type: 'twitter', handle: 'poodlcast'},
                        {type: 'twitter', handle: 'josiahway'},
                ]" />
                <poodl-team-card name="SpaceDog"
                    position="Developer"
                    comment="Multi lingual, Developer and API master. Gamer/father/husband. Loves tech and astronomy."
                    :contacts="[
                        {type: 'twitter', handle: 'BarkInSpace'},
                        {type: 'telegram', handle: 'WoofInSpace'},
                        {type: 'discord', handle: 'WoofInSpace#4528', id: '940738389450321950'},
                ]" />
            </poodl-row>
        </poodl-section>

        <!-- Influencers -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h2">
                        <template v-slot:heading>{{ $t("views.team.influencersTitle") }}</template>
                    </poodl-heading>
                </poodl-column>
            </poodl-row>
            <poodl-row gap="20px">
                <poodl-team-card name="Crypto Messiah"
                    position="Influencer"
                    comment="Crypto legend and prophet of smallcaps."
                    :contacts="[
                        {type: 'twitter', handle: '1goonrich'},
                ]" />
                <poodl-team-card name="Travladd Crypto"
                    position="Influencer"
                    comment="Crypto enthusiast and Token reviewer."
                    :contacts="[
                        {type: 'twitter', handle: 'OfficialTravlad'},
                ]" />
                <poodl-team-card name="Elle"
                    position="Influencer / Moderator"
                    comment="Elle has been with the team since June 2021, and currently in charge of the Poodlympics. She is a guardian of our brand. She's the pitbull of $Poodl."
                    :contacts="[
                        {type: 'twitter', handle: 'B055Lady_Elle'},
                        {type: 'telegram', handle: 'HelleOnEarth'},
                ]" />
            </poodl-row>
        </poodl-section>

        <!-- Moderators -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h2">
                        <template v-slot:heading>{{ $t("views.team.modTitle") }}</template>
                    </poodl-heading>
                </poodl-column>
            </poodl-row>
            <poodl-row gap="20px">
                <poodl-team-card name="Karin"
                    position="Moderator"
                    comment="Mamma Karin with the magic eraser that helps keep our (room? Community?) clean. Need a virtual hug? She's there for you!"
                    :contacts="[
                        {type: 'telegram', handle: 'mammakarin'},
                ]" />
                <poodl-team-card name="Trent"
                    position="Moderator"
                    comment="Bringing the next generation to POODL. Crypto savvy and always around to help handle questions."
                    :contacts="[
                        {type: 'telegram', handle: 'trent209'},
                ]" />
                <poodl-team-card name="Artur"
                    position="Moderator"
                    comment="Multi lingual. Spanish/Italian/English. Superstar shiller and Twitter king."
                    :contacts="[
                        {type: 'telegram', handle: 'Artur19831'},
                ]" />
                <poodl-team-card name="Yous"
                    position="Moderator"
                    comment="Multilingual and king of Reddit. Handles TG rooms and FUD with style."
                    :contacts="[
                        {type: 'telegram', handle: 'mightygoodyous'},
                ]" />
            </poodl-row>
        </poodl-section>
    </div>
</template>

<script>
    export default {
        name: 'Team',
        props: {},
        data: () => ({
        }),
    }
</script>