# spx-packs

[spx](https://github.com/iluluyu/spx) 的共享「规则包」,给 Mihomo / Clash Meta 的 JavaScript 覆写脚本复用。

## 这是什么

`spx` 仓库里有多个覆写变体(`meta.js` / `meta-unix.js` / …),它们之间大量重复(DNS、代理组、大部分规则)。本仓库把可复用的部分抽成结构化的 pack:

- **进程名 pack**(`easytier` / `sunshine` / `frp` / `weixin` / `gameviewer`):区分 `win` / `unix`,比如 `easytier-core.exe`(Windows)与 `easytier-core`(Linux/macOS)。
- **平台无关 pack**(`scholar` / `geo`):DOMAIN / GEOSITE / GEOIP 这类与系统无关的规则,放进 `common`。
- **共享构建器**(`lib/dns.js` 的 `buildDns`、`lib/groups.js` 的 `buildGroups` + `groupBaseOption`)。

## ⚠️ 不能在运行时 import

Mihomo 的 JS 覆写**运行时只吃单个自包含文件,没有 `require` / `import`**(见 [override-hub](https://github.com/mihomo-party-org/override-hub),全是单文件)。所以本仓库的内容只能被 `spx` 的**构建脚本**(`scripts/build.mjs`)在构建期引用,再内联进最终的 `src/*.js`,不能在客户端运行时直接 import。

## 结构

```
index.js               门面:re-export buildDns / buildGroups / composeRules / packs
lib/dns.js             buildDns(opts?) → dnsConfig
lib/groups.js          groupBaseOption + buildGroups(providerNames) → proxy-groups[]
lib/compose.js         composeRules({ platform, packs }) → rules[]
packs/<software>.js    { name, common[], win[], unix[] }
packs/index.js         聚合导出所有 pack
```

### Pack 形状

```js
export default {
  name: "easytier",
  common: [],                                  // 平台无关规则
  win:   ["PROCESS-NAME,easytier-core.exe,DIRECT", …],
  unix:  ["PROCESS-NAME,easytier-core,DIRECT", …],
};
```

`composeRules({ platform: "win" | "unix", packs })` 会把每个 pack 的 `common` 加上对应平台的 `win`/`unix` 铺平成 `rules[]`,顺序就是 `packs` 的传入顺序。

## 许可

MIT。
