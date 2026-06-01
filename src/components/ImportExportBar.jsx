import { FaDownload, FaFileCsv, FaFilePdf, FaUpload } from 'react-icons/fa6'
import { downloadCsv } from '../utils/csv.js'

function ImportExportBar({ sites, alarms, onCsvUpload }) {
  const exportReportPdf = () => window.print()
  return (
    <section className="action-bar no-print">
      <label className="primary-btn" htmlFor="sitesCsv"><FaUpload /> Import Sites CSV</label>
      <input id="sitesCsv" type="file" accept=".csv" hidden onChange={(e) => onCsvUpload(e, 'sites')} />
      <label className="primary-btn secondary" htmlFor="alarmsCsv"><FaFileCsv /> Import Alarms CSV</label>
      <input id="alarmsCsv" type="file" accept=".csv" hidden onChange={(e) => onCsvUpload(e, 'alarms')} />
      <button className="ghost-btn" onClick={() => downloadCsv('sites-export.csv', sites)}><FaDownload /> Export Sites CSV</button>
      <button className="ghost-btn" onClick={() => downloadCsv('alarms-export.csv', alarms)}><FaDownload /> Export Alarms CSV</button>
      <button className="ghost-btn" onClick={exportReportPdf}><FaFilePdf /> Export PDF</button>
    </section>
  )
}
export default ImportExportBar
