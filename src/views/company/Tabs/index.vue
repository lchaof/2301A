<template>
	<div>
		<el-tabs v-model="activeName">
			<el-tab-pane label="用户管理" name="first">
				<p style="margin-bottom: 20px;"><el-button type="primary" size="mini" @click="handleadd">新增角色</el-button></p>
				<div>
					<el-table :data="list" style="width: 100%" border header-align="center">
						<el-table-column type="index" width="50">
							<template slot="header" slot-scope="scope" align="center">
								序号
							</template>
						</el-table-column>
						<el-table-column prop="name" label="名称" width="180" align="center">
						</el-table-column>
						<el-table-column prop="description" label="描述" align="center">
						</el-table-column>
						<el-table-column prop="address" label="操作" align="center">
							<template slot-scope="scope">
								<el-button type="success" size="mini">分配权限</el-button>
								<el-button type="primary" size="mini" @click="handlebj(scope.row.id)">编辑</el-button>
								<el-button type="danger" size="mini" @click="handleDel(scope.row.id)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</el-tab-pane>
			<el-tab-pane label="公司信息" name="second">

				<el-alert :closable="false" title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改" type="info" show-icon>
				</el-alert>

				<div class="from">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="公司名称">
							<el-input placeholder="江苏传智播客教育科技股份有限公司" :disabled="true"></el-input>
						</el-form-item>
						<el-form-item label="公司地址">
							<el-input placeholder="北京市昌平区建材城西路金燕龙办公楼一层" :disabled="true"></el-input>
						</el-form-item>
						<el-form-item label="邮箱">
							<el-input placeholder="bd@itcastcn" :disabled="true"></el-input>
						</el-form-item>
						<el-form-item label="备注">
							<el-input type="textarea" placeholder="智播客官网-好口碑IT培训机构,一样的教育,不一样的品质" :disabled="true"></el-input>
						</el-form-item>
					</el-form>
				</div>



			</el-tab-pane>

		</el-tabs>
		<formValue ref="formValue" v-if="flag" @add="add" @qx="qx"></formValue>
	</div>
</template>

<script>

import { queryUserlist, queryAddRole, queryDelRole, queryGetRole } from '../../../utils/aip'
import formValue from '../form/index'
export default {
	components: { formValue },
	data () {
		return {
			activeName: 'first',
			form: {},
			info: {
				page: 1,
				pagesize: 10
			},
			list: [],
			flag: false,
		};
	},
	methods: {
		handleadd () {
			this.flag = true
			console.log(111);
			this.$nextTick(() => {
				this.$refs.formValue.flag = 'add'
			})
		},
		getlist () {
			queryUserlist(this.info).then(res => {
				console.log(res);
				this.list = res.data.rows
			})
		},
		add (val) {
			console.log(val);
			queryAddRole(val).then(res => {
				console.log(res);
				this.flag = false
				this.getlist()
			})
		},
		handleDel (id) {
			console.log(id);
			this.$confirm('确认删除该角色吗', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				queryDelRole(id).then(res => {
					console.log(res);
					this.$message({
						type: 'success',
						message: res.message
					});
					this.getlist()
				})

			}).catch(() => {

			});
		},
		handlebj (id) {
			this.flag = true
			this.$nextTick(() => {
				queryGetRole(id).then(res => {
					this.$refs.formValue.flag = 'bjform'
					console.log(res);
					console.log(this.$refs.formValue);
					this.$refs.formValue.addruleForm.description = res.data.description
					this.$refs.formValue.addruleForm.name = res.data.name
				})


			})
		},
		qx () {
			this.flag = false
		}
	},
	computed: {},
	filters: {},
	watch: {},
	created () {
		this.getlist()
	}
};
</script>

<style lang="scss" scoped>
.from {
	margin-left: 50px;
	margin-top: 30px;
	width: 500px;
}
</style>
