const ctx = document.getElementById('experience').getContext('2d')
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Javascript', 'C#', 'React', 'Node', 'HTML', 'CSS'],
    datasets: [
      {
        label: 'Experience',
        data: [95, 85, 80, 50, 80, 75],
        backgroundColor: ['rgba(55, 25, 93, 0.6)']
      }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    }
  }
})