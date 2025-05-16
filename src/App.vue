<template>
  <div class="app">
    <h1>设备信息调试页面</h1>

    <!-- 默认展示 -->
    <section class="section">
      <h2>默认展示</h2>
      <device-info />
    </section>

    <!-- 详细信息展示 -->
    <section class="section">
      <h2>详细信息</h2>
      <device-info v-slot="{ deviceInfo }">
        <div class="info-grid">
          <div class="info-item">
            <h3>设备类型</h3>
            <ul>
              <li>设备类型: {{ deviceInfo.deviceType }}</li>
              <li>移动设备: {{ deviceInfo.isMobile ? "是" : "否" }}</li>
              <li>平板设备: {{ deviceInfo.isTablet ? "是" : "否" }}</li>
              <li>桌面设备: {{ deviceInfo.isDesktop ? "是" : "否" }}</li>
              <li>微信环境: {{ deviceInfo.isWechat ? "是" : "否" }}</li>
            </ul>
          </div>

          <div class="info-item">
            <h3>具体设备</h3>
            <ul>
              <li>iPhone: {{ deviceInfo.isIPhone ? "是" : "否" }}</li>
              <li>iPad: {{ deviceInfo.isIPad ? "是" : "否" }}</li>
              <li>iPod: {{ deviceInfo.isIPod ? "是" : "否" }}</li>
              <li>
                Android 手机: {{ deviceInfo.isAndroidPhone ? "是" : "否" }}
              </li>
              <li>
                Android 平板: {{ deviceInfo.isAndroidTablet ? "是" : "否" }}
              </li>
            </ul>
          </div>

          <div class="info-item">
            <h3>操作系统</h3>
            <ul>
              <li>iOS: {{ deviceInfo.isIOS ? "是" : "否" }}</li>
              <li>Android: {{ deviceInfo.isAndroid ? "是" : "否" }}</li>
              <li>Windows: {{ deviceInfo.isWindows ? "是" : "否" }}</li>
              <li>Mac: {{ deviceInfo.isMac ? "是" : "否" }}</li>
              <li>Linux: {{ deviceInfo.isLinux ? "是" : "否" }}</li>
            </ul>
          </div>

          <div class="info-item">
            <h3>浏览器信息</h3>
            <ul>
              <li>浏览器: {{ deviceInfo.browser }}</li>
              <li>版本: {{ deviceInfo.browserVersion }}</li>
              <li>Chrome: {{ deviceInfo.isChrome ? "是" : "否" }}</li>
              <li>Firefox: {{ deviceInfo.isFirefox ? "是" : "否" }}</li>
              <li>Safari: {{ deviceInfo.isSafari ? "是" : "否" }}</li>
              <li>Edge: {{ deviceInfo.isEdge ? "是" : "否" }}</li>
              <li>IE: {{ deviceInfo.isIE ? "是" : "否" }}</li>
              <li>Opera: {{ deviceInfo.isOpera ? "是" : "否" }}</li>
              <li>QQ浏览器: {{ deviceInfo.isQQ ? "是" : "否" }}</li>
              <li>UC浏览器: {{ deviceInfo.isUC ? "是" : "否" }}</li>
            </ul>
          </div>

          <div class="info-item">
            <h3>系统信息</h3>
            <ul>
              <li>操作系统: {{ deviceInfo.os }}</li>
              <li>版本: {{ deviceInfo.osVersion }}</li>
            </ul>
          </div>

          <div class="info-item">
            <h3>小程序环境</h3>
            <ul>
              <li>是否小程序: {{ deviceInfo.isMiniProgram ? "是" : "否" }}</li>
              <li>
                小程序类型:
                {{
                  deviceInfo.miniProgramType === "wechat"
                    ? "微信小程序"
                    : deviceInfo.miniProgramType === "alipay"
                    ? "支付宝小程序"
                    : deviceInfo.miniProgramType === "baidu"
                    ? "百度小程序"
                    : deviceInfo.miniProgramType === "toutiao"
                    ? "头条小程序"
                    : deviceInfo.miniProgramType === "qq"
                    ? "QQ小程序"
                    : deviceInfo.miniProgramType === "jd"
                    ? "京东小程序"
                    : "非小程序环境"
                }}
              </li>
            </ul>
          </div>

          <div class="info-item">
            <h3>微信环境</h3>
            <ul>
              <li>微信浏览器: {{ deviceInfo.isWechatBrowser ? "是" : "否" }}</li>
              <li>微信小程序: {{ deviceInfo.miniProgramType === "wechat" ? "是" : "否" }}</li>
            </ul>
          </div>
        </div>
      </device-info>
    </section>

    <!-- User Agent 信息 -->
    <section class="section">
      <h2>User Agent</h2>
      <device-info v-slot="{ deviceInfo }">
        <div class="user-agent">
          {{ deviceInfo.userAgent }}
        </div>
      </device-info>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DeviceInfo from "./components/DeviceInfo.vue";

export default defineComponent({
  name: "App",
  components: {
    DeviceInfo,
  },
});
</script>

<style>
.app {
  width: 100%;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 2rem; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-item {
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.info-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.info-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-item li {
  padding: 0.5rem 0;
  color: #666;
  border-bottom: 1px solid #eee;
}

.info-item li:last-child {
  border-bottom: none;
}

.user-agent {
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  word-break: break-all;
  font-family: monospace;
  font-size: 0.9rem;
  color: #666;
}
</style>
