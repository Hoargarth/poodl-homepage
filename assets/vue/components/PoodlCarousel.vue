<template>
    <div class="poodl-carousel">
        <div class="swiper" :id="'carousel-' + id">
            <div class="swiper-wrapper">
                <!-- Slides -->
                <slot />
            </div>
        </div>

        <!-- If we need pagination -->
        <div v-if="pagination" class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div v-if="navigation" class="swiper-button-prev"></div>
        <div v-if="navigation" class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div v-if="scrollbar" class="swiper-scrollbar"></div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlCarousel',
        props: {
            pagination: {
                default: false,
                type: Boolean,
            },
            navigation: {
                default: true,
                type: Boolean,
            },
            scrollbar: {
                default: false,
                type: Boolean,
            },
            customOptions: {
                default: () => ({}),
                type: Object,
            },
        },

        data: () => ({
            id: null,
            swiper: null,
        }),

        mounted () {
            let options = {
                // Optional parameters
                loop: true,
                slidesPerView: 1.5,
                centeredSlides: true,
                autoplay: true,
                spaceBetween: 20,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },

                // breakpoints for everything that's not mobile
                breakpoints: {
                    768: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                    1400: {
                        slidesPerView: 4.5,
                    },
                },
            }

            this.id = this._uid;
            options = {...options, ...this.customOptions};

            this.$nextTick(() => {
                this.swiper = new this.$swiper('#carousel-' + this.id, options);
            })
        }
    }
</script>