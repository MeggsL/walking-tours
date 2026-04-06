"use client";

import "../globals.css";
import "../page.module.css";
import HandleTourSelection from "@/app/process/HandleTourSelections";
//import StartTouring from "@/app/ui/StartTouring";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function TakeATour() {
  return (
    <main>
      <div className="body">
        <HandleTourSelection />
      </div>
    </main>
  );
}
