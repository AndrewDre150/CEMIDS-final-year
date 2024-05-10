import React, { useState, useEffect, useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { MdOutlineMenu } from "react-icons/md";
import { SidebarContext } from "../../context/SidebarContext";

const CO2Monitor = () => {
    const { openSidebar } = useContext(SidebarContext);

  const [co2Level, setCO2Level] = useState(0);

  // Simulate fetching CO2 data from sensor (replace with actual sensor data)
  useEffect(() => {
    const fetchData = () => {
      // Simulate fetching CO2 data (replace with actual data fetching)
      const newCO2Level = Math.floor(Math.random() * 5000); // Random value for demonstration
      setCO2Level(newCO2Level);
    };

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Define thresholds for CO2 levels
  const thresholds = {
    normal: { min: 400, max: 1000 },
    elevated: { min: 1001, max: 2000 },
    high: { min: 2001, max: 5000 }
  };

  // Determine the severity of the current CO2 level
  const getSeverity = (level) => {
    if (level >= thresholds.high.min) {
      return 'error'; // High CO2 level
    } else if (level >= thresholds.elevated.min) {
      return 'warning'; // Elevated CO2 level
    } else {
      return 'success'; // Normal CO2 level
    }
  };

  const severity = getSeverity(co2Level);

  return (
    <div>
        <div className="chatbot-l">
                <button
                    className="chatbot-menu-btn"
                    type="button"
                    onClick={openSidebar}
                >
                    <MdOutlineMenu size={24} />
                </button>
                <h2 className="chatbot-title">Alerts</h2>
            </div>
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={severity}>
            <AlertTitle>CO2 Level Alert</AlertTitle>
            Current CO2 Level: {co2Level} ppm
        </Alert>
        </Stack>
    </div>
  );
};

export default CO2Monitor;
