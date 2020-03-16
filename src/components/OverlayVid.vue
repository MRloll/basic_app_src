<template>
    <div v-if="getStatus" class="overlay">
        <div class="overlay-bg"></div>
        <div class="overlay-wrapper">
            <div
                @click.self="toggleOverlay"
                class="overlay-container"
                tabindex="0"
            >
                <div class="overlay-content">
                    <div class="overlay-iframe">
                        <button>
                            <i
                                @click.self="toggleOverlay"
                                class="fas fa-times"
                                title="Close (esc)"
                            ></i>
                        </button>
                        <iframe
                            src="https://www.youtube.com/embed/o4X7F8-ZHuk?start=26"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "overlay",
    created() {
        document.addEventListener("keyup", this.escClick);
    },
    methods: {
        toggleOverlay() {
            //dispatching the stroe action to show over lay
            this.$store.state.showOverlay = !this.$store.state.showOverlay;
            this.$store.dispatch(
                "toggleOverlay",
                this.$store.state.showOverlay
            );
        },
        escClick(e) {
            if (this.getStatus) {
                if (e.keyCode === 27) {
                    this.$store.state.showOverlay = !this.$store.state
                        .showOverlay;
                }
            }
        }
    },
    computed: {
        //getting the store getter to eturn the current status of the overlay
        getStatus() {
            return this.$store.getters.getStatus;
        }
    },
    updated() {
        if (this.getStatus) {
            document.querySelector("html").style.overflow = "hidden";
        } else {
            document.querySelector("html").style.overflow = "auto";
        }
    },
    destroyed() {
        document.addEventListener("keyup", this.escClick);
    }
};
</script>

<style lang="scss" scoped>
.overlay {
    .overlay-bg {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 11;
        overflow: hidden;
        position: fixed;
        background: #0b0b0b;
        opacity: 0.8;
    }
    .overlay-wrapper {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 11;
        position: fixed;
        outline: none !important;
        .overlay-container {
            text-align: center;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            padding: 0 8px;
            box-sizing: border-box;
            &::before {
                content: "";
                display: inline-block;
                height: 100%;
                vertical-align: middle;
            }
            .overlay-content {
                line-height: 0;
                width: 100%;
                max-width: 900px;
                position: relative;
                display: inline-block;
                vertical-align: middle;
                margin: 0 auto;
                text-align: left;
                z-index: 11;
                .overlay-iframe {
                    width: 100%;
                    height: 0;
                    overflow: hidden;
                    padding-top: 56.25%;
                    button {
                        position: absolute;
                        top: -28px;
                        right: 0;
                        background: transparent;
                        border: none;
                        outline: 0;
                        i {
                            font-size: 22px;
                            color: white;
                            transition: color 0.5s ease;
                        }
                        &:hover i {
                            color: red;
                        }
                    }
                    iframe {
                        position: absolute;
                        display: block;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
                        background: #000;
                    }
                }
            }
        }
    }
}
</style>
