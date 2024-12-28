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
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomAlphabet, setRandomAlphabet] = useState(null);

  useEffect(() => {
    // Connect to WebSocket 1
    const socket1 = new WebSocket("wss://seashell-app-447z9.ondigitalocean.app/ws1");

    socket1.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setRandomNumber(data.randomNumber); // Update state with random number from WebSocket 1
    });

    // Connect to WebSocket 2
    const socket2 = new WebSocket("wss://seashell-app-447z9.ondigitalocean.app/ws2");

    socket2.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setRandomAlphabet(data.randomAlphabet); // Update state with random alphabet from WebSocket 2
    });

    // Cleanup WebSocket connections on component unmount
    return () => {
      socket1.close();
      socket2.close();
    };
  }, []);

  return (
    <div>
      <h1>Live Data from WebSockets</h1>
      <p>
        {randomNumber !== null
          ? `Random Number (WebSocket 1): ${randomNumber}`
          : "Waiting for random number..."}
      </p>
      <p>
        {randomAlphabet !== null
          ? `Random Alphabet (WebSocket 2): ${randomAlphabet}`
          : "Waiting for random alphabet..."}
      </p>
    </div>
  );
}

export default App;
