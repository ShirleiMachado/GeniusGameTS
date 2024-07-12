import React from "react";
import Game from "./components/Game"; // Importe aqui o componente principal do seu jogo
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Game /> {/* Renderize aqui o componente principal do seu jogo */}
    </div>
  );
};

export default App;
