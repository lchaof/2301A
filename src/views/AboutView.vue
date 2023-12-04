<template>
	<div class="about">
		<!-- 首页上方 -->
		<div class="title one">
			<div class="oneleft">
				<img src="../assets/renimg.jpg" alt="">
			</div>
			<div class="oneright">
				<p style="font-size: 24px; padding: 0 0 15px; color: #303133;">早安，管理员，祝你开心每一天！</p>
				<p style="font-size: 20px; color: #7f8c8d;">管理员 | 传智播客 - 总裁办</p>
			</div>

		</div>
		<!-- 首页下方 -->
		<div class="two ">
			<div class="twoleft">
				<!-- 日历 -->
				<div class="time homepage title">
					<div class="header">
						<span>工作日历</span>
					</div>
					<timeIndex />


				</div>
				<!-- 公告 -->
				<div class=" notice performance title">
					<div class="header">
						<span>公告</span>
					</div>
					<div class="contentItem">
						<ul class="noticeList">
							<li>
								<div class="item">
									<img src="@/assets/noticeimg.jpeg" alt="">
									<div>
										<p><span class="col">朱继柳</span> 发布了 第1期“传智大讲堂”互动讨论获奖名单公布</p>
										<p>2018-07-21 15:21:38</p>
									</div>
								</div>
							</li>
							<li>
								<div class="item">
									<img src="@/assets/noticeimg.jpeg" alt="">
									<div>
										<p><span class="col">朱继柳</span> 发布了 第2期“传智大讲堂”互动讨论获奖名单公布</p>
										<p>2018-07-21 15:21:38</p>
									</div>
								</div>
							</li>
							<li>
								<div class="item">
									<img src="@/assets/noticeimg.jpeg" alt="">
									<div>
										<p><span class="col">朱继柳</span> 发布了 第3期“传智大讲堂”互动讨论获奖名单公布</p>
										<p>2018-07-21 15:21:38</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="towringt">
				<!-- 流程申请 -->
				<div class="towringtone title">
					<span>流程申请</span>
					<div class="towringbtn">
						<button>加班离职</button>
						<button>请假调休</button>
						<button>审批列表</button>
						<button>我的信息</button>
					</div>
				</div>
				<!-- 绩效指数 -->
				<div class="performance title">
					<div class="header">
						<span>绩效指数</span>
					</div>
					<radarIndex />
				</div>
				<!-- 帮助链接 -->
				<div class="towringtone title">
					<span>帮助链接</span>
					<div class="help">
						<ul>
							<li>
								<img src="../assets/renimg.jpg" alt="">
								<p>入门指南</p>
							</li>
							<li>
								<img src="../assets/renimg.jpg" alt="">
								<p>在线帮助手册</p>
							</li>
							<li>
								<img src="../assets/renimg.jpg" alt="">
								<p>联系技术支持</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import timeIndex from '@/views/time/index.vue'
import radarIndex from '@/views/radar/index.vue'
export default {
	components: { timeIndex, radarIndex },
	data () {
		return {

		};
	},
	methods: {},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped>
.title {
	background-color: #fff;
	box-shadow: 2px 2px 2px 2px #f0f0f0;
}

.one {
	display: flex;
	align-items: center;
	padding: 20px;
	margin-bottom: 20px;

	img {
		width: 100px;
		margin-right: 35px;
	}
}

.two {
	display: flex;
	justify-content: space-between;

	.twoleft {
		width: 48%;
		height: 100vh;


	}

	.tworight {
		width: 46%;

	}

	.towringt {
		width: 46%;

	}
}

.time {
	width: 765.19px;
	height: 573.66px;
	margin-bottom: 20px;
}

.header {
	padding: 18px 20px;
	border-bottom: 1px solid #ebeef5;
	box-sizing: border-box;

	span {
		font-size: 24px;
		color: #2c3e50;
	}
}

.towringtone {
	height: 190.26px;
	margin-bottom: 20px;
	padding: 20px;

	span {
		border-bottom: 4px solid #8a97f8;
		padding-bottom: 10px;
		font-size: 24px;
		color: #2c3e50;
		display: inline-block;
		margin-bottom: 20px;
	}

	button {
		padding: 16px 26px;
		font-size: 16px;
		border: 1px solid #dcdfe6;
		background: #fff;
		color: #606266;
		border-radius: 5px;
		margin-right: 5px;
	}
}

.performance {
	height: 515.59px;
	padding: 5px 10px;
	margin-bottom: 20px;
}

.help {
	ul {
		display: flex;
		justify-content: space-around;

		li {
			list-style: none;
			text-align: center;

			img {
				width: 50px;
			}

			p {
				padding: 10px 0px;
			}
		}
	}
}

.notice {
	width: 765.19px !important;
}

.noticeList {
	padding: 50px;

	li {
		list-style: none;
		padding: 20px 0px;
		border-bottom: 1px solid #d1d1d1;
		.item {
			display: flex;

			img {
				width: 56px;
				height: 56px;
				border-radius: 50%;
				margin-right: 10px;
			}
		}
	}

}
</style>
