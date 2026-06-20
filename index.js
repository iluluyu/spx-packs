// https://mihomo.party/docs/guide/override/javascript
//
// spx-packs —— 给 spx 覆写脚本复用的「规则包」。
//
// 每个软件一个 pack,进程名规则区分 win / unix 平台;DOMAIN / GEOSITE / GEOIP
// 这类平台无关规则放进对应 pack 的 common。composeRules({ platform, packs }) 按
// 平台铺平成 rules[]。注意:Mihomo 的 JS 覆写运行时没有 require/import,所以这里
// 的内容只能被 spx 的构建脚本(scripts/build.mjs)在构建期引用并内联进最终单文件,
// 不能在运行时直接 import。

export { buildDns } from "./lib/dns.js";
export { groupBaseOption, buildGroups } from "./lib/groups.js";
export { composeRules } from "./lib/compose.js";
export * as packs from "./packs/index.js";
