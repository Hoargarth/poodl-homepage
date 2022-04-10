<template>
    <div class="poodl-roadmap-item">
        <div class="progress-container">
            <vue-ellipse-progress
            class="outer-progress"
            :class="itemData.ongoing ? 'ongoing' : ''"
            :progress="itemData.funds"
            :angle="-90"
            :color="colorGradient"
            emptyColor="rgba(255,255,255,0.2)"
            emptyColorFill="transparent"                      
            :size="this.outerWidth"
            :thickness="this.outerStroke"
            :emptyThickness="this.outerEmptyStroke"
            lineMode="in 2"
            :legend="true"
            :legendValue="itemData.funds"
            :legendFormatter="({currentValue}) => 'Funding: ' + new Intl.NumberFormat('en-US').format(currentValue) + '%'"
            legendClass="progress-legend"
            fontColor="white"
            reverse
            fontSize="5rem"/>

            <vue-ellipse-progress
            class="inner-progress"
            :class="itemData.ongoing ? 'ongoing' : ''"
            :progress="itemData.progress"
            :angle="-90"
            :color="colorGradient"
            emptyColor="transparent"
            emptyColorFill="transparent"                      
            :size="this.innerWidth"
            :thickness="this.innerStroke"
            emptyThickness="0"
            lineMode="normal 0"
            :legend="true"
            :legendValue="itemData.progress"
            :legendFormatter="({currentValue}) => itemData.ongoing ? '∞' : new Intl.NumberFormat('en-US').format(currentValue) + '%'"
            legendClass="progress-legend"
            fontColor="white"
            reverse
            fontSize="5rem"/>
        </div>
        <div class="content-container">
            <h4>{{ itemData.title }}</h4>
            <span class="timeframe" v-if="itemData.timeframe">{{ itemData.timeframe }}</span>
            <div class="content" v-html="itemData.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlRoadmapItem',
        props: {
            itemData: {}
        },

        data: () => ({
            colorGradient: {
                radial: false,
                colors: [
                    {
                        color: '#FF4400',
                        offset: "0",
                        opacity: '1',
                    },
                    {
                        color: '#FF005B',
                        offset: "100",
                        opacity: '1',
                    },
                ]
            }
        }),

        computed: {
            outerWidth () {
                return this.isMobile() ? 76 : 174;
            },
            outerStroke () {
                return this.isMobile() ? 2 : 3;
            },
            outerEmptyStroke () {
                return this.isMobile() ? 2 : 5;
            },
            innerWidth () {
                return this.isMobile() ? 60 : 148;
            },
            innerStroke () {
                return this.isMobile() ? 4 : 15;
            }
        },

        methods: {
            isMobile () {
                const match = window.matchMedia("(max-width: 767px)");

                if(match.matches) {
                    return true;
                }

                return false;
            },
        },
    }
</script>