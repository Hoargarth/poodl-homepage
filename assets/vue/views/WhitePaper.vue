<template>
    <div class="content">
        <!-- WhitePaper heading -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="8">
                    <poodl-heading heading-level="h1">
                        <template v-slot:heading>{{ $t("views.whitepaper.viewTitle") }}</template>
                        <template v-slot:subheading>{{ $t("views.whitepaper.viewSubTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.whitepaper.titleTextblock") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <!-- History -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="8">
                    <poodl-textblock>
                        <h2>{{ $t("views.whitepaper.history") }}</h2>
                        <p v-html="$t('views.whitepaper.historyTextblock')"></p>
                    </poodl-textblock>
                </poodl-column>  
            </poodl-row>
        </poodl-section>

        <!-- V2 -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="8">
                    <poodl-textblock>
                        <h2>{{ $t("views.whitepaper.versionTwo") }}</h2>
                        <p v-html="$t('views.whitepaper.versionTwoTextblock')"></p>
                    </poodl-textblock>
                </poodl-column>  
            </poodl-row>
        </poodl-section>

        <!-- Tokenomics -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="8">
                    <poodl-textblock>
                        <h2>{{ $t("views.whitepaper.tokenomic") }}</h2>
                        <p v-html="$t('views.whitepaper.tokenomicTextblock')"></p>
                    </poodl-textblock>
                </poodl-column>  
            </poodl-row>
        </poodl-section>

        <!-- Supply -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="8">
                    <poodl-textblock>
                        <h2>{{ $t("views.whitepaper.supply") }}</h2>
                        <p v-html="$t('views.whitepaper.supplyTextblock')"></p>
                    </poodl-textblock>
                </poodl-column>  
            </poodl-row>
        </poodl-section>

        <!-- Vision -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="8">
                    <poodl-textblock>
                        <h2>{{ $t("views.whitepaper.vision") }}</h2>
                        <p v-html="$t('views.whitepaper.visionTextblock')"></p>
                    </poodl-textblock>
                </poodl-column>  
            </poodl-row>
        </poodl-section>

        <!-- Disclaimer -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="8">
                    <poodl-textblock>
                        <h2>{{ $t("views.whitepaper.disclaimer") }}</h2>
                        <h3>{{ $t("views.whitepaper.disclaimerAssessment") }}</h3>
                        <p v-html="$t('views.whitepaper.disclaimerAssessmentText')"></p>
                        <h3>{{ $t("views.whitepaper.disclaimerVolatility") }}</h3>
                        <p v-html="$t('views.whitepaper.disclaimerVolatilityText')"></p>
                        <h3>{{ $t("views.whitepaper.disclaimerLiability") }}</h3>
                        <p v-html="$t('views.whitepaper.disclaimerLiabilityText')"></p>
                        <h3>{{ $t("views.whitepaper.disclaimerTaxation") }}</h3>
                        <p v-html="$t('views.whitepaper.disclaimerTaxationText')"></p>
                    </poodl-textblock>
                </poodl-column>  
            </poodl-row>
        </poodl-section>
    </div>
</template>

<script>
    export default {
        name: 'WhitePaper',
        props: {},
        data: () => ({
        }),
    }
</script>