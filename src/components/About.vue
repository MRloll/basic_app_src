<template>
    <!-- 
            satrt about
         -->
    <section id="about" class="about">
        <div class="container">
            <!-- 
                    First row
                 -->
            <div class="row ">
                <div
                    class="col-lg-6 wow fadeInLeft"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                >
                    <div class="line"></div>
                    <div class="title">
                        <h3>
                            Quick &amp; Easy
                            <span>to Use Bootstrap Template</span>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, seiam nonumy eirmod tempor invidunt ut labore
                            et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing.
                        </p>
                        <a href="#" class="button d-block text-center"
                            >try it free</a
                        >
                    </div>
                </div>
                <div
                    class="col-lg-6 wow fadeInRight"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                >
                    <div class="img">
                        <img
                            class="img-fluid"
                            src="../assets/images/about1.svg"
                            alt="#"
                        />
                    </div>
                </div>
            </div>
            <!-- 
                    Second row
                 -->
            <div class="row ">
                <div
                    class="col-lg-6 order-lg-1 order-2 wow fadeInRight"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                >
                    <div class="img">
                        <img
                            class="img-fluid"
                            src="../assets/images/about2.svg"
                            alt="#"
                        />
                    </div>
                </div>
                <div
                    class="col-lg-6 order-lg-2 order-1 wow fadeInLeft"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                >
                    <div class="line"></div>
                    <div class="title">
                        <h3>
                            Modern design
                            <span>with Essential Features</span>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, seiam nonumy eirmod tempor invidunt ut labore
                            et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing.
                        </p>
                        <a href="#" class="button d-block text-center"
                            >try it free</a
                        >
                    </div>
                </div>
            </div>
            <!-- 
                    Third row
                 -->
            <div class="row ">
                <div
                    class="col-lg-6 wow fadeInLeft"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                >
                    <div class="line"></div>
                    <div class="title">
                        <h3>
                            <span>Crafted for</span>
                            SaaS, App and Software Landing Page
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, seiam nonumy eirmod tempor invidunt ut labore
                            et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing.
                        </p>
                        <a href="#" class="button d-block text-center"
                            >try it free</a
                        >
                    </div>
                </div>
                <div
                    class="col-lg-6 col-12 wow fadeInRight"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                >
                    <div class="img">
                        <img
                            class="img-fluid"
                            src="../assets/images/about3.svg"
                            alt="#"
                        />
                    </div>
                </div>
            </div>
            <!-- 
                    fourth row
                 -->
            <div class="row video">
                <div
                    class="col-lg-6 order-lg-1 order-2 wow fadeInRight"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                >
                    <img
                        class="dots img-fluid"
                        src="../assets/images/dots.svg"
                        alt="dots"
                    />
                    <div class="video-wrapper">
                        <div class="video-img">
                            <img
                                class="img-fluid"
                                src="../assets/images/video.png"
                                alt="#"
                            />
                        </div>
                        <div class="video-i">
                            <a @click.prevent="toggleOverlay" href="#"
                                ><i class="fas fa-play"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div
                    class="col-lg-6 order-lg-2 order-1 wow fadeInLeft"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                >
                    <div class="counter-wrapper">
                        <div class="line"></div>
                        <div class="title">
                            <h3>
                                Cool facts
                                <span>this about app</span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, seiam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                            </p>
                        </div>
                        <counter></counter>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Counter from "./Counter";
export default {
    name: "about",
    components: {
        Counter
    },
    methods: {
        toggleOverlay() {
            this.$store.state.showOverlay = !this.$store.state.showOverlay;
            this.$store.dispatch(
                "toggleOverlay",
                this.$store.state.showOverlay
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.about {
    .row {
        &:not(:last-of-type) {
            padding-bottom: 100px;
        }
        @media #{$maxMedium} {
            &:not(:last-of-type) {
                padding-bottom: 80px;
            }
            & > div[class^="col"] {
                margin-bottom: 50px;
            }
        }
    }
    .row.video {
        & > div[class^="col"]:first-of-type {
            position: relative;
            padding-bottom: 28px;
            .dots {
                position: absolute;
                bottom: 0;
                left: -15px;
                z-index: -1;
            }
            .video-wrapper {
                position: relative;
                overflow: hidden;
                border-radius: 12px;
                .video-i {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba($mainColor, 0.3);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    a {
                        display: inline-block;
                        background: white;
                        color: #fe8464;
                        width: 55px;
                        height: 55px;
                        line-height: 55px;
                        text-align: center;
                        border-radius: 50%;
                    }
                }
            }
        }
        .counter-wrapper {
            @media #{$minLarge} {
                padding-left: 70px;
            }
            .counter {
                .row > div {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>
