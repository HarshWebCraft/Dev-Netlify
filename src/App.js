// import React, { useEffect, useState } from "react";

// function App() {
 

//   return (
//     <div>
//       <h1>WebSocket Example</h1>
  
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000"); // Match your backend WebSocket URL

    // Listen for messages
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setTime(data.time); // Update state with the current time
    });

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Live Time</h1>
      <p>{time ? `Current Time: ${time}` : "Waiting for time..."}</p>
    </div>
  );
}

export default App;

