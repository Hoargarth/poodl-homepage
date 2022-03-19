<template>
    <div class="floating-buy-button">
        <button id="buy-button" @click="toggleModal"><span>Buy POODL</span></button>
        <div id="buy-modal" :class="modalActive ? 'active' : ''">
            <div class="modal-header">
                <button class="modal-close" @click="toggleModal"></button>
                <span class="title"><strong>Swap / Buy $POODL now</strong></span>
                <poodl-image src="/gifs/metalCoinSpin.gif" alt="Buy $POODL Token" maxWidth="80px" mobileMaxWidth="50px" />
            </div>
            <div class="modal-content">
                <p>You can now buy POODL with credit/debit card directly OR swap virtually any crypto!</p>
                <div class="buttons-wrapper-row" style="justify-content: center; margin: 35px 0;">
                    <div class="base-button">
                        <button class="button" :class="swapzone ? 'active' : ''" @click="toggleSwapzone"><span class="button-line"></span>Swap with Crypto</button>
                    </div>
                    <div class="base-button">
                        <button class="button" :class="guardarian ? 'active' : ''" @click="toggleGuardarian"><span class="button-line"></span>Buy with FIAT</button>
                    </div>
                </div>
                <div class="buy-poodl-swap">
                    <p>Click "buy with FIAT" above to buy with FIAT currency such as US Dollars, Euros or Pounds etc. Or click "swap with crypto" to swap over 400 crypto currencies such as Bitcoin, Ethereum, BNB etc for POODL!</p>
                    <div id="swapzone" :class="swapzone ? 'active' : ''">
                        <div id="swapzonePartnersWidget" data-hidelogo="true" data-hideheader="true" data-from="eth" data-to="poodl" data-size="full" data-refid="faW1icfjno" ></div>
                    </div>
                    <div id="guardarian" :class="guardarian ? 'active' : ''">
                        <iframe src="https://guardarian.com/calculator/v1?partner_api_token=28f2dec7-7e5b-41ff-96d2-0c123d19fd20&default_fiat_amount=150&default_fiat_currency=USD&theme=xem&default_crypto_currency=poodl"></iframe>
                        <p class="buy-note">* Due to SEC regulations, the FIAT option is currently not available inside the United States. Work is being done to bring this functionality to our US investors.</p>
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