import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: 'Assignment-1',
            marks: 60,

        },
        {
            name: 'Assignment-2',
            marks: 49,

        },
        {
            name: 'Assignment-3',
            marks: 50,

        },
        {
            name: 'Assignment-4',
            marks: 60,

        },
        {
            name: 'Assignment-5',
            marks: 59,

        },
        {
            name: 'Assignment-6',
            marks: 60,
        },
        {
            name: 'Assignment-7',
            marks: 60,
        },
        {
            name: 'Assignment-8',
            marks: 60,
        },
    ];

    return (
        <div>
            <div>
               <h1>Assignment Marks in ComposedChart..</h1>
            </div>
            <div width="100%" height="100%">
                <ComposedChart
                    width={1000}
                    height={800}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="marks" barSize={40} fill="#40a341" />
                    <Line type="monotone" dataKey="marks" stroke="#b6092e" />
                </ComposedChart>
            </div>

        </div>
    );
};

export default Statistics;