// ===================================================================================
//  VLESS & VMess 终极节点生成工具 - Cloudflare Pages Functions 版本 (明文版)
//  文件名: [[path]].js
//  放置于: /functions/ 文件夹下
// ===================================================================================

// 【核心数据配置区】
// 在这里配置您的内置数据源。您可以自由添加、删除或修改这些分组和数据。
const dataByCountry = {
  "🇺🇸 美国 (US)": {
    ipv4: [
      "8.6.144.0/24", "8.6.145.0/24", "8.6.146.0/24", "8.9.231.0/24", "8.10.148.0/24",
      "8.14.199.0/24", "8.14.201.0/24", "8.14.202.0/24", "8.14.203.0/24", "8.14.204.0/24",
      "8.17.205.0/24", "8.17.206.0/24", "8.18.50.0/24", "8.18.113.0/24", "8.18.194.0/24",
      "8.18.195.0/24", "8.18.196.0/24", "8.19.8.0/24", "8.20.100.0/24", "8.20.101.0/24",
      "8.20.103.0/24", "8.20.122.0/24", "8.20.123.0/24", "8.20.124.0/24", "8.20.125.0/24",
      "8.20.126.0/24", "8.20.253.0/24", "8.21.8.0/24", "8.21.9.0/24", "8.21.10.0/24",
      "8.21.13.0/24", "8.21.110.0/24", "8.21.111.0/24", "8.21.239.0/24", "8.23.139.0/24",
      "8.23.240.0/24", "8.24.87.0/24", "8.24.242.0/24", "8.24.243.0/24", "8.24.244.0/24",
      "8.25.96.0/24", "8.25.97.0/24", "8.25.249.0/24", "8.26.180.0/24", "8.26.182.0/24",
      "8.27.64.0/24", "8.27.66.0/24", "8.27.67.0/24", "8.27.68.0/24", "8.27.69.0/24",
      "8.27.79.0/24", "8.28.20.0/24", "8.28.82.0/24", "8.28.126.0/24", "8.28.213.0/24",
      "8.29.105.0/24", "8.29.230.0/24", "8.29.231.0/24", "8.30.234.0/24", "8.31.2.0/24",
      "8.31.160.0/24", "8.31.161.0/24", "8.34.69.0/24", "8.34.70.0/24", "8.34.71.0/24",
      "8.34.200.0/24", "8.34.201.0/24", "8.34.202.0/24", "8.35.57.0/24", "8.35.58.0/24",
      "8.35.59.0/24", "8.35.149.0/24", "8.35.211.0/24", "8.36.216.0/24", "8.36.217.0/24",
      "8.36.218.0/24", "8.36.219.0/24", "8.36.220.0/24", "8.37.41.0/24", "8.37.43.0/24",
      "8.38.147.0/24", "8.38.148.0/24", "8.38.149.0/24", "8.38.172.0/24", "8.39.6.0/24",
      "8.39.18.0/24", "8.39.125.0/24", "8.39.126.0/24", "8.39.201.0/24", "8.39.202.0/24",
      "8.39.203.0/24", "8.39.204.0/24", "8.39.205.0/24", "8.39.206.0/24", "8.39.207.0/24",
      "8.39.212.0/24", "8.39.213.0/24", "8.39.214.0/24", "8.39.215.0/24", "8.40.26.0/24",
      "8.40.27.0/24", "8.40.28.0/24", "8.40.29.0/24", "8.40.30.0/24", "8.40.31.0/24",
      "8.40.107.0/24", "8.40.111.0/24", "8.40.140.0/24", "8.41.5.0/24", "8.41.6.0/24",
      "8.41.7.0/24", "8.41.36.0/24", "8.41.37.0/24", "8.42.51.0/24", "8.42.52.0/24",
      "8.42.54.0/24", "8.42.55.0/24", "8.42.161.0/24", "8.42.164.0/24", "8.42.172.0/24",
      "8.42.245.0/24", "8.43.121.0/24", "8.43.122.0/24", "8.43.123.0/24", "8.43.224.0/24",
      "8.43.225.0/24", "8.43.226.0/24", "8.44.0.0/24", "8.44.1.0/24", "8.44.2.0/24", "8.44.3.0/24",
      "8.44.6.0/24", "8.44.58.0/24", "8.44.60.0/24", "8.44.61.0/24", "8.44.62.0/24", "8.44.63.0/24",
      "8.45.41.0/24", "8.45.43.0/24", "8.45.44.0/24", "8.45.45.0/24", "8.45.46.0/24", "8.45.47.0/24",
      "8.45.97.0/24", "8.45.101.0/24", "8.45.102.0/24", "8.45.108.0/24", "8.45.111.0/24",
      "8.45.144.0/24", "8.45.145.0/24", "8.45.146.0/24", "8.45.147.0/24", "8.46.113.0/24",
      "8.46.114.0/24", "8.46.115.0/24", "8.46.117.0/24", "8.46.118.0/24", "8.46.119.0/24",
      "8.47.9.0/24", "8.47.12.0/24", "8.47.13.0/24", "8.47.14.0/24", "8.47.15.0/24", "8.47.69.0/24",
      "8.47.71.0/24", "8.48.130.0/24", "8.48.132.0/24", "8.48.133.0/24", "8.48.134.0/24",
      "64.68.192.0/24", "65.110.63.0/24", "66.235.200.0/24", "68.67.65.0/24"
    ],
    ipv6: [
      "2a09:bac5:638a:1246::/64",
      "2606:4700:10::/48", "2606:4700:11::/48", "2606:4700:12::/48", "2606:4700:13::/48",
      "2606:4700:14::/48", "2606:4700:15::/48", "2606:4700:16::/48", "2606:4700:17::/48",
      "2606:4700:18::/48", "2606:4700:19::/48", "2606:4700:1a::/48", "2606:4700:1b::/48",
      "2606:4700:1c::/48", "2606:4700:1d::/48", "2606:4700:1e::/48", "2606:4700:1f::/48"
    ]
  },
  "🇪🇺 欧洲 (EU)": {
    ipv4: [
      "91.234.214.0/24", "185.146.172.0/24", "185.146.173.0/24", "188.114.96.0/24",
      "188.114.97.0/24", "188.114.98.0/24", "188.114.99.0/24", "188.114.100.0/24",
      "188.114.102.0/24", "188.114.103.0/24", "188.114.106.0/24", "188.114.107.0/24",
      "188.114.108.0/24", "188.114.111.0/24"
    ],
    ipv6: [
      "2a06:98c1:3100::/48", "2a06:98c1:3101::/48", "2a06:98c1:3102::/48", "2a06:98c1:3103::/48",
      "2a06:98c1:3104::/48", "2a06:98c1:3105::/48", "2a06:98c1:3106::/48", "2a06:98c1:3107::/48",
      "2a06:98c1:3108::/48", "2a06:98c1:3109::/48", "2a06:98c1:310a::/48", "2a06:98c1:310b::/48",
      "2a06:98c1:310c::/48", "2a06:98c1:310d::/48", "2a06:98c1:310e::/48", "2a06:98c1:310f::/48",
      "2a06:98c1:3120::/48", "2a06:98c1:3121::/48", "2a06:98c1:3122::/48", "2a06:98c1:3123::/48",
      "2a06:98c1:50::/48", "2a06:98c1:51::/48", "2a06:98c1:52::/48", "2a06:98c1:53::/48",
      "2a06:98c1:56::/48", "2a06:98c1:58::/48"
    ]
  },
  "🌏 亚洲 (Asia)": {
    ipv4: [
      "103.21.244.0/24", "103.22.200.0/24", "103.22.201.0/24", "103.22.202.0/24",
      "103.22.203.0/24", "103.81.228.0/24"
    ],
    ipv6: [
      "2400:cb00:2048::/48", "2400:cb00:2049::/48", "2400:cb00:445::/48", "2400:cb00:497::/48",
      "2400:cb00:618::/48", "2400:cb00:bbd0::/48", "2400:cb00:bbd1::/48", "2400:cb00:bbd2::/48",
      "2400:cb00:bbd3::/48", "2400:cb00:bbd4::/48", "2400:cb00:bbd5::/48", "2400:cb00:bbd6::/48",
      "2400:cb00:bbd7::/48", "2400:cb00:bbd8::/48", "2400:cb00:bbd9::/48", "2400:cb00:bbda::/48",
      "2400:cb00:bbdb::/48", "2400:cb00:bbdc::/48", "2400:cb00:bbdd::/48", "2400:cb00:bbde::/48",
      "2400:cb00:bbdf::/48", "2400:cb00:f00e::/48"
    ]
  },
  "🌐 全球通用 (Global Anycast)": {
      ipv4: [
          "1.0.0.0/24", "1.1.1.0/24", "104.16.0.0/16", "104.17.0.0/16", "104.18.0.0/16",
          "104.19.0.0/16", "104.20.0.0/16", "104.21.0.0/16", "104.22.0.0/16", "104.23.0.0/16",
          "104.24.0.0/16", "104.25.0.0/16", "104.26.0.0/16", "104.27.0.0/16", "104.28.0.0/16",
          "104.29.0.0/16", "104.30.0.0/16", "104.31.0.0/16", "108.162.192.0/18", "141.101.64.0/18",
          "162.158.0.0/15", "172.64.0.0/13", "173.245.48.0/20", "190.93.240.0/20", "197.234.240.0/22",
          "198.41.128.0/17"
      ],
      ipv6: [
          "2606:4700::/32", "2803:f800::/32"
      ]
  },
  "✨ 优选域名 (Domains)": {
    domains: [
      "usa.visa.com", "myanmar.visa.com", "www.visa.com.tw", "www.visaeurope.ch",
      "www.visa.com.br", "www.visasoutheasteurope.com", "www.baikehotel.com"
    ]
  }
};


