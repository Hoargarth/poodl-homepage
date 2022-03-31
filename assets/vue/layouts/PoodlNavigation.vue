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
            <div>
                <router-link :to="LINKS.poodlWebsite.home">
                    <strong>Poodl</strong>Token
                </router-link>
            </div>
        </div>
        <div class="navigation-inner">
            <img class="logo" src="@images/icons/poodl-head.png" alt="$POOL Token">
            <div class="nav-wrapper">
                <poodl-navigation-button :url="LINKS.poodlWebsite.home">
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
                        url: this.LINKS.poodlWebsite.secure,
                    },
                    {
                        text: this.$t("navigation.tokenomics"),
                        url: this.LINKS.poodlWebsite.tokenomics,
                    },
                    {
                        text: this.$t("navigation.roadmap"),
                        url: this.LINKS.poodlWebsite.roadmap,
                    },
                    {
                        text: this.$t("navigation.nft"),
                        url: this.LINKS.poodlWebsite.nft,
                    },
                    {
                        text: this.$t("navigation.community"),
                        url: this.LINKS.poodlWebsite.community,
                    },
                ],
                globalNav: [
                    //{
                    //    text: 'News / Blog',
                    //    url: '/news',
                    //},
                    {
                        text: this.$t("navigation.buy"),
                        url: this.LINKS.poodlWebsite.buy,
                    },
                    {
                        text: this.$t("navigation.team"),
                        url: this.LINKS.poodlWebsite.team,
                    },
                    {
                        text: this.$t("navigation.games"),
                        url: this.LINKS.poodlWebsite.games,
                    },
                    {
                        text: this.$t("navigation.charity"),
                        url: this.LINKS.poodlWebsite.charity,
                    },
                    {
                        text: this.$t("navigation.whitepaper"),
                        url: this.LINKS.poodlWebsite.whitepaper,
                    },
                    //{
                    //    text: 'Memes',
                    //    url: '/memes',
                    //},
                    {
                        text: this.$t("navigation.poodlcast"),
                        url: this.LINKS.poodlSocial.poodlcast,
                    },
                    {
                        text: this.$t("navigation.academy"),
                        url: this.LINKS.poodlSocial.academy,
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