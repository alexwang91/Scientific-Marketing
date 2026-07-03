<div align="center">

# Scientific Marketing

**面向因果推断、AI 辅助营销决策的 Agent 技能集合。**

<p align="center">
  <img src="https://img.shields.io/badge/type-agent%20skills-245d7c" alt="Agent skills">
  <img src="https://img.shields.io/badge/platform-Codex%20%7C%20Claude%20Code%20style-145c3b" alt="Codex and Claude Code style skills">
  <img src="https://img.shields.io/badge/status-active%20research%20system-6b4e00" alt="Active research system">
  <img src="https://img.shields.io/badge/license-Apache%202.0-3b3b3b" alt="Apache 2.0 license">
</p>

<p align="center">
  <a href="#快速开始">快速开始</a> |
  <a href="#这套技能能做什么">能做什么</a> |
  <a href="#技能目录">技能目录</a> |
  <a href="#看板长什么样">看板预览</a> |
  <a href="#工作原理">工作原理</a> |
  <a href="#适用场景">适用场景</a>
</p>

<p align="center"><a href="README.md">English</a> | 简体中文</p>

</div>

Scientific Marketing 把一个产品、市场、人群、渠道或campaign问题，转化成带证据标签的营销方案：传统营销结构、AI辅助洞察工作、因果个性化、测量方法、平台执行、创作者采购，以及输出质量把关。

它是为能够按需加载本地 `SKILL.md` 文件及其引用的 agent 设计的。

> **打包说明：** 本仓库只包含可复用的技能本身。生成的示例、本地 HTML 报告、测试文件、临时草稿文件和 demo 产物均不纳入版本库。

## 快速开始

克隆仓库：

```bash
git clone https://github.com/alexwang91/Scientific-Marketing.git
cd Scientific-Marketing
```

