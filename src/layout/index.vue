<template>
	<div>
		<el-container>
			<!-- 左侧导航菜单 -->
			<el-aside :width="isCollapse == true ? '50px' : '200px'" style="transition: 0.5s;">
				<leftMenu ref="leftMenu" />
			</el-aside>
			<el-container>
				
				<!-- 右侧上部分 -->
				<el-header>
					<div class="headerleft">
						<p class="iconbtn">
							<!-- <svg-icon :icon-class="isCollapse == true ? 'zhedie-zhankai' : 'zhedie-shouqi'"
								@click="isCollapse = !isCollapse" /> -->
							<i :class="isCollapse == true ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleisCollapse"></i>
						</p>
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
				<!-- 右侧下部分 -->
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import { queryprofile } from '../utils/aip'
import { removeToken } from '../utils/auth'
import leftMenu from '../views/leftMenu/index.vue'

export default {
	components: { leftMenu },
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
		},
		handleisCollapse () {
			this.isCollapse = !this.isCollapse
			console.log(this.$refs.leftMenu);
			this.$refs.leftMenu.isCollapse = this.isCollapse
		}
	},
	computed: {},
	filters: {},
	watch: {},
	created () {
		queryprofile().then(res => {
			// console.log(res);
		})
	}
};
</script>

<style lang="scss" scoped>
i {
	color: #fff !important;
	vertical-align: middle;
}

.el-menu-item:hover {
	color: #4e7efc !important;
	background-color: #cccccc !important;

	i {
		color: #4e7efc !important;
		vertical-align: middle;
	}
}

.el-aside {
	background-color: #5a8cff;
	height: 100vh;
	background: url("../assets/leftnavBg.png") no-repeat 0 100%,
		-webkit-linear-gradient(bottom, #3d6df8, #5b8cff);
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

.el-menu {
	border: none !important;
}
</style>
