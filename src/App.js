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
  const [alphabetData, setAlphabetData] = useState(null); // Data from WebSocket 1
  const [numberData, setNumberData] = useState(null); // Data from WebSocket 2

  useEffect(() => {
    // Connect to WebSocket 1
    const socket1 = new WebSocket("wss://seashell-app-447z9.ondigitalocean.app/ws1");

    socket1.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setAlphabetData(data); // Update state with data from WebSocket 1
    });

    // Connect to WebSocket 2
    const socket2 = new WebSocket("wss://seashell-app-447z9.ondigitalocean.app/ws2");

    socket2.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setNumberData(data); // Update state with data from WebSocket 2
    });

    // Cleanup both WebSockets on component unmount
    return () => {
      socket1.close();
      socket2.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Example</h1>
      <div>
        <h2>WebSocket 1: Random Alphabets</h2>
        {alphabetData ? (
          <p>
            Alphabet: {alphabetData.char} <br />
            Timestamp: {alphabetData.timestamp}
          </p>
        ) : (
          <p>Waiting for data from WebSocket 1...</p>
        )}
      </div>
      <div>
        <h2>WebSocket 2: Random Numbers</h2>
        {numberData ? (
          <p>
            Number: {numberData.number} <br />
            Timestamp: {numberData.timestamp}
          </p>
        ) : (
          <p>Waiting for data from WebSocket 2...</p>
        )}
      </div>
    </div>
  );
}

export default App;