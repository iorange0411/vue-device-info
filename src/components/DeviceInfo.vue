<template>
  <div class="device-info">
    <slot :device-info="deviceInfo">
      <div class="device-info-content">
        <div class="device-type">
          <span v-if="deviceInfo.isMobile">移动设备</span>
          <span v-else-if="deviceInfo.isTablet">平板设备</span>
          <span v-else>桌面设备</span>
        </div>
        <div class="os-info">
          操作系统: {{ deviceInfo.os }} {{ deviceInfo.osVersion }}
        </div>
        <div class="browser-info">
          浏览器: {{ deviceInfo.browser }} {{ deviceInfo.browserVersion }}
        </div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getDeviceInfo } from '../utils/device';

export default defineComponent({
  name: 'DeviceInfo',
  setup() {
    const deviceInfo = ref(getDeviceInfo());

    onMounted(() => {
      // 监听窗口大小变化，更新设备信息
      window.addEventListener('resize', () => {
        deviceInfo.value = getDeviceInfo();
      });
    });

    return {
      deviceInfo
    };
  }
});
</script>

<style scoped>
.device-info {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.device-info-content {
  padding: 1rem;
  border-radius: 4px;
  background-color: #f5f5f5;
}

.device-type {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.os-info, .browser-info {
  margin-top: 0.5rem;
  color: #666;
}
</style> 