// 学术 / 科研相关域名(平台无关)。edu.cn 直连以便校园网;arxiv/overleaf/scirate 走代理。
export default {
        name: "scholar",
        common: [
                "DOMAIN-SUFFIX,edu.cn,DIRECT",               // Fudan
                "DOMAIN-SUFFIX,aiporters.com,DIRECT",        // AI-Mirror
                "DOMAIN-SUFFIX,arxiv.org,Default",           // arxiv
                "DOMAIN-SUFFIX,scirate.com,Default",         // scirate
                "DOMAIN-SUFFIX,overleaf.com,Default",        // Overleaf LaTeX 在线编辑器
        ],
        win: [],
        unix: [],
};
