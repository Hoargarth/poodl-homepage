<template>
    <div class="content">
        <!-- Buy heading -->
        <poodl-section>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h1">
                        <template v-slot:heading>{{ $t("views.buy.viewTitle") }}</template>
                        <template v-slot:subheading>{{ $t("views.buy.viewSubTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.buy.titleTextblock") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <poodl-section>
            <!-- DEX Listings -->
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h2">
                        <template v-slot:heading>{{ $t("views.buy.dexTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.buy.dexTextblock") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://app.everrise.com/everswap/swap#token=0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d&amp;chainId=56" target="_blank">
                        <poodl-image src="/exchanges/everswap.png" alt="EverSwap" maxWidth="200px" />
                    </a>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d" target="_blank">
                        <poodl-image src="/exchanges/pancake.png" alt="PancakeSwap" maxWidth="200px" />
                    </a>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://app.1inch.io/#/56/swap/BNB/POODL" target="_blank">
                        <poodl-image src="/exchanges/1inch.png" alt="1inch" maxWidth="200px" />
                    </a>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://www.bakeryswap.org/#/swap?outputCurrency=0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d" target="_blank">
                        <poodl-image src="/exchanges/bakery.png" alt="BakerySwap" maxWidth="200px" />
                    </a>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="http://www.dogedex.finance/#/swap?outputCurrency=0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d" target="_blank">
                        <poodl-image src="/exchanges/dogedex.png" alt="DogeDex" maxWidth="200px" />
                    </a>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://app.sushi.com/swap?outputCurrency=0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d" target="_blank">
                        <poodl-image src="/exchanges/sushiswap.png" alt="SushiSwap" maxWidth="200px" />
                    </a>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <poodl-section>
            <!-- CEX Listings -->
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h2">
                        <template v-slot:heading>{{ $t("views.buy.cexTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.buy.cexTextblock") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://www.lbank.info/exchange/poodl/usdt" target="_blank">
                        <poodl-image src="/exchanges/lbank.png" alt="LBank" maxWidth="200px" />
                    </a>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://www.hotbit.io/exchange?symbol=POODL_USDT" target="_blank">
                        <poodl-image src="/exchanges/hotbit.png" alt="HotBIT" maxWidth="200px" />
                    </a>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://whitebit.com/trade/POODL2-DECL" target="_blank">
                        <poodl-image src="/exchanges/whitebit.png" alt="whiteBIT" maxWidth="200px" />
                    </a>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <poodl-section>
            <!-- Instant Exchanges -->
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h2">
                        <template v-slot:heading>{{ $t("views.buy.instantTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.buy.instantTextblock") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://swapzone.io/exchange/bnbmainnet/poodl?amount=0.09&refId=xG-LtbHBya&partner=changenow_fix" target="_blank">
                        <poodl-image src="/exchanges/swapzone.png" alt="LBank" maxWidth="200px" />
                    </a>
                </poodl-column>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://stealthex.io/?from=eth&to=poodl&ref=4dzoq3b65nz" target="_blank">
                        <poodl-image src="/exchanges/stealthex.png" alt="LBank" maxWidth="200px" />
                    </a>
                </poodl-column>
            </poodl-row>
        </poodl-section>

        <poodl-section>
            <!-- FIAT Onramp -->
            <poodl-row>
                <poodl-column :mobile="12" :tablet="12" :desktop="12">
                    <poodl-heading heading-level="h2">
                        <template v-slot:heading>{{ $t("views.buy.fiatTitle") }}</template>
                    </poodl-heading>
                    <poodl-textblock>
                        {{ $t("views.buy.fiatTextblock") }}
                    </poodl-textblock>
                </poodl-column>
            </poodl-row>
            <poodl-row>
                <poodl-column :mobile="12" :tablet="6" :desktop="4" vAlign="center" hAlign="center">
                    <a href="https://guardarian.com/" target="_blank">
                        <poodl-image src="/exchanges/guardarian.png" alt="LBank" maxWidth="200px" />
                    </a>
                </poodl-column>
            </poodl-row>
        </poodl-section>
    </div>
</template>

<script>
    export default {
        name: 'BuyPoodl',
        props: {},
        data: () => ({
        }),
    }
</script>