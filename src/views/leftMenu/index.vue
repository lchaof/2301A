<template>
	<div>
		<p class="imglogo"><img src="../../assets/ihrmlogo.png"
				:style="isCollapse == true ? { width: '50px' } : { width: '70%' }" alt=""></p>

		<el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#4575fa" text-color="#fff"
			active-text-color="#fff" :collapse="isCollapse" router>

			<el-menu-item index="/about">
				<i class="el-icon-brush"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="/employees">
				<i class="el-icon-s-custom"></i>
				<span slot="title">员工</span>
			</el-menu-item>
			<el-menu-item index="/company">
				<i class="el-icon-setting"></i>
				<span slot="title">公司设置</span>
			</el-menu-item>
			<el-menu-item index="/permission">
				<i class="el-icon-goods"></i>
				<span slot="title">权限管理</span>
			</el-menu-item>
			<el-menu-item index="1">
				<i class="el-icon-s-grid"></i>
				<span slot="title">社保</span>
			</el-menu-item>
			<el-menu-item index="/approvals">
				<i class="el-icon-s-order"></i>
				<span slot="title">审批</span>
			</el-menu-item>
			<el-menu-item index="1">
				<i class="el-icon-s-release"></i>
				<span slot="title">考勤</span>
			</el-menu-item>
			<el-menu-item index="1">
				<i class="el-icon-food"></i>
				<span slot="title">工资</span>
			</el-menu-item>
			<el-menu-item index="/framework">
				<i class="el-icon-share"></i>
				<span slot="title">组织架构</span>
			</el-menu-item>

		</el-menu>
	</div>
</template>

<script>
export default {
	data () {
		return {
			isCollapse: false
		};
	},
	methods: {},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped>
.imglogo {
	text-align: center;
	margin-bottom: 10px;
	height: 5%;

	img {
		height: 100%;
	}
}
</style>
