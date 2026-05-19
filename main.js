//  Interactive Scripts

// Custom Cursor Logic
const cursor = document.getElementById("custom-cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Hover effect for cursor expansion
document.querySelectorAll(".hover-trigger").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});

// Countdown Timer Logic
let countdownTime = 4 * 3600 + 12 * 60 + 44; // 4 Hours, 12 Minutes, 44 Seconds
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  if (countdownTime <= 0) return;
  countdownTime--;

  let h = Math.floor(countdownTime / 3600);
  let m = Math.floor((countdownTime % 3600) / 60);
  let s = countdownTime % 60;
  let ms = Math.floor(Math.random() * 99); // Simulated milliseconds

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  ms = ms < 10 ? "0" + ms : ms;

  countdownEl.innerText = `04:${h}:${m}:${s}:${ms}`;
}, 10);

// Simulated live purchase ticker logs
const mockLogNames = [
  "USER_0142",
  "USER_9901",
  "USER_5321",
  "ADDR_UK_01",
  "ADDR_FR_29",
  "USER_0488",
];
const mockLogItems = ["S_HOODIE_03", "M_PARKA_01", "L_CARGO_02"];
const logContainer = document.getElementById("ticker-log");

setInterval(() => {
  const time = new Date().toLocaleTimeString("en-US", { hour12: false });
  const name = mockLogNames[Math.floor(Math.random() * mockLogNames.length)];
  const item = mockLogItems[Math.floor(Math.random() * mockLogItems.length)];
  const logItem = document.createElement("div");

  if (Math.random() > 0.5) {
    logItem.innerHTML = `[${time}] <span class="text-volt">SYS_VERIFIED:</span> ${name} SECURED ${item}`;
  } else {
    logItem.innerHTML = `[${time}] <span class="text-neutral-400">SYS_PING:</span> ${name} SECURED ${item}`;
  }

  logContainer.prepend(logItem);
  if (logContainer.children.length > 8) {
    logContainer.removeChild(logContainer.lastChild);
  }
}, 4000);
