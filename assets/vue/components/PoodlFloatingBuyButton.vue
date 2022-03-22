<template>
    <div class="floating-buy-button">
        <button id="buy-button" @click="toggleModal"><span>{{ $t("component.poodllFloatingBuyButton.buyButton") }}</span></button>
        <div id="buy-modal" :class="modalActive ? 'active' : ''">
            <div class="modal-header">
                <button class="modal-close" @click="toggleModal"></button>
                <span class="title"><strong>{{ $t("component.poodllFloatingBuyButton.modalTitle") }}</strong></span>
                <poodl-image src="/gifs/metalCoinSpin.gif" alt="Buy $POODL Token" maxWidth="80px" mobileMaxWidth="50px" />
            </div>
            <div class="modal-content">
                <p>{{ $t("component.poodllFloatingBuyButton.modalInfo") }}</p>
                <div class="buttons-wrapper-row" style="justify-content: center; margin: 35px 0;">
                    <div class="base-button">
                        <button class="button" :class="swapzone ? 'active' : ''" @click="toggleSwapzone"><span class="button-line"></span>{{ $t("component.poodllFloatingBuyButton.toggleCrypto") }}</button>
                    </div>
                    <div class="base-button">
                        <button class="button" :class="guardarian ? 'active' : ''" @click="toggleGuardarian"><span class="button-line"></span>{{ $t("component.poodllFloatingBuyButton.toggleFiat") }}</button>
                    </div>
                </div>
                <div class="buy-poodl-swap">
                    <p>{{ $t("component.poodllFloatingBuyButton.toggleInfo") }}</p>
                    <div id="swapzone" :class="swapzone ? 'active' : ''">
                        <div id="swapzonePartnersWidget" data-hidelogo="true" data-hideheader="true" data-from="eth" data-to="poodl" data-size="full" data-refid="faW1icfjno" ></div>
                    </div>
                    <div id="guardarian" :class="guardarian ? 'active' : ''">
                        <iframe src="https://guardarian.com/calculator/v1?partner_api_token=28f2dec7-7e5b-41ff-96d2-0c123d19fd20&default_fiat_amount=150&default_fiat_currency=USD&theme=xem&default_crypto_currency=poodl"></iframe>
                        <p class="buy-note">{{ $t("component.poodllFloatingBuyButton.secInfo") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlFloatingBuyButton',
        data: () => ({
            modalActive: false,
            swapzone: true,
            guardarian: false,
        }),
        methods: {
            toggleModal () {
                this.modalActive = !this.modalActive;
            },
            toggleSwapzone () {
                this.guardarian = false;
                this.swapzone = true;
            },
            toggleGuardarian () {
                this.swapzone = false;
                this.guardarian = true;
            },
        },
        mounted () {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://swapzone.io/script/partners-widget.js')
            document.head.appendChild(recaptchaScript)
        },
    }
</script>