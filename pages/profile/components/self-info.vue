<template>
  <view class>
    <view class="custom-image-box">
      <uni-file-picker
        limit="1"
        :del-icon="false"
        disable-preview
        :imageStyles="imageStyles"
        file-mediatype="image"
        v-model="fileLists"
      ></uni-file-picker>
      <view class="flex-fitem color_333 font_28">点击修改头像</view>
    </view>
    <view class="info-box">
      <view class="input-box">
        <label class="form-label">昵称</label>
        <input class="form-input" placeholder="请输入昵称" v-model="userInfo.nickName" />
      </view>
      <view class="half-border"></view>
      <view class="input-box">
        <label class="form-label">用户ID</label>
        <input class="form-input" placeholder="用户ID" v-model="userInfo.userName" />
      </view>
      <view class="half-border"></view>

      <view class="input-box">
        <label class="form-label">性别</label>
        <uni-data-select
          style="width: 100px"
          v-model="userInfo.gender"
          :clear="false"
          :localdata="genderItems"
        ></uni-data-select>
      </view>
      <view class="half-border"></view>

      <view class="input-box">
        <label class="form-label">生日</label>
        <uni-datetime-picker
          type="date"
          v-model="userInfo.birthday"
          start="2021-3-20"
          end="2021-6-20"
        />
      </view>
      <view class="half-border"></view>

      <view class="input-box">
        <label class="form-label">城市</label>
        <uni-data-select v-model="userInfo.city" :localdata="range"></uni-data-select>
      </view>
      <view class="half-border"></view>

      <view class="input-box">
        <label class="form-label">职业</label>
        <input class="form-input" placeholder="填写职业" v-model="userInfo.job" />
      </view>
      <view class="half-border"></view>

      <view class="input-box">
        <label class="form-label">个性签名</label>
        <input
          class="form-input"
          placeholder="编写你的个性签名"
          v-model="userInfo.personalized_signature"
        />
      </view>
      <view class="half-border"></view>
    </view>
    <view style="padding: 15px">喜欢的分类</view>
    <view class="category">
      <uni-data-checkbox
        mode="tag"
        selectedColor="#fe5572"
        multiple
        v-model="userInfo.categories"
        :localdata="categories"
      ></uni-data-checkbox>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        imageStyles: {
          width: 90,
          height: 90,
          border: {
            radius: '50%',
          },
        },
        listStyles: {
          // 是否显示边框
          border: true,
          // 是否显示分隔线
          dividline: true,
          // 线条样式
          borderStyle: {
            width: 1,
            color: 'blue',
            style: 'dashed',
            radius: 2,
          },
        },
        fileLists: [
          {
            url: 'http://cdn.becase.top/202303071628801.png',
            extname: 'png',
            name: 'shuijiao.png',
          },
        ],
        userInfo: {
          userName: '',
          nickName: '',
          passWord: '',
          phone: '',
          gender: 0,
          birthday: '2021-04-3',
          city: '',
          job: '',
          personalized_signature: '',
          categories: [],
        },
        genderItems: [
          {
            value: '0',
            text: '男',
          },
          {
            value: '1',
            text: '女',
          },
        ],
        range: [
          { value: 0, text: '上海' },
          { value: 1, text: '广州' },
          { value: 2, text: '长沙' },
        ],
        categories: [
          {
            text: '空调',
            value: 1,
          },
          {
            text: 'T恤',
            value: 2,
          },
          {
            text: '衬衫',
            value: 3,
          },

          {
            text: '手机',
            value: 4,
          },
          {
            text: '电视',
            value: 5,
          },
          {
            text: '配件',
            value: 6,
          },
          {
            text: '家电',
            value: 7,
          },
          {
            text: '摄像',
            value: 8,
          },
          {
            text: '平板',
            value: 9,
          },
        ],
      }
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
  page {
    background-color: #f8f8f8;
  }

  .custom-image-box {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
    background: white;
    margin: 10px 0;
    padding: 10px;
  }

  .text {
    font-size: 14px;
    color: #333;
  }

  :deep(.uni-file-picker__container) {
    justify-content: center;
    margin-bottom: 10px;
  }

  .info-box {
    background-color: white;
    // border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
    .input-box {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // border-top: 1px solid #cccccc;
      .form-label {
        width: 80px;
      }
      :deep(uni-radio-group) {
        display: flex;
        justify-content: space-between;
        width: 100px;
      }
    }
  }
  :deep(.uni-stat__select) {
    width: 80px;
    flex: 0;
  }
  .category {
    :deep(.checklist-group) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    :deep(.checklist-group .checklist-box .checklist-content) {
      justify-content: center;
    }
    background-color: white;
  }
  input {
    text-align: right;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    direction: rtl;
  }
  .half-border {
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
    background-color: #cccccc;
  }
</style>
