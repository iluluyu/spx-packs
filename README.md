# spx-packs

[spx](https://github.com/iluluyu/spx) 的**规则集仓库**,给 Mihomo / Clash Meta 覆写脚本通过 `rule-providers` + `RULE-SET` 引用。思路同 [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules):把一类规则打包成一个 `.txt`,覆写文件用 URL 加载,避免在多个覆写变体里重复手抄。

## 结构

```text
rulesets/
  applications.txt   本地软件进程名(Easytier / Sunshine / frp / 微信 / UU 远程)
```

每个 `.txt` 是 **mihomo classical 规则集**:

- 内容是 YAML,以 `payload:` 开头,每行 `- <规则>`。
- 每条规则**不带 policy** —— policy 由覆写文件里的 `RULE-SET,<名>,<policy>` 统一指定。
- `behavior: classical`,`format: yaml`。

## 跨平台

`applications.txt` 把 Windows(`.exe`)与 Unix(裸名)进程名**放在同一个文件**。Windows 只匹配带 `.exe` 的,Unix 只匹配裸名,互不干扰,所以**一个文件通吃两端**,无需为 win/unix 各开一份。

## 在覆写里引用

```javascript
// rule-providers
config["rule-providers"] = {
  "applications": {
    "type": "http",
    "format": "yaml",
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/iluluyu/spx-packs@main/rulesets/applications.txt",
    "path": "./ruleset/spx-packs/applications.yaml",
    "interval": 864000
  }
};

// rules
config["rules"] = [
  "RULE-SET,applications,DIRECT",
  // ...其余规则
];
```

## 新增规则集

1. 在 `rulesets/` 下新建 `<name>.txt`(`payload:` 开头的 classical 规则)。
2. push 到 main。
3. 在覆写文件的 `rule-providers` 注册并加 `RULE-SET,<name>,<policy>`。

## 许可

MIT。
