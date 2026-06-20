// 共享代理组构建器。groupBaseOption 是所有组的公共默认;buildGroups(providerNames)
// 返回 proxy-groups 数组。providerNames 由运行时 config["proxy-providers"] 推导,
// 因此本函数在生成文件里以「源码」形式内联(而非数据),由 main() 在运行时调用。

export const groupBaseOption = {
        "interval": 86400,
        "timeout": 3000,
        "url": "https://www.google.com/generate_204",
        "lazy": true,
        "max-failed-times": 3,
        "hidden": false
};

export function buildGroups(providerNames) {
        return [
                {
                        ...groupBaseOption,
                        "name": "Default",
                        "type": "select",
                        "proxies": ["延迟选优"],
                        "include-all": true,
                        "icon": "https://cdn.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
                },
                {
                        ...groupBaseOption,
                        "url": "https://gemini.google.com",
                        "name": "AI",
                        "type": "select",
                        "proxies": ["SGP"],
                        "include-all": true,
                        "icon": "https://cdn.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@master/docs/assets/icons/claude.svg"
                },
                {
                        ...groupBaseOption,
                        "name": "SGP",
                        "type": "url-test",
                        "url": "https://gemini.google.com",
                        "expected-status": "200",
                        "include-all": true,
                        "use": providerNames,
                        "filter": "新加坡|SG|Singapore",
                        "icon": "https://cdn.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@master/docs/assets/icons/xbox.svg"
                },
                {
                        ...groupBaseOption,
                        "name": "延迟选优",
                        "type": "url-test",
                        "tolerance": 100,
                        "include-all": true,
                        "icon": "https://cdn.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
                },
                {
                        ...groupBaseOption,
                        "url": "https://www.google.com/generate_204",
                        "name": "漏网之鱼",
                        "type": "select",
                        "proxies": ["Default", "DIRECT"],
                        "include-all": true,
                        "icon": "https://cdn.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
                },
        ];
}
