// 微信桌面客户端(进程名)。仅 Windows。
export default {
  name: "weixin",
  common: [],
  win: [
    "PROCESS-NAME,Weixin.exe,DIRECT", // Weixin Windows 客户端直连
  ],
  unix: [],
};
