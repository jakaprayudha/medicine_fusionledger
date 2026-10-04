/* =========================================================
   MEDICINE ACCOUNTING DASHBOARD
========================================================= */

/* =========================================================
   SIDEBAR MOBILE
========================================================= */

const mobileMenu = document.getElementById("mobileMenu");
const sidebar = document.getElementById("sidebar");

if (mobileMenu && sidebar) {
  mobileMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

/* =========================================================
   SIDEBAR DROPDOWN
========================================================= */

const dropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");

dropdownToggles.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const targetId = this.dataset.dropdown;
    const submenu = document.getElementById(targetId);

    if (!submenu) return;

    const isCurrentlyOpen = this.classList.contains("open");

    /*
     * Tutup semua dropdown
     */
    document.querySelectorAll(".nav-dropdown-toggle").forEach((toggle) => {
      toggle.classList.remove("open");
    });

    document.querySelectorAll(".nav-submenu").forEach((menu) => {
      menu.classList.remove("open");
    });

    /*
     * Jika sebelumnya tertutup,
     * buka dropdown yang diklik
     */
    if (!isCurrentlyOpen) {
      this.classList.add("open");
      submenu.classList.add("open");
    }
  });
});

/* =========================================================
   SUBMENU ACTIVE STATE
========================================================= */

const submenuItems = document.querySelectorAll(".nav-subitem");

submenuItems.forEach((item) => {
  item.addEventListener("click", function () {
    /*
     * Hapus active dari submenu lain
     */
    submenuItems.forEach((subItem) => {
      subItem.classList.remove("active");
    });

    /*
     * Active submenu yang dipilih
     */
    this.classList.add("active");
  });
});

/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

const navItems = document.querySelectorAll(
  ".nav-item:not(.nav-dropdown-toggle)",
);

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => {
      nav.classList.remove("active");
    });

    this.classList.add("active");
  });
});

/* =========================================================
   REVENUE CHART
========================================================= */

const revenueCanvas = document.getElementById("revenueChart");

if (revenueCanvas) {
  const revenueCtx = revenueCanvas.getContext("2d");

  new Chart(revenueCtx, {
    type: "line",

    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],

      datasets: [
        {
          label: "Revenue",

          data: [8.2, 8.7, 9.1, 9.8, 10.1, 10.8, 11.2, 11.1, 12.48],

          borderColor: "#147d72",

          backgroundColor: "rgba(20,125,114,.08)",

          borderWidth: 2,

          fill: true,

          tension: 0.4,

          pointRadius: 2,

          pointHoverRadius: 5,
        },

        {
          label: "Expense",

          data: [6.4, 6.7, 6.9, 7.1, 7.4, 7.6, 7.9, 8.0, 8.31],

          borderColor: "#9aa5a2",

          borderWidth: 1.5,

          borderDash: [4, 4],

          fill: false,

          tension: 0.4,

          pointRadius: 1,
        },
      ],
    },

    options: {
      responsive: true,

      maintainAspectRatio: false,

      interaction: {
        intersect: false,
        mode: "index",
      },

      plugins: {
        legend: {
          display: true,

          position: "top",

          align: "end",

          labels: {
            boxWidth: 8,

            boxHeight: 8,

            padding: 15,

            font: {
              size: 9,
            },
          },
        },

        tooltip: {
          backgroundColor: "#172321",

          padding: 10,

          titleFont: {
            size: 10,
          },

          bodyFont: {
            size: 9,
          },

          callbacks: {
            label: function (context) {
              return (
                context.dataset.label +
                ": Rp " +
                context.parsed.y.toFixed(2) +
                " M"
              );
            },
          },
        },
      },

      scales: {
        y: {
          beginAtZero: false,

          grid: {
            color: "#edf0ef",
          },

          ticks: {
            font: {
              size: 8,
            },

            color: "#919b99",

            callback: function (value) {
              return value + " M";
            },
          },
        },

        x: {
          grid: {
            display: false,
          },

          ticks: {
            font: {
              size: 8,
            },

            color: "#919b99",
          },
        },
      },
    },
  });
}

/* =========================================================
   CASH FLOW CHART
========================================================= */

const cashCanvas = document.getElementById("cashChart");

if (cashCanvas) {
  const cashCtx = cashCanvas.getContext("2d");

  new Chart(cashCtx, {
    type: "bar",

    data: {
      labels: ["1", "5", "10", "15", "20", "25", "30"],

      datasets: [
        {
          label: "Inflow",

          data: [0.8, 1.1, 0.7, 1.4, 0.9, 1.0, 0.92],

          backgroundColor: "#147d72",

          borderRadius: 3,

          barPercentage: 0.65,
        },

        {
          label: "Outflow",

          data: [0.5, 0.6, 0.8, 0.7, 0.9, 0.65, 0.76],

          backgroundColor: "#cbd4d1",

          borderRadius: 3,

          barPercentage: 0.65,
        },
      ],
    },

    options: {
      responsive: true,

      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false,
        },
      },

      scales: {
        y: {
          beginAtZero: true,

          grid: {
            color: "#edf0ef",
          },

          ticks: {
            font: {
              size: 7,
            },

            color: "#919b99",

            callback: function (value) {
              return value + "M";
            },
          },
        },

        x: {
          grid: {
            display: false,
          },

          ticks: {
            font: {
              size: 7,
            },

            color: "#919b99",
          },
        },
      },
    },
  });
}

/* =========================================================
   PERIOD SELECTOR
========================================================= */

const periodSelector = document.getElementById("periodSelector");

if (periodSelector) {
  periodSelector.addEventListener("change", function () {
    console.log("Selected period:", this.value);
  });
}

/* =========================================================
   AI FINANCIAL ASSISTANT
========================================================= */

const aiInput = document.getElementById("aiInput");

const aiSend = document.getElementById("aiSend");

function askAI() {
  if (!aiInput) return;

  const question = aiInput.value.trim();

  if (!question) {
    aiInput.focus();

    return;
  }

  alert(
    "AI Financial Assistant\n\n" +
      "Demo Question:\n" +
      question +
      "\n\n" +
      "AI response engine will be connected " +
      "to the Accounting Data Layer in the next stage.",
  );

  aiInput.value = "";
}

if (aiSend) {
  aiSend.addEventListener("click", askAI);
}

if (aiInput) {
  aiInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();

      askAI();
    }
  });
}

/* =========================================================
   LOGOUT
========================================================= */

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    const confirmLogout = confirm("Are you sure you want to sign out?");

    if (!confirmLogout) {
      return;
    }

    sessionStorage.removeItem("medicine_logged_in");

    sessionStorage.removeItem("medicine_user");

    window.location.href = "index.html";
  });
}

/* =========================================================
   LAST UPDATED
========================================================= */

function updateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const lastUpdated = document.getElementById("lastUpdated");

  if (lastUpdated) {
    lastUpdated.textContent = time;
  }
}

updateTime();

/* =========================================================
   SESSION CHECK
========================================================= */

const loggedIn = sessionStorage.getItem("medicine_logged_in");

/*
 * Untuk demo awal session check
 * sengaja tidak memaksa redirect,
 * sehingga dashboard bisa langsung dibuka.
 *
 * Nanti saat authentication backend
 * sudah dibuat, bagian ini bisa diaktifkan.
 */

/*
if (loggedIn !== "true") {

  window.location.href =
    "index.html";

}
*/

/* =========================================================
   END
========================================================= */
