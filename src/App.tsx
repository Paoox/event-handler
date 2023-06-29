import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </>
  );
}

export default App;
