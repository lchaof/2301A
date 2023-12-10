<template>
	<div>

		<el-col :span="24">
			<el-card shadow="always">
				<tabs></tabs>
			</el-card>
		</el-col>


	</div>
</template>

<script>
import tabs from '../company/Tabs/index'
export default {
	components: { tabs },
	data () {
		return {};
	},
	methods: {},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped></style>
