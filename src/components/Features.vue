<template>
    <section id="features" class="features text-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="title">
                        <div class="line m-auto"></div>
                        <h3>
                            Clean and simple design,
                            <span
                                >Comes with everything you need to get
                                started!</span
                            >
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div
                        class="feat wow fadeIn"
                        data-wow-duration="1.3s"
                        data-wow-delay="0.5s"
                    >
                        <div class="shapes">
                            <div class="img">
                                <img
                                    src="../assets/images/services-shape.svg"
                                    alt="#"
                                    class="shape"
                                />
                                <img
                                    src="../assets/images/services-shape-1.svg"
                                    alt="#"
                                    class="shape-1"
                                />
                                <i class="fas fa-chalkboard-teacher"></i>
                            </div>
                        </div>
                        <div class="body">
                            <h3>Clean</h3>
                            <p>
                                Lorem ipsum dolor sit amet,consetetur sadipscing
                                elitr, seddiam nonu eirmod tempor invidunt
                                labore.
                            </p>
                        </div>
                        <div class="read-more">
                            <a href="#"
                                >learn more <i class="fas fa-chevron-right"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div
                        class="feat wow fadeIn"
                        data-wow-duration="1.3s"
                        data-wow-delay="0.8s"
                    >
                        <div class="shapes">
                            <div class="img">
                                <img
                                    src="../assets/images/services-shape.svg"
                                    alt="#"
                                    class="shape"
                                />
                                <img
                                    src="../assets/images/services-shape-2.svg"
                                    alt="#"
                                    class="shape-1"
                                />
                                <i class="fas fa-cog"></i>
                            </div>
                        </div>
                        <div class="body">
                            <h3>robust</h3>
                            <p>
                                Lorem ipsum dolor sit amet,consetetur sadipscing
                                elitr, seddiam nonu eirmod tempor invidunt
                                labore.
                            </p>
                        </div>
                        <div class="read-more">
                            <a href="#"
                                >learn more <i class="fas fa-chevron-right"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div
                        class="feat wow fadeIn"
                        data-wow-duration="1.3s"
                        data-wow-delay="1.1s"
                    >
                        <div class="shapes">
                            <div class="img">
                                <img
                                    src="../assets/images/services-shape.svg"
                                    alt="#"
                                    class="shape"
                                />
                                <img
                                    src="../assets/images/services-shape-3.svg"
                                    alt="#"
                                    class="shape-1"
                                />
                                <i class="fas fa-bolt"></i>
                            </div>
                        </div>
                        <div class="body">
                            <h3>powerful</h3>
                            <p>
                                Lorem ipsum dolor sit amet,consetetur sadipscing
                                elitr, seddiam nonu eirmod tempor invidunt
                                labore.
                            </p>
                        </div>
                        <div class="read-more">
                            <a href="#"
                                >learn more<i class="fas fa-chevron-right"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "features"
};
</script>

<style lang="scss" scoped>
.title {
    padding: 30px 0 50px 0;
    h3 {
        margin-bottom: 0;
    }
}
.feat {
    transition: all 0.5s ease;
    padding: 50px 30px;
    border: 2px solid transparent;
    border-radius: 8px;
    margin-bottom: 20px;
    &:hover {
        border-color: $orange;
        .shape {
            transform: rotate(25deg);
        }
    }
    .shapes {
        .img {
            position: relative;
            .shape {
                transition: all 1s ease;
            }
            .shape-1 {
                transition: all 1s ease;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            i {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 28px;
                color: white;
            }
        }
    }
    .body {
        margin: 25px 0;
        h3 {
            font-weight: bold;
            font-size: 26px;
            margin-bottom: 30px;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
        }
    }
    .read-more {
        &:hover {
            color: $mainColor;
        }
        transition: color 0.5s ease;
        a {
            i {
                font-size: 17px;
                margin-left: 13px;
            }
        }
    }
}
</style>
