import React, { useLayoutEffect, useState } from "react";
import { initialize, setPoint } from "./main";
import Sidebar from './Sidebar';

// export default function Visualization() {
const Visualization = ({ uploadedFile }) => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    useLayoutEffect(() => {

        if (uploadedFile) {
            initialize(uploadedFile);  // Now your initialize function can directly access uploadedFile
        }

    }, [uploadedFile]);

    // function handleChange() {
    //     if (uploadedFile) {
    //         initialize(uploadedFile);  // Now your initialize function can directly access uploadedFile
    //     }
    // }

    const handleEnter = (coordinates) => {
        const { x, y, z } = coordinates;

        console.log(x, y, z)

        setPoint(x,y,z);

      }

      const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
      }

    return (

        <div className="container1">
        {/* <h1>Visualization Page</h1> */}

        <Sidebar onEnter={handleEnter} /> 
        <div id="sliceX"></div>
        
        <div className="last-container">
        <div id="threeD"></div>
        <div id="sliceZ"></div>
        </div>

        <div id="sliceY"></div>
    </div>

    );
}


export default Visualization;
