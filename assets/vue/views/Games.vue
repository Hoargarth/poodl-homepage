<template>
    <div class="content">
        <!-- Games heading -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="11">
                    <poodl-heading heading-level="h1">
                        <template v-slot:heading>{{ $t("views.games.viewTitle") }}</template>
                        <template v-slot:subheading>{{ $t("views.games.viewSubTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.games.titleTextblock") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
            <poodl-row vAlign="center">
                <poodl-column :mobile="6" :tablet="5" :desktop="3">
                    <div class="game-store-badge">
                        <div><strong>{{ $t("views.games.android") }}</strong></div>
                        <a href="https://play.google.com/store/apps/details?id=com.poodl.poodl&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><poodl-image src="/games/android.png" alt="BakerySwap" maxWidth="200px" /></a>
                        <p class="small-note">{{ $t("views.games.googleArService") }}<br />
                        <strong><a href="https://play.google.com/store/apps/details?id=com.google.ar.core"
                            target="_blank">{{ $t("views.games.googleArServiceLink") }}</a></strong>
                        </p>
                    </div>
                </poodl-column>
                <poodl-column :mobile="6" :tablet="5" :desktop="3">
                    <div class="game-store-badge">
                        <div><strong>{{ $t("views.games.apple") }}</strong></div>
                        <p>{{ $t("views.games.appleNote") }}</p>
                    </div>
                </poodl-column>
            </poodl-row>
            <poodl-row vAlign="center">
                <poodl-column :mobile="6" :tablet="5" :desktop="2">
                    <poodl-image src="/games/arOne.jpg" alt="Poodl AR APP" maxWidth="200px" />
                </poodl-column>
                <poodl-column :mobile="6" :tablet="5" :desktop="2">
                    <poodl-image src="/games/arTwo.jpg" alt="Poodl AR APP" maxWidth="200px" />
                </poodl-column>
                <poodl-column :mobile="6" :tablet="5" :desktop="2">
                    <poodl-image src="/games/arThree.jpg" alt="Poodl AR APP" maxWidth="200px" />
                </poodl-column>
                <poodl-column :mobile="6" :tablet="5" :desktop="2">
                    <poodl-image src="/games/arFour.jpg" alt="Poodl AR APP" maxWidth="200px" />
                </poodl-column>
            </poodl-row>
        </poodl-section>
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="11">
                    <poodl-textblock>
                        {{ $t("views.games.lowerTextOne") }}
                    </poodl-textblock>
                    <poodl-textblock>
                        {{ $t("views.games.lowerTextTwo") }}
                    </poodl-textblock>
                    <poodl-textblock>
                        {{ $t("views.games.lowerTextThree") }}
                    </poodl-textblock>
                    <span>How to use the APP:</span>
                    <ul>
                        <li>Single tap after starting the app: Show the User Interface</li>
                        <li>Plus Button [+]: Opens a drawer to select the NFT</li>
                        <li>Minus Button [-]: Remove last pinned NFT</li>
                        <li>After selecting a NFT from the drawer, point your camera towards a surface and wait until you see some dots indicating the surface</li>
                        <li>Tap the dots to pin the NFT at the surface</li>
                        <li>Move the pinned NFT: Press a signle finger onto the NFT and move it</li>
                        <li>Rotate the pinned NFT: Press two fingers onto the NFT and twist them</li>
                        <li>Scale the pinned NFT: Press two fingers onto the NFT and pinch them</li>
                    </ul>
                </poodl-column>
            </poodl-row>
        </poodl-section>
    </div>
</template>

<script>
    export default {
        name: 'Games',
        props: {},
        data: () => ({
        }),
    }
</script>