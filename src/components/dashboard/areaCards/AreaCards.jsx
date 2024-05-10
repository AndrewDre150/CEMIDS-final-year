// import AreaCard from "./AreaCard";
// import "./AreaCards.scss";

// const AreaCards = () => {
//   return (
//     <section className="content-area-cards">
//       <AreaCard
//         colors={["#e4e8ef", "#475be8"]}
//         percentFillValue={80}
//         cardInfo={{
//           title: "Current Reading",
//           value: "$400ppm",
//           text: "The CO2 level is 400ppm.",
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#4ce13f"]}
//         percentFillValue={50}
//         cardInfo={{
//           title: "Today's Average Level",
//           value: "600ppm",
//           text: "You are in safe Range",
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#f29a2e"]}
//         percentFillValue={40}
//         cardInfo={{
//           title: "Yesterday's Average",
//           value: "700ppm",
//           text: "Safe range",
//         }}
//       />
//     </section>
//   );
// };

// export default AreaCards;



// import React, { useState, useEffect } from "react";
// import AreaCard from "./AreaCard";
// import "./AreaCards.scss";

// const AreaCards = () => {
//   const [currentCO2Level, setCurrentCO2Level] = useState(400); // Initial CO2 level for "Current Reading" card

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Simulate random CO2 level changes for demonstration
//       const newCurrentCO2Level = Math.floor(Math.random() * 1000) + 300;
//       setCurrentCO2Level(newCurrentCO2Level);
//     }, 5000); // Update CO2 level every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <section className="content-area-cards">
//       <AreaCard
//         colors={["#e4e8ef", "#475be8"]}
//         percentFillValue={currentCO2Level * 0.08} // Convert ppm to percent for the "Current Reading" card
//         cardInfo={{
//           title: "Current Reading",
//           value: `${currentCO2Level} ppm`, // Display current CO2 level
//           text: `The CO2 level is ${currentCO2Level} ppm.`,
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#4ce13f"]}
//         percentFillValue={50}
//         cardInfo={{
//           title: "Today's Average Level",
//           value: "600 ppm",
//           text: "You are in safe Range",
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#f29a2e"]}
//         percentFillValue={40}
//         cardInfo={{
//           title: "Yesterday's Average",
//           value: "700 ppm",
//           text: "Safe range",
//         }}
//       />
//     </section>
//   );
// };

// export default AreaCards;



import React, { useState, useEffect } from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  const [currentCO2Level, setCurrentCO2Level] = useState(400); // Initial CO2 level for "Current Reading" card
  const [averageCO2Level, setAverageCO2Level] = useState(600); // Initial CO2 level for "Today's Average Level" card
  const threshold = 800; // Define the CO2 level threshold for safety

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random CO2 level changes for demonstration
      const newCurrentCO2Level = Math.floor(Math.random() * 1000) + 300;
      setCurrentCO2Level(newCurrentCO2Level);

      const newAverageCO2Level = Math.floor(Math.random() * 1000) + 300;
      setAverageCO2Level(newAverageCO2Level);
    }, 5000); // Update CO2 levels every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Empty dependency array ensures the effect runs only once

  const getCurrentRangeStatus = (co2Level) => {
    return co2Level <= threshold ? "Safe range" : "Unsafe range"; // Determine range based on threshold
  };

  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={currentCO2Level * 0.08} // Convert ppm to percent for the "Current Reading" card
        cardInfo={{
          title: "Current Reading",
          value: `${currentCO2Level} ppm`, // Display current CO2 level
          text: `The CO2 level is ${currentCO2Level} ppm. ${getCurrentRangeStatus(
            currentCO2Level
          )}`,
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={averageCO2Level * 0.08} // Convert ppm to percent for the "Today's Average Level" card
        cardInfo={{
          title: "Today's Average Level",
          value: `${averageCO2Level} ppm`, // Display average CO2 level
          text: `The average CO2 level is ${averageCO2Level} ppm. ${getCurrentRangeStatus(
            averageCO2Level
          )}`,
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40} // Set a fixed percentage for the "Yesterday's Average" card
        cardInfo={{
          title: "Yesterday's Average",
          value: "700 ppm", // Set a fixed value for demonstration
          text: "Safe range", // Default to "Safe range" for demonstration
        }}
      />
    </section>
  );
};

export default AreaCards;
