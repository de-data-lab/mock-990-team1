export const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Modular Bar Chart",
      },
    },
  };

export const option2018 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "2018 Non Profit Funding",
      },
    },
  };

  export const optionsSector = {
    responsive: true,
    plugins: {
      datalabels:{
        color: "black",
        display:true,
        anchor: "end",
        align: "end",
        font: {
          weight: 'bold'
        }
      }
    },
  };

  export const optionOverall = {
    responsive: true,
    plugins: {
      datalabels:{
        display:false,
      }
    },
  };
  export const optionStateOverall = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Nonprofit Charitible Contributions Recieved by State",
      },
    },
  };