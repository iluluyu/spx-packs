// frp 内网穿透(进程名)。Unix 同时放行 frps 服务端与 frpc 客户端,Windows 仅 frpc。
export default {
        name: "frp",
        common: [],
        win: [
                "PROCESS-NAME,frpc.exe,DIRECT",             // frpc Windows 客户端直连
        ],
        unix: [
                "PROCESS-NAME,frps,DIRECT",                 // frps 客户端直连
                "PROCESS-NAME,frpc,DIRECT",                 // frpc 客户端直连
        ],
};
