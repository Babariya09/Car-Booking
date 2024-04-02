import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import "../Dashboard/Dashboard.css";
import axios from 'axios';
import "../Dashboard/Dashboard.css";

const AddcarData = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const fetchData = async () => {
        setLoading(true);
        try {
            const { data: response } = await axios.get(
                "http://localhost:8000/api/Gmaildata"
            );
            setData(response);
        } catch (error) { }
        setLoading(false);

    };

    useEffect(() => {
        fetchData();
    }, []);

    let iterator = data.values();
    let array1 = []
    for (let value of iterator) {
        var state = value.state;
        console.log("state", state);
        array1.push(state)
    }

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

    var Maharashtra = getOccurrence(array1, "Maharashtra")
    var Rajasthan = getOccurrence(array1, "Rajasthan")
    var Gujarat = getOccurrence(array1, "Gujarat")

    const data1 = [
        {
            name: "Maharashtra",
            week: Maharashtra,
        },
        {
            name: "Rajasthan",
            week: Rajasthan,
        },
        {
            name: "Gujarat",
            week: Gujarat,
        },


    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28',];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <>
            <div className='pichart'>
                <div>
                    <PieChart width={400} height={450} className='pie' >
                        <Pie
                            data={data1}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            dataKey="week"
                        >
                            {data1.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div>
                    <div className='box'><p style={{ paddingLeft: "28px", margin: "-7px", color: "#FFBB28", position: "absolute" }}>Gujrat</p></div>
                    <div className='box1'><p style={{ paddingLeft: "28px", margin: "-7px", color: "#00C49F", position: "absolute" }}>Rajasthan	</p></div>
                    <div className='box2'><p style={{ paddingLeft: "28px", margin: "-7px", color: "#0088FE", position: "absolute" }}>Maharashtra</p></div>
                </div>
            </div>
        </>
    );
}

export default AddcarData;


