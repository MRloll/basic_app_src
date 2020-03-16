<template>
    <header id="home">
        <nav-bar />
        <div class="header-wrapper">
            <div class="container">
                <div class="row text-center justify-content-center">
                    <div class="col-12">
                        <div class="banner">
                            <h3
                                class="wow fadeInUp"
                                data-wow-duration="1.3s"
                                data-wow-delay="0.2s"
                            >
                                Basic - Vuejs Landing Page
                            </h3>
                            <h2
                                class="wow fadeInUp"
                                data-wow-duration="1.3s"
                                data-wow-delay="0.5s"
                            >
                                Kickstart Your Vue site or App Site
                            </h2>
                            <p
                                class="wow fadeInUp"
                                data-wow-duration="1.3s"
                                data-wow-delay="0.8s"
                            >
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                            </p>
                            <a
                                class="button wow fadeInUp"
                                data-wow-duration="1.3s"
                                data-wow-delay="1.1s"
                                href="#"
                                >get started</a
                            >
                        </div>
                    </div>
                    <div class="col-lg-8 img">
                        <img
                            class="img-fluid  wow fadeIn"
                            data-wow-duration="1.3s"
                            data-wow-delay="1.4s"
                            src="../assets/images/header-hero.png"
                            alt="header"
                        />
                    </div>
                </div>
            </div>
        </div>
        <BrandImages></BrandImages>
        <div id="particles-1" class="particles"></div>
    </header>
</template>

<script>
import "particles.js";
import NavBar from "./NavBar";
import BrandImages from "./BrandImages";

export default {
    name: "heading",
    components: {
        NavBar,
        BrandImages
    },
    mounted() {
        this.initParticles();
    },
    methods: {
        initParticles() {
            window.particlesJS("particles-1", {
                particles: {
                    number: {
                        value: 70,
                        density: {
                            enable: !0,
                            value_area: 4000
                        }
                    },
                    color: {
                        value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#fff"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "img/github.svg",
                            width: 33,
                            height: 33
                        }
                    },
                    opacity: {
                        value: 0.15,
                        random: !0,
                        anim: {
                            enable: !0,
                            speed: 0.2,
                            opacity_min: 0.15,
                            sync: !1
                        }
                    },
                    size: {
                        value: 50,
                        random: !0,
                        anim: {
                            enable: !0,
                            speed: 2,
                            size_min: 5,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !1,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        speed: 1,
                        direction: "top",
                        random: !0,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 600
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !1,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: !1,
                            mode: "repulse"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 250,
                            size: 0,
                            duration: 2,
                            opacity: 0,
                            speed: 3
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.particles {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

header {
    min-height: 1000px;
    background-image: url(../assets/images/banner-bg.svg);
    background-position: bottom center;
    color: white;
    position: relative;
    .header-wrapper {
        position: relative;
        z-index: 2;
        .banner {
            margin-bottom: 50px;
            padding-top: 180px;
            h3 {
                font-size: 38px;
                font-weight: 300;
                margin-bottom: 0;
            }
            h2 {
                font-size: 38px;
                font-weight: 700;
                margin-bottom: 30px;
            }
            p {
                font-size: 16px;
                margin-bottom: 50px;
                color: white;
            }
            .button {
                display: inline-block;
                background: $thirdColor;
                background-size: 200%;
                &:hover {
                    background-position: right center;
                }
            }
            @media #{$maxMobile} {
                padding-top: 120px;
                h2,
                h3 {
                    font-size: 30px;
                }
                p {
                    font-size: 16px;
                }
            }
            @media #{$maxSmall} {
                h2,
                h3 {
                    font-size: 23px;
                }
            }
        }
    }

    img {
        max-width: 650px;
        @media #{$maxMobile} {
            max-width: 100%;
        }
    }
}
</style>
