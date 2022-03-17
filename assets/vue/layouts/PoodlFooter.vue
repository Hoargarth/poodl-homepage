<template>
    <footer class="poodl-footer">
        <div class="footer-inner">
            <poodl-row>
            <poodl-column :mobile="12" :tablet="4" :desktop="2" additionalClasses="footer-links">
                <h3>Poodl Charts</h3>
                <a href="">Coingecko</a>
                <a href="">CoinMarketCap</a>
                <a href="">Dextools</a>
            </poodl-column>
            <poodl-column :mobile="12" :tablet="4" :desktop="2" additionalClasses="footer-links">
                <h3>DEX Exchanges</h3>
                <a href="">PancakeSwap</a>
                <a href="">SushiSwap</a>
                <a href="">Swapzone</a>
                <a href="">1inch</a>
                <a href="">Bakeryswap</a>
            </poodl-column>
            <poodl-column :mobile="12" :tablet="4" :desktop="2" additionalClasses="footer-links">
                <h3>CEX Exchanges</h3>
                <a href="">LBank</a>
                <a href="">Hotbit</a>
                <a href="">Whitebit</a>
            </poodl-column>
            <poodl-column :mobile="12" :tablet="4" :desktop="2" additionalClasses="footer-links">
                <h3>Partners</h3>
                <a href="">Demons & Angels</a>
            </poodl-column>
        </poodl-row>
        <poodl-row>
            <poodl-column :mobile="12" :tablet="6" :desktop="6">
                <div class="social-media">
                    <a href=""><poodl-image src="/icons/tiktok.svg" alt="TikTok" maxWidth="30px" minWidth="30px" /></a>
                    <a href=""><poodl-image src="/icons/telegram.svg" alt="Telegram" maxWidth="30px" minWidth="30px" /></a>
                    <a href=""><poodl-image src="/icons/reddit.svg" alt="Reddit" maxWidth="30px" minWidth="30px" /></a>
                    <a href=""><poodl-image src="/icons/instagram.svg" alt="Instagram" maxWidth="30px" minWidth="30px" /></a>
                    <a href=""><poodl-image src="/icons/facebook.svg" alt="Facebook" maxWidth="30px" minWidth="30px" /></a>
                    <a href=""><poodl-image src="/icons/youtube.svg" alt="YouTube" maxWidth="30px" minWidth="30px" /></a>
                    <a href=""><poodl-image src="/icons/twitter.svg" alt="Twitter" maxWidth="30px" minWidth="30px" /></a>
                    <a href=""><poodl-image src="/icons/discord.svg" alt="Discord" maxWidth="30px" minWidth="30px" /></a>
                </div>
            </poodl-column>
            <poodl-column :mobile="12" :tablet="6" :desktop="6" hAlign="flex-end" vAlign="center">
                <span class="copyright">© 2021 - 2022 PoodlToken. All rights reserved.</span>
            </poodl-column>
        </poodl-row>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'PoodlFooter',
        props: {},
        data: () => ({
        }),
    }
</script>