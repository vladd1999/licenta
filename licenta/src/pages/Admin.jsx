import React from 'react';
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Chart from "../components/chart/Chart";
import "./admin.css";
import Sidebar from "../components/sidebar/Sidebar";
import WidgetSm from "../components/widgetSm/WidgetSm";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods";


export default function Admin  ()  {
    const [userStats, setUserStats] = useState([]);
  
    const MONTHS = useMemo(
      () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      []
    );
  
    useEffect(() => {
      const getStats = async () => {
        try {
          const res = await userRequest.get("/users/stats");
          res.data.map((item) =>
            setUserStats((prev) => [
              ...prev,
              { name: MONTHS[item._id - 1], "Active User": item.total },
            ])
          );
        } catch {}
      };
      getStats();
    }, [MONTHS]);
  return (
    <div className="home">
    <Navbar />
  <Bar />
  <div className="container">
  <Sidebar />
    <div className="homeWidgets">
      <WidgetSm />
    </div>
    
  </div>
  <Chart
      data={userStats}
      title="User Activity"
      grid
      dataKey="Active User"
    />
    <Footer />
  </div>
            
  )
}



