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
            :size="174"
            :thickness="3"
            emptyThickness="5"
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
            :size="148"
            :thickness="15"
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
    }
</script>