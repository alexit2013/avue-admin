<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-row :span="24">
        <el-col :span="14">
          <el-input @keyup.enter.native="handleLogin" :maxlength="code.len" v-model="loginForm.code" auto-complete="off" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :span="10">
          <div class="login-code">
            <span class="login-code-img" @click="refreshCode" v-if="code.type == 'text'">{{code.value}}</span>
            <img :src="code.src" class="login-code-img" @click="refreshCode" v-else/>
            <i class="icon-shuaxin login-code-icon" @click="refreshCode"></i>
          </div>
        </el-col>
      </el-row>

    </el-form-item>
    <el-form-item>
      <!--<el-button type="primary" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>-->
      <el-button type="primary" @click.native.prevent="handleLogin2" class="login-submit">登录</el-button>
    </el-form-item>
    <p>{{token}}</p>
  </el-form>
  
</template>

<script>
import { isvalidUsername } from "@/util/validate";
import { randomLenNum } from "@/util/util";
import { mapGetters } from "vuex";
export default {
  name: "userlogin",
  data() {
    const validateUsername = (rule, value, callback) => {
    		const valid_map = ['admin', 'editor','13765022035']
      if (!isvalidUsername(valid_map,value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (this.code.value != value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "123456",
        code: "",
        redomStr: ""
      },
      code: {
        src: "",
        value: "",
        len: 4,
        type: "text"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6,max: 16, message: "密码长度6-16位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" },
          { required: true, trigger: "blur", validator: validateCode }
        ]
      },
      passwordType: "password"
    };
  },
  created() {
    this.refreshCode();
  },
  mounted() {},
  computed: {
    ...mapGetters(["tagWel","token"])
  },
  props: [],
  methods: {
    refreshCode() {
      this.loginForm.redomStr = randomLenNum(this.code.len, true);
      this.code.type == "text"
        ? (this.code.value = randomLenNum(this.code.len))
        : (this.code.src = `${this.codeUrl}/${this.loginForm.redomStr}`);
    },
    showPassword() {
      this.passwordType == ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch("LoginByUsername", this.loginForm).then(res => {
            this.$store.commit("ADD_TAG", this.tagWel);
            this.$router.push({ path: this.tagWel.value });
          });
        }
      });
    },
    handleLogin2() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch("LoginByUsername", this.loginForm).then(res => {
            this.$store.commit("ADD_TAG", this.tagWel);
            this.$router.push({ path: this.tagWel.value });
          });
        }
      });
    }
  }
};
</script>

<style>

</style>
