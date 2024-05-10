import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const CO2EmissionsCard = ({ colors, percentFillValue, cardInfo }) => {
  const filledValue = (percentFillValue / 100) * 360; // 360 degress for a full circle
  const remainedValue = 360 - filledValue;

  const data = [
    { name: "Remained", value: remainedValue },
    { name: "CO2 Emissions", value: filledValue },
  ];

  const renderTooltipContent = (value) => {
    return `${(value / 360) * 100} %`;
  };

  return (
    <div className="area-card">
      <div className="area-card-info">
        <h5 className="info-title">{cardInfo.title}</h5>
        <div className="info-value">{cardInfo.value}</div>
        <p className="info-text">{cardInfo.text}</p>
      </div>
      <div className="area-card-chart">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={45}
            innerRadius={20}
            fill="#e4e8ef"
            paddingAngle={0}
            dataKey="value"
            startAngle={-270}
            endAngle={150}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltipContent} />
        </PieChart>
      </div>
    </div>
  );
};

export default CO2EmissionsCard;

CO2EmissionsCard.propTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
  cardInfo: PropTypes.object.isRequired,
};



// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";

// const CO2EmissionsCard = ({ colors, cardInfo }) => {
//   const [currentCO2Level, setCurrentCO2Level] = useState(cardInfo.value);
//   const [yesterdaysAverageCO2, setYesterdaysAverageCO2] = useState(700); // Set yesterday's average CO2 level

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Simulate random CO2 level changes for demonstration
//       const newCurrentCO2Level = Math.floor(Math.random() * 1000) + 300;
//       setCurrentCO2Level(newCurrentCO2Level);
//     }, 5000); // Update CO2 level every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []); // Empty dependency array ensures the effect runs only once

//   const currentFilledValue = (currentCO2Level / 5000) * 360; // Assuming maximum CO2 level of 5000ppm
//   const currentRemainedValue = 360 - currentFilledValue;

//   const data = [
//     { name: "Remained", value: currentRemainedValue },
//     { name: "CO2 Emissions", value: currentFilledValue },
//   ];

//   const renderTooltipContent = (value) => {
//     return `${(value / 360) * 100} %`;
//   };

//   return (
//     <div className="area-card">
//       <div className="area-card-info">
//         <h5 className="info-title">{cardInfo.title}</h5>
//         <div className="info-value">{`${currentCO2Level} ppm`}</div>
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

// CO2EmissionsCard.propTypes = {
//   colors: PropTypes.array.isRequired,
//   cardInfo: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     value: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default CO2EmissionsCard;
