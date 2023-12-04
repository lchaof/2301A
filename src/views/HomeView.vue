<template>
	<div>
		<el-container>
			<el-aside :width="isCollapse == true ? '50px' : '200px'">
				<p class="imglogo"><img src="../assets/ihrmlogo.png"
						:style="isCollapse == true ? { width: '50px' } : { width: '70%' }" alt=""></p>
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#5889ff" text-color="#fff"
					active-text-color="#43a7fe" router>
					<el-menu-item index="/about">
						<i class="el-icon-brush"></i>
						<span slot="title">首页</span>
					</el-menu-item>
					<el-menu-item index="1">
						<i class="el-icon-s-custom"></i>
						<span slot="title">员工</span>
					</el-menu-item>
					<el-menu-item index="1">
						<i class="el-icon-setting"></i>
						<span slot="title">公司设置</span>
					</el-menu-item>
					<el-menu-item index="1">
						<i class="el-icon-goods"></i>
						<span slot="title">权限管理</span>
					</el-menu-item>
					<el-menu-item index="1">
						<i class="el-icon-s-grid"></i>
						<span slot="title">社保</span>
					</el-menu-item>
					<el-menu-item index="1">
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
			</el-aside>
			<el-container>
				<el-header>
					<div class="headerleft">
						<p class="iconbtn"><i :class="isCollapse == true ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
								@click="isCollapse = !isCollapse"></i></p>
						<p class="icontxt">江苏传智播客教育科技股份有限公司<span class="breadBtn">体验版</span></p>
					</div>
					<div class="headerright">
						<p><img style="width: 30px; margin-right: 10px;" src="../assets/toptxtbtn.png" alt=""></p>
						<el-avatar>
							<img src="../assets/renimg.jpg" alt="">
						</el-avatar>
						<el-dropdown trigger="click" @command="handleCommand">
							<span class="el-dropdown-link" style="color: #fff; margin-left: 10px;">
								管理员<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="a">首页</el-dropdown-item>
								<el-dropdown-item command="b">项目地址</el-dropdown-item>
								<el-dropdown-item command="c">退出登录</el-dropdown-item>

							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</el-header>
				<el-main>


					<router-view />

				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import { queryprofile } from '../util/aip'
import { removeToken } from '../util/auth'
export default {
	data () {
		return {
			isCollapse: false
		};
	},
	methods: {
		/**
		 * 退出登录下拉菜单
		 */
		handleCommand (command) {
			if (command == 'a') {
				this.$router.push('/')
			} else if (command == 'c') {
				this.$message({
					message: '退出成功',
					type: 'success'
				});
				setTimeout(() => {
					removeToken()
					this.$router.go(0)
				}, 1000)
			}
		}
	},
	computed: {},
	filters: {},
	watch: {},
	created () {
		queryprofile().then(res => {
			console.log(res);
		})
	}
};
</script>

<style lang="scss" scoped>
.el-aside {
	background-color: #5a8bff;
	height: 100vh;

}

.el-main {
	background-color: #fcfcfc;
	height: calc(100vh - 60px);
	overflow: scroll;
}

.el-header {
	background-color: #4e7efc;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.headerleft {
	display: flex;
}

.imglogo {
	text-align: center;
	margin-bottom: 10px;
}

.iconbtn {
	color: #fff;
	font-size: 20px;
}

.icontxt {
	font-size: 18px;
	color: #fff;
	margin-left: 20px;
}

.breadBtn {
	background: #84a9fe;
	font-size: 14px;
	padding: 0 10px;
	display: inline-block;
	height: 30px;
	line-height: 30px;
	border-radius: 10px;
	margin-left: 15px;
}

.headerright {
	display: flex;
	align-items: center;
}
</style>
