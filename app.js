const totalSites = document.getElementById("totalSites");
const activeSites = document.getElementById("activeSites");
const criticalAlarms = document.getElementById("criticalAlarms");
const avgAvailability = document.getElementById("avgAvailability");
const sitesTable = document.getElementById("sitesTable");
const alarmList = document.getElementById("alarmList");
const map = document.getElementById("map");

const pageInfo = document.getElementById("pageInfo");
const showingSites = document.getElementById("showingSites");
const allSitesCount = document.getElementById("allSitesCount");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

const alarmPageInfo = document.getElementById("alarmPageInfo");
const showingAlarms = document.getElementById("showingAlarms");
const allAlarmsCount = document.getElementById("allAlarmsCount");
const prevAlarmPage = document.getElementById("prevAlarmPage");
const nextAlarmPage = document.getElementById("nextAlarmPage");

let currentPage = 1;
const rowsPerPage = 10;
let filteredSites = [...siteData];

let currentAlarmPage = 1;
const alarmsPerPage = 6;
let filteredAlarms = [...alarmData];

function initStats() {
  totalSites.textContent = siteData.length;
  activeSites.textContent = siteData.filter(s => s.status === "Active").length;
  criticalAlarms.textContent = alarmData.filter(a => a.severity === "Critical").length;
  const avg = siteData.reduce((sum, site) => sum + site.availability, 0) / siteData.length;
  avgAvailability.textContent = `${avg.toFixed(1)}%`;
}

function renderSites() {
  const totalPages = Math.max(1, Math.ceil(filteredSites.length / rowsPerPage));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * rowsPerPage;
  const currentSites = filteredSites.slice(start, start + rowsPerPage);

  sitesTable.innerHTML = currentSites.map(site => `
    <tr>
      <td data-label="Site ID">${site.id}</td>
      <td data-label="City">${site.city}</td>
      <td data-label="Vendor">${site.vendor}</td>
      <td data-label="Status"><span class="badge ${site.status}">${site.status}</span></td>
      <td data-label="Availability">${site.availability}%</td>
      <td data-label="Ticket">${site.ticket}</td>
    </tr>
  `).join("");

  showingSites.textContent = currentSites.length;
  allSitesCount.textContent = filteredSites.length;
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevPage.disabled = currentPage === 1;
  nextPage.disabled = currentPage === totalPages;
}

function renderAlarms() {
  const totalPages = Math.max(1, Math.ceil(filteredAlarms.length / alarmsPerPage));
  if (currentAlarmPage > totalPages) currentAlarmPage = totalPages;

  const start = (currentAlarmPage - 1) * alarmsPerPage;
  const currentAlarms = filteredAlarms.slice(start, start + alarmsPerPage);

  alarmList.innerHTML = currentAlarms.map(alarm => `
    <div class="alarm-card">
      <div class="alarm-card-top">
        <div>
          <strong>${alarm.type}</strong>
          <p class="muted">${alarm.site} · ${alarm.time}</p>
        </div>
        <span class="badge ${alarm.severity}">${alarm.severity}</span>
      </div>
      <div class="alarm-solution"><strong>Suggested action:</strong> ${alarm.solution}</div>
    </div>
  `).join("");

  showingAlarms.textContent = currentAlarms.length;
  allAlarmsCount.textContent = filteredAlarms.length;
  alarmPageInfo.textContent = `Page ${currentAlarmPage} of ${totalPages}`;
  prevAlarmPage.disabled = currentAlarmPage === 1;
  nextAlarmPage.disabled = currentAlarmPage === totalPages;
}

function renderMap() {
  const mapSites = siteData.slice(0, 45);
  map.innerHTML = mapSites.map(site => `
    <span class="site-dot ${site.status}" title="${site.id} - ${site.status}" style="left:${site.x}%; top:${site.y}%"></span>
  `).join("");
}

function initAssistantOptions() {
  const select = document.getElementById("assistantSelect");
  select.innerHTML = alarmData.map(alarm => `<option>${alarm.type}</option>`).join("");
}

function drawChart() {
  const canvas = document.getElementById("kpiChart");
  const ctx = canvas.getContext("2d");
  const rectWidth = Math.max(250, canvas.offsetWidth || 600);
  canvas.width = rectWidth * devicePixelRatio;
  canvas.height = 180 * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const padding = 26;
  const usableWidth = rectWidth - padding * 2;
  const usableHeight = 140;
  const min = 90;
  const max = 100;

  ctx.clearRect(0, 0, rectWidth, 180);
  ctx.lineWidth = 2;
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--line");

  for (let i = 0; i < 4; i++) {
    const y = padding + (usableHeight / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(rectWidth - padding, y);
    ctx.stroke();
  }

  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary");
  ctx.lineWidth = 3;
  ctx.beginPath();

  kpiTrend.forEach((value, index) => {
    const x = padding + (usableWidth / (kpiTrend.length - 1)) * index;
    const y = padding + usableHeight - ((value - min) / (max - min)) * usableHeight;
    index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });

  ctx.stroke();

  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary");

  kpiTrend.forEach((value, index) => {
    const x = padding + (usableWidth / (kpiTrend.length - 1)) * index;
    const y = padding + usableHeight - ((value - min) / (max - min)) * usableHeight;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

document.getElementById("siteSearch").addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  filteredSites = siteData.filter(site =>
    Object.values(site).join(" ").toLowerCase().includes(value)
  );
  currentPage = 1;
  renderSites();
});

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderSites();
  }
});

nextPage.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredSites.length / rowsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderSites();
  }
});

document.getElementById("alarmFilter").addEventListener("change", (event) => {
  const value = event.target.value;
  filteredAlarms = value === "all"
    ? [...alarmData]
    : alarmData.filter(alarm => alarm.severity === value);
  currentAlarmPage = 1;
  renderAlarms();
});

prevAlarmPage.addEventListener("click", () => {
  if (currentAlarmPage > 1) {
    currentAlarmPage--;
    renderAlarms();
  }
});

nextAlarmPage.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredAlarms.length / alarmsPerPage);
  if (currentAlarmPage < totalPages) {
    currentAlarmPage++;
    renderAlarms();
  }
});

document.getElementById("suggestBtn").addEventListener("click", () => {
  const selected = document.getElementById("assistantSelect").value;
  document.getElementById("suggestion").textContent = suggestions[selected] || "No suggestion available.";
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
  setTimeout(drawChart, 50);
});

document.getElementById("csvInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  alert(`Uploaded: ${file.name}\nCSV parsing can be connected here to update sites, alarms, and KPIs.`);
});

window.addEventListener("resize", drawChart);

initStats();
initAssistantOptions();
renderSites();
renderAlarms();
renderMap();
drawChart();
document.getElementById("suggestion").textContent = suggestions[alarmData[0].type];
