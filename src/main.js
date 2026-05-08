const industryNodes = [
  { l1: '金融服务', l2: '零售银行', l3: '风控', l4: '反欺诈预警', score: 74, votes: 1284, trend: 12 },
  { l1: '金融服务', l2: '保险', l3: '理赔', l4: '材料初审', score: 69, votes: 936, trend: 8 },
  { l1: '医疗健康', l2: '医院', l3: '影像科', l4: '初筛辅助', score: 63, votes: 1518, trend: 5 },
  { l1: '医疗健康', l2: '药企', l3: '研发', l4: '分子筛选', score: 58, votes: 764, trend: 16 },
  { l1: '制造业', l2: '汽车', l3: '质检', l4: '缺陷识别', score: 71, votes: 1142, trend: 9 },
  { l1: '制造业', l2: '半导体', l3: '工艺', l4: '参数优化', score: 49, votes: 488, trend: 11 },
  { l1: '零售消费', l2: '电商', l3: '运营', l4: '商品文案', score: 88, votes: 2041, trend: 6 },
  { l1: '零售消费', l2: '门店', l3: '陈列', l4: '动线建议', score: 46, votes: 332, trend: 4 },
  { l1: '企业服务', l2: '客服', l3: '坐席', l4: '意图识别', score: 92, votes: 3120, trend: 10 },
  { l1: '企业服务', l2: '法务', l3: '合同', l4: '条款审阅', score: 67, votes: 879, trend: 7 },
  { l1: '软件互联网', l2: '研发', l3: '编码', l4: '单元测试生成', score: 87, votes: 2810, trend: 15 },
  { l1: '软件互联网', l2: '安全', l3: 'SOC', l4: '告警归因', score: 61, votes: 693, trend: 13 },
  { l1: '教育培训', l2: 'K12', l3: '教学', l4: '个性化练习', score: 79, votes: 1764, trend: 9 },
  { l1: '教育培训', l2: '职业教育', l3: '实训', l4: '陪练反馈', score: 73, votes: 994, trend: 14 },
  { l1: '物流交通', l2: '仓储', l3: '调度', l4: '波次规划', score: 54, votes: 528, trend: 6 },
  { l1: '物流交通', l2: '城市配送', l3: '路径', l4: '异常改派', score: 57, votes: 611, trend: 5 },
  { l1: '能源环保', l2: '电力', l3: '运维', l4: '故障预测', score: 52, votes: 409, trend: 8 },
  { l1: '能源环保', l2: '碳管理', l3: '核算', l4: '排放因子匹配', score: 66, votes: 572, trend: 18 },
  { l1: '传媒娱乐', l2: '游戏', l3: '美术', l4: '概念草图', score: 82, votes: 1862, trend: 12 },
  { l1: '传媒娱乐', l2: '影视', l3: '后期', l4: '分镜预演', score: 76, votes: 1335, trend: 17 },
  { l1: '地产建筑', l2: '建筑设计', l3: '方案', l4: '日照初算', score: 44, votes: 286, trend: 3 },
  { l1: '公共服务', l2: '政务', l3: '热线', l4: '政策问答', score: 72, votes: 1006, trend: 7 },
  { l1: '农业食品', l2: '种植', l3: '病虫害', l4: '图像识别', score: 59, votes: 541, trend: 9 },
  { l1: '专业服务', l2: '审计', l3: '底稿', l4: '异常凭证定位', score: 41, votes: 351, trend: 2 },
];

const canvas = document.querySelector('#industrySphere');
const ctx = canvas.getContext('2d');
const detail = document.querySelector('#industryDetail');
const dpr = window.devicePixelRatio || 1;
let width = 0;
let height = 0;
let rotation = 0;
let pointer = { x: -9999, y: -9999 };
let activeKey = `${industryNodes[0].l1}|${industryNodes[0].l2}|${industryNodes[0].l3}|${industryNodes[0].l4}`;
let activeNode = industryNodes[0];

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function scoreColor(score, alpha = 1) {
  if (score >= 80) return `rgba(78, 249, 255, ${alpha})`;
  if (score >= 65) return `rgba(148, 92, 255, ${alpha})`;
  if (score >= 50) return `rgba(255, 197, 87, ${alpha})`;
  return `rgba(255, 83, 119, ${alpha})`;
}

