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
						<el-button type="text">角色</el-button>
						<el-button type="text" disabled>删除</el-button>
					</template>
				</el-table-column>
			</el-table>

		</div>
	</div>
</template>

<script>
import { queryUser } from '../../utils/aip'
export default {
	data () {
		return {
			info: {
				page: 1,
				size: 10
			},
			total: 0,
			data: []
		};
	},
	methods: {
		getUser () {
			queryUser(this.info).then(res => {
				console.log(res);
				this.total = res.data.total
				this.data = res.data.rows
			})
		},
		handleLook (id) {
			console.log(id);
			this.$router.push({
				path: '/detail',
				query: {
					id: id
				}
			})
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
