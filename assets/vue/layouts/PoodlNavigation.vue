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
        data: function () {
            return {
                isDisabled: {
                    default: false,
                    type: Boolean,
                },
                homeNav: [
                    {
                        text: this.$t("navigation.secure"),
                        url: '/#secure',
                    },
                    {
                        text: this.$t("navigation.tokenomics"),
                        url: '/#tokenomics',
                    },
                    {
                        text: this.$t("navigation.roadmap"),
                        url: '/#roadmap',
                    },
                    {
                        text: this.$t("navigation.nft"),
                        url: '/#nft',
                    },
                    {
                        text: this.$t("navigation.community"),
                        url: '/#community',
                    },
                ],
                globalNav: [
                    //{
                    //    text: 'News / Blog',
                    //    url: '/news',
                    //},
                    {
                        text: this.$t("navigation.buy"),
                        url: '/buy',
                    },
                    {
                        text: this.$t("navigation.team"),
                        url: '/team',
                    },
                    {
                        text: this.$t("navigation.games"),
                        url: '/games',
                    },
                    {
                        text: this.$t("navigation.charity"),
                        url: '/charity',
                    },
                    {
                        text: this.$t("navigation.whitepaper"),
                        url: '/whitepaper',
                    },
                    //{
                    //    text: 'Memes',
                    //    url: '/memes',
                    //},
                    {
                        text: this.$t("navigation.poodlcast"),
                        url: '/poodlcast',
                    },
                    {
                        text: this.$t("navigation.academy"),
                        url: '/academy',
                    },
                ],
            }
        },
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
                const matchMobile = window.matchMedia('(max-width: 1199px)');

                if (matchMobile.matches) {
                    this.isDisabled = true;
                } else {
                    this.isDisabled = false;
                }
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