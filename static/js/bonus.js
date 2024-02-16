
function gaugeChart(sample) {
    // Using D3 to access the sample data and populate the gauge chart
    d3.json(url).then((data) => {

        // Get the demographic information (i.e. metadata) 
        let metadata = data.metadata;
        // Filter
        let value = metadata.find(result => result.id == sample); // directly access the first item
        // Access the value and console log it
        //console.log(value);

        // Get the washing frequency value
        let washingFrequency = value.wfreq;

        // Gauge Chart's trace
        let gauge_chart_trace = {
            value: washingFrequency,
            domain: {x: [0,1], y: [0,1]},
            title: {
                text: '<b>Belly Button Washing Frequency</b><br>Scrubs per Week', 
                font: {color: 'black', size: 20}
            },
            type: 'indicator',
            mode: 'gauge+number',
            gauge: {
                axis: { range: [0,9], tickmode: "linear", tick0: 2, dtick: 2},
                bar: { color:"black"},
                steps: [ 
                { range: [0, 1], color: "#ADD8E6" },
                { range: [1, 2], color: "#B0E0E6" },
                { range: [2, 3], color: "#87CEEB" },
                { range: [3, 4], color: "#87CEFA" },
                { range: [4, 5], color: "#00BFFF" },
                { range: [5, 6], color: "#6495ED" },
                { range: [6, 7], color: "#1E90FF" },
                { range: [7, 8], color: "#4169E1" },
                { range: [8, 9], color: "#0000FF" },
                   
                ],

                // Labels
                labels: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'],
                hoverinfo: 'label',
                // Arrow hand
                threshold: {
                    line: { color: "brown", width: 4 },
                    thickness: 0.8, // Adjust the thickness of arrow
                    value: washingFrequency
                }
            }
        };

// Set the layout
let layout = {
    width: 500,
    height: 500,
    margin: { t: 0, b: 0 },
    font: {size: 18},
    xaxis: {
        range: [0, 9],
        zeroline: false,
        showticklabels: true,
        showgrid: false,
        fixedrange: true,
        tickvals: [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5], // Midpoints of each range
        ticktext: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'], // Text displayed at each tick
        tickfont: { color: 'black' } // Set the tick label color to black
    },
    yaxis: {
        range: [0, 9],
        zeroline: false,
        showticklabels: true,
        showgrid: false,
        fixedrange: true,
        tickvals: [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5], // Midpoints of each range
        ticktext: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'], // Text displayed at each tick
        tickfont: { color: 'black' } // Set the tick label color to black
    }
};

        // Call Plotly
        Plotly.newPlot('gauge', [gauge_chart_trace], layout);
    });
};

