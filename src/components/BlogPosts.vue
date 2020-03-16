<template>
    <section id="blog" class="blog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="line"></div>
                    <div class="title">
                        <h3>
                            <span>Our Recent </span>
                            Blog Posts
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-7 col-sm-12">
                    <div
                        class="post wow fadeIn"
                        data-wow-duration="1.3s"
                        data-wow-delay="0.4s"
                    >
                        <div class="post-img">
                            <img
                                class="img-fluid"
                                src="../assets/images/blog-1.jpg"
                                alt="blog"
                            />
                        </div>
                        <div class="post-details">
                            <span class="author">posted by: Admin</span>
                            <span class="date">03 june, 2020</span>
                        </div>
                        <div class="post-paragraph">
                            <p>
                                Lorem ipsuamet conset sadips cing elitr seddiam
                                nonu eirmod tempor invidunt labore.
                            </p>
                        </div>
                        <div class="learn">
                            <a href="#">learn more</a>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-7 col-sm-12">
                    <div
                        class="post wow fadeIn"
                        data-wow-duration="1.3s"
                        data-wow-delay="0.7s"
                    >
                        <div class="post-img">
                            <img
                                class="img-fluid"
                                src="../assets/images/blog-2.jpg"
                                alt="blog"
                            />
                        </div>
                        <div class="post-details">
                            <span class="author">posted by: Admin</span>
                            <span class="date">03 june, 2020</span>
                        </div>
                        <div class="post-paragraph">
                            <p>
                                Lorem ipsuamet conset sadips cing elitr seddiam
                                nonu eirmod tempor invidunt labore.
                            </p>
                        </div>
                        <div class="learn">
                            <a href="#">learn more</a>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-7 col-sm-12">
                    <div
                        class="post wow fadeIn"
                        data-wow-duration="1.3s"
                        data-wow-delay="1s"
                    >
                        <div class="post-img">
                            <img
                                class="img-fluid"
                                src="../assets/images/blog-3.jpg"
                                alt="blog"
                            />
                        </div>
                        <div class="post-details">
                            <span class="author">posted by: Admin</span>
                            <span class="date">03 june, 2020</span>
                        </div>
                        <div class="post-paragraph">
                            <p>
                                Lorem ipsuamet conset sadips cing elitr seddiam
                                nonu eirmod tempor invidunt labore.
                            </p>
                        </div>
                        <div class="learn">
                            <a href="#">learn more</a>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "blog-posts"
};
</script>

<style lang="scss" scoped>
.blog {
    .post {
        margin-top: 30px;
        & > div {
            margin-bottom: 20px;
        }
        .post-img {
            img {
                width: 100%;
            }
        }
        .post-details {
            color: #6a6972;
            span:not(:last-child) {
                margin-right: 30px;
            }
        }
        .post-paragraph {
            font-size: 20px;
            p {
                color: #333;
                line-height: 1.3;
            }
        }
        .learn {
            color: $orange;
            display: flex;
            align-items: center;
            a {
                margin-right: 20px;
            }
        }
    }
}
</style>
