export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isWindows: boolean;
  isMac: boolean;
  isLinux: boolean;
  isWechat: boolean;
  isWechatBrowser: boolean;
  isIPhone: boolean;
  isIPad: boolean;
  isIPod: boolean;
  isAndroidPhone: boolean;
  isAndroidTablet: boolean;
  deviceType: string;
  isChrome: boolean;
  isFirefox: boolean;
  isSafari: boolean;
  isEdge: boolean;
  isIE: boolean;
  isOpera: boolean;
  isQQ: boolean;
  isUC: boolean;
  isMiniProgram: boolean;
  miniProgramType: string;
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  userAgent: string;
}

export function getDeviceInfo(): DeviceInfo {
  const ua = navigator.userAgent;
  const browser = getBrowserInfo(ua);
  const os = getOSInfo(ua);
  
  const isIPhone = /iPhone/i.test(ua);
  const isIPad = /iPad/i.test(ua);
  const isIPod = /iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  const isAndroidPhone = isAndroid && /Mobile/i.test(ua);
  const isAndroidTablet = isAndroid && !/Mobile/i.test(ua);
  
  const isChrome = /Chrome/i.test(ua) && !/Edge|Edg|OPR|Opera/i.test(ua);
  const isFirefox = /Firefox/i.test(ua);
  const isSafari = /Safari/i.test(ua) && !/Chrome|Edge|Edg|OPR|Opera/i.test(ua);
  const isEdge = /Edge|Edg/i.test(ua);
  const isIE = /MSIE|Trident/i.test(ua);
  const isOpera = /OPR|Opera/i.test(ua);
  const isQQ = /QQBrowser/i.test(ua);
  const isUC = /UCBrowser/i.test(ua);
  
  const isWechat = /MicroMessenger/i.test(ua);
  const isWechatMiniProgram = isWechat && /miniProgram/i.test(ua);
  const isWechatBrowser = isWechat && !isWechatMiniProgram;
  const isAlipayMiniProgram = /AlipayClient/i.test(ua) && /miniProgram/i.test(ua);
  const isBaiduMiniProgram = /swan/i.test(ua);
  const isToutiaoMiniProgram = /toutiao/i.test(ua);
  const isQQMiniProgram = /QQ/i.test(ua) && /miniProgram/i.test(ua);
  const isJDMiniProgram = /jdapp/i.test(ua);
  
  let miniProgramType = 'none';
  if (isWechatMiniProgram) miniProgramType = 'wechat';
  else if (isAlipayMiniProgram) miniProgramType = 'alipay';
  else if (isBaiduMiniProgram) miniProgramType = 'baidu';
  else if (isToutiaoMiniProgram) miniProgramType = 'toutiao';
  else if (isQQMiniProgram) miniProgramType = 'qq';
  else if (isJDMiniProgram) miniProgramType = 'jd';
  
  const isMiniProgram = miniProgramType !== 'none';
  
  let deviceType = 'desktop';
  if (isIPhone) deviceType = 'iPhone';
  else if (isIPad) deviceType = 'iPad';
  else if (isIPod) deviceType = 'iPod';
  else if (isAndroidPhone) deviceType = 'Android Phone';
  else if (isAndroidTablet) deviceType = 'Android Tablet';
  
  return {
    isMobile: /Mobile|Android|iPhone|iPad|iPod/i.test(ua),
    isTablet: isIPad || isAndroidTablet,
    isDesktop: !/Mobile|Android|iPhone|iPad|iPod/i.test(ua),
    isIOS: isIPhone || isIPad || isIPod,
    isAndroid: isAndroid,
    isWindows: /Windows/i.test(ua),
    isMac: /Macintosh/i.test(ua),
    isLinux: /Linux/i.test(ua),
    isWechat,
    isWechatBrowser,
    isIPhone,
    isIPad,
    isIPod,
    isAndroidPhone,
    isAndroidTablet,
    deviceType,
    isChrome,
    isFirefox,
    isSafari,
    isEdge,
    isIE,
    isOpera,
    isQQ,
    isUC,
    isMiniProgram,
    miniProgramType,
    browser: browser.name,
    browserVersion: browser.version,
    os: os.name,
    osVersion: os.version,
    userAgent: ua
  };
}

function getBrowserInfo(ua: string): { name: string; version: string } {
  const browserRegexes = [
    { name: 'Chrome', regex: /Chrome\/([0-9.]+)/ },
    { name: 'Firefox', regex: /Firefox\/([0-9.]+)/ },
    { name: 'Safari', regex: /Version\/([0-9.]+).*Safari/ },
    { name: 'Edge', regex: /Edg\/([0-9.]+)/ },
    { name: 'IE', regex: /MSIE ([0-9.]+)/ },
    { name: 'Opera', regex: /OPR\/([0-9.]+)/ },
    { name: 'QQ浏览器', regex: /QQBrowser\/([0-9.]+)/ },
    { name: 'UC浏览器', regex: /UCBrowser\/([0-9.]+)/ }
  ];

  for (const browser of browserRegexes) {
    const match = ua.match(browser.regex);
    if (match) {
      return {
        name: browser.name,
        version: match[1]
      };
    }
  }

  return { name: 'Unknown', version: 'Unknown' };
}

function getOSInfo(ua: string): { name: string; version: string } {
  const osRegexes = [
    { name: 'Windows', regex: /Windows NT ([0-9.]+)/ },
    { name: 'Mac OS', regex: /Mac OS X ([0-9._]+)/ },
    { name: 'iOS', regex: /iPhone OS ([0-9._]+)/ },
    { name: 'Android', regex: /Android ([0-9.]+)/ },
    { name: 'Linux', regex: /Linux/ }
  ];

  for (const os of osRegexes) {
    const match = ua.match(os.regex);
    if (match) {
      return {
        name: os.name,
        version: match[1].replace(/_/g, '.')
      };
    }
  }

  return { name: 'Unknown', version: 'Unknown' };
} 