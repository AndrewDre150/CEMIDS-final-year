
// import PropTypes from "prop-types";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";

// const CO2EmissionsCard = ({ colors, percentFillValue, cardInfo }) => {
//   const filledValue = (percentFillValue / 100) * 360; // 360 degress for a full circle
//   const remainedValue = 360 - filledValue;

//   const data = [
//     { name: "Remained", value: remainedValue },
//     { name: "CO2 Emissions", value: filledValue },
//   ];

//   const renderTooltipContent = (value) => {
//     return `${(value / 360) * 100} %`;
//   };

//   return (
//     <div className="area-card">
//       <div className="area-card-info">
//         <h5 className="info-title">{cardInfo.title}</h5>
//         <div className="info-value">{cardInfo.value}</div>
//         <p className="info-text">{cardInfo.text}</p>
//       </div>
//       <div className="area-card-chart">
//         <PieChart width={100} height={100}>
//           <Pie
//             data={data}
//             cx={50}
//             cy={45}
//             innerRadius={20}
//             fill="#e4e8ef"
//             paddingAngle={0}
//             dataKey="value"
//             startAngle={-270}
//             endAngle={150}
//             stroke="none"
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={colors[index % colors.length]}
//               />
//             ))}
//           </Pie>
//           <Tooltip formatter={renderTooltipContent} />
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// export default CO2EmissionsCard;

// CO2EmissionsCard.propTypes = {
//   colors: PropTypes.array.isRequired,
//   percentFillValue: PropTypes.number.isRequired,
//   cardInfo: PropTypes.object.isRequired,
// };



import React, { useState, useEffect } from 'react';
import AreaCard from "./AreaCard"; // Import the AreaCard component
import "./AreaCards.scss";

const AreaCards = () => {
  // State to store CO2 level
  const [co2Level, setCO2Level] = useState(400); // Initial CO2 level
  
  // Simulate updating CO2 level at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random CO2 level (for demonstration)
      const randomCO2Level = Math.floor(Math.random() * 1000) + 400; // Random value between 400 and 1400 ppm
      setCO2Level(randomCO2Level);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={(co2Level - 400) / 10} // Calculate percent fill value based on CO2 level
        cardInfo={{
          title: "Current Reading",
          value: `${co2Level}ppm`, // Display current CO2 level
          text: `The CO2 level is ${co2Level}ppm.`,
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50} // Hardcoded value for demonstration
        cardInfo={{
          title: "Today's Average Level",
          value: "600ppm", // Hardcoded value for demonstration
          text: "You are in safe Range",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40} // Hardcoded value for demonstration
        cardInfo={{
          title: "Yesterday's Average",
          value: "700ppm", // Hardcoded value for demonstration
          text: "Safe range",
        }}
      />
    </section>
  );
};

export default AreaCards;