// ===================================================================================
//  Pages Functions 核心逻辑：处理请求并返回 HTML
// ===================================================================================
export async function onRequest(context) {
  const html = generateHTML(dataByCountry);
  return new Response(html, {
    headers: { 'Content-Type': 'text/html;charset=utf-8' },
  });
}

function generateHTML(data) {
    let regionCheckboxes = '';
    for (const region in data) {
        regionCheckboxes += `
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="region-${region.replace(/[^a-zA-Z0-9]/g, '-')}" value="${region}" checked onchange="updateEstimation()">
                <label class="form-check-label" for="region-${region.replace(/[^a-zA-Z0-9]/g, '-')}">${region}</label>
            </div>
        `;
    }

    return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VLESS & VMess 在线节点生成工具</title>
    <!-- Bootstrap 5.3.3 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        body { background-color: #f0f2f5; }
        .container { max-width: 900px; }
        .card-header { font-weight: bold; background-color: #f8f9fa; }
        .estimation { font-weight: bold; color: #0d6efd; text-align: center; padding: 0.5rem; background-color: #e7f3ff; border-radius: 0.25rem; }
    </style>
</head>
<body>
    <div class="container my-4">
        <div class="text-center mb-4">
            <h1 class="display-5">VLESS & VMess 终极节点生成器</h1>
            <p class="lead text-muted">一个强大、灵活的在线节点批量生成工具</p>
        </div>

        <div class="alert alert-info" role="alert">
            <h4 class="alert-heading">使用说明</h4>
            <ol class="mb-0">
                <li>在下方“第一步”区域，选择“内置数据”或“手动粘贴”来提供地址。</li>
                <li>在“第二步”中粘贴一个 VLESS 或 VMess 链接作为模板。</li>
                <li>查看数量预估，然后在“第三步”设置生成数量，点击“生成节点”即可。</li>
            </ol>
        </div>
        
        <div class="card mb-3">
            <div class="card-header">第一步：提供数据源</div>
            <div class="card-body">
                <ul class="nav nav-tabs" id="sourceTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="builtin-tab" data-bs-toggle="tab" data-bs-target="#builtin-tab-pane" type="button" role="tab" aria-controls="builtin-tab-pane" aria-selected="true" onclick="updateEstimation()">内置地区数据</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="manual-tab" data-bs-toggle="tab" data-bs-target="#manual-tab-pane" type="button" role="tab" aria-controls="manual-tab-pane" aria-selected="false" onclick="updateEstimation()">自定义粘贴数据</button>
                    </li>
                </ul>
                <div class="tab-content" id="sourceTabContent">
                    <div class="tab-pane fade show active p-3" id="builtin-tab-pane" role="tabpanel" aria-labelledby="builtin-tab">
                        <p class="text-muted">请勾选您想使用的内置数据源：</p>
                        <div id="region-selector">${regionCheckboxes}</div>
                    </div>
                    <div class="tab-pane fade p-3" id="manual-tab-pane" role="tabpanel" aria-labelledby="manual-tab">
                        <div class="mb-3">
                            <label for="ipv4Manual" class="form-label">IPv4 地址/CIDR (一行一个):</label>
                            <textarea class="form-control" id="ipv4Manual" rows="3" oninput="updateEstimation()"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="ipv6Manual" class="form-label">IPv6 地址/CIDR (一行一个):</label>
                            <textarea class="form-control" id="ipv6Manual" rows="3" oninput="updateEstimation()"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="domainManual" class="form-label">域名 (一行一个):</label>
                            <textarea class="form-control" id="domainManual" rows="3" oninput="updateEstimation()"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-header">第二步：设置模板和选项</div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="templateUrl" class="form-label">粘贴模板节点:</label>
                    <input type="text" class="form-control" id="templateUrl" placeholder="vless://... 或 vmess://...">
                </div>
                 <p id="estimation" class="estimation">当前配置可生成 0 个不重复节点</p>
            </div>
        </div>

        <div class="card mb-3">
            <legend class="card-header">第三步：生成节点</legend>
            <div class="card-body">
                <div class="mb-3">
                    <label for="quantity" class="form-label">输入要生成的节点数量:</label>
                    <input type="number" class="form-control" id="quantity" value="20" min="1">
                </div>
                <div class="d-grid">
                    <button class="btn btn-primary btn-lg" onclick="generateNodes()">生成节点</button>
                </div>
            </div>
        </div>

        <div class="card">
             <div class="card-header">生成结果</div>
             <div class="card-body">
                <textarea class="form-control" id="output" readonly rows="10"></textarea>
                <div class="d-grid mt-3">
                    <button class="btn btn-success" id="copyButton" onclick="copyResults()">一键复制所有节点</button>
                </div>
             </div>
        </div>
         <footer class="text-center text-muted mt-4">
            <p>由 Gemini 构建的 Cloudflare 工具</p>
        </footer>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script>
        const dataByCountry = ${JSON.stringify(data)};
        const httpsPorts = [443, 8443, 2053, 2083, 2087, 2096];
        
        function parseCIDR(cidr) { try { const [ip, prefixStr] = cidr.split('/'); const prefix = parseInt(prefixStr, 10); if (ip.includes('.')) { if (isNaN(prefix) || prefix < 0 || prefix > 32) return null; const parts = ip.split('.').map(Number); if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) return null; const ipBigInt = (BigInt(parts[0]) << 24n) | (BigInt(parts[1]) << 16n) | (BigInt(parts[2]) << 8n) | BigInt(parts[3]); const mask = (1n << BigInt(32 - prefix)) - 1n; return { network: ipBigInt & ~mask, prefix: prefix, type: 'v4' }; } else { if (isNaN(prefix) || prefix < 0 || prefix > 128) return null; let fullIp = ip; if (ip.includes('::')) { const [left, right] = ip.split('::'); const leftParts = left.split(':').filter(Boolean); const rightParts = right.split(':').filter(Boolean); const middleZeros = Array(8 - leftParts.length - rightParts.length).fill('0'); fullIp = [...leftParts, ...middleZeros, ...rightParts].join(':'); } const parts = fullIp.split(':'); if(parts.length !== 8) return null; let ipBigInt = 0n; for (const part of parts) { const num = parseInt(part, 16); if (isNaN(num)) return null; ipBigInt = (ipBigInt << 16n) | BigInt(num); } const mask = (1n << BigInt(128 - prefix)) - 1n; return { network: ipBigInt & ~mask, prefix: prefix, type: 'v6' }; } } catch { return null; } }
        function getRandomIP(range) { const bits = range.type === 'v4' ? 32 : 128; if (range.prefix === bits) { const ip = range.network; if(range.type === 'v4') return [(ip >> 24n) & 255n, (ip >> 16n) & 255n, (ip >> 8n) & 255n, ip & 255n].join('.'); const parts = []; for (let i = 0; i < 8; i++) parts.unshift(((ip >> BigInt(i*16)) & 0xffffn).toString(16)); return parts.join(':'); } const hostBits = BigInt(bits - range.prefix); const randomHost = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) % (1n << hostBits); const ip = range.network + randomHost; if (range.type === 'v4') return [(ip >> 24n) & 255n, (ip >> 16n) & 255n, (ip >> 8n) & 255n, ip & 255n].join('.'); const parts = []; for (let i = 0; i < 8; i++) parts.unshift(((ip >> BigInt(i*16)) & 0xffffn).toString(16)); return parts.join(':').replace(/(^|:)(0:)+/g, '::').replace(/^::$/, '0::0'); }
        
        function updateEstimation() {
            let totalAddressSources = 0;
            const isBuiltinTabActive = document.getElementById('builtin-tab').classList.contains('active');
            
            if (isBuiltinTabActive) {
                const selectedRegions = Array.from(document.querySelectorAll('#region-selector input[type="checkbox"]:checked')).map(cb => cb.value);
                selectedRegions.forEach(region => {
                    const data = dataByCountry[region];
                    if (data.ipv4) totalAddressSources += data.ipv4.length;
                    if (data.ipv6) totalAddressSources += data.ipv6.length;
                    if (data.domains) totalAddressSources += data.domains.length;
                });
            } else {
                totalAddressSources += document.getElementById('ipv4Manual').value.trim().split('\\n').filter(Boolean).length;
                totalAddressSources += document.getElementById('ipv6Manual').value.trim().split('\\n').filter(Boolean).length;
                totalAddressSources += document.getElementById('domainManual').value.trim().split('\\n').filter(Boolean).length;
            }
            
            const totalCombinations = totalAddressSources * httpsPorts.length;
            document.getElementById('estimation').textContent = \`当前配置可生成 \${totalCombinations} 个不重复的“地址:端口”组合\`;
        }

        function safeBase64Decode(str) { try { return atob(str.replace(/-/g, '+').replace(/_/g, '/')); } catch { return null; } }

        function generateNodes() {
            const templateUrl = document.getElementById('templateUrl').value.trim();
            const quantity = parseInt(document.getElementById('quantity').value, 10);
            if (!templateUrl || isNaN(quantity) || quantity < 1) { alert('请确保模板链接和生成数量已正确填写！'); return; }

            const addressPool = [];
            const isBuiltinTabActive = document.getElementById('builtin-tab').classList.contains('active');

            if (isBuiltinTabActive) {
                const selectedRegions = Array.from(document.querySelectorAll('#region-selector input[type="checkbox"]:checked')).map(cb => cb.value);
                if (selectedRegions.length === 0) { alert('请至少选择一个内置地区数据源！'); return; }
                selectedRegions.forEach(region => {
                    const data = dataByCountry[region];
                    if (data.ipv4) addressPool.push(...data.ipv4.map(parseCIDR).filter(Boolean));
                    if (data.ipv6) addressPool.push(...data.ipv6.map(parseCIDR).filter(Boolean));
                    if (data.domains) addressPool.push(...data.domains);
                });
            } else {
                addressPool.push(...document.getElementById('ipv4Manual').value.trim().split('\\n').filter(Boolean).map(parseCIDR).filter(Boolean));
                addressPool.push(...document.getElementById('ipv6Manual').value.trim().split('\\n').filter(Boolean).map(parseCIDR).filter(Boolean));
                addressPool.push(...document.getElementById('domainManual').value.trim().split('\\n').filter(Boolean));
            }
            
            if (addressPool.length === 0) { alert('地址池为空！请检查所选的数据是否有效。'); return; }
            
            let generatedNodes = [];
            const protocol = templateUrl.split('://')[0];

            for (let i = 0; i < quantity; i++) {
                const randomItem = addressPool[Math.floor(Math.random() * addressPool.length)];
                let randomAddress = (typeof randomItem === 'string') ? randomItem : (randomItem.type === 'v6' ? \`[\${getRandomIP(randomItem)}]\` : getRandomIP(randomItem));
                const randomPort = httpsPorts[Math.floor(Math.random() * httpsPorts.length)];
                
                if (protocol === 'vless') {
                    const match = templateUrl.match(/^vless:\\/\\/([^@]+)@([^:]+):(\\d+)(.*)$/);
                    if (!match) { alert('VLESS 模板链接格式无法解析。'); return; }
                    generatedNodes.push(\`vless://\${match[1]}@\${randomAddress}:\${randomPort}\${match[4]}\`);
                } else if (protocol === 'vmess') {
                    if (randomAddress.startsWith('[')) randomAddress = randomAddress.slice(1, -1);
                    const base64Part = templateUrl.substring("vmess://".length);
                    const decodedStr = safeBase64Decode(base64Part);
                    if (!decodedStr) { alert('VMess 模板链接解码失败！'); return; }
                    try {
                        let config = JSON.parse(decodedStr);
                        if (config.add === undefined || config.port === undefined) { alert('VMess模板JSON不含add或port字段'); return; }
                        config.add = randomAddress;
                        config.port = randomPort.toString();
                        const regionName = isBuiltinTabActive ? (Array.from(document.querySelectorAll('#region-selector input[type="checkbox"]:checked')).map(cb=>cb.value)[0] || 'MIX').split(' ')[0] : 'Custom';
                        config.ps = \`\${config.ps || 'VMess'}_(\${regionName})_\${i + 1}\`;
                        generatedNodes.push("vmess://" + btoa(JSON.stringify(config)));
                    } catch(e) { alert('VMess 配置的 JSON 格式解析失败！'); return; }
                } else { alert('不支持的协议类型！'); return; }
            }
            document.getElementById('output').value = generatedNodes.join('\\n');
        }

        function copyResults() {
            const outputText = document.getElementById('output');
            if (!outputText.value) { alert('没有可复制的内容！'); return; }
            navigator.clipboard.writeText(outputText.value).then(() => {
                alert('已成功复制 ' + outputText.value.split('\\n').length + ' 个节点到剪贴板！');
            }).catch(err => {
                try {
                    outputText.select();
                    document.execCommand('copy');
                    alert('自动复制失败，但已为您全选文本，请按 Ctrl+C 手动复制。');
                } catch (e) {
                    alert('复制失败，请手动复制。');
                }
            });
        }
        
        function openTab(evt, tabName) {
            document.querySelectorAll(".tab-content, .nav-link").forEach(el => el.classList.remove("active", "show"));
            document.getElementById(tabName).classList.add("active", "show");
            evt.currentTarget.classList.add("active");
            updateEstimation();
        }
        document.addEventListener('DOMContentLoaded', updateEstimation);
    </script>
</body>
</html>
    `;
}