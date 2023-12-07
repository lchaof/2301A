<template>
	<div>
		<!-- top提示 -->
		<div class="top">
			<div class="topleft">
				<p class="top1"> <svg-icon icon-class="tishi" />共{{ total }}条记录</p>
			</div>
			<div class="topring">
				<el-button type="danger" size="mini">简单表头导出</el-button>
				<el-button type="info" size="mini">复杂表头导出</el-button>
				<el-button type="success" size="mini">excel导入</el-button>
				<el-button type="primary" size="mini" disabled>新增员工</el-button>
			</div>


		</div>
		<!-- 表格 -->
		<div class="table">

			<el-table ref="singleTable" :data="data" highlight-current-row style="width: 100%">
				<el-table-column type="index" width="50">
					<template slot="header" slot-scope="scope">
						序号
					</template>
				</el-table-column>
				<el-table-column property="username" label="姓名">
				</el-table-column>
				<el-table-column property="name" label="头像">
					<template slot-scope="scope">
						<div class="block"><el-avatar :size="50"
								src="https://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png"></el-avatar></div>
					</template>
				</el-table-column>
				<el-table-column property="mobile" label="手机号">
				</el-table-column>
				<el-table-column property="workNumber" label="工号">
				</el-table-column>
				<el-table-column property="address" label="聘用形式">
				</el-table-column>
				<el-table-column property="departmentName" label="部门">
				</el-table-column>
				<el-table-column property="timeOfEntry" label="入职时间">
				</el-table-column>
				<el-table-column property="address" label="账户状态">
				</el-table-column>
				<el-table-column property="address" label="操作" width="300">
					<template slot-scope="scope">
						<el-button type="text" @click="handleLook(scope.row.id)">查看</el-button>
						<el-button type="text">转正</el-button>
						<el-button type="text">调岗</el-button>
						<el-button type="text">离职</el-button>
						<el-button type="text" @click="handleLookUse(scope.row.id)">角色</el-button>
						<el-button type="text" disabled>删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="Pagination">
				<el-pagination small layout="prev, pager, next" :total="total" @current-change="handleCurrentChange">
				</el-pagination>
			</div>
		</div>
		<!-- 对话框 -->
		<el-dialog title="分配角色" :visible.sync="dialogVisible" width="30%">

			<el-checkbox-group v-model="info2.checkList">
				<el-checkbox label="A">系统管理员</el-checkbox>
				<el-checkbox label="604e2b03488be61b90b68777">人事经理</el-checkbox>
				<el-checkbox label="604e2b19488be61b90b6877a">人事专员</el-checkbox>
				<el-checkbox label="604e2b12488be61b90b68779">薪资专员</el-checkbox>
				<el-checkbox label="604e2b25488be61b90b6877b">员工</el-checkbox>

			</el-checkbox-group>

			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="handleAddAllot">确 定</el-button>
				<el-button @click="dialogVisible = false">取 消</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import { queryUser, queryUserId, queryAllotUser } from '../../utils/aip'
export default {
	data () {
		return {
			info: {
				page: 1,
				size: 10
			},
			total: 0,
			data: [],
			dialogVisible: false,
			info2: {
				id: '',
				checkList: []
			},

		};
	},
	methods: {
		// 获取数据
		getUser () {
			// this.data = []
			queryUser(this.info).then(res => {
				console.log(res);
				this.total = res.data.total
				this.data = res.data.rows
			})
		},
		// 跳转详情
		handleLook (id) {
			console.log(id);
			this.$router.push({
				path: '/detail',
				query: {
					id: id
				}
			})
		},
		// 分页
		handleCurrentChange (val) {
			console.log(`当前页: ${val}`);
			this.info.page = val

			this.getUser()
		},
		// 对话框

		handleLookUse (id) {

			queryUserId(id).then(res => {
				this.dialogVisible = true
				this.info2.id = id
				this.info2.checkList = res.data.roleIds
			})

		},
		handleAddAllot () {
			this.dialogVisible = false
			// queryAllotUser(this.info2).then(res=>{
			// 	console.log(res);
			// })
		}
	},
	computed: {},
	filters: {},
	watch: {},
	created () {
		this.getUser()
	}
};
</script>

<style lang="scss" scoped>
.top {
	padding: 20px;
	background-color: #fff;
	box-shadow: 3px 3px 5px #ccc;
	display: flex;
	justify-content: space-between;
}

.top1 {
	padding: 0 10px;
	line-height: 34px;
	border-radius: 3px;
	border: 1px solid #91d5ff;
	background: #e6f7ff;
	color: #303133;

	.svg-icon {
		display: inline-block;

		margin-right: 10px;
	}
}

.table {
	margin-top: 20px;
	padding: 20px;
	box-shadow: 3px 3px 5px #ccc;

}
</style>
