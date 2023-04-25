<template>
  <view class="changepwd">
    <form class="form-container" ref="form1">
      <view class="form-item">
        <label class="form-label">旧密码</label>
        <input
          class="form-input"
          type="password"
          placeholder="请输入旧密码"
          v-model="model1.userInfo.oldpwd"
        />
      </view>
      <view class="form-item">
        <label class="form-label">新密码</label>
        <input
          class="form-input"
          type="password"
          placeholder="请输入新密码"
          v-model="model1.userInfo.newpwd"
        />
      </view>
      <view class="form-item">
        <label class="form-label">确认密码</label>
        <input
          class="form-input"
          type="password"
          placeholder="请再次输入新密码"
          v-model="model1.userInfo.newpwdr"
        />
      </view>
    </form>
    <button class="submit-btn" @click="submit">修改</button>
  </view>
</template>

<script setup>
  import { reactive } from 'vue'

  const model1 = reactive({
    userInfo: {
      oldpwd: '',
      newpwd: '',
      newpwdr: '',
    },
  })

  function submit() {}
</script>

<style scoped>
  .changepwd {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }

  .form-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }

  .form-label {
    width: 70px;
    font-size: 16px;
    margin-right: 10px;
  }

  .form-input {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 8px 12px;
    font-size: 16px;
    flex-grow: 1;
  }
  .submit-btn {
    background-color: #fe5572;
    color: #fff;
    border: none;
    border-radius: 15px;
    padding: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 30px;
    width: 100px;
  }
</style>
