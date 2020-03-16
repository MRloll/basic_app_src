<template>
    <div class="counter">
        <div class="row no-gutters">
            <div
                v-for="(counter, index) in countData"
                :key="index"
                class="col-4"
            >
                <div
                    class="single-counter d-flex align-items-center justify-content-center"
                    :class="counter.class"
                >
                    <div class="counter-items text-center">
                        <span class="count" :data-count="counter.num">0</span
                        ><span>K</span>
                        <p>{{ counter.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "counter",
    data() {
        return {
            sapn: "",
            countData: [
                { title: "downloads", num: 175, class: "counter-color-1" },
                { title: "active users", num: 68, class: "counter-color-2" },
                { title: "votes", num: 120, class: "counter-color-3" }
            ]
        };
    },
    methods: {
        countUp(elem) {
            var current = elem.innerHTML;
            // assume 2000(milliseconds) is time delay to complete all animations
            // determine time interval based on value of data-count
            var timeIntervalBeforeIncrement =
                1000 / elem.getAttribute("data-count");

            var interval = setInterval(increase, timeIntervalBeforeIncrement);
            function increase() {
                elem.innerHTML = current++;
                if (current > elem.getAttribute("data-count")) {
                    clearInterval(interval);
                }
            }
        }
    },
    mounted() {
        this.span = document.querySelectorAll(".count");
        var i = 0;
        for (i; i < this.span.length; i++) {
            this.countUp(this.span[i]);
        }
    }
};
</script>

<style lang="scss" scoped>
.single-counter {
    max-width: 100px;
    height: 96px;
    border-radius: 60px;
    position: relative;
    z-index: 1;
    margin-top: 30px;
    &::before {
        position: absolute;
        content: "";
        width: 100px;
        height: 80px;
        border-radius: 60px;
        top: 0;
        left: 0;
        transform: rotate(-45deg);
        z-index: -1;
    }
    p {
        color: white;
        font-size: 13px;
    }
    span {
        color: white;
        font-weight: bold;
        font-size: 22px;
    }
    @media (min-width: 567px) {
        max-width: 150px;
        height: 120px;
        &::before {
            width: 155px;
            height: 120px;
        }
        p {
            font-size: initial;
        }
    }
    @media (min-width: 990px) and (max-width: 1000px) {
        &::before {
            width: 150px;
            height: 120px;
        }
    }
}
.single-counter.counter-color-1::before {
    background: linear-gradient(#33c8c1 0%, #119bd2 100%);
}
.single-counter.counter-color-2::before {
    background: linear-gradient(#fe8464 0%, #fe6e9a 100%);
}
.single-counter.counter-color-3::before {
    background: linear-gradient(#361cc1 0%, #2e82ef 100%);
}
</style>
