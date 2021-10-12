<template>
  <div class="content-middle">
    <div class="header"></div>
    <div class="content">
      <img src="@/assets/phoneHeader.svg" alt="" />
      <div v-for="item in templateData" :key="item.label">
        <span>{{ item.label }}</span>
        <span>*</span>
        <span>{{ item.placeholder }}</span>
      </div>
    </div>
    <div class="button"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templateData: [],
    };
  },
};
</script>

<style scoped lang="less">
.content-middle {
  width: 334px;
  height: 660px;
  margin: 20px 30px;
  padding: 38px 10px 11px;
  text-align: center;
  border-radius: 47px;
  border: 4px double hsla(0, 0%, 100%, 0.1);
}
.header::before {
  content: "";
  display: block;
  width: 60px;
  height: 6px;
  margin: 0 auto 24px;
  border-radius: 3px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
}
.content {
  height: 568px;
  background-color: #f1f4f9;
  border-radius: 8px;
}
.button::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  margin: 10px auto 0;
  border-radius: 50%;
  border: 4px double hsla(0, 0%, 100%, 0.1);
}
</style>