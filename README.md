# Vue Device Info

一个用于检测设备信息的工具库，支持 Vue2 和 Vue3。

## 功能特点

- 检测设备类型（移动设备、平板、桌面）
- 检测具体设备型号（iPhone、iPad、iPod、Android 手机、Android 平板）
- 检测操作系统信息（iOS、Android、Windows、Mac、Linux）
- 检测浏览器信息（Chrome、Firefox、Safari、Edge、IE、Opera、QQ浏览器、UC浏览器）
- 检测微信环境（微信浏览器、微信小程序）
- 检测其他小程序环境（支付宝、百度、头条、QQ、京东）
- TypeScript 支持

## 安装

```bash
npm install vue-device-info
```

## 使用方法

### 基本使用

```typescript
import { getDeviceInfo } from 'vue-device-info'

const deviceInfo = getDeviceInfo()
console.log(deviceInfo)
```

### Vue 组件中使用

```vue
<template>
  <div>
    <p>设备类型: {{ deviceInfo.deviceType }}</p>
    <p>操作系统: {{ deviceInfo.os }}</p>
    <p>浏览器: {{ deviceInfo.browser }}</p>
    <p>小程序环境: {{ deviceInfo.miniProgramType }}</p>
  </div>
</template>

<script>
import { getDeviceInfo } from 'vue-device-info'

export default {
  data() {
    return {
      deviceInfo: getDeviceInfo()
    }
  }
}
</script>
```

### Vue3 Composition API 中使用

```vue
<template>
  <div>
    <p>设备类型: {{ deviceInfo.deviceType }}</p>
    <p>操作系统: {{ deviceInfo.os }}</p>
    <p>浏览器: {{ deviceInfo.browser }}</p>
    <p>小程序环境: {{ deviceInfo.miniProgramType }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getDeviceInfo } from 'vue-device-info'

const deviceInfo = computed(()=>getDeviceInfo())
</script>
```

## 设备信息对象

设备信息对象包含以下属性：

### 设备类型
- `isMobile`: 是否为移动设备
- `isTablet`: 是否为平板设备
- `isDesktop`: 是否为桌面设备
- `deviceType`: 具体设备类型（'iPhone' | 'iPad' | 'iPod' | 'Android Phone' | 'Android Tablet' | 'desktop'）

### 具体设备
- `isIPhone`: 是否为 iPhone
- `isIPad`: 是否为 iPad
- `isIPod`: 是否为 iPod
- `isAndroidPhone`: 是否为 Android 手机
- `isAndroidTablet`: 是否为 Android 平板

### 操作系统
- `isIOS`: 是否为 iOS 设备
- `isAndroid`: 是否为 Android 设备
- `isWindows`: 是否为 Windows 系统
- `isMac`: 是否为 Mac 系统
- `isLinux`: 是否为 Linux 系统
- `os`: 操作系统名称
- `osVersion`: 操作系统版本

### 浏览器
- `isChrome`: 是否为 Chrome 浏览器
- `isFirefox`: 是否为 Firefox 浏览器
- `isSafari`: 是否为 Safari 浏览器
- `isEdge`: 是否为 Edge 浏览器
- `isIE`: 是否为 IE 浏览器
- `isOpera`: 是否为 Opera 浏览器
- `isQQ`: 是否为 QQ 浏览器
- `isUC`: 是否为 UC 浏览器
- `browser`: 浏览器名称
- `browserVersion`: 浏览器版本

### 小程序环境
- `isMiniProgram`: 是否为小程序环境
- `miniProgramType`: 小程序类型（'wechat' | 'alipay' | 'baidu' | 'toutiao' | 'qq' | 'jd' | 'none'）
- `isWechat`: 是否为微信环境（包括微信浏览器和小程序）
- `isWechatBrowser`: 是否为微信浏览器（不包括小程序）

### 其他
- `userAgent`: 完整的 User Agent 字符串

## 使用示例

### 判断设备类型
```typescript
if (deviceInfo.isMobile) {
  // 移动设备特定逻辑
}

if (deviceInfo.deviceType === 'iPhone') {
  // iPhone 特定逻辑
}
```

### 判断浏览器
```typescript
if (deviceInfo.isChrome) {
  // Chrome 浏览器特定逻辑
}

if (deviceInfo.browser === 'Safari') {
  // Safari 浏览器特定逻辑
}
```

### 判断小程序环境
```typescript
if (deviceInfo.isMiniProgram) {
  // 小程序通用逻辑
}

if (deviceInfo.miniProgramType === 'wechat') {
  // 微信小程序特定逻辑
}
```

### 判断微信环境
```typescript
// 判断是否在微信浏览器中
if (deviceInfo.isWechatBrowser) {
  // 微信浏览器特定逻辑
}

// 判断是否在微信小程序中
if (deviceInfo.miniProgramType === 'wechat') {
  // 微信小程序特定逻辑
}

// 判断是否在任何微信环境中
if (deviceInfo.isWechat) {
  // 微信环境通用逻辑
}
```

## 许可证

MIT 