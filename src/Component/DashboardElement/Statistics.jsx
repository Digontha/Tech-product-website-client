import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Cell, Legend, PieChart, ResponsiveContainer, Tooltip,Pie } from 'recharts';


const COLORS = ["#0088FE", "#FFBB28","Red"];
const Statistics = () => {
    const axiosPublic = useAxiosPublic()
    const [countOfProduct, setCountOfProduct] = useState(0)
    const [countOfReview, setCountOfReview] = useState(0)
    const [countOfUser, setCountOfUser] = useState(0)
    console.log(countOfProduct, countOfReview, countOfUser);
    useEffect(() => {
        axiosPublic.get("/allProductCount")
            .then(res => {
                console.log(res.data);
                setCountOfProduct(res.data.count)
            })
    }, [axiosPublic])

    useEffect(() => {
        axiosPublic.get("/reviewCount")
            .then(res => {
                console.log(res.data);
                setCountOfReview(res.data.ReviewCount)
            })
    }, [axiosPublic])

    useEffect(() => {
        axiosPublic.get("/usersCount")
            .then(res => {
                console.log(res.data);
                setCountOfUser(res.data.UserCount)
            })
    }, [axiosPublic])

    const data = [
        { name: "Total Product", value: parseFloat(countOfProduct) },
        { name: "Total Review", value: parseFloat(countOfReview) },
        { name: "Total Users", value: parseFloat(countOfUser) },
      ];

    return (
        <div style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              lg:outerRadius={200}
              fill="#8884d8"
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                return (
                  <text x={x} y={y} fill="black" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central"  fontWeight="bold">
                    {`${data[index].name}: ${value.toFixed(2)}%`}
                  </text>
                );
              }}
            >
              {data?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Statistics;