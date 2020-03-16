<template>
    <div id="app">
        <overlay-vid></overlay-vid>
        <heading></heading>
        <features></features>
        <about></about>
        <team></team>
        <testemonials></testemonials>
        <blog-posts></blog-posts>
        <footer-section></footer-section>
        <transition name="fade">
            <div
                @click="scrollToTop"
                v-if="showScrollButton"
                class="scroll-top"
            >
                <i class="fas fa-chevron-up"></i>
            </div>
        </transition>
    </div>
</template>

<script>
import OverlayVid from "./components/OverlayVid";
import Heading from "./components/Heading";
import Features from "./components/Features";
import About from "./components/About";
import Team from "./components/Team";
import Testemonials from "./components/Testemonials";
import BlogPosts from "./components/BlogPosts";
import FooterSection from "./components/FooterSection";
export default {
    name: "App",
    components: {
        OverlayVid,
        Heading,
        Features,
        About,
        Team,
        Testemonials,
        BlogPosts,
        FooterSection
    },
    data() {
        return {
            showScrollButton: false
        };
    },
    methods: {
        showButton() {
            if (window.scrollY > 500) {
                this.showScrollButton = true;
            } else {
                this.showScrollButton = false;
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    },
    mounted() {
        window.addEventListener("scroll", this.showButton);
    },
    destroyed() {
        window.addEventListener("scroll", this.showButton);
    }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.scroll-top {
    position: fixed;
    z-index: 3;
    bottom: 20px;
    right: 20px;
    background: $fourthColor;
    color: #fff;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
}
</style>
