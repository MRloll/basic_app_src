<template>
    <div class="brand-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div
                    v-for="(link, index) in brands"
                    :key="index"
                    class="col-6 col-md col-sm-4"
                >
                    <div
                        class="brand text-center wow fadeIn"
                        data-wow-duration="1.3s"
                        :data-wow-delay="link.delay"
                    >
                        <img
                            class="img-fluid"
                            :src="link.link"
                            :alt="link.alt"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "brand-images",
    data() {
        return {
            brands: [
                {
                    link: require("../assets/images/brand-1.png"),
                    alt: "one",
                    delay: "1.6s"
                },
                {
                    link: require("../assets/images/brand-2.png"),
                    alt: "two",
                    delay: "1.8s"
                },
                {
                    link: require("../assets/images/brand-3.png"),
                    alt: "three",
                    delay: "2s"
                },
                {
                    link: require("../assets/images/brand-4.png"),
                    alt: "four",
                    delay: "2.2s"
                },
                {
                    link: require("../assets/images/brand-5.png"),
                    alt: "five",
                    delay: "2.4s"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.brand-wrapper {
    padding-top: 90px;
    position: relative;
    z-index: 1;
    .brand {
        padding: 0 25px;
        img {
            @include opacity(0.5);
            transition: opacity 0.5s ease-out;
            &:hover {
                @include opacity(1);
            }
        }
        @media (max-width: 576px) {
            margin-top: 20px;
        }
        @media (max-width: 991px) {
            padding: 0;
        }
        @media (max-width: 991px) {
            padding: 0;
        }
    }
}
</style>
