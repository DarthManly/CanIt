const industryTaxonomy = [
  {
    code: '1',
    name: '金融服务',
    children: [
      {
        code: 'A',
        name: '银行与支付',
        children: [
          {
            code: 'a',
            name: '零售银行',
            children: [
              { code: 'Ⅰ', name: '信贷风控' },
              { code: 'Ⅱ', name: '反欺诈运营' },
            ],
          },
          {
            code: 'b',
            name: '企业金融',
            children: [
              { code: 'Ⅰ', name: '授信尽调' },
              { code: 'Ⅱ', name: '现金管理' },
            ],
          },
        ],
      },
      {
        code: 'B',
        name: '保险',
        children: [
          {
            code: 'a',
            name: '财产险',
            children: [
              { code: 'Ⅰ', name: '理赔核验' },
              { code: 'Ⅱ', name: '定损评估' },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '2',
    name: '医疗健康',
    children: [
      {
        code: 'A',
        name: '医疗机构',
        children: [
          {
            code: 'a',
            name: '影像科',
            children: [
              { code: 'Ⅰ', name: '影像初筛' },
              { code: 'Ⅱ', name: '报告草拟' },
            ],
          },
          {
            code: 'b',
            name: '门诊',
            children: [
              { code: 'Ⅰ', name: '问诊分诊' },
              { code: 'Ⅱ', name: '随访问答' },
            ],
          },
        ],
      },
      {
        code: 'B',
        name: '医药研发',
        children: [
          {
            code: 'a',
            name: '发现阶段',
            children: [
              { code: 'Ⅰ', name: '靶点发现' },
              { code: 'Ⅱ', name: '分子筛选' },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '3',
    name: '制造业',
    children: [
      {
        code: 'A',
        name: '离散制造',
        children: [
          {
            code: 'a',
            name: '汽车',
            children: [
              { code: 'Ⅰ', name: '缺陷识别' },
              { code: 'Ⅱ', name: '工艺优化' },
            ],
          },
          {
            code: 'b',
            name: '半导体',
            children: [
              { code: 'Ⅰ', name: '良率分析' },
              { code: 'Ⅱ', name: '设备预测维护' },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '4',
    name: '消费与零售',
    children: [
      {
        code: 'A',
        name: '线上零售',
        children: [
          {
            code: 'a',
            name: '电商运营',
            children: [
              { code: 'Ⅰ', name: '商品文案' },
              { code: 'Ⅱ', name: '智能导购' },
            ],
          },
        ],
      },
      {
        code: 'B',
        name: '线下门店',
        children: [
          {
            code: 'a',
            name: '门店运营',
            children: [
              { code: 'Ⅰ', name: '陈列建议' },
              { code: 'Ⅱ', name: '客流预测' },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '5',
    name: '企业服务',
    children: [
      {
        code: 'A',
        name: '客户运营',
        children: [
          {
            code: 'a',
            name: '客服中心',
            children: [
              { code: 'Ⅰ', name: '意图识别' },
              { code: 'Ⅱ', name: '坐席辅助' },
            ],
          },
        ],
      },
      {
        code: 'B',
        name: '内部管理',
        children: [
          {
            code: 'a',
            name: '法务',
            children: [
              { code: 'Ⅰ', name: '合同审阅' },
              { code: 'Ⅱ', name: '条款生成' },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '6',
    name: '软件互联网',
    children: [
      {
        code: 'A',
        name: '研发平台',
        children: [
          {
            code: 'a',
            name: '工程研发',
            children: [
              { code: 'Ⅰ', name: '代码生成' },
              { code: 'Ⅱ', name: '测试生成' },
            ],
          },
          {
            code: 'b',
            name: '安全运营',
            children: [
              { code: 'Ⅰ', name: '告警归因' },
              { code: 'Ⅱ', name: '漏洞修复建议' },
            ],
          },
        ],
      },
    ],
  },
];

const productDimensions = [
  { code: 'P1', name: 'Copilot 助手', description: '嵌入工作流的人机协同助手' },
  { code: 'P2', name: 'Agent 自动体', description: '可拆解任务并调用工具执行' },
  { code: 'P3', name: '垂直模型', description: '面向行业数据微调或增强' },
  { code: 'P4', name: '流程自动化', description: '把模型能力接入企业流程' },
  { code: 'P5', name: '决策智能', description: '预测、优化与经营决策支持' },
];

const valueChainStages = [
  { code: 'V1', name: '洞察识别' },
  { code: 'V2', name: '方案生成' },
  { code: 'V3', name: '执行交付' },
  { code: 'V4', name: '质检风控' },
  { code: 'V5', name: '运营优化' },
  { code: 'V6', name: '复盘学习' },
];

const voteMatrix = [
  [620, 280, 180, 360, 420],
  [510, 240, 390, 190, 310],
  [430, 220, 280, 470, 520],
  [760, 610, 260, 540, 450],
  [980, 730, 320, 690, 560],
  [890, 780, 410, 640, 700],
];

const maturityMatrix = [
  [74, 58, 46, 63, 67],
  [62, 49, 61, 44, 52],
  [68, 55, 57, 72, 66],
  [84, 76, 53, 71, 69],
  [91, 83, 59, 80, 74],
  [87, 79, 64, 77, 81],
];

const cubeCanvas = document.querySelector('#capabilityCube');
const ctx = cubeCanvas.getContext('2d');
const detail = document.querySelector('#cubeDetail');
const dpr = window.devicePixelRatio || 1;
let width = 0;
let height = 0;
let pointer = { x: -9999, y: -9999 };
let activeCell = null;
let cellPolygons = [];
let rotationPulse = 0;

const leafIndustries = flattenIndustries(industryTaxonomy);

function flattenIndustries(taxonomy) {
  return taxonomy.flatMap((level1) =>
    level1.children.flatMap((level2) =>
      level2.children.flatMap((level3) =>
        level3.children.map((level4) => ({
          l1: level1,
          l2: level2,
          l3: level3,
          l4: level4,
          label: `${level1.code}${level2.code}${level3.code}${level4.code}`,
          fullName: `${level1.name} · ${level2.name} · ${level3.name} · ${level4.name}`,
        })),
      ),
    ),
  );
}

function resizeCanvas() {
  const rect = cubeCanvas.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
  cubeCanvas.width = width * dpr;
  cubeCanvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function project(point) {
  const originX = width * 0.48;
  const originY = height * 0.66;
  const xAxis = { x: 34, y: 15 };
  const yAxis = { x: -35, y: 16 };
  const zAxis = { x: 0, y: -34 };
  return {
    x: originX + point.x * xAxis.x + point.y * yAxis.x + point.z * zAxis.x,
    y: originY + point.x * xAxis.y + point.y * yAxis.y + point.z * zAxis.y,
  };
}

function polygon(points, fillStyle, strokeStyle = 'rgba(165, 236, 255, .14)', lineWidth = 1) {
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  if (fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

function capabilityColor(maturity, votes, alphaBoost = 0) {
  const voteAlpha = Math.min(0.76, 0.12 + votes / 1400 + alphaBoost);
  if (maturity >= 82) return `rgba(78, 249, 255, ${voteAlpha})`;
  if (maturity >= 68) return `rgba(146, 99, 255, ${voteAlpha})`;
  if (maturity >= 55) return `rgba(255, 197, 87, ${voteAlpha})`;
  return `rgba(255, 83, 119, ${voteAlpha})`;
}

function drawCube() {
  ctx.clearRect(0, 0, width, height);
  cellPolygons = [];
  rotationPulse += 0.012;

  const xCount = Math.min(leafIndustries.length, 12);
  const yCount = productDimensions.length;
  const zCount = valueChainStages.length;
  const glow = 0.5 + Math.sin(rotationPulse) * 0.18;

  const corners = {
    o: project({ x: 0, y: 0, z: 0 }),
    x: project({ x: xCount, y: 0, z: 0 }),
    y: project({ x: 0, y: yCount, z: 0 }),
    z: project({ x: 0, y: 0, z: zCount }),
    xy: project({ x: xCount, y: yCount, z: 0 }),
    xz: project({ x: xCount, y: 0, z: zCount }),
    yz: project({ x: 0, y: yCount, z: zCount }),
    xyz: project({ x: xCount, y: yCount, z: zCount }),
  };

  const shellGradient = ctx.createLinearGradient(corners.z.x, corners.z.y, corners.xy.x, corners.xy.y);
  shellGradient.addColorStop(0, 'rgba(78, 249, 255, .09)');
  shellGradient.addColorStop(0.55, 'rgba(111, 92, 255, .06)');
  shellGradient.addColorStop(1, 'rgba(255, 79, 216, .08)');

  polygon([corners.o, corners.x, corners.xy, corners.y], 'rgba(5, 11, 28, .28)');
  polygon([corners.z, corners.xz, corners.xyz, corners.yz], shellGradient, `rgba(154, 232, 255, ${0.22 + glow * 0.1})`, 1.4);
  polygon([corners.x, corners.xz, corners.xyz, corners.xy], 'rgba(78, 249, 255, .045)');
  polygon([corners.y, corners.xy, corners.xyz, corners.yz], 'rgba(255, 79, 216, .04)');
  polygon([corners.o, corners.z, corners.xz, corners.x], 'rgba(78, 249, 255, .035)');
  polygon([corners.o, corners.y, corners.yz, corners.z], 'rgba(146, 99, 255, .035)');

  drawGridLines(xCount, yCount, zCount);
  drawCapabilityCells(xCount, yCount, zCount);
  drawAxisLabels(xCount, yCount, zCount);
  updateDetail(activeCell ?? createCell(4, 0, 4));

  requestAnimationFrame(drawCube);
}

function drawGridLines(xCount, yCount, zCount) {
  ctx.strokeStyle = 'rgba(165, 236, 255, .12)';
  ctx.lineWidth = 1;

  for (let x = 0; x <= xCount; x += 1) {
    drawLine(project({ x, y: 0, z: 0 }), project({ x, y: yCount, z: 0 }));
    drawLine(project({ x, y: 0, z: 0 }), project({ x, y: 0, z: zCount }));
    drawLine(project({ x, y: yCount, z: zCount }), project({ x, y: 0, z: zCount }));
  }

  for (let y = 0; y <= yCount; y += 1) {
    drawLine(project({ x: 0, y, z: 0 }), project({ x: xCount, y, z: 0 }));
    drawLine(project({ x: 0, y, z: 0 }), project({ x: 0, y, z: zCount }));
    drawLine(project({ x: xCount, y, z: zCount }), project({ x: 0, y, z: zCount }));
  }

  for (let z = 0; z <= zCount; z += 1) {
    drawLine(project({ x: 0, y: 0, z }), project({ x: xCount, y: 0, z }));
    drawLine(project({ x: 0, y: 0, z }), project({ x: 0, y: yCount, z }));
    drawLine(project({ x: xCount, y: yCount, z }), project({ x: xCount, y: 0, z }));
  }
}

function drawLine(start, end) {
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
}

function drawCapabilityCells(xCount, yCount, zCount) {
  for (let z = 0; z < zCount; z += 1) {
    for (let y = 0; y < yCount; y += 1) {
      for (let x = 0; x < xCount; x += 1) {
        if ((x + y * 2 + z) % 3 === 1) continue;
        const cell = createCell(x, y, z);
        const points = [
          project({ x, y, z: z + 1 }),
          project({ x: x + 1, y, z: z + 1 }),
          project({ x: x + 1, y: y + 1, z: z + 1 }),
          project({ x, y: y + 1, z: z + 1 }),
        ];
        const hovered = pointInPolygon(pointer, points);
        if (hovered) activeCell = cell;
        polygon(
          points,
          capabilityColor(cell.maturity, cell.votes, hovered ? 0.18 : 0),
          hovered ? 'rgba(255, 255, 255, .92)' : 'rgba(255, 255, 255, .16)',
          hovered ? 2 : 0.8,
        );
        cellPolygons.push({ cell, points });
      }
    }
  }
}

function createCell(x, y, z) {
  const industry = leafIndustries[x % leafIndustries.length];
  const product = productDimensions[y % productDimensions.length];
  const stage = valueChainStages[z % valueChainStages.length];
  const votes = voteMatrix[z % voteMatrix.length][y % productDimensions.length] + x * 23;
  const maturity = Math.min(95, maturityMatrix[z % maturityMatrix.length][y % productDimensions.length] + (x % 4) * 2);
  return {
    x,
    y,
    z,
    industry,
    product,
    stage,
    votes,
    maturity,
    key: `${industry.label}-${product.code}-${stage.code}`,
  };
}

function pointInPolygon(point, points) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i, i += 1) {
    const intersects =
      points[i].y > point.y !== points[j].y > point.y &&
      point.x < ((points[j].x - points[i].x) * (point.y - points[i].y)) / (points[j].y - points[i].y) + points[i].x;
    if (intersects) inside = !inside;
  }
  return inside;
}

function drawAxisLabels(xCount, yCount, zCount) {
  ctx.save();
  ctx.font = '700 12px Inter, sans-serif';
  ctx.fillStyle = 'rgba(237, 247, 255, .88)';
  ctx.textAlign = 'center';
  ctx.fillText('X 行业层级：1 / A / a / Ⅰ', project({ x: xCount / 2, y: -0.7, z: 0 }).x, project({ x: xCount / 2, y: -0.7, z: 0 }).y);
  ctx.fillText('Y 产品维度：P1–P5', project({ x: -1, y: yCount / 2, z: 0 }).x, project({ x: -1, y: yCount / 2, z: 0 }).y);
  ctx.textAlign = 'left';
  ctx.fillText('Z 价值链应用场景', project({ x: -0.5, y: -0.5, z: zCount }).x, project({ x: -0.5, y: -0.5, z: zCount }).y);

  ctx.font = '600 10px Inter, sans-serif';
  leafIndustries.slice(0, xCount).forEach((industry, index) => {
    const p = project({ x: index + 0.5, y: -0.12, z: 0 });
    ctx.fillText(industry.label, p.x, p.y);
  });

  productDimensions.forEach((product, index) => {
    const p = project({ x: -0.35, y: index + 0.55, z: 0 });
    ctx.fillText(product.code, p.x, p.y);
  });

  valueChainStages.forEach((stage, index) => {
    const p = project({ x: -0.15, y: -0.2, z: index + 0.72 });
    ctx.fillText(stage.code, p.x, p.y);
  });
  ctx.restore();
}

function updateDetail(cell) {
  detail.innerHTML = `
    <span class="detail-label">当前格子</span>
    <h3>${cell.industry.label} × ${cell.product.code} × ${cell.stage.code}</h3>
    <p>${cell.industry.fullName} 与「${cell.product.name}」交叉后，在「${cell.stage.name}」价值链环节的 AI 可用度为 ${cell.maturity}/100。当前颜色透明度由 ${cell.votes.toLocaleString('zh-CN')} 票驱动。</p>
    <div class="confidence-meter" aria-label="能力成熟度 ${cell.maturity}%"><span style="width: ${cell.maturity}%"></span></div>
    <dl class="detail-stats">
      <div><dt>行业层级</dt><dd>${cell.industry.label}</dd></div>
      <div><dt>产品</dt><dd>${cell.product.code}</dd></div>
      <div><dt>投票</dt><dd>${cell.votes.toLocaleString('zh-CN')}</dd></div>
    </dl>
  `;
}

function renderTaxonomy() {
  document.querySelector('#taxonomyMap').innerHTML = industryTaxonomy
    .map((level1) => `
      <article class="taxonomy-card">
        <h3>${level1.code} · ${level1.name}</h3>
        ${level1.children
          .map((level2) => `
            <details open>
              <summary>${level2.code} · ${level2.name}</summary>
              ${level2.children
                .map((level3) => `
                  <p>
                    <strong>${level3.code} · ${level3.name}</strong>
                    <span>${level3.children.map((level4) => `${level4.code} ${level4.name}`).join(' / ')}</span>
                  </p>
                `)
                .join('')}
            </details>
          `)
          .join('')}
      </article>
    `)
    .join('');
}

function renderDimensionLists() {
  document.querySelector('#productDimensionList').innerHTML = productDimensions
    .map((product) => `<li><strong>${product.code}</strong><span>${product.name}</span><em>${product.description}</em></li>`)
    .join('');

  document.querySelector('#valueChainList').innerHTML = valueChainStages
    .map((stage) => `<li><strong>${stage.code}</strong><span>${stage.name}</span></li>`)
    .join('');
}

cubeCanvas.addEventListener('pointermove', (event) => {
  const rect = cubeCanvas.getBoundingClientRect();
  pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
});

cubeCanvas.addEventListener('pointerleave', () => {
  pointer = { x: -9999, y: -9999 };
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
renderTaxonomy();
renderDimensionLists();
drawCube();
