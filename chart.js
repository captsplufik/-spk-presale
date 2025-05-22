// chart.js
import Chart from 'chart.js/auto';

export function renderTokenomicsChart() {
  const ctx = document.getElementById('tokenomicsChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Presale (50%)', 'Liquidity (30%)', 'Team (10%)', 'Marketing (10%)'],
      datasets: [{
        label: 'SPK Token Distribution',
        data: [50, 30, 10, 10],
        backgroundColor: ['#6c5ce7', '#00cec9', '#fdcb6e', '#d63031'],
      }]
    },
    options: {
      responsive: true,
    }
  });
}
