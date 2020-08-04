insertTemperatureLineChart = () => {
    let parent = document.getElementById('chart_placeholder');

    let div = document.createElement('div');
    div.setAttribute('id', "temperature_linechart");
    div.setAttribute('class', 'w-100')

    parent.appendChild(div);
}
populateTemperatureLineChart = () => {
    Morris.Area({
        element: "temperature_linechart",
        behaveLikeLine: true,
        data: [
            { w: '2020-07-29 00:00', t: 8, h: 88 },
            { w: '2020-07-29 01:00', t: 8, h: 88 },
            { w: '2020-07-29 02:00', t: 8, h: 88 },
            { w: '2020-07-29 03:00', t: 15, h: 55 },
            { w: '2020-07-29 04:00', t: 8, h: 88 },
            { w: '2020-07-29 05:00', t: 15, h: 55 },
            { w: '2020-07-29 06:00', t: 8, h: 88 },
            { w: '2020-07-29 07:00', t: 8, h: 88 },
            { w: '2020-07-29 08:00', t: 8, h: 88 },
            { w: '2020-07-29 09:00', t: 8, h: 88 },
            { w: '2020-07-29 10:00', t: 15, h: 55 },
            { w: '2020-07-29 11:00', t: 8, h: 88 },
            { w: '2020-07-29 12:00', t: 8, h: 88 },
            { w: '2020-07-29 13:00', t: 8, h: 88 },
            { w: '2020-07-29 14:00', t: 8, h: 88 },
            { w: '2020-07-29 15:00', t: 8, h: 88 },
            { w: '2020-07-29 16:00', t: 15, h: 55 },
            { w: '2020-07-29 17:00', t: 8, h: 88 },
            { w: '2020-07-29 18:00', t: 15, h: 55 },
            { w: '2020-07-29 19:00', t: 8, h: 88 },
            { w: '2020-07-29 20:00', t: 8, h: 88 },
            { w: '2020-07-29 21:00', t: 8, h: 88 },
            { w: '2020-07-29 22:00', t: 8, h: 88 },
            { w: '2020-07-29 23:00', t: 15, h: 55 }
        ],
        xkey: 'w',
        ykeys: ['h', 't'],
        labels: ['Humidity', 'Temperature'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        gridLineColor: '#e0e0e0',
        hideHover: 'auto',
        lineColors: ['rgb(100,181,246)', 'rgb(240,98,146)']
    })

}