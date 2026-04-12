"use client";

//import React from "react";
import { useState } from "react";
import GetTourSelection from "./tour_selection_form";
//import "@/app/globals.css";


//the parent component of the form process - receives the user tour selection from the child component and processes it to determine which tour to send the user to.

export default function HandleTourSelection({ onSubmit }) {
  
 const [state] = useState({}); // State for form data
  //mapping it out
  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log("Form data submitted:", data);

    if (data.buildings && !data.statues && !data.landmarks) {
      window.location.href = "../tours/b";
    } else if (data.buildings && data.statues && !data.landmarks) {
      window.location.href = "../tours/b-s";
    } else if (data.buildings && data.statues && data.landmarks) {
      window.location.href = "../tours/b-l-s";
    } else if (data.statues && !data.landmarks && !data.buildings) {
      window.location.href = "../tours/s";
    } else if (data.statues && data.landmarks && !data.buildings) {
      window.location.href = "../tours/l-s";
    } else if (data.landmarks && !data.statues && !data.buildings) {
      window.location.href = "../tours/l";
    } else if (data.landmarks && data.buildings && !data.statues) {
      window.location.href = "../tours/b-l";
    } else {
      window.location.href = "../purpley-welcome/purpley-tours/tour-alert";
      console.log("That didn't work.");
    }
  };


  // Call form data / state from child component and process it to determine which tour to send the user to.
  return <GetTourSelection formData={state} onSubmit={handleFormSubmit} />
  }