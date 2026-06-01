import { useMemo, useState } from 'react'
import { kpiTrend } from '../data/telecomData.js'

const metrics = [
  { key: 'availability', label: 'Availability', suffix: '%', target: 98 },
  { key: 'accessibility', label: 'Accessibility', suffix: '%', target: 98 },
  { key: 'retainability', label: 'Retainability', suffix: '%', target: 97.5 },
  { key: 'throughput', label: 'Throughput', suffix: ' Mbps', target: 72 },
  { key: 'volte', label: 'VoLTE SR', suffix: '%', target: 98 }
]

const metricClasses = {
  availability: 'availability',
  accessibility: 'accessibility',
  retainability: 'retainability',
  throughput: 'throughput',
  volte: 'volte'
}

function formatValue(value, suffix) {
  return `${Number(value).toFixed(1)}${suffix}`
}

function KpiTrend() {
  const [activeMetric, setActiveMetric] = useState('availability')
  const [range, setRange] = useState('14')
  const [hoveredPoint, setHoveredPoint] = useState(null)

  const visibleData = useMemo(() => {
    const days = Number(range)
    return kpiTrend.slice(-days)
  }, [range])

  const selectedMetric = metrics.find((metric) => metric.key === activeMetric) || metrics[0]
  const minValue = activeMetric === 'throughput' ? 40 : 94
  const maxValue = activeMetric === 'throughput' ? 90 : 100
  const width = 760
  const height = 330
  const chart = { left: 58, right: 24, top: 34, bottom: 56 }
  const innerWidth = width - chart.left - chart.right
  const innerHeight = height - chart.top - chart.bottom

  const getX = (index) => chart.left + (visibleData.length <= 1 ? 0 : (index / (visibleData.length - 1)) * innerWidth)
  const getY = (value) => chart.top + ((maxValue - value) / (maxValue - minValue)) * innerHeight

  const selectedPoints = visibleData.map((item, index) => ({
    ...item,
    x: getX(index),
    y: getY(item[activeMetric]),
    value: item[activeMetric]
  }))

  const areaPoints = selectedPoints.map((point) => `${point.x},${point.y}`).join(' ')
  const baselineY = chart.top + innerHeight
  const areaPolygon = `${chart.left},${baselineY} ${areaPoints} ${chart.left + innerWidth},${baselineY}`
  const linePoints = selectedPoints.map((point) => `${point.x},${point.y}`).join(' ')
  const targetY = getY(selectedMetric.target)

  const average = visibleData.reduce((sum, item) => sum + item[activeMetric], 0) / visibleData.length
  const best = Math.max(...visibleData.map((item) => item[activeMetric]))
  const worst = Math.min(...visibleData.map((item) => item[activeMetric]))
  const delta = visibleData[visibleData.length - 1][activeMetric] - visibleData[0][activeMetric]
  const latest = visibleData[visibleData.length - 1]

  const gridTicks = activeMetric === 'throughput' ? [40, 50, 60, 70, 80, 90] : [94, 95, 96, 97, 98, 99, 100]

  return (
    <article className="panel kpi-panel">
      <div className="panel-header responsive-header">
        <div>
          <h3>KPI Trend</h3>
          <p className="muted mini">Interactive trend view for RAN/NOC performance KPIs</p>
        </div>
        <div className="kpi-controls no-print">
          <select className="input-control" value={activeMetric} onChange={(event) => setActiveMetric(event.target.value)}>
            {metrics.map((metric) => <option key={metric.key} value={metric.key}>{metric.label}</option>)}
          </select>
          <select className="input-control" value={range} onChange={(event) => setRange(event.target.value)}>
            <option value="7">Last 7 days</option>
            <option value="14">Last 14 days</option>
          </select>
        </div>
      </div>

      <div className="kpi-summary-grid">
        <div className="kpi-summary-card">
          <span>Latest</span>
          <strong>{formatValue(latest[activeMetric], selectedMetric.suffix)}</strong>
        </div>
        <div className="kpi-summary-card">
          <span>Average</span>
          <strong>{formatValue(average, selectedMetric.suffix)}</strong>
        </div>
        <div className="kpi-summary-card">
          <span>Best / Worst</span>
          <strong>{formatValue(best, selectedMetric.suffix)} / {formatValue(worst, selectedMetric.suffix)}</strong>
        </div>
        <div className={`kpi-summary-card ${delta >= 0 ? 'positive' : 'negative'}`}>
          <span>Period Change</span>
          <strong>{delta >= 0 ? '+' : ''}{formatValue(delta, selectedMetric.suffix)}</strong>
        </div>
      </div>

      <div className="kpi-chart-shell">
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${selectedMetric.label} KPI trend chart`}>
          <defs>
            <linearGradient id="kpiAreaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {gridTicks.map((tick) => {
            const y = getY(tick)
            return (
              <g key={tick}>
                <line x1={chart.left} y1={y} x2={chart.left + innerWidth} y2={y} className="grid-line" />
                <text x="14" y={y + 4}>{tick}{selectedMetric.suffix === '%' ? '%' : ''}</text>
              </g>
            )
          })}

          <line x1={chart.left} y1={baselineY} x2={chart.left + innerWidth} y2={baselineY} className="axis" />
          <line x1={chart.left} y1={chart.top} x2={chart.left} y2={baselineY} className="axis" />
          <line x1={chart.left} y1={targetY} x2={chart.left + innerWidth} y2={targetY} className="target-line" />
          <text x={chart.left + innerWidth - 88} y={targetY - 8} className="target-label">Target {selectedMetric.target}{selectedMetric.suffix}</text>

          <g className={`kpi-series ${metricClasses[activeMetric]}`}>
            <polygon points={areaPolygon} className="kpi-area" />
            <polyline points={linePoints} className="kpi-line" />
            {selectedPoints.map((point, index) => (
              <g key={point.period} onMouseEnter={() => setHoveredPoint(point)} onMouseLeave={() => setHoveredPoint(null)}>
                <circle cx={point.x} cy={point.y} r="7" className="kpi-dot" />
                <circle cx={point.x} cy={point.y} r="17" className="kpi-hit-area" />
                {index % 2 === 0 || visibleData.length <= 7 ? <text x={point.x - 18} y={height - 22}>{point.period.replace('Day ', 'D')}</text> : null}
              </g>
            ))}
          </g>

          {hoveredPoint && (
            <g className="kpi-tooltip-svg">
              <rect x={Math.min(hoveredPoint.x + 14, width - 190)} y={Math.max(hoveredPoint.y - 55, 18)} width="168" height="48" rx="12" />
              <text x={Math.min(hoveredPoint.x + 30, width - 174)} y={Math.max(hoveredPoint.y - 32, 41)}>{hoveredPoint.period}</text>
              <text x={Math.min(hoveredPoint.x + 30, width - 174)} y={Math.max(hoveredPoint.y - 12, 61)}>{selectedMetric.label}: {formatValue(hoveredPoint.value, selectedMetric.suffix)}</text>
            </g>
          )}
        </svg>
      </div>

      <div className="kpi-legend">
        {metrics.map((metric) => (
          <button
            key={metric.key}
            className={`legend-item ${metricClasses[metric.key]} ${activeMetric === metric.key ? 'active' : ''}`}
            onClick={() => setActiveMetric(metric.key)}
            type="button"
          >
            <span /> {metric.label}
          </button>
        ))}
      </div>
    </article>
  )
}

export default KpiTrend
