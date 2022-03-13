<template>
    <div class="navigation-container">
        <div class="navigation-inner">
            <img class="logo" src="@images/icons/poodl-head.png" alt="$POOL Token">
            <div class="nav-wrapper">
                <poodl-navigation-button>
                    <strong>Poodl</strong>Token<sup>TM</sup>
                </poodl-navigation-button>
                <poodl-navigation-button>Secure</poodl-navigation-button>
                <poodl-navigation-button>Tokenomics</poodl-navigation-button>
                <poodl-navigation-button>Roadmap</poodl-navigation-button>
                <poodl-navigation-button>3D POODL NFTs</poodl-navigation-button>
                <poodl-navigation-button>Community</poodl-navigation-button>

                <div class="nav-separator"></div>

                <poodl-navigation-button>News / Blog</poodl-navigation-button>
                <poodl-navigation-button>Team</poodl-navigation-button>
                <poodl-navigation-button>Gaming</poodl-navigation-button>
                <poodl-navigation-button>Charity</poodl-navigation-button>
                <poodl-navigation-button>PoodLympics</poodl-navigation-button>
                <poodl-navigation-button>Whitepaper</poodl-navigation-button>
                <poodl-navigation-button>Memes</poodl-navigation-button>
                <poodl-navigation-button>PoodlCast</poodl-navigation-button>
                <poodl-navigation-button>Poodl Academy</poodl-navigation-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlNavigation',
        props: {},
        data: () => ({
        }),
    }
</script>