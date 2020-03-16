<template>
    <section id="team" class="team">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-5">
                    <div class="line m-auto"></div>
                    <div class="title">
                        <h3>
                            <span>Meet Our</span>
                            Creative Team Members
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center text-center">
                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div
                        class="card wow fadeInUp"
                        data-wow-duration="1.3s"
                        data-wow-delay="0.4s"
                    >
                        <div class="img-holder">
                            <img
                                class="card-img-top"
                                src="../assets/images/team-1.jpg"
                                alt="Card image cap"
                            />
                            <div class="social-holder">
                                <div class="social">
                                    <ul>
                                        <li>
                                            <a
                                                target="_blank"
                                                href="https://www.facebook.com/walidloll"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
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
                        <div class="card-body">
                            <h3><a href="#">Mark John</a></h3>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div
                        class="card wow fadeInUp"
                        data-wow-duration="1.3s"
                        data-wow-delay="0.7s"
                    >
                        <div class="img-holder">
                            <img
                                class="card-img-top"
                                src="../assets/images/team-2.jpg"
                                alt="Card image cap"
                            />
                            <div class="social-holder">
                                <div class="social">
                                    <ul>
                                        <li>
                                            <a
                                                target="_blank"
                                                href="https://www.facebook.com/walidloll"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
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
                        <div class="card-body">
                            <h3><a href="#">Mark John</a></h3>
                            <p>Sr. Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div
                        class="card wow fadeInUp"
                        data-wow-duration="1.3s"
                        data-wow-delay="1s"
                    >
                        <div class="img-holder">
                            <img
                                class="card-img-top"
                                src="../assets/images/team-3.jpg"
                                alt="Card image cap"
                            />
                            <div class="social-holder">
                                <div class="social">
                                    <ul>
                                        <li>
                                            <a
                                                target="_blank"
                                                href="https://www.facebook.com/walidloll"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
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
                        <div class="card-body">
                            <h3><a href="#">Mark John</a></h3>
                            <p>Business Development Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "team"
};
</script>

<style lang="scss" scoped>
.card {
    border-radius: 10px;
    border: none;
    overflow: auto;
    margin-top: 37px;
    &:hover .img-holder .social-holder .social ul::after {
        opacity: 1;
        visibility: visible;
    }
    .img-holder {
        position: relative;
        .social-holder {
            position: absolute;
            bottom: 40px;
            left: 0;
            width: 100%;
            .social {
                ul {
                    position: relative;
                    display: inline-block;
                    overflow: hidden;
                    border-radius: 30px;
                    padding: 0 6px;
                    background: rgba($color: #fff, $alpha: 0.4);
                    &::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        right: 0px;
                        left: 0;
                        height: 100%;
                        background: linear-gradient(
                            to top,
                            #fe6e9a 0%,
                            #fe8464 100%
                        );
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.5s ease;
                    }
                    li {
                        display: inline-block;
                        a {
                            position: relative;
                            z-index: 3;
                            display: inline-block;
                            padding: 14px 14px;
                            margin: 0px 2px;
                            font-size: 19px;
                            color: white;
                        }
                    }
                }
            }
        }
    }
}
</style>