在 Windows PowerShell 上安装为 Codex 技能：

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.codex\skills" | Out-Null
Copy-Item -Recurse -Force .\skills\* "$env:USERPROFILE\.codex\skills\"
```

在 macOS 或 Linux 上安装为 Codex 技能：

```bash
mkdir -p ~/.codex/skills
cp -R skills/* ~/.codex/skills/
```

安装进 Claude Code 风格的工作区：

```bash
mkdir -p .claude/skills
cp -R skills/* .claude/skills/
```

然后向你的 agent 提问：

```text
使用 Scientific Marketing。我有一个产品、价格、卖点和目标国家。
帮我搭建一份因果营销方案，包含人群维度、平台投放、KOL选项、
预算拆分、测量计划和执行门槛。
```

## 这套技能能做什么

| 能力 | agent 应产出的内容 |
|------|-------------------|
| **传统营销核心** | STP、4P、5C、漏斗、GTM、定价、CRM、渠道和品牌资产框架。 |
| **市场与消费者诊断** | 品类诊断、JTBD、用户语言提取、购买触发点、障碍和替代品。 |
| **AI 营销情报** | 市场雷达、洞察挖掘、合成消费者假设、创意实验室和 agentic 运营。 |
| **因果个性化** | Treatment 库、uplift/HTE/CATE 假设、next-best-treatment、策略门槛、holdout 设计和平台执行。 |
| **测量方法** | A/B、holdout、地理实验、MMM、归因 vs 增量、样本量、护栏指标和上线门槛。 |
| **平台投放** | Google、Amazon Ads、TikTok、Meta、YouTube、零售媒体、KOL 放大和 retargeting 打法手册。 |
| **创作者/KOL 采购** | 国家级创作者筛选、成本假设、使用权限、放大路径和因果验证。 |
| **输出质量** | 有来源链接的 HTML 报告、证据标签、假设注册表、去AI腔文风检查和最终预检。 |

## 工作原理

```text
用户的产品 / 市场问题
        |
        v
scientific-marketing 路由器
        |
        +-- 传统营销与品类诊断
        +-- AI 营销情报
        +-- 因果个性化与 HTE 假设地图
        +-- 测量方法与增量设计
        +-- 平台 / KOL 投放打法手册
        +-- 治理与输出质感把关
        |
        v
带证据标签的营销产出物
```

这套技能集合采用渐进式披露：顶层路由器只加载当前任务需要的模块，再按用户需求进一步拉取平台执行、成熟度门槛、treatment card 或 HTML 输出规则等具体参考文件。

## 技能目录

| 技能 | 角色 |
|------|------|
| [`scientific-marketing`](skills/scientific-marketing/SKILL.md) | 主路由器和运行模型。 |
| [`sm-traditional-marketing`](skills/sm-traditional-marketing/SKILL.md) | 稳定的营销基本功和消费者/品类诊断。 |
| [`sm-ai-marketing-intelligence`](skills/sm-ai-marketing-intelligence/SKILL.md) | AI 辅助的市场雷达、洞察挖掘、创意实验室和合成消费者假设工作。 |
| [`sm-causal-personalization`](skills/sm-causal-personalization/SKILL.md) | 核心因果引擎：treatment card、HTE、uplift、平台执行、KOL 逻辑、OPE 门槛和产品到市场方案。 |
| [`sm-measurement`](skills/sm-measurement/SKILL.md) | 增量效应、实验设计、MMM、归因边界、样本量和护栏指标。 |
| [`sm-ai-visibility`](skills/sm-ai-visibility/SKILL.md) | AI 搜索可见性、实体一致性、答案引擎审计和来源权威性。 |
| [`sm-governance-red-team`](skills/sm-governance-red-team/SKILL.md) | 隐私、同意、偏见、暗黑模式、宣称合规和敏感人群审查。 |
| [`sm-output-taste`](skills/sm-output-taste/SKILL.md) | HTML 报告标准、专业措辞、去AI腔规则、华为式管理语言，以及最终预检。 |

<details>
<summary><b>因果个性化参考亮点</b></summary>

| 参考文件 | 为什么重要 |
|---------|-----------|
| [`49-product-to-market-causal-pipeline.md`](skills/sm-causal-personalization/references/49-product-to-market-causal-pipeline.md) | 从产品输入到国家/渠道/KOL/预算方案的完整工作流。 |
| [`51-causal-hte-hypothesis-map.md`](skills/sm-causal-personalization/references/51-causal-hte-hypothesis-map.md) | 把产品机制和用户语言转化为可测试的 HTE 假设。 |
| [`54-llm-semantic-prior-hypothesis.md`](skills/sm-causal-personalization/references/54-llm-semantic-prior-hypothesis.md) | 把 LLM 语义先验当作假设使用，而不是效应估计。 |
| [`58-maturity-gates.md`](skills/sm-causal-personalization/references/58-maturity-gates.md) | 防止从策略直接跳到 CATE、OPE 或 bandit。 |
| [`59-treatment-card-and-action-library.md`](skills/sm-causal-personalization/references/59-treatment-card-and-action-library.md) | 强制每一笔付费动作都转化为可测量的 treatment card。 |
| [`60-experiment-logging-contract.md`](skills/sm-causal-personalization/references/60-experiment-logging-contract.md) | 定义 holdout、OPE 和未来策略学习所需的日志字段。 |
| [`61-platform-execution-playbooks.md`](skills/sm-causal-personalization/references/61-platform-execution-playbooks.md) | 把预算行和平台控件、treatment ID、D 维度、消费者语言及测量路径连接起来。 |

</details>

## 输出模式

对于密集的国家/渠道方案，本技能集合可以引导 agent 产出一份带来源链接的 HTML 报告，包含：

- 产品和市场事实
- 证据标签
- 假设注册表
- D 维度生成逻辑
- 渠道热力图
- 主投格解释
- 评审人反驳
- 成熟度门槛
- treatment card
- 平台执行打法手册
- 预算拆分
- KOL 采购表
- 测量计划
- 来源注册表
- 验证清单

对于可点击的可视化看板，使用 [`skills/sm-output-taste/assets/interactive-dashboard-template.html`](skills/sm-output-taste/assets/interactive-dashboard-template.html)。该模板是 case-free（不绑定具体案例）的，agent 需要按照 [`interactive-dashboard-output.md`](skills/sm-output-taste/references/interactive-dashboard-output.md) 中的占位符合同，把产品、国家、价格、KOL、logo、热力图、讲法和测量数据注入进去。

HTML 输出规则要求可读的连接标签。举例来说，面向用户的表格应该显示 `T01 Search high-intent` 和 `D18 price-sensitive`，而不是裸露的字符串如 `T01/T02; D7/D8`。

## 看板长什么样

下面的截图来自一个用于预览模板布局和交互的 demo：一个虚构的产品 `NORTHLIGHT AQUA`（一款 AI 驱动的智能补水追踪器），被放在一个真实的市场层——挪威——之上。国家本身、货币（NOK 挪威克朗）、气候背景，以及平台生态（Google.no、YouTube、Finn.no、Elkjøp、Power、NetOnNet、Komplett、Prisjakt、Meta、TikTok）都是真实的；产品本身、它的价格，以及每一行创作者数据都是虚构的。这正是 agent 在把真实产品事实填入 `DATA` 合同之后会产出的同一种形态——金额格式跟随 `product.currency` 自动切换，同一份模板不用改代码就能渲染 `€`、`kr`、`$` 或任何其他货币代码。

**概览和 KPI 条。** 一页对应一个决策，不是一份幻灯片。顶部条带用 `Evidence`/`Assumption` 标签列出预算、护栏、毛利和价格；点击页面上任意实体，右侧详情面板都会通过同一套交互更新。默认的总建议会明确说明方案里哪些部分是真实的（挪威的平台生态），哪些是为这次预览虚构的（产品本身及其价格）。

![看板概览：KPI条、卖点、人群维度和平台列表，右侧详情面板展示产品摘要和以NOK计价的预算](docs/screenshots/dashboard-overview.png)

**关系图和平台 x 人群热力图。** 因果链条——`产品 → 卖点 → 人群 → 平台 → 讲法 → Treatment → 测量`——被处理成一张可点击的分层路径图，而不是一堆杂乱的箭头连线。下方的热力图给每个"平台 x 人群"格子打出 `H/T/S/N/A` 等级（主投/测试/小测/不投/压制）；点击任意格子，右侧详情面板会解释投放理由和评审人的反驳意见。这里 7 个人群维度中有 2 个专门用来承接这款产品的 AI 卖点：一个是能根据活动量和天气动态调整提醒（而不是固定间隔提醒）的 AI 补水教练，另一个是面向北欧级别隐私期待、强调设备端处理的隐私优先 AI——两者都被单独路由到一笔小额测试预算，而不是混进主讲法里。

![关系图展示六层决策路径，热力图展示平台按人群维度分级，Search x 高意向搜索者格子被选中并在详情面板中展开解释](docs/screenshots/dashboard-heatmap.png)

**预算流向、ROI 区间和 Treatment card。** 预算按产品的真实货币，展示从总额流向每个平台的过程，并配有每种打法的规划假设 ROI 区间——而不是一个虚假自信的单一 ROI 数字。每一克朗都落在一张带假设、人群、指标和具名 holdout 的 treatment card 上；AI 教练教育向的 treatment 被明确标注为一个用地理 holdout 品牌搜索提升量衡量的长周期投入，而不是用末次点击 ROAS 衡量。

![每个平台的预算流向条(以NOK计价)、五类打法的ROI区间图，以及每张都带假设、预算和holdout的treatment card](docs/screenshots/dashboard-budget.png)

**KOL / 创作者采购。** 各行清楚区分"已经有采购路径"（一个媒体类型的原型，报价依据仍需确认）和"还没有"（明确标注"待寻源"的未具名创作者池）——其中专门为 AI/隐私向内容创作者单独建了一个池子，跟泛科技评测者区分开，因为这两类受众会对不同的说法产生反应。这份 demo 里没有指名道姓、也没有暗示任何真实的挪威创作者、媒体或报价。

![KOL和创作者卡片展示一个媒体类型原型和两个明确标注待寻源的创作者池，其中一个专注AI和数据隐私内容，每张卡片都带适用场景和报价依据说明](docs/screenshots/dashboard-kol.png)

正式交付前运行 `node skills/sm-output-taste/assets/validate-dashboard.mjs your-dashboard.html`——它会检查 ID 交叉引用、热力图形状、预算总额、讲法完整性和 Asset Gate，遇到真正的错误会让构建失败。

## 证据规则

技能集合区分以下标签：

| 标签 | 含义 |
|------|------|
| `Evidence` | 有来源的事实、官方文档、稳定方法、观测数据或实验结果。 |
| `Assumption` | 业务输入、场景估计、benchmark、毛利或预算假设。 |
| `Hypothesis` | 语义先验、HTE 假设、渠道匹配度、创意匹配度，或未经验证的人群逻辑。 |
| `Needs test` | 会改变预算、targeting、KOL 选择、压制、offer 或放量决策的宣称。 |

核心护栏：

```text
相关性不等于增量效应。
平台 ROAS 不是因果证明。
LLM 语义先验不是 CATE。
```

## 适用场景

以下情况非常适合使用本技能集合：

- 把一个产品、国家和卖点转化为一份上线方案
- 把人群维度和广告平台控件连接起来
- 在建模之前先搭建一套因果个性化工作流
- 决定哪些该测试、压制或放量
- 撰写来源可核查的营销产出物
- 避免把归因看板当成增量效应

以下情况可以跳过：

- 只需要一句短campaign口号
- 只需要一次泛泛的人物画像练习
- 只需要平台搭建、不需要测量或来源审查
- 只需要一个没有实验数据支撑的最终 ROI 断言

## 仓库结构

```text
skills/
  scientific-marketing/
  sm-traditional-marketing/
  sm-ai-marketing-intelligence/
  sm-causal-personalization/
  sm-measurement/
  sm-ai-visibility/
  sm-governance-red-team/
  sm-output-taste/
    assets/
      interactive-dashboard-template.html
      interactive-dashboard-minimal-data.json
      validate-dashboard.mjs
docs/
  screenshots/
```

生成的报告、示例、测试文件和本地草稿文件都不纳入本仓库。`docs/screenshots/` 是唯一的例外：这些是本 README 引用的、基于虚构数据的说明性截图，不是生成的案例交付物。

## 兼容性

| Agent / 运行环境 | 状态 | 说明 |
|-------------------|:----:|------|
| Codex 本地技能 | 支持 | 把 `skills/*` 拷贝到 `~/.codex/skills`。 |
| Claude Code 风格技能 | 可移植 | 把 `skills/*` 拷贝到 `.claude/skills`。 |
| 其他 `SKILL.md` 加载器 | 大概率可移植 | 需要支持本地技能文件夹和相对路径引用。 |

## 开发说明

- 保持 `SKILL.md` 文件精简，把细节路由到 `references/`。
- 新增的流程细节写成 reference 文件，而不是堆进 README 的文字里。
- 不要提交生成的 HTML 报告、示例产出、本地扫描结果或测试产物。
- 用来源链接支撑时效性事实和官方平台文档。
- 把技术规格留在事实清单或 feed 上下文里；面向广告和关键词时翻译成消费者语言。

## Star History

<a href="https://www.star-history.com/?repos=alexwang91%2FScientific-Marketing&type=date&legend=top-left">
  <picture>
    <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=alexwang91/Scientific-Marketing&type=date&legend=top-left" />
  </picture>
</a>
