<template>
	<div>
		<div class="top">
			<el-button>请假 | <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
				</el-switch><i class="el-icon-setting"></i></el-button>
			<el-button>加班 | <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
				</el-switch><i class="el-icon-setting"></i></el-button>
			<el-button>离职 | <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
				</el-switch><i class="el-icon-setting"></i></el-button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			value: true
		};
	},
	methods: {},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped>
.top {
	padding: 20px;
	background-color: #fff;
	border-radius: 3px;
	margin: 15px;
	border: 1px solid #ebeef5;
}
</style>
