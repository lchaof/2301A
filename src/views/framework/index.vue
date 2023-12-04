<template>
	<div class="framework title">
		<el-tree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
			<span class="custom-tree-node" slot-scope="{ node, data }">
				<span>{{ data.name }}</span>
				<span class="righe">
					<span>{{ data.manager }}</span>
					<el-button type="text" size="mini" @click="() => remove(node, data)">
						Delete
					</el-button>
				</span>
			</span>
		</el-tree>
	</div>
</template>

<script>
import { querydepartment } from '../../util/aip'
export default {
	data () {
		return {
			data: []
		};
	},
	methods: {},
	computed: {},
	filters: {},
	watch: {},
	created () {
		querydepartment().then(res => {
			console.log(res);
			this.data = res.data.depts
			console.log(this.data);
		})
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
</style>
