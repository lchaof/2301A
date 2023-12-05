<template>
	<div class="framework title">
		<el-tree :data="data" default-expand-all :expand-on-click-node="false">
			<span class="custom-tree-node" slot-scope="{ node, data }">
				<span>{{ data.name }}</span>
				<span>
					<span class="principal">{{ !data.manager ? '负责人' : data.manager }}</span>
					<el-dropdown @command="handleCommand($event, data)">
						<span class="el-dropdown-link">
							操作<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="tian">添加子部门</el-dropdown-item>
							<el-dropdown-item v-show="data.manager" command="bian">编辑部门</el-dropdown-item>
							<el-dropdown-item v-show="data.manager" command="del">删除部门</el-dropdown-item>

						</el-dropdown-menu>
					</el-dropdown>
				</span>
			</span>
		</el-tree>
		<addFramework ref="addFramework" v-if="flag" @qx="qx" @add="add"></addFramework>
	</div>
</template>

<script>
import { querydepartment, bjframework, queryDelframework } from '../../utils/aip'
import addFramework from '@/views/addFramework/index.vue'
export default {
	components: { addFramework },
	data () {
		return {
			data: [],
			flag: false,
		};
	},
	methods: {
		/**
		 * 获取全部数据接口
		 */
		getData () {
			querydepartment().then(res => {

				/**总数据 */
				const result = res.data.depts
				result.forEach(item => {
					if (item.pid == -1) {
						this.data.push({ ...item, children: [] })
					} else if (item.pid == "") {
						this.data[0].children.push({ ...item, children: [] })
					}
				})
				this.data[0].children.forEach(item => {
					result.forEach(item1 => {
						if (item.id == item1.pid) {
							item.children.push(item1)
						}
					})
				})


			})
		},
		/**
		 *点击添加部门
		 * @param {点击之后传递过来的data每一项} command
		 */
		handleCommand (event, val) {
			// console.log(event, 'event');
			// console.log(val, 'val');

			if (event == 'tian') {
				this.flag = true
				this.$nextTick(() => {
					this.$refs.addFramework.txt = '新增部门'
					this.$refs.addFramework.flag = 'tian'
				})
				if (val.pid == '') {
					this.$nextTick(() => {
						this.$refs.addFramework.ruleForm.pid = val.id
					})
				} else if (val.pid != '' && val.pid != -1) {
					this.$nextTick(() => {
						this.$refs.addFramework.ruleForm.pid = val.id
					})
				}

			} else if (event == 'bian') {
				this.flag = true
				console.log(val.id);
				this.$nextTick(() => {
					this.$refs.addFramework.txt = '编辑部门'
					this.$refs.addFramework.flag = 'bian'
					bjframework(val.id).then(res => {
						console.log(res);
						this.$refs.addFramework.ruleForm.code = res.data.code
						this.$refs.addFramework.ruleForm.introduce = res.data.introduce
						this.$refs.addFramework.ruleForm.manager = res.data.manager
						this.$refs.addFramework.ruleForm.name = res.data.name
						this.$refs.addFramework.ruleForm.pid = res.data.id
						this.$refs.addFramework.obj.pid = res.data.pid
					})
				})



			} else {
				console.log(val.id);
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					queryDelframework(val.id).then(res => {
						console.log(res);
						this.data = []
						this.getData()
					})


				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			}



		},
		/**
		 * 点击取消
		 */
		qx () {
			this.flag = false
		},
		/**
		 * 点击成功
		 */
		add () {
			this.flag = false
			this.data = []
			this.getData()
		}
	},
	computed: {},
	filters: {},
	watch: {},
	created () {
		this.getData()
	}
};
</script>

<style lang="scss" scoped>
.framework {
	padding: 20px;
	background-color: #fff;
}

.title {

	box-shadow: 2px 2px 2px 2px #f0f0f0;
}

.custom-tree-node {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	padding-right: 8px;
}

.principal {
	display: inline-block;
	margin-right: 20px;
}
</style>
