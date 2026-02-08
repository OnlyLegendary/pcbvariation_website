// theme toggle
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("light");
  };
}

// graph (same as before, just cleaner)
const ctx = document.getElementById('pufChart');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length: 20}, (_, i) => `run ${i+1}`),
      datasets: [
        {
          label: 'path A (led)',
          data: [312,315,318,319,317,320,318,319,316,318,319,317,320,318,319,317,318,316,319,318],
          borderWidth: 2
        },
        {
          label: 'path B (no led)',
          data: [284,286,287,288,286,287,285,288,286,287,286,288,285,287,286,288,286,287,285,286],
          borderWidth: 2
        }
      ]
    }
  });
}
