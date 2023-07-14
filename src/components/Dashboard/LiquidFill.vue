<script>
import * as echarts from "echarts";


var data = 50;
var option = {
    series: [{
        type: 'liquidFill',
        radius: '60%',
        data: [data / 100, (data - 2) / 100, (data - 4) / 100],
        outline: {
            show: true
        },
        label: {
            normal: {
                textStyle: {
                    fontSize: 36
                }
            }
        }
    }]
};
export default {
    props: ['humidity'],
    components: {},
    data() {
        return {
        };
    },
    computed: {},
    watch: {
        humidity: {
            handler(newV, oldV) {
                this.myChart.setOption({
                    series: [{
                        type: 'liquidFill',
                        data: [newV / 100, (newV - 2) / 100, (newV - 4) / 100],
                        outline: {
                            show: true
                        },
                    }]
                })
            },
            deep: true
        },
    },
    methods: {
        handleResize() {
            this.myChart.resize();
        }
    },
    created() { },
    mounted() {
        this.myChart = echarts.init(document.getElementById("liquidfill"));
        this.myChart.setOption(option);
        window.addEventListener('resize', this.handleResize);
        // myChart.setOption(this.option);
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { } //如果页面有 keep-alive 缓存功能，这个函数会触发
};
</script>

<template>
    <div id="liquidfill" style="width: 100%;height:300px;"></div>
</template>

<style></style>
