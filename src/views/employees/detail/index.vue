<template>
	<div>
		<div class="top">

			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="登录账户设置" name="one">
					<div class="oneform">
						<el-form :model="oneruleForm" :rules="rules" ref="oneruleForm" label-width="100px" class="demo-ruleForm">
							<el-form-item label="姓名" prop="name">
								<el-input v-model="oneruleForm.name"></el-input>
							</el-form-item>
							<el-form-item label="新密码" prop="password">
								<el-input v-model="oneruleForm.password" type="password"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="submitForm('ruleForm')">更新</el-button>
							</el-form-item>
						</el-form>
					</div>
				</el-tab-pane>
				<el-tab-pane label="个人详情" name="two">
					<div class="twoform">
						<div class="formone">
							<div class="left">
								<el-form ref="form" :model="twoform" label-width="80px" size="mini">
									<el-form-item label="工号">
										<el-input v-model="twoform.workNumber"></el-input>
									</el-form-item>
									<el-form-item label="姓名">
										<el-input v-model="twoform.username"></el-input>
									</el-form-item>
									<el-form-item label="手机">
										<el-input v-model="twoform.mobile"></el-input>
									</el-form-item>
									<el-form-item label="员工头像">
										<el-image style="width: 100px; height: 100px"
											src="https://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png"></el-image>
									</el-form-item>
									<el-form-item>
										<div class="bottombtn" style="	text-align: center;">
											<el-button type="primary">立即创建</el-button>
											<el-button>返回</el-button>
										</div>
									</el-form-item>
								</el-form>
							</div>
							<div class="right">
								<el-form ref="form" :model="twoform" label-width="80px" size="mini">
									<el-form-item label="入职时间">
										<el-date-picker v-model="twoform.timeOfEntry" type="date" placeholder="选择日期">
										</el-date-picker>
										</el-date-picker>
									</el-form-item>
									<el-form-item label="部门">
										<el-input v-model="twoform.departmentName"></el-input>
									</el-form-item>
									<el-form-item label="聘用形式">
										<el-select v-model="twoform.region" placeholder="请选择">
											<el-option label="区域一" value="shanghai"></el-option>
											<el-option label="区域二" value="beijing"></el-option>
										</el-select>
									</el-form-item>

								</el-form>
							</div>
						</div>
					</div>
					<div class="message">
						<p>基础信息</p>
						<div class="messageform">
							<el-form ref="form" :model="form" label-width="130px">
								<el-form-item label="最高学历">
									<el-select v-model="form.region" placeholder="请选择活动区域">
										<el-option label="初中" value="shanghai"></el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="员工照片">
									<el-image>
										<div slot="error" class="image-slot">
											<i class="el-icon-picture-outline"></i>
										</div>
									</el-image>
								</el-form-item>
								<el-form-item label="国家/地区">
									<el-select placeholder="请选择">
									</el-select>
								</el-form-item>
								<el-form-item label="护照号">
									<el-input placeholder="正规护照规格"></el-input>
								</el-form-item>
								<el-form-item label="身份证号">
									<el-input placeholder="正规身份证格式"></el-input>
								</el-form-item>
								<el-form-item label="籍贯">
									<el-input placeholder="籍贯地址"></el-input>
								</el-form-item>
								<el-form-item label="民族">
									<el-input placeholder="请输入名族"></el-input>
								</el-form-item>
								<el-form-item label="婚姻状况">
									<el-select placeholder="请选择">
									</el-select>

								</el-form-item>
								<el-form-item label="生日">
									<el-input placeholder="实例0323"></el-input>

								</el-form-item>
								<el-form-item label="年龄">
									<el-input placeholder=""></el-input>

								</el-form-item>
								<el-form-item label="星座">
									<el-select placeholder="请选择">
									</el-select>
								</el-form-item>
								<el-form-item label="血型">
									<el-select placeholder="请选择">
									</el-select>
								</el-form-item>
								<el-form-item label="户籍所在地">

								</el-form-item>
								<el-form-item label="政治面貌">
									<el-input placeholder=""></el-input>
								</el-form-item>
								<el-form-item label="入党时间">
									<el-date-picker type="date" placeholder="选择日期">
									</el-date-picker>
								</el-form-item>
								<el-form-item label="存档机构">
									<el-input placeholder="请输入"></el-input>
								</el-form-item>
								<el-form-item label="子女状态">
									<el-input placeholder="请输入"></el-input>
								</el-form-item>
								<el-form-item label="子女有无商业险">
									<template>
										<el-radio>有</el-radio>
										<el-radio>无</el-radio>
									</template>
								</el-form-item>
								<el-form-item label="有无违法违纪状态">
									<el-input placeholder="请输入"></el-input>
								</el-form-item>
								<el-form-item label="有无重大病史">
									<el-input placeholder="请输入"></el-input>
								</el-form-item>


							</el-form>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="岗位信息" name="three">角色管理</el-tab-pane>
			</el-tabs>

		</div>
	</div>
</template>

<script>
import { queryUserId } from '../../../utils/aip'
export default {
	data () {
		return {
			activeName: 'two',
			// 登录账号设置表单
			oneruleForm: {
				name: '',
				password: ''
			},
			// 登录账号设置表单
			rules: {
				name: [
					{ required: true, message: '请输入姓名', trigger: 'blur' },
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'change' }
				]
			},
			// 个人设置表单
			formInline: {
				user: '',
				region: ''
			},
			// 个人设置表单
			twoform: {
				workNumber: '',
				username: '',
				mobile: '',
				departmentName: '',
				timeOfEntry: '',
				region: ''

			},
			form: {
				name: '',
				region: '初中',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		};
	},
	methods: {
		handleClick (tab, event) {
			// console.log(tab, event);
		},
		submitForm () {
			console.log(this.oneruleForm);
		},
		getUserId () {
			queryUserId(this.$route.query.id).then(res => {
				console.log(res);
				this.oneruleForm.name = res.data.username
				this.oneruleForm.password = res.data.password
				this.twoform.workNumber = res.data.workNumber
				this.twoform.username = res.data.username
				this.twoform.mobile = res.data.mobile
				this.twoform.departmentName = res.data.departmentName
				this.twoform.timeOfEntry = res.data.timeOfEntry
			})
		},
		onSubmit () {
			console.log('submit!');
		}
	},
	computed: {},
	filters: {},
	watch: {},
	created () {
		this.getUserId()
	}
};
</script>

<style lang="scss" scoped>
.top {
	padding: 20px;
	background-color: #fff;
	box-shadow: 3px 3px 5px #ccc;
}

.oneform {
	margin-top: 20px !important;
	width: 400px;
	margin: 0 auto;
}

.twoform {
	margin-top: 20px !important;

}

.formone {
	display: flex;
	justify-content: space-between;

	.left {
		width: 38%;
	}

	.right {
		width: 38%;

	}
}

.message {
	margin-top: 20px !important;
}

.messageform {
	margin-top: 20px !important;
	width: 700px;
	margin: 0 auto;
}
</style>
