$(document).ready(function () {
    //rgba(231,79,91,0.5)
    //rgba(255,215,92,0.8)
    //rgba(39,170,116,0.8)
    /*=============================================
    =            file types            =
    =============================================*/
    
    function chart(){
    var options = {
      series: [44, 55, 13],
      chart: {
      type: 'pie',
      height: '350px',
          width: '100%',

      toolbar: {
        show:true,
      },

          
    },
    // rgba(color,color,color,0.8 => opacity)
    colors: ['rgba(231,79,91,0.8)', 'rgba(255,215,92,0.8)', 'rgba(39,170,116,0.8)'],
    legend: {
      fontSize: "16px",
      fontFamily: "'Cairo', sans-serif",
      fontWeight: '500',

      },
    labels: ['سلبي', ' محايد ', 'ايجابي '],
    
    };

    var typeFile = new ApexCharts(document.querySelector("#typeFile"), options);
    typeFile.render();



    var platforms = {
      series: [{
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }],
    colors: ['rgba(37,159,251,0.4)'],
      annotations: {
      points: [{
        seriesIndex: 0,
        label: {
          offsetY: 0,
          style: {
           
           
          },
        }
      }]
    },
    legend: {
      fontSize: "32px"
    },
    chart: {
      height: '350px',
      width: '100%',

      type: 'bar',

    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '40%',

      }
    },
   
    dataLabels: {
      enabled: false
    },
    stroke: {
    },
    
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
     yaxis: {
      labels: {
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

        },
      },},
      
    xaxis: {
      labels: {
        rotate: -45,
        style: {
          colors: [],
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

        },
      },
      categories: ['Apples Apples Apples Apples', 'Oranges Oranges Oranges Oranges', 'Strawberries Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
        'Blackberries Blackberries Blackberries', 'Pears Pears Pears', 'Watermelons Watermelons Watermelons', 'Cherries Cherries Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
      ],
      tickPlacement: 'on'
    },
   
    fill: {
     
    }
    };

    var platform = new ApexCharts(document.querySelector("#platform"), platforms);
    platform.render();
  


    var followersS = {
      series: [{
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }],
    colors: ['rgba(37,159,251,0.4)'],

      annotations: {
      points: [{
        seriesIndex: 0,
        label: {
          offsetY: 0,
          style: {
          },
        }
      }]
    },
    chart: {
      height: '350px',
      width: '100%',
      type: 'bar',

    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '40%',

      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
    },
    
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    xaxis: {
      labels: {
        rotate: -45,
        style: {
          fontSize: '16px',
          fontWeight: '500',

          fontFamily: "'Cairo', sans-serif",
        },
      },
      categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
      ],
      tickPlacement: 'on'
    },yaxis: {
      labels: {
        style: {
          fontSize: '16px',
          fontWeight: '500',

          fontFamily: "'Cairo', sans-serif",
        },
      },},
      
   
    fill: {
     
    }
    };

    var followers = new ApexCharts(document.querySelector("#followers"), followersS);
    followers.render();
  


    var topCountryS = {
      
      series: [{
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }],
    colors: ['rgba(37,159,251,0.4)'],

      annotations: {
      points: [{
        seriesIndex: 0,
        label: {
          offsetY: 0,
          style: {
            background: 'rgba(37,159,251,0.4)',
          },
        }
      }]
      
    },

    
    chart: {
      height: '350px',
      width: '100%',
      type: 'bar',

    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '40%',
        backgroundColor: 'rgba(37,159,251,0.4)',

      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
    },
    
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    
    xaxis: {
      labels: {
        rotate: -45,
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

        },
      },
      categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
      ],
      tickPlacement: 'on'
    },yaxis: {
      labels: {
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

        },
      },},
      
   
    fill: {
     
    }
    };

    var topCountry = new ApexCharts(document.querySelector("#topCountry"), topCountryS);
    topCountry.render();


    var dataAnnotations=[];
    for (let index = 2; index < 8; index++) {
  dataAnnotations.push({
    
      x: index,
      label: {
        borderRadius:'5px',
        fontSize:'20px',
        fontFamily: "'Cairo', sans-serif",
        fontWeight: '500',
        borderColor: "#FEB019",

        style: {
          color: "#fff",
          background: "#FEB019",
          fontSize:'20px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

        },
        text: "العنوان "
      }
    
  })      
    }
    var timeZoneS = {
      series: [{
      data: [1,3,5,4,7,8,9,6,2,5,4,4]
    }],
    
    annotations: {
      
      xaxis: [
        ...dataAnnotations
      ],
     
    },
    
      chart: {
      type: 'area',
      stacked: true,
      height: '350px',
      width: '100%',
     
      toolbar: {
        show:true,
      }
    },
    dataLabels: {
      enabled: true
    },
    markers: {
      size: 0,
    },
    title: {
    },
    
    xaxis: {
      labels: {
        rotate: -45,
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

        },
      },
      
    },yaxis: {
      labels: {
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

        },
      },},
      
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.0,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    
    
    };

    var timeZone = new ApexCharts(document.querySelector("#timeZone"), timeZoneS);
    timeZone.render();
      
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
      width: '100%',
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
        "الهلال اتمني فوز الهلال"
      ],
      labels: {
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',
          marginTop: '25px',
          paddingTop: '25px',
          cssClass: 'apexcharts-yaxis-label',

        }, 
      }
    },
    
    yaxis: {
     
      tooltip: {
        enabled: true
      },labels:{
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

          marginTop: '25px',
          paddingTop: '25px',
          cssClass: 'apexcharts-yaxis-label',
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
      fontSize: "16px",
      fontFamily: "'Cairo', sans-serif",
      fontWeight: '500',
    
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
      height: '550px',    width: '100%',
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
        "الهلال اتمني فوز الهلال"      ],
      labels: {
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

          marginTop: '25px',
          paddingTop: '25px',
          cssClass: 'apexcharts-yaxis-label',
        }, 
      }
    },
    
    yaxis: {
     
      tooltip: {
        enabled: true
      },labels:{
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

          marginTop: '25px',
          paddingTop: '25px',
          cssClass: 'apexcharts-yaxis-label',
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
      fontSize: "16px",
      fontFamily: "'Cairo', sans-serif",
      fontWeight: '500',
    
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
      width: '100%',
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
        "الهلال اتمني فوز الهلال"   
         ],
      labels: {
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',
          marginTop: '25px',
          paddingTop: '25px',
          cssClass: 'apexcharts-yaxis-label',
        }, 
      }
    },
    
    yaxis: {
     
      tooltip: {
        enabled: true
      },labels:{
        style: {
          fontSize: '16px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: '500',

          marginTop: '25px',
          paddingTop: '25px',
          cssClass: 'apexcharts-yaxis-label',
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

      fontSize: "16px",
      fontFamily: "'Cairo', sans-serif",
      fontWeight: '500',
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
//textMostUsed
//wordMostUsed
//