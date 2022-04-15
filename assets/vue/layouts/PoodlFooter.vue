<template>
    <footer class="poodl-footer">
        <div class="footer-inner">
            <poodl-row>
            <poodl-column :mobile="12" :tablet="4" :desktop="3" additionalClasses="footer-links">
                <h3>{{ $t("footer.charts") }}</h3>
                <a :href="LINKS.poodlExternal.gecko">{{ $t("footer.coingecko") }}</a>
                <a :href="LINKS.poodlExternal.cmc">{{ $t("footer.cmc") }}</a>
                <a :href="LINKS.poodlExternal.dextools">{{ $t("footer.dextools") }}</a>
            </poodl-column>
            <poodl-column :mobile="12" :tablet="4" :desktop="3" additionalClasses="footer-links">
                <h3>{{ $t("footer.dex") }}</h3>
                <a :href="LINKS.poodlExternal.pancake">{{ $t("footer.pancake") }}</a>
                <a :href="LINKS.poodlExternal.sushi">{{ $t("footer.sushi") }}</a>
                <a :href="LINKS.poodlExternal.swapzone">{{ $t("footer.swapzone") }}</a>
                <a :href="LINKS.poodlExternal.inch">{{ $t("footer.inch") }}</a>
                <a :href="LINKS.poodlExternal.bakery">{{ $t("footer.bakery") }}</a>
            </poodl-column>
            <poodl-column :mobile="12" :tablet="4" :desktop="3" additionalClasses="footer-links">
                <h3>{{ $t("footer.cex") }}</h3>
                <a :href="LINKS.poodlExternal.lbank">{{ $t("footer.lbank") }}</a>
                <a :href="LINKS.poodlExternal.hotbit">{{ $t("footer.hotbit") }}</a>
                <a :href="LINKS.poodlExternal.whitebit">{{ $t("footer.whitebit") }}</a>
            </poodl-column>
            <poodl-column :mobile="12" :tablet="4" :desktop="3" additionalClasses="footer-links">
                <h3>{{ $t("footer.partners") }}</h3>
                <a :href="LINKS.poodlPartners.dna">{{ $t("footer.dna") }}</a>
                <a :href="LINKS.poodlPartners.seek">{{ $t("footer.seek") }}</a>
                <a :href="LINKS.poodlPartners.dnky">{{ $t("footer.dnky") }}</a>
            </poodl-column>
        </poodl-row>
        <poodl-row>
            <poodl-column :mobile="12" :tablet="6" :desktop="6">
                <div class="social-media">
                    <a :href="LINKS.poodlSocial.tiktok"><poodl-image src="/icons/tiktok.svg" alt="TikTok" maxWidth="30px" minWidth="30px" /></a>
                    <a :href="LINKS.poodlSocial.telegram"><poodl-image src="/icons/telegram.svg" alt="Telegram" maxWidth="30px" minWidth="30px" /></a>
                    <a :href="LINKS.poodlSocial.reddit"><poodl-image src="/icons/reddit.svg" alt="Reddit" maxWidth="30px" minWidth="30px" /></a>
                    <a :href="LINKS.poodlSocial.instagram"><poodl-image src="/icons/instagram.svg" alt="Instagram" maxWidth="30px" minWidth="30px" /></a>
                    <a :href="LINKS.poodlSocial.facebook"><poodl-image src="/icons/facebook.svg" alt="Facebook" maxWidth="30px" minWidth="30px" /></a>
                    <a :href="LINKS.poodlSocial.youtube"><poodl-image src="/icons/youtube.svg" alt="YouTube" maxWidth="30px" minWidth="30px" /></a>
                    <a :href="LINKS.poodlSocial.twitter"><poodl-image src="/icons/twitter.svg" alt="Twitter" maxWidth="30px" minWidth="30px" /></a>
                    <a :href="LINKS.poodlSocial.discord"><poodl-image src="/icons/discord.svg" alt="Discord" maxWidth="30px" minWidth="30px" /></a>
                </div>
            </poodl-column>
            <poodl-column :mobile="12" :tablet="6" :desktop="6" hAlign="flex-end" vAlign="center">
                <span class="copyright">{{ $t("footer.copyright") }}</span>
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