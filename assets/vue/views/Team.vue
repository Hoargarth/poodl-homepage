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