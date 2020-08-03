import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
    title: {
        text: "Gráfico",
    },
    series: [
        {
            name: "FECHA 1",
            data: [1, 2, 3],
        },
        {
            name: "FECHA OTRA",
            data: [1, 7, 10],
        },
    ],
};

const Graphic = () => (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
);

export default Graphic;
