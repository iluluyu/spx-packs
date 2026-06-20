// Sunshine / Apollo 串流服务端(进程名)。
export default {
        name: "sunshine",
        common: [],
        win: [
                "PROCESS-NAME,sunshine.exe,DIRECT",         // Apollo Windows 客户端直连
        ],
        unix: [
                "PROCESS-NAME,sunshine,DIRECT",             // Apollo Linux/Mac 客户端直连
        ],
};
