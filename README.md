# Telecom Network Operations Dashboard - React Pro v5

A React + Vite telecom operations dashboard with login, routing, CSV import/export, PDF printing, realistic telecom fields, pagination, persistent settings, and responsive design.

## Features
- Login page with demo credentials
- React Router pages: Dashboard, Sites, Alarms, Reports, Settings
- 120 demo sites and 140 demo alarms
- Pagination for Sites and Alarms tables
- CSV import for sites and alarms
- CSV export for sites and alarms
- PDF export using browser print/save as PDF
- Telecom fields: Region, City, Technology, SLA, Assigned Team, Alarm Age
- Functional Settings page:
  - Theme
  - Default Region filter
  - SLA Mode for reports
  - Records per page
  - Compact view
  - Show/hide dashboard map
- Responsive tables, dark/light mode, and troubleshooting assistant

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## CSV Site Headers Example
id,region,city,vendor,technology,status,availability,sla,assignedTeam,ticket,x,y

## CSV Alarm Headers Example
id,siteId,type,severity,region,technology,alarmAge,assignedTeam,sla,rootCause,action

## Vercel
Framework: Vite
Build command: npm run build
Output directory: dist
