<template>
    <div class="floating-buy-button">
        <button id="buy-button" @on="triggerModal"><span>Buy POODL</span></button>
        <div id="buy-modal">some modal</div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlFloatingBuyButton',
        data: () => ({
        }),
    }
</script>