const ctx = document.getElementById('myChart').getContext('2d');

const data = {
  labels: [0, 1, 2, 3, 4, 5], // Labels para o eixo X (opcional)
  datasets: [{
    label: 'First Dataset',
    data: [30, 23, 21, 19, 17, 3], // Apenas valores Y
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    pointRadius: 5,
    pointHoverRadius: 7,
    fill: false // Para não preencher a área abaixo da linha
  }]
};

const config = {
  type: 'line', // Tipo do gráfico
  data: data,
  options: {
    responsive: true,
    animations: {
      radius: {
        duration: 2000, // Duração da animação (em ms)
        easing: 'easeOutBounce' // Tipo de animação
      }
    },
    scales: {
      x: {
        grid: {
          color: 'gray', // Cor da grade no eixo X
          lineWidth: 1, // Largura das linhas da grade
        },
      },
      y: {
        grid: {
          color: 'gray', // Cor da grade no eixo Y
          lineWidth: 1, // Largura das linhas da grade
        },
      }
    }
  }
};

new Chart(ctx, config);
