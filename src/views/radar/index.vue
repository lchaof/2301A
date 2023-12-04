<template>
	<div>
		<div id="main"></div>
	</div>
</template>

<script>
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);

export default {
	data () {
		return {};
	},
	methods: {
	},
	computed: {},
	filters: {},
	watch: {},
	mounted () {
		var chartDom = document.getElementById('main');
		var myChart = echarts.init(chartDom);
		var option;

		option = {
			title: {

			},
			legend: {
				data: ['Allocated Budget', 'Actual Spending']
			},
			radar: {
				// shape: 'circle',
				indicator: [
					{ name: '考勤', max: 100 },
					{ name: '工资', max: 100 },
					{ name: '社保', max: 100 },
					{ name: '工作效率', max: 100 },
					{ name: '知识分享', max: 100 },
					{ name: '代码行数', max: 100 }
				]
			},
			series: [
				{
					name: 'Budget vs spending',
					type: 'radar',
					data: [
						{
							value: [10, 2, 100, 20, 100, 100],
							name: '龙哥'
						},
						{
							value: [30, 30, 30, 30, 30, 30],
							name: '岩哥'
						},
						{
							value: [70, 70, 70, 70, 70, 70],
							name: '志兄'
						}
					]
				}
			]
		};

		option && myChart.setOption(option);

	}
};
</script>

<style lang="scss" scoped>
#main {
	width: 500px;
	height: 400px;
	margin-left: 70px;
}
</style>
