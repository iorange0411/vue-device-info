import { App } from 'vue';
import DeviceInfo from './components/DeviceInfo.vue';

export { getDeviceInfo } from './utils/device';
export type { DeviceInfo } from './utils/device';

export default {
  install: (app: App) => {
    app.component('DeviceInfo', DeviceInfo);
  }
}; 