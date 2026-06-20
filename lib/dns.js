// 共享 DNS 配置构建器。opts 可覆盖国内外 nameserver 列表;nameserverPolicy 覆盖
// 整个 nameserver-policy(后续 school 等变体可借此注入校园 DNS)。

export const domesticNameservers = [
        "https://223.5.5.5/dns-query",           // 阿里云公共DNS
        "https://doh.pub/dns-query",             // 腾讯
];

export const foreignNameservers = [
        "https://1.1.1.1/dns-query",            // Cloudflare (性能/隐私)
        "https://9.9.9.9/dns-query",            // Quad9 (安全过滤/隐私)
        "https://8.8.8.8/dns-query",            // Google (保底稳定性)
];

export function buildDns(opts = {}) {
        const domestic = opts.domestic ?? domesticNameservers;
        const foreign = opts.foreign ?? foreignNameservers;

        const defaultPolicy = {
                "geosite:connectivity-check,private,category-scholar-!cn,geolocation-cn,microsoft@cn": domestic,
                "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreign,
        };

        return {
                "enable": true,
                "listen": "0.0.0.0:1053",
                "ipv6": true,
                "use-system-hosts": false,
                "cache-algorithm": "arc",
                "enhanced-mode": "fake-ip",
                "fake-ip-range": "198.18.0.1/16",
                "fake-ip-filter": [
                        "+.lan",
                        "+.local",
                        "localhost.ptlogin2.qq.com",
                        "localhost.sec.qq.com",
                        "localhost.work.weixin.qq.com",
                        "geosite:connectivity-check",
                        "geosite:private",
                ],
                "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1"],
                "nameserver": [...domestic, ...foreign],
                "proxy-server-nameserver": [...domestic, ...foreign],
                "nameserver-policy": opts.nameserverPolicy ?? defaultPolicy,
        };
}
