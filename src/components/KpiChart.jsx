import { kpiTrend } from '../data/telecomData.js'

const chartData = kpiTrend.map((availability, index) => ({
  day: `Day ${index + 1}`,
  availability
}))

function KpiChart() {
  const width = 720
  const height = 260
  const padding = { top: 24, right: 28, bottom: 42, left: 52 }
  const minY = 90
  const maxY = 100
  const plotWidth = width - padding.left - padding.right
  const plotHeight = height - padding.top - padding.bottom

  const getX = (index) => padding.left + (index / Math.max(chartData.length - 1, 1)) * plotWidth
  const getY = (value) => padding.top + ((maxY - value) / (maxY - minY)) * plotHeight

  const points = chartData.map((item, index) => `${getX(index)},${getY(item.availability)}`).join(' ')
  const areaPoints = `${padding.left},${padding.top + plotHeight} ${points} ${padding.left + plotWidth},${padding.top + plotHeight}`
  const yTicks = [90, 92, 94, 96, 98, 100]

  return (
    <article className="panel kpi-panel">
      <div className="panel-header">
        <h3>KPI Trend</h3>
        <span>Availability %</span>
      </div>

      <div className="kpi-svg-wrap" aria-label="KPI availability trend chart">
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="kpiChartTitle" preserveAspectRatio="none">
          <title id="kpiChartTitle">Availability trend for the last seven days</title>

          {yTicks.map((tick) => {
            const y = getY(tick)
            return (
              <g key={tick}>
                <line x1={padding.left} x2={padding.left + plotWidth} y1={y} y2={y} className="kpi-grid-line" />
                <text x={padding.left - 12} y={y + 4} textAnchor="end" className="kpi-axis-label">{tick}%</text>
              </g>
            )
          })}

          <polyline points={`${padding.left},${padding.top} ${padding.left},${padding.top + plotHeight} ${padding.left + plotWidth},${padding.top + plotHeight}`} className="kpi-axis-line" />
          <polygon points={areaPoints} className="kpi-area" />
          <polyline points={points} className="kpi-line" />

          {chartData.map((item, index) => {
            const x = getX(index)
            const y = getY(item.availability)
            return (
              <g key={item.day}>
                <circle cx={x} cy={y} r="5" className="kpi-dot" />
                <text x={x} y={padding.top + plotHeight + 25} textAnchor="middle" className="kpi-axis-label">{item.day.replace('Day ', 'D')}</text>
                <text x={x} y={y - 12} textAnchor="middle" className="kpi-value-label">{item.availability}%</text>
              </g>
            )
          })}
        </svg>
      </div>
    </article>
  )
}

export default KpiChart
