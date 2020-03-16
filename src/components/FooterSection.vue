<template>
    <footer>
        <div class="container">
            <div class="subscribe">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div
                            class="title wow fadeIn"
                            data-wow-duration="1.3s"
                            data-wow-delay="0.4s"
                        >
                            <h3>
                                Subscribe Our Newsletter
                                <span>get reguler updates</span>
                            </h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form
                            action="post"
                            class="wow fadeIn"
                            data-wow-duration="1.3s"
                            data-wow-delay="0.7s"
                        >
                            <input type="email" placeholder="Enter email" />
                            <button class="button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-body">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div
                            class="logo-sec wow fadeIn"
                            data-wow-duration="1.3s"
                            data-wow-delay="0.6s"
                        >
                            <div class="head">
                                <img
                                    src="../assets/images/logo.svg"
                                    alt="logo"
                                />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consetetur sadipscing
                                elitr, sederfs diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam.
                            </p>
                            <div class="social">
                                <ul>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.facebook.com/walidloll"
                                            ><i class="fab fa-facebook-f"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://twitter.com/WalidElloll"
                                            ><i class="fab fa-twitter"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.instagram.com/walid.elloll"
                                            ><i class="fab fa-instagram"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/walid-salah-b63631170/"
                                            ><i class="fab fa-linkedin"></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-6 order-2 order-lg-1">
                        <div
                            class="quick-links wow fadeIn"
                            data-wow-duration="1.3s"
                            data-wow-delay="0.9s"
                        >
                            <div class="head">
                                <h3>quick links</h3>
                            </div>
                            <ul>
                                <li><a href="#">road map</a></li>
                                <li><a href="#">privacy plicy</a></li>
                                <li><a href="#">refund policy</a></li>
                                <li><a href="#">terms of service</a></li>
                                <li><a href="#">pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-6 order-3 order-lg-2">
                        <div
                            class="resources wow fadeIn"
                            data-wow-duration="1.3s"
                            data-wow-delay="1.2s"
                        >
                            <div class="head">
                                <h3>resources</h3>
                            </div>
                            <ul>
                                <li><a href="#home">home</a></li>
                                <li><a href="#features">features</a></li>
                                <li><a href="#about">about</a></li>
                                <li><a href="#team">team</a></li>
                                <li><a href="#blog">blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 order-1 order-lg-3">
                        <div
                            class="contact wow fadeIn"
                            data-wow-duration="1.3s"
                            data-wow-delay="1.5s"
                        >
                            <div class="head">
                                <h3>contact</h3>
                            </div>
                            <ul>
                                <li>+201013194797</li>
                                <li>walidelloll2018@gmail.com</li>
                                <li>Belqas, Ad-Daqahliya Governance, Egypt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h6>Made with <i class="fa fa-heart"></i> by MR. Loll</h6>
        </div>
        <div id="particles-2" class="particles"></div>
    </footer>
</template>

<script>
import "particles.js";

export default {
    name: "FooterSection",
    mounted() {
        this.initParticles();
    },
    methods: {
        initParticles() {
            window.particlesJS("particles-2", {
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
footer {
    background: url(../assets/images/footer-bg.svg);
    background-size: cover;
    position: relative;
    .container {
        z-index: 2;
    }
    .subscribe {
        background: #fff;
        padding: 90px 50px;
        box-shadow: 0px 0px 18px 0px rgba(50, 77, 215, 0.14);
        border-radius: 13px;
        @media #{$maxMobile} {
            padding: 60px 30px;
            .title {
                h3 {
                    font-size: 27px;
                }
                span {
                    font-size: 20px;
                }
            }
        }
        .title {
            margin-bottom: 35px;
            h3 {
                line-height: 1.1;
            }
            span {
                display: inline-block;
            }
            @media #{$minMedium} {
                margin-bottom: 0;
                h3 {
                    font-size: 30px;
                }
                span {
                    font-size: 27px;
                }
            }
            @media #{$minLarge} {
                h3 {
                    font-size: 40px;
                }
                span {
                    font-size: 30px;
                }
            }
        }
        form {
            position: relative;
            input {
                width: 100%;
                height: 72px;
                padding: 0 27px;
                border: 2px solid #e2dfdf;
                border-radius: 10px;
                outline: 0;
            }
            button {
                position: absolute;
                right: 0;
                top: 0;
                border: none;
                outline: 0;
                height: 100%;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                @media #{$maxSmall} {
                    position: relative;
                    width: 100%;
                    height: 60px;
                    margin-top: 20px;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }
            }
        }
    }
    .footer-body {
        color: #fff;
        padding: 100px 0;
        .head {
            margin-bottom: 20px;
            h3 {
                font-weight: bold;
            }
        }
        p {
            color: #fff;
        }
        ul li {
            &:not(:last-of-type) {
                margin-bottom: 20px;
            }
            a {
                transition: all 0.3s ease;
                &:hover {
                    color: $orange;
                }
            }
        }
        .logo-sec {
            .head img {
                width: 200px;
            }
            .social {
                ul {
                    li {
                        display: inline-block;
                        margin-right: 30px;
                        font-size: 22px;
                        margin-bottom: 0;
                    }
                }
            }
        }
        @media #{$maxMedium} {
            padding-bottom: 60px;
            div[class^="col"] {
                margin-bottom: 40px;
            }
        }
    }
    hr {
        background: #6977da;
        margin: 0;
    }
    h6 {
        text-align: center;
        padding: 40px;
        margin: 0;
        color: #fff;
    }
}
</style>
