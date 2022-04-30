<template>
    <div class="content">
        <!-- Charity heading -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="9">
                    <poodl-heading heading-level="h1">
                        <template v-slot:heading>{{ $t("views.charity.viewTitle") }}</template>
                        <template v-slot:subheading>{{ $t("views.charity.viewSubTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.charity.titleTextblock") }}
                        <br /><br />
                        {{ $t("views.charity.tokenomic") }}
                        <p>{{ $t("views.charity.wallet") }}<br /><strong class="breakall">0xC0D2bEf096fFf3a4Cce3A74A5DD58C3281Fb3a03</strong></p>
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <!-- Canines Partner -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h1">
                        <template v-slot:heading>{{ $t("views.charity.canines") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        <a href="https://caninesforkids.org/">Canines for Disabled Kids</a> {{ $t("views.charity.caninesText") }}
                    </poodl-textblock>
                    <poodl-textblock>
                        <p>{{ $t('views.charity.poodlcast') }}</p>
                        <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/NxKdd7_x_CQ?start=181"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            class="youtube">
                        </iframe>
                    </poodl-textblock>
                    <poodl-textblock>
                        <br/>
                        <br/>
                        <h3>Donation Receipts</h3>
                        <poodl-image src="/charity/donation1.jpg" alt="donation receipt" maxWidth="200px" />
                        <poodl-image src="/charity/donation2.jpg" alt="donation receipt" maxWidth="200px" />
                        <poodl-image src="/charity/donation3.jpg" alt="donation receipt" maxWidth="200px" />
                        <poodl-image src="/charity/donation4.jpg" alt="donation receipt" maxWidth="200px" />
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <!-- Community Efforts -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="10" :desktop="9">
                    <poodl-heading heading-level="h1">
                        <template v-slot:heading>{{ $t("views.charity.community") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.charity.communityText") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
            <poodl-row gap="20px">
                <poodl-image src="/charity/charity.jpg" alt="Charity Community Effort" maxWidth="250px" />
                <poodl-image src="/charity/charity2.jpg" alt="Charity Community Effort" maxWidth="250px" />
                <poodl-image src="/charity/charity3.jpg" alt="Charity Community Effort" maxWidth="250px" />
            </poodl-row>
        </poodl-section>
    </div>
</template>

<script>
    export default {
        name: 'Charity',
        props: {},
        data: () => ({
        }),
    }
</script>