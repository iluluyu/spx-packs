// 网易 UU 远程(GameViewer,进程名)。仅 Windows。
export default {
  name: "gameviewer",
  common: [],
  win: [
    "PROCESS-NAME,GameViewer.exe,DIRECT", // UU远程 客户端直连
    "PROCESS-NAME,GameViewerService.exe,DIRECT", // UU远程服务 客户端直连
  ],
  unix: [],
};
