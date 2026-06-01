import { useState } from 'react'
import { suggestions } from '../data/telecomData.js'

function AssistantPanel({ alarms }) {
  const [selectedType, setSelectedType] = useState(alarms[0]?.type || '')
  const [suggestion, setSuggestion] = useState(suggestions[alarms[0]?.type] || '')

  const uniqueAlarmTypes = [...new Set(alarms.map((alarm) => alarm.type))]

  const handleSuggest = () => {
    setSuggestion(suggestions[selectedType] || 'No suggestion available for this alarm type.')
  }

  return (
    <section id="assistant" className="panel assistant">
      <div>
        <h3>Troubleshooting Assistant</h3>
        <p className="muted">Select an alarm type to get a suggested root-cause direction and next action.</p>
      </div>

      <div className="assistant-box">
        <select className="search" value={selectedType} onChange={(event) => setSelectedType(event.target.value)}>
          {uniqueAlarmTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <button className="primary-btn" onClick={handleSuggest}>Suggest Action</button>
      </div>

      <div className="suggestion">
        <strong>Recommended action:</strong> {suggestion}
      </div>
    </section>
  )
}

export default AssistantPanel
