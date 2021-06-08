$(document).ready(function() {


function chart(){

  var textMostUsedS = {
    series: [{
    name: 'ايجابي',
    data: [44, 55, 41, 37, 22, 43, 21],
  }, {
    name: 'محايد ',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'سلبي ',
    data: [12, 17, 11, 9, 15, 11, 20]
  }],
    //#
  //#
  //#
  colors:['rgba(39,170,116,0.8)', 'rgba(255,215,92,0.8)', 'rgba(231,79,91,0.8)'],
    chart: {
    type: 'bar',
    height: '550px',
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
  },
  
  xaxis: {
    categories: [

      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",    ],
    labels: {
      style: {
        fontSize: '13px',
        fontFamily: "'Cairo', sans-serif",
        fontWeight: '400',

      }, 
    }
  },
  
  yaxis: {
   
    tooltip: {
      enabled: true
    },labels:{
      style: {
        fontSize: '14px',
        fontFamily: "'Cairo', sans-serif",
        fontWeight: '400',

      },
    }
  },
  tooltip: {
   
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    fontSize: "14px",
    fontFamily: "'Cairo', sans-serif",
    fontWeight: '400',
  
  }
  };

  var textMostUsed = new ApexCharts(document.querySelector("#textMostUsed"), textMostUsedS);
  textMostUsed.render();

  var mostUsedS = {
    series: [{
    name: 'ايجابي',
    data: [44, 55, 41, 37, 22, 43, 21],
  }, {
    name: 'محايد ',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'سلبي ',
    data: [12, 17, 11, 9, 15, 11, 20]
  }],
    //#
  //#
  //#
  colors:['rgba(39,170,116,0.8)', 'rgba(255,215,92,0.8)', 'rgba(231,79,91,0.8)'],
    chart: {
    type: 'bar',
    height: '550px',
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
  },
  
  xaxis: {
    categories: [

      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال"       ],
    labels: {
      style: {
        fontSize: '14px',
        fontFamily: "'Cairo', sans-serif",
        fontWeight: '400',

      }, 
    }
  },
  
  yaxis: {
   
    tooltip: {
      enabled: true
    },labels:{
      style: {
        fontSize: '14px',
        fontFamily: "'Cairo', sans-serif",
        fontWeight: '400',

      },
    }
  },
  tooltip: {
   
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    fontSize: "14px",
    fontFamily: "'Cairo', sans-serif",
    fontWeight: '400',
  
  }
  };

  var mostUsed = new ApexCharts(document.querySelector("#mostUsed"), mostUsedS);
  mostUsed.render();

  var wordMostUsedS = {
    series: [{
    name: 'ايجابي',
    data: [44, 55, 41, 37, 22, 43, 21],
  }, {
    name: 'محايد ',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'سلبي ',
    data: [12, 17, 11, 9, 15, 11, 20]
  }],
    //#
  //#
  //#
  colors:['rgba(39,170,116,0.8)', 'rgba(255,215,92,0.8)', 'rgba(231,79,91,0.8)'],
    chart: {
      
    tooltip: {
      enabled: true
    },
    type: 'bar',
    height: '550px',
    stacked: true,
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
      },
      
      autoSelected: 'zoom' 
    },

  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
  },
  xaxis: {
    categories: [

      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال",
      "الهلال اتمني فوز الهلال"       ],
    labels: {
      style: {
        fontSize: '14px',
        fontFamily: "'Cairo', sans-serif",
        fontWeight: '400',
      }, 
    }
  },
  grid: {
    padding: {
      left: 10,
      right: 10
    },margin: {
      left: 10,
      right: 10
    },
  },
  yaxis: {
   
    tooltip: {
      enabled: true
    },labels:{
      style: {
        fontSize: '14px',
        fontFamily: "'Cairo', sans-serif",
        fontWeight: '400',

      },
    }
  },
  tooltip: {
   
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    fontSize: "14px",
    fontFamily: "'Cairo', sans-serif",
    fontWeight: '400',
  
  }
  };

  var wordMostUsed = new ApexCharts(document.querySelector("#wordMostUsed"), wordMostUsedS);
  wordMostUsed.render();
}
chart();
  $("#big-bar").click(()=>{
chart();
  })
  
});