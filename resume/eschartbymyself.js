   var myChart = echarts.init(document.getElementById('drew'));
   var option = {
       baseOption: {
           series: [{
               type: 'pie',
               radius: '75%',
               roseType: 'angle',
               itemStyle: {
                   emphasis: {
                       shadowBlur: 100,
                       shadowOffsetX: 10,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
               },
               data: [{
                   value: 305,
                   name: 'ajax,jsonp'
               }, {
                   value: 244,
                   name: 'less,bootstrap'
               }, {
                   value: 310,
                   name: 'nodejs,gulp,webpack'
               }, {
                   value: 335,
                   name: 'Javascript&Jquery'
               }, {
                   value: 300,
                   name: 'HTML5&CSS3'
               }, {
                   value: 265,
                   name: 'npm'
               }, ]
           }],
           backgroundColor: "#111",
           textStyle: {
               fontWeight: "bold",
               fontSize: 20,
           }
       },
   };
   myChart.setOption(option)
   $(window).resize(function() {
       myChart.resize()
   })