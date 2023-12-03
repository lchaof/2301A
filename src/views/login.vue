<template>
	<div class="login">
		<div class="box">
			<img class="loginimg" src="../assets/logintext.png" alt="">
			<div class="form">
				<el-form ref="form" :model="form">
					<el-form-item>
						<el-input v-model="form.mobile" prefix-icon="el-icon-user-solid"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="form.password" prefix-icon="el-icon-lock" show-password></el-input>
					</el-form-item>
					<el-form-item>
						<el-button style="width: 100%;" type="primary" @click="onSubmit">登录</el-button>

					</el-form-item>
				</el-form>
			</div>

		</div>

	</div>
</template>

<script>
import { querylogin } from '../util/aip'
export default {
	data () {
		return {
			form: {
				mobile: '13800000002',
				password: 'hm#qd@23!',
			}
		};
	},
	methods: {
		onSubmit () {
			querylogin(this.form).then(res => {
				this.$message({
					message: res.message,
					type: 'success'
				});
				this.$router.push('/')
			})
		}
	},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped>
.login {

	background-image: url(../assets/login.jpg);
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.box {
	width: 500px;
	// background-color: #fff;
	padding: 10px;
}

.loginimg {
	width: 100%;
	margin-bottom: 30px;
}
</style>
