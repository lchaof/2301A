<template>
	<el-dialog :title="txt" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
		<div class="form">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="部门名称" prop="name">
					<el-input v-model="ruleForm.name" placeholder="1-50个字符"></el-input>
				</el-form-item>
				<el-form-item label="部门编码" prop="code">
					<el-input v-model="ruleForm.code" placeholder="1-50个字符"></el-input>
				</el-form-item>
				<el-form-item label="部门负责人" prop="manager">
					<el-select v-model="ruleForm.manager" placeholder="请选择">
						<el-option label="管理员" value="管理员"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="部门介绍" prop="introduce">
					<el-input type="textarea" v-model="ruleForm.introduce" placeholder="1-300个字符"></el-input>
				</el-form-item>
			</el-form>
		</div>
		<span slot="footer" class="dialog-footer">
			<div class="bottombtn">
				<el-button @click="qx" size="mini">取 消</el-button>
				<el-button type="primary" @click="add" size="mini">确 定</el-button>
			</div>
		</span>
	</el-dialog>
</template>

<script>
import { addframework, querybjframework } from '../../utils/aip'
export default {
	data () {
		return {
			dialogVisible: true,
			txt: '',
			flag: '',
			ruleForm: {
				name: '',
				code: '',
				introduce: '',
				manager: '',
				pid: ''
			},
			rules: {
				name: [
					{ required: true, message: '请输入部门名称', trigger: 'blur' },

				],
				manager: [
					{ required: true, message: '请选择部门负责人', trigger: 'blur' }
				],
				code: [
					{ required: true, message: '请选择部门编码', trigger: 'blur' }
				],
				introduce: [
					{ required: true, message: '请输入部门介绍', trigger: 'blur' }
				]
			},
			obj: {
				name: '',
				code: '',
				introduce: '',
				manager: '',
				id: '',
				pid: ''
			}

		};
	},
	methods: {
		handleClose (done) {
			this.$confirm('确认关闭？')
				.then(_ => {
					done();
				})
				.catch(_ => { });
		},
		add () {
			if (this.flag == 'tian') {
				addframework(this.ruleForm).then(res => {
					console.log(res);
					if (res.success) {
						this.$message({
							message: res.message,
							type: 'success'
						});
					} else {
						this.$message.error(res.message);
					}
					this.$emit('add')
				})
			} else {
				this.obj.name = this.ruleForm.name
				this.obj.code = this.ruleForm.code
				this.obj.introduce = this.ruleForm.introduce
				this.obj.manager = this.ruleForm.manager
				this.obj.id = this.ruleForm.pid
				console.log(this.obj);
				querybjframework(this.obj).then(res => {
					this.$message({
						message: res.message,
						type: 'success'
					});
					this.$emit('add')
				})
			}



		},
		qx () {
			this.$emit('qx')
		}
	},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped>
.form {
	// width: 700px;
}

.el-dialog__footer {
	text-align: center !important;
}

.bottombtn {
	width: 100%;
	text-align: center;
}
</style>
