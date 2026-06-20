// 把一组 pack 按平台铺平成 rules[]。顺序:每个 pack 的 common 在前,其后接 win 或
// unix 的进程名规则。packs 数组本身的顺序即最终规则顺序(调用方负责排好序)。

export function composeRules({ platform = "win", packs = [] } = {}) {
        if (platform !== "win" && platform !== "unix") {
                throw new Error(`composeRules: platform 必须是 "win" 或 "unix",收到 ${JSON.stringify(platform)}`);
        }

        const rules = [];
        for (const pack of packs) {
                if (!pack) continue;
                if (pack.common) rules.push(...pack.common);
                if (pack[platform]) rules.push(...pack[platform]);
        }
        return rules;
}
