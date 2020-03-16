<template>
    <div class="nav-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="d-flex justify-content-between">
                        <a href="index.html">
                            <img
                                class="logo"
                                :src="[
                                    logoWhite ? logo.logoWhite : logo.logoBlack
                                ]"
                                alt="logo"
                            />
                        </a>
                        <div class="flex-grow-1 text-right">
                            <transition name="slide">
                                <ul class="d-inline d-lg-none" v-if="showNav">
                                    <li
                                        v-for="(oneLink, index) in navLinks"
                                        :key="index"
                                        class="d-inline"
                                    >
                                        <span
                                            @click="scrollToData"
                                            :data-scroll="oneLink.scrollTo"
                                            >{{ oneLink.link }}</span
                                        >
                                    </li>
                                </ul>
                            </transition>
                            <ul class="d-inline" v-if="showInLg">
                                <li
                                    v-for="(oneLink, index) in navLinks"
                                    :key="index"
                                    :class="[
                                        logoWhite ? '' : 'hover',
                                        'd-inline'
                                    ]"
                                >
                                    <span
                                        @click="scrollToData"
                                        :data-scroll="oneLink.scrollTo"
                                        >{{ oneLink.link }}</span
                                    >
                                </li>
                            </ul>
                        </div>
                        <div
                            class="d-flex justify-content-between align-items-center"
                        >
                            <a class="button text-center d-block" href="#"
                                >free trial</a
                            >
                            <div class="bars d-none">
                                <button
                                    @click="showNav = !showNav"
                                    :class="[showNav ? 'collapsed' : '']"
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "nav-bar",
    data() {
        return {
            logo: {
                logoWhite: require("../assets/images/logo.svg"),
                logoBlack: require("../assets/images/logo-2.svg")
            },
            logoWhite: true,
            navLinks: [
                { link: "Home", scrollTo: "#home" },
                { link: "Features", scrollTo: "#features" },
                { link: "About", scrollTo: "#about" },
                { link: "Team", scrollTo: "#team" },
                { link: "Testemonials", scrollTo: "#testem" },
                { link: "Blog", scrollTo: "#blog" }
            ],
            showNav: null,
            showInLg: null
        };
    },
    methods: {
        scrollToData(e) {
            let axis = document.querySelector(
                e.target.getAttribute("data-scroll")
            ).offsetTop;

            window.scrollTo({
                top: axis,
                left: 0,
                behavior: "smooth"
            });
            this.showNav = !this.showNav;
        },
        onScroll() {
            let navWrapper = document.querySelector(".nav-wrapper"),
                nav = document.querySelector(".nav-wrapper nav"),
                bars = document.querySelectorAll(".bars span"),
                i = 0;

            if (window.scrollY > 20) {
                this.logoWhite = false;
                nav.style.padding = "12px 0";
                nav.style.color = "#2e2e2e";
                navWrapper.style.backgroundColor = "white";
                navWrapper.classList.add("nav-fixed");

                for (i; i < bars.length; i++) {
                    bars[i].style.backgroundColor = "#2e2e2e";
                }
            } else {
                this.logoWhite = true;
                nav.style.padding = "25px 0";
                nav.style.color = "white";
                navWrapper.style.backgroundColor = "transparent";
                navWrapper.classList.remove("nav-fixed");

                for (i; i < bars.length; i++) {
                    bars[i].style.backgroundColor = "white";
                }
            }
        },
        onResize() {
            if (window.innerWidth > 992) {
                this.showInLg = true;
            } else {
                this.showInLg = false;
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
        window.addEventListener("load", this.onResize);
        window.addEventListener("resize", this.onResize);
    },
    destroyed() {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("load", this.onResize);
        window.removeEventListener("resize", this.onResize);
    }
};
</script>
<style lang="scss" scoped>
//******************** */ transition **********
.slide-enter-active,
.slide-leave-active {
    transition: max-height 0.6s ease;
}

.slide-enter-to,
.slide-leave {
    max-height: 500px;
    overflow: hidden;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}
//******************** */ transition **********

.nav-fixed {
    position: fixed !important;
}

.nav-wrapper {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    width: 100%;
    transition: all 0.8s ease;
    nav {
        position: relative;
        align-items: center;
        padding: 25px 0;
        color: white;
        ul {
            margin-right: 10px;
            height: auto;
            li {
                margin-right: 45px;
                transition: all 0.2s ease-in-out;
                font-weight: bold;
                &.hover:hover {
                    color: $mainColor;
                }
                span {
                    cursor: pointer;
                }
            }
        }
        .bars {
            margin-left: 20px;
            button {
                background: transparent;
                border: none;
                outline: 0;
                span {
                    width: 30px;
                    height: 2px;
                    background-color: #fff;
                    display: block;
                    margin: 5px 0;
                    position: relative;
                    transition: all 0.4s ease;
                }
            }
            .collapsed {
                span:nth-child(1) {
                    transform: rotate(45deg);
                    top: 7px;
                }
                span:nth-child(2) {
                    opacity: 0;
                }
                span:nth-child(3) {
                    transform: rotate(135deg);
                    top: -7px;
                }
            }
        }
    }
    @media (max-width: 991px) {
        nav {
            ul {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                margin: 0;
                background: white;
                color: black;
                li {
                    display: block !important;
                    text-align: left !important;
                    margin: 0px;
                    color: #2e2e2e;
                    &:hover {
                        color: white;
                        background: #6f6bd8;
                    }
                    span {
                        display: block;
                        padding: 5px 15px;
                    }
                }
            }
            .bars {
                display: block !important;
            }
        }
    }
    @media (max-width: 576px) {
        a.button {
            display: none !important;
        }
    }
}
</style>
