<template>
	<div>
		<el-container>
			<el-aside width="200px">
				<p><img src="../assets/ihrmlogo.png" alt=""></p>
			</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	data () {
		return {};
	},
	methods: {},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped>
.el-aside {
	background-color: #4575fa;
	height: 100vh;
}

.el-header {
	background-color: #4e7efc;
}
</style>
