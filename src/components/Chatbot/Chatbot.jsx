// import React from 'react';

// const Chatbot = () => {
//     return (
//         <div>
            
//             <iframe
//                 src="https://www.chatbase.co/chatbot-iframe/a9ey8CW2552JizbgbwPrP"
//                 title="Chatbot"
//                 width="100%"
//                 // style={{ height: '100%', minHeight: '700px' }}
//                 style={{ height: '600px' }}
//                 frameBorder="0"
//             ></iframe>
//         </div>
//     );
// }

// export default Chatbot;


// import { MdOutlineMenu } from "react-icons/md";
// import React from 'react';
// import { useContext, useEffect, useRef, useState } from "react";
// import { SidebarContext } from "../../context/SidebarContext";
// import "../dashboard/areaTop/AreaTop.scss";

// const Chatbot = () => {
//     const { openSidebar } = useContext(SidebarContext);
//     return (
//         <div>
//             <div className="area-top-l">
//                 <button
//                 className="sidebar-open-btn"
//                 type="button"
//                 onClick={openSidebar}
//                 >
//                 <MdOutlineMenu size={24} />
//                 </button>
//                 <h2 className="area-top-title">Chatbot</h2>
//             </div>
//             <iframe
//                 src="https://www.chatbase.co/chatbot-iframe/a9ey8CW2552JizbgbwPrP"
//                 title="Chatbot"
//                 width="100%"
//                 // style={{ height: '100%', minHeight: '700px' }}
//                 style={{ height: '600px' }}
//                 frameBorder="0"
//             ></iframe>
//         </div>
//     );
// }

// export default Chatbot;



// Chatbot.jsx

import { MdOutlineMenu } from "react-icons/md";
import React, { useContext } from 'react';
import { SidebarContext } from "../../context/SidebarContext";
import './Chatbot.css'

const Chatbot = () => {
    const { openSidebar } = useContext(SidebarContext);

    return (
        <div className="chatbot-container">
            <div className="chatbot-l">
                <button
                    className="chatbot-menu-btn"
                    type="button"
                    onClick={openSidebar}
                >
                    <MdOutlineMenu size={24} />
                </button>
                <h2 className="chatbot-title">Chatbot</h2>
            </div>
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/a9ey8CW2552JizbgbwPrP"
                title="Chatbot"
                width="100%"
                style={{ height: '500px' }}
                frameBorder="0"
            ></iframe>
        </div>
    );
}

export default Chatbot;
