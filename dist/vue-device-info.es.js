import { defineComponent as Q, ref as D, onMounted as F, openBlock as c, createElementBlock as d, renderSlot as T, createElementVNode as f, toDisplayString as m } from "vue";
function P() {
  const e = navigator.userAgent, n = U(e), i = W(e), o = /iPhone/i.test(e), t = /iPad/i.test(e), a = /iPod/i.test(e), u = /Android/i.test(e), v = u && /Mobile/i.test(e), g = u && !/Mobile/i.test(e), _ = /Chrome/i.test(e) && !/Edge|Edg|OPR|Opera/i.test(e), h = /Firefox/i.test(e), w = /Safari/i.test(e) && !/Chrome|Edge|Edg|OPR|Opera/i.test(e), I = /Edge|Edg/i.test(e), x = /MSIE|Trident/i.test(e), M = /OPR|Opera/i.test(e), E = /QQBrowser/i.test(e), b = /UCBrowser/i.test(e), l = /MicroMessenger/i.test(e), p = l && /miniProgram/i.test(e), B = l && !p, C = /AlipayClient/i.test(e) && /miniProgram/i.test(e), O = /swan/i.test(e), A = /toutiao/i.test(e), S = /QQ/i.test(e) && /miniProgram/i.test(e), y = /jdapp/i.test(e);
  let s = "none";
  p ? s = "wechat" : C ? s = "alipay" : O ? s = "baidu" : A ? s = "toutiao" : S ? s = "qq" : y && (s = "jd");
  const k = s !== "none";
  let r = "desktop";
  return o ? r = "iPhone" : t ? r = "iPad" : a ? r = "iPod" : v ? r = "Android Phone" : g && (r = "Android Tablet"), {
    isMobile: /Mobile|Android|iPhone|iPad|iPod/i.test(e),
    isTablet: t || g,
    isDesktop: !/Mobile|Android|iPhone|iPad|iPod/i.test(e),
    isIOS: o || t || a,
    isAndroid: u,
    isWindows: /Windows/i.test(e),
    isMac: /Macintosh/i.test(e),
    isLinux: /Linux/i.test(e),
    isWechat: l,
    isWechatBrowser: B,
    isIPhone: o,
    isIPad: t,
    isIPod: a,
    isAndroidPhone: v,
    isAndroidTablet: g,
    deviceType: r,
    isChrome: _,
    isFirefox: h,
    isSafari: w,
    isEdge: I,
    isIE: x,
    isOpera: M,
    isQQ: E,
    isUC: b,
    isMiniProgram: k,
    miniProgramType: s,
    browser: n.name,
    browserVersion: n.version,
    os: i.name,
    osVersion: i.version,
    userAgent: e
  };
}
function U(e) {
  const n = [
    { name: "Chrome", regex: /Chrome\/([0-9.]+)/ },
    { name: "Firefox", regex: /Firefox\/([0-9.]+)/ },
    { name: "Safari", regex: /Version\/([0-9.]+).*Safari/ },
    { name: "Edge", regex: /Edg\/([0-9.]+)/ },
    { name: "IE", regex: /MSIE ([0-9.]+)/ },
    { name: "Opera", regex: /OPR\/([0-9.]+)/ },
    { name: "QQ浏览器", regex: /QQBrowser\/([0-9.]+)/ },
    { name: "UC浏览器", regex: /UCBrowser\/([0-9.]+)/ }
  ];
  for (const i of n) {
    const o = e.match(i.regex);
    if (o)
      return {
        name: i.name,
        version: o[1]
      };
  }
  return { name: "Unknown", version: "Unknown" };
}
function W(e) {
  const n = [
    { name: "Windows", regex: /Windows NT ([0-9.]+)/ },
    { name: "Mac OS", regex: /Mac OS X ([0-9._]+)/ },
    { name: "iOS", regex: /iPhone OS ([0-9._]+)/ },
    { name: "Android", regex: /Android ([0-9.]+)/ },
    { name: "Linux", regex: /Linux/ }
  ];
  for (const i of n) {
    const o = e.match(i.regex);
    if (o)
      return {
        name: i.name,
        version: o[1].replace(/_/g, ".")
      };
  }
  return { name: "Unknown", version: "Unknown" };
}
const R = Q({
  name: "DeviceInfo",
  setup() {
    const e = D(P());
    return F(() => {
      window.addEventListener("resize", () => {
        e.value = P();
      });
    }), {
      deviceInfo: e
    };
  }
});
const V = (e, n) => {
  const i = e.__vccOpts || e;
  for (const [o, t] of n)
    i[o] = t;
  return i;
}, L = { class: "device-info" }, $ = { class: "device-info-content" }, j = { class: "device-type" }, q = { key: 0 }, N = { key: 1 }, z = { key: 2 }, J = { class: "os-info" }, X = { class: "browser-info" };
function G(e, n, i, o, t, a) {
  return c(), d("div", L, [
    T(e.$slots, "default", { deviceInfo: e.deviceInfo }, () => [
      f("div", $, [
        f("div", j, [
          e.deviceInfo.isMobile ? (c(), d("span", q, "移动设备")) : e.deviceInfo.isTablet ? (c(), d("span", N, "平板设备")) : (c(), d("span", z, "桌面设备"))
        ]),
        f("div", J, " 操作系统: " + m(e.deviceInfo.os) + " " + m(e.deviceInfo.osVersion), 1),
        f("div", X, " 浏览器: " + m(e.deviceInfo.browser) + " " + m(e.deviceInfo.browserVersion), 1)
      ])
    ], !0)
  ]);
}
const H = /* @__PURE__ */ V(R, [["render", G], ["__scopeId", "data-v-c1428f36"]]), Y = {
  install: (e) => {
    e.component("DeviceInfo", H);
  }
};
export {
  Y as default,
  P as getDeviceInfo
};
