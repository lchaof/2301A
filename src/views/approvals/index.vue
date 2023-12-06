<template>
	<div>
		<!-- top提示 -->
		<div class="top">
			<p class="top1"> <svg-icon icon-class="tishi" />当前审批中 0 本月审批通过 1 本月审批驳回 0</p>
			<el-button type="primary" size="mini" @click="$router.push('/securitySetting')">流程设置</el-button>
		</div>
		<!-- 表格 -->
		<div class="table">
			<el-table ref="multipleTable" :data="data" tooltip-effect="dark" style="width: 100%">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="序号" type="index">
				</el-table-column>
				<el-table-column prop="processName" label="审批类型" sortable>

				</el-table-column>
				<el-table-column prop="username" label="申请人" sortable>

				</el-table-column>
				<el-table-column prop="procCurrNodeUserName" label="当前审批人" sortable>

				</el-table-column>
				<el-table-column label="审批发起时间" sortable>
					<template slot-scope="scope">
						{{ new Date(scope.row.procApplyTime).toLocaleDateString() }}
					</template>
				</el-table-column>
				<el-table-column label="审批状态" sortable>
					<template slot-scope="scope">
						<span v-if="scope.row.processState == 2">审核通过</span>
						<span v-if="scope.row.processState == 4">撤销</span>
						<span v-if="scope.row.processState == 1">审批中</span>
					</template>
				</el-table-column>
				<el-table-column label="操作" sortable>
					<template slot-scope="scope">
						<el-button type="text">查看</el-button>
					</template>
				</el-table-column>

			</el-table>
			<!-- 分页 -->
			<div class="Pagination">
				<el-pagination small layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>

		</div>


	</div>
</template>

<script>
import { queryApprovals } from '@/utils/aip'
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
		getApprovals () {
			queryApprovals(this.info).then(res => {
				console.log(res);
				this.data = res.data.rows
				this.total = res.data.total
			})
		}
	},
	computed: {},
	filters: {},
	watch: {},
	created () {
		this.getApprovals()
	}
};
</script>

<style lang="scss" scoped>
.top {
	padding: 20px;
	background-color: #fff;
	box-shadow: 3px 3px 5px #ccc;
	display: flex;
	align-items: center;
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
	margin-top: 10px;
	background-color: #fff;
	box-shadow: 3px 3px 5px #ccc;
	padding: 20px;
}
.Pagination{
	text-align: center;
}
</style>
