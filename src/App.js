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
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  useEffect(() => {
    // Connect to WebSocket 1
    const socket1 = new WebSocket("wss://seashell-app-447z9.ondigitalocean.app/ws1");

    socket1.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setData1(data.data1); // Update state with data from WebSocket 1
    });

    // Connect to WebSocket 2
    const socket2 = new WebSocket("wss://seashell-app-447z9.ondigitalocean.app/ws2");

    socket2.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setData2(data.data2); // Update state with data from WebSocket 2
    });

    // Cleanup both WebSockets on component unmount
    return () => {
      socket1.close();
      socket2.close();
    };
  }, []);

  return (
    <div>
      <h1>Live Data</h1>
      <p>{data1 ? `WebSocket 1: ${data1} `: "Waiting for WebSocket 1..."}</p>
      <p>{data2 ? `WebSocket 2: ${data2} `: "Waiting for WebSocket 2..."}</p>
    </div>
  );
}

export default App;