function sphericalPosition(index, total) {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / (total - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = goldenAngle * index + rotation;
  const x = Math.cos(theta) * radius;
  const z = Math.sin(theta) * radius;
  return { x, y, z };
}

function drawSphere() {
  ctx.clearRect(0, 0, width, height);
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.36;

  const halo = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.35);
  halo.addColorStop(0, 'rgba(91, 243, 255, .18)');
  halo.addColorStop(0.58, 'rgba(95, 70, 255, .08)');
  halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(132, 226, 255, .14)';
  ctx.lineWidth = 1;
  for (let i = -3; i <= 3; i += 1) {
    ctx.beginPath();
    ctx.ellipse(cx, cy, radius, radius * Math.abs(i / 4), rotation * 0.5, 0, Math.PI * 2);
    ctx.stroke();
  }

  const projected = industryNodes
    .map((node, index) => {
      const p = sphericalPosition(index, industryNodes.length);
      const scale = 0.72 + (p.z + 1) * 0.28;
      return {
        ...node,
        x: cx + p.x * radius * scale,
        y: cy + p.y * radius * scale,
        z: p.z,
        size: 4 + (node.score / 100) * 8 * scale,
        alpha: 0.28 + (p.z + 1) * 0.36,
        key: `${node.l1}|${node.l2}|${node.l3}|${node.l4}`,
      };
    })
    .sort((a, b) => a.z - b.z);

  projected.forEach((node) => {
    const distance = Math.hypot(pointer.x - node.x, pointer.y - node.y);
    if (distance < node.size + 10) {
      activeKey = node.key;
      activeNode = node;
    }

    ctx.shadowBlur = 18;
    ctx.shadowColor = scoreColor(node.score, 0.9);
    ctx.fillStyle = scoreColor(node.score, node.alpha);
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    if (node.key === activeKey) {
      ctx.strokeStyle = 'rgba(255, 255, 255, .9)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size + 9, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(238, 249, 255, .92)';
      ctx.font = '600 13px Inter, sans-serif';
      ctx.fillText(node.l4, node.x + 16, node.y + 4);
    }
  });

  updateDetail(activeNode);
  rotation += 0.0028;
  requestAnimationFrame(drawSphere);
}

function updateDetail(node) {
  detail.innerHTML = `
    <span class="detail-label">当前选中</span>
    <h3>${node.l1} · ${node.l2} · ${node.l3} · ${node.l4}</h3>
    <p>社区投票显示该场景的 AI 可用度为 ${node.score}/100。颜色与进度条同时表达成熟度、分歧和趋势，因此边界不是硬切线，而是可持续更新的能力云层。</p>
    <div class="confidence-meter" aria-label="能力置信度 ${node.score}%"><span style="width: ${node.score}%"></span></div>
    <dl class="detail-stats">
      <div><dt>能力分</dt><dd>${node.score}</dd></div>
      <div><dt>投票数</dt><dd>${node.votes.toLocaleString('zh-CN')}</dd></div>
      <div><dt>趋势</dt><dd>+${node.trend}%</dd></div>
    </dl>
  `;
}

function renderTaxonomy() {
  const taxonomy = industryNodes.reduce((tree, node) => {
    tree[node.l1] ??= {};
    tree[node.l1][node.l2] ??= {};
    tree[node.l1][node.l2][node.l3] ??= [];
    tree[node.l1][node.l2][node.l3].push(node.l4);
    return tree;
  }, {});

  document.querySelector('#taxonomyMap').innerHTML = Object.entries(taxonomy)
    .map(([l1, level2]) => `
      <article class="taxonomy-card">
        <h3>${l1}</h3>
        ${Object.entries(level2)
          .map(([l2, level3]) => `
            <details>
              <summary>${l2}</summary>
              ${Object.entries(level3)
                .map(([l3, level4]) => `<p><strong>${l3}</strong><span>${level4.join(' / ')}</span></p>`)
                .join('')}
            </details>
          `)
          .join('')}
      </article>
    `)
    .join('');
}

canvas.addEventListener('pointermove', (event) => {
  const rect = canvas.getBoundingClientRect();
  pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
});

canvas.addEventListener('pointerleave', () => {
  pointer = { x: -9999, y: -9999 };
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
renderTaxonomy();
drawSphere();
