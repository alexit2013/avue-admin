<template>
	<div class="login-container pull-height pull-overflow" @keyup.enter.native="handleLogin">
    <div class="login-border pull-height">
      <div class="login-main animated fadeIn">
      	<h2 class="text-align">海大星艺后台管理系统</h2>
      	<useregist></useregist>
        <p class="link-btn" ><a @click="goRoutes('/login')">已有账号，去登录</a></p>     
      </div>
    </div>
		
	</div>
</template>
<script>
import useregist from "./useregist";

export default {
  name: "regist",
  data() {
    return {
      activeName: "user"
    };
  },
  created() {},
  mounted() {},
  computed: {},
  props: [],
  methods: {
  	
  },
  components: {
	useregist
  }
};
</script>

<style lang="scss">
	.text-align{text-align: center;}
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  position: relative;
}
.login-container::before {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/login.jpg");
  background-size: cover;
}
.login-info {
  padding-left: 60px;
}
.login-info > ul {
  padding: 20px 0;
}
.login-info > ul > li {
  font-size: 14px;
}
.login-border {
  display: flex;
  align-items: center;
 /* background-color: #fff;*/
}
.login-main {
  padding: 140px 60px;
  width: 450px;
  /*height: 600px;
  margin:0 auto;*/
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #fff;
  & > .el-tabs {
    margin-top: 30px;
  }
}
.login-main > h3 {
  margin-bottom: 20px;
}
.login-main > p {
  color: #76838f;
}
.login-submit {
  width: 100%;
}
.login-form {
  margin: 20px 0;
}
.login-code {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0 10px;
}
.login-code-img {
  width: 100px;
  height: 43px;
  background-color: #eee;
  border: 1px solid #f0f0f0;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  text-indent: 2px;
  text-align: center;
}
.login-code-icon {
}
a{text-decoration: none;}
.link-btn {text-align: right;}

</style>