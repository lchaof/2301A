<template>
	<div>
		<el-dialog :title="txt" :visible.sync="dialogVisible" width="30%">

			<div class="rulesform" v-if="flag == 'add'">
				<el-form :model="addruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="角色名称" prop="name">
						<el-input v-model="addruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="角色描述">
						<el-input v-model="addruleForm.description"></el-input>
					</el-form-item>
				</el-form>
				<span slot="footer" class="dialog-footer" style=" text-align: center;">
					<div class="btn">
						<el-button @click="dialogVisible = false" size="mini">取 消</el-button>
						<el-button type="primary" @click="handleaddform" size="mini">确 定</el-button>
					</div>

				</span>
			</div>
			<div class="bjform" v-if="flag == 'bjform'">
				<el-form :model="addruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="角色名称" prop="name">
						<el-input v-model="addruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="角色描述">
						<el-input v-model="addruleForm.description"></el-input>
					</el-form-item>
				</el-form>
				<span slot="footer" class="dialog-footer" style=" text-align: center;">
					<div class="btn">
						<el-button @click="qx" size="mini">取 消</el-button>
						<el-button type="primary" @click="handleaddform" size="mini">确 定</el-button>
					</div>

				</span>
			</div>

		</el-dialog>
	</div>
</template>

<script>

export default {
	data () {
		return {
			dialogVisible: true,
			txt: '编辑弹层',
			addruleForm: {
				name: '',
				description: ''
			},
			rules: {
				name: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				]
			},
			flag: 'add',
		};
	},
	methods: {
		handleaddform () {
			this.$emit('add', this.addruleForm)
		},
		qx(){
			this.$emit('qx')
		}
	},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped>
.btn {
	width: 100%;
	text-align: center;
}
</style>
