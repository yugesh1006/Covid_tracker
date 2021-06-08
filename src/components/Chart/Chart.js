import React, { useEffect, useState } from 'react';
import{fetchDaily} from "../../api/api";
import {Line,Bar} from "react-chartjs-2";
import "./chart.css"

function Chart({data:{confirmed,recovered,deaths},country}) {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi =async()=>{
            setDailyData(await fetchDaily());
        }
       console.log(dailyData);
        fetchApi(); // eslint-disable-next-line
    }, [])

    const lineChart=(
        dailyData.length !==0
        ?(
        <Line data={{ 
            labels: dailyData.map(({date}) =>date), 
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'lightgreen',
                fill:true,
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                fill:true,
                backgroundColor:'rgba(255,0,0,0.2)'
            }], 
            }}/>
        ):null
    );
    const barChart=(
        confirmed ? (
            <Bar
                data={{
                    labels:['Infected','Recoverd','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data:[confirmed.value,recovered.value,deaths.value]
                    },
                ],
                }}
                options={{
                    legend: { display: false},
                    title: { display: true, text:`Current State is ${country}`},
                }}
            />
        ):null
    );
    

    return (
        <div className="chart_container">
           {country ? barChart : lineChart} 
        </div>
    )
}

export default Chart
