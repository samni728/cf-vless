# AGENTS.md

## 🧭 项目说明

这是一个基于 Cloudflare Pages 的高性能 VLESS/VMess 节点部署与转换工具，主要包含两大模块：

1. **worker-page/**：Cloudflare Pages 部署脚本，提供基于用户 UUID 的代理入口，并可生成订阅链接。
2. **节点生成器**（节点生成/pages/public/）：纯前端工具，将任意 VLESS 或 VMess 节点与 Cloudflare 优选 IP/域名结合，生成兼容不同平台的节点配置。

## 🎯 项目目标

- 一键部署 VLESS 节点，提供分享/订阅链接
- 批量生成 Cloudflare 优选节点（支持 IP/CIDR/域名）
- 自动识别用户粘贴的 VLESS 或 VMess 节点，进行格式解析与转化
- 支持生成：
  - v2rayN / v2rayNG 格式链接
  - Shadowrocket 格式链接
  - Base64 编码的订阅链接
  - 兼容平台的二维码（iOS / Android / macOS / Windows）

## 📁 项目结构要求

- 必须存在 `worker-page/_worker.js`
- 必须存在 `节点生成/pages/public/data.js` 和 `index.html`
- 所有静态资源需可离线使用（纯前端）

## 📐 代码规范

- 所有 `.js` 文件必须通过 Prettier 格式检查
- `worker-page/_worker.js` 使用 ESLint（推荐规则见 .eslintrc.json）
- 所有链接处理逻辑中不得硬编码协议内容，应使用模板替换机制

## 🧪 测试标准

- 所有改动后运行 `npm run lint` 必须通过
- `data.js` 格式必须为 UTF-8 无 BOM
- 所有生成链接需在 v2rayN / v2rayNG / Shadowrocket / Kitsunebi / Surfboard 中至少一个客户端测试可导入
- 订阅链接支持通过 `https://domain/uuid` 访问获取 `.txt` 或 `.json` 格式内容

## 🔗 兼容性规则

- 用户输入支持：
  - 单条 VMess/VLESS 链接
  - 多条换行粘贴
  - 包含备注的 Shadowrocket 分享链接
- 输出应根据目标平台自动生成适配格式，并带可选二维码
- 优先提供以下平台格式：
  - ✅ v2rayN / v2rayNG
  - ✅ Shadowrocket（iOS）
  - ✅ 小火箭 URL Schema
  - ✅ 可扫码的 base64 URI 二维码

## 🧭 Codex Agent 使用说明

- 本项目支持 Codex 自动格式检查与结构验证
- 如需重构请优先保留目录结构与平台兼容性逻辑