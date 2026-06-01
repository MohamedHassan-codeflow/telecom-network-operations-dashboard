# Telecom Ops Dashboard - React Version

This is the React + Vite version of the Telecom Network Operations Dashboard.

## What was improved

- Converted the old HTML, CSS, and JavaScript project into React components.
- Added Bootstrap globally through `main.jsx`.
- Added Tailwind CSS support through Vite.
- Replaced the old canvas KPI chart with Recharts.
- Replaced the browser `alert()` with SweetAlert2.
- Added Framer Motion animations for a more modern UI.
- Added React Icons in the sidebar.
- Organized the code into reusable components.
- Kept the original telecom data in a separate data file.

## Main components

- `Sidebar.jsx`
- `StatCard.jsx`
- `KpiChart.jsx`
- `SiteMap.jsx`
- `SitesTable.jsx`
- `AlarmsPanel.jsx`
- `AssistantPanel.jsx`

## How to run

Open CMD or VS Code terminal inside this project folder, then run:

```cmd
npm install
npm run dev
```

The app will open automatically in your browser.

## Recommended next improvements

- Add a login page.
- Add CSV parsing to update sites and alarms dynamically.
- Add export to CSV or PDF.
- Add React Router pages for Dashboard, Sites, Alarms, Reports, and Settings.
- Add more realistic fields such as Region, Technology, SLA, Assigned Team, and Alarm Age.
