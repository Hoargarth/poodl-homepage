<template>
    <div class="navigation-container" :class="isDisabled ? 'disabled' : ''">
        <div class="navigation-mobile">
            <button class="hamburger hamburger--elastic"
                :class="isDisabled ? '' : 'is-active'"
                type="button"
                @click="toggleNavigation">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <div><strong>Poodl</strong>Token</div>
        </div>
        <div class="navigation-inner">
            <img class="logo" src="@images/icons/poodl-head.png" alt="$POOL Token">
            <div class="nav-wrapper">
                <poodl-navigation-button url="/">
                    <strong>Poodl</strong>Token<sup>TM</sup>
                </poodl-navigation-button>
                <poodl-navigation-button
                    v-for="(item, index) in homeNav"
                    :key="'homenav-' + index"
                    :url="item.url">
                    {{item.text}}
                </poodl-navigation-button>

                <div class="nav-separator"></div>

                <poodl-navigation-button
                    v-for="(item, index) in globalNav"
                    :key="'globalnav-' + index"
                    :url="item.url">
                    {{item.text}}
                </poodl-navigation-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlNavigation',
        props: {},
        data: () => ({
            isDisabled: {
                default: false,
                type: Boolean,
            },
            homeNav: [
                {
                    text: 'Secure',
                    url: '/#secure',
                },
                {
                    text: 'Tokenomics',
                    url: '/#tokenomics',
                },
                {
                    text: 'Roadmap',
                    url: '/#roadmap',
                },
                {
                    text: '3D POODL NFTs',
                    url: '/#nft',
                },
                {
                    text: 'Community',
                    url: '/#community',
                },
            ],
            globalNav: [
                {
                    text: 'News / Blog',
                    url: '/news',
                },
                {
                    text: 'Team',
                    url: '/team',
                },
                {
                    text: 'Gaming',
                    url: '/games',
                },
                {
                    text: 'Charity',
                    url: '/charity',
                },
                {
                    text: 'PoodLympics',
                    url: '/poodlympics',
                },
                {
                    text: 'Whitepaper',
                    url: '/whitepaper',
                },
                {
                    text: 'Memes',
                    url: '/memes',
                },
                {
                    text: 'PoodlCast',
                    url: '/poodlcast',
                },
                {
                    text: 'Poodl Academy',
                    url: '/academy',
                },
            ],
        }),
        methods: {
            setActive () {
                const navLinks = document.querySelectorAll(".navigation-container a");
                const currentPath = location.href;

                navLinks.forEach((link) => {

                    if (link.href == currentPath) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            },
            disableOnMobile () {
                const matchMobile = window.matchMedia('(max-width: 767px)');

                if (matchMobile.matches) {
                    this.isDisabled = true;
                } else {
                    this.isDisabled = false;
                }

                console.log(this.isDisabled);
            },
            toggleNavigation () {
                this.isDisabled = !this.isDisabled;
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.setActive();
                this.disableOnMobile();
                
                const links = document.querySelectorAll(".navigation-container a");
                links.forEach(link => {
                    link.addEventListener('click', () => {
                        setTimeout(() => {
                            this.setActive();
                        }, 200);
                    });
                });
            });
        },
    }
</script>