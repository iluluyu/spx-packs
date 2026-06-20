// Easytier 组网客户端(进程名)。Windows 带 .exe,Unix 不带。
export default {
        name: "easytier",
        common: [],
        win: [
                "PROCESS-NAME,easytier-core.exe,DIRECT",    // Easytier Windows 客户端直连
                "PROCESS-NAME,easytier-gui.exe,DIRECT",     // Easytier Windows 客户端直连
        ],
        unix: [
                "PROCESS-NAME,easytier-core,DIRECT",        // Easytier Linux/Mac 客户端直连
                "PROCESS-NAME,easytier-gui,DIRECT",         // Easytier Linux/Mac 客户端直连
        ],
};
