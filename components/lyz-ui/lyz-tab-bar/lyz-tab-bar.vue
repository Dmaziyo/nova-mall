<template>
	<view class="lyz_tab_bar_view">
		<view class="lyz-tab-bar" :style="{
			'background-color':tabBar.backgroundColor,
			'border-top-color':tabBar.borderStyle? tabBar.borderStyle: '#FFFFFF'
			
		}">
			<block v-for="(item,index) in tabBar.list">
				<view class="tab-bar-list" @tap="clickItem(item,item.pagePath)">
					<image v-if="item.iconPath"
						:src="pagePath == item.pagePath ? item.selectedIconPath : item.iconPath" mode="">
					</image>
					<text :style="{
			'color':pagePath == item.pagePath ? tabBar.selectedColor : tabBar.color,
		}">{{item.text}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			pagePath: {
				type: String,
				default: ''
			},
			tabBar: {
				type: Object,
				default: {
					color: "#666666",
					backgroundColor: "#FFFFFF",
					selectedColor: "#fe5572",
					borderStyle: "#D7D7D7",
					list: [{
							text: "首页",
							pagePath:'pages/tabbar/home/home',
							iconPath: 'http://www.liwanying.top/applate-icon/tabbar-home.png',
							selectedIconPath: 'http://www.liwanying.top/applate-icon/shouyexuanzhong.png'
						},
						{
							text: "积分商城",
							pagePath:'pages/tabbar/good/good',
							iconPath: 'http://www.liwanying.top/applate-icon/jifenshangcheng.png',
							selectedIconPath: 'http://www.liwanying.top/applate-icon/jifenshangchengxuanzhong.png'
						},
						{
							text: "购物车",
							pagePath:'pages/tabbar/shop/shop',
							iconPath: 'http://www.liwanying.top/applate-icon/gouwuche.png',
							selectedIconPath: 'http://www.liwanying.top/applate-icon/gouwuchexuanzhong.png'
						},
						{
							text: "我的",
							pagePath:'pages/tabbar/my/my',
							iconPath: 'http://www.liwanying.top/applate-icon/wode.png',
							selectedIconPath: 'http://www.liwanying.top/applate-icon/wodexuanzhong.png'
						}
					]
				}
			}
		},
		data() {
			return {
			};
		},
		mounted() {
			uni.hideTabBar()
		},
		methods: {
			// 点击tab触发
			clickItem(item, pages) {
				uni.switchTab({
					url: '/'+pages,
					fail(err) {
						uni.redirectTo({
							url: '/'+pages,
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.lyz_tab_bar_view {
		height: 100rpx;
		width:100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
	.lyz-tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 100rpx;
		background-color: pink;
		width: 100vw;
		display: flex;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		align-items: center;
		justify-content: space-around;
		border-top-width: 1rpx;
		border-top-style: solid;
	}

	.tab-bar-list {
		position: relative;
		flex: 1;

		image {
			margin: 0 auto;
			display: block;
			vertical-align: middle;
			width: 50rpx;
			height: 50rpx;
			margin-bottom: 3rpx;
		}

		.tab-bar-list-text {
			position: absolute;
			right: 50%;
			top: 0rpx;
			transform: translateX(110%);
			padding: 0 14rpx;
			height: 38rpx;
			color: #FFFFFF;
			background-color: #FA4141;
			border-radius: 38rpx;
		}

		text {
			text-align: center;
			display: block;
			font-size: 24rpx;
		}
	}
</style>
