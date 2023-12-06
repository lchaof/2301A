<template>
	<div>
		<!-- top提示 -->
		<div class="top">

			<el-button type="primary" size="mini" @click="$router.push('/securitySetting')">添加权限</el-button>
		</div>
		<!-- 表格 -->
		<div class="table">
			<el-table :data="data" size="mini" style="width: 100%;margin-bottom: 20px;" row-key="id" border
				:tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
				<el-table-column prop="name" label="名称" header-align="center" align="center">
				</el-table-column>
				<el-table-column prop="code" label="标识" header-align="center" align="center">
				</el-table-column>
				<el-table-column prop="description" label="描述" header-align="center" align="center">
				</el-table-column>
				<el-table-column prop="address" label="操作" header-align="center" align="center">
					<template slot-scope="scope">
						<el-button type="text">添加</el-button>
						<el-button type="text">编辑</el-button>
						<el-button type="text">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import { queryPermission } from '../../utils/aip'
export default {
	data () {
		return {
			data: []
		};
	},
	methods: {
		getPermission () {
			queryPermission().then(res => {
				console.log(res);
				const totalData = res.data
				totalData.forEach(item => {
					if (item.pid == 0) {
						this.data.push({ ...item, children: [] })
					}
				})
				this.data.forEach((item, index) => {
					totalData.forEach(item1 => {
						if (item.id == item1.pid) {
							console.log(index);
							this.data[index].children.push({ ...item1 })
						}
					})
				})
				console.log(this.data);
			})
		}
	},
	computed: {},
	filters: {},
	watch: {},
	created () {
		this.getPermission()
	}
};
</script>

<style lang="scss" scoped>
.top {
	padding: 20px;
	background-color: #fff;
	box-shadow: 3px 3px 5px #ccc;
	text-align: right !important;
}

.table {
	margin-top: 20px;
}
</style>
