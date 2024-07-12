import React, { useState, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const colors = ["red", "blue", "green", "yellow"];

const Game: React.FC = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [round, setRound] = useState<number>(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(false);

  useEffect(() => {
    if (round > 0) {
      const newColorIndex = Math.floor(Math.random() * 4);
      setSequence([...sequence, newColorIndex]);
    }
  }, [round]);

  useEffect(() => {
    if (isPlayerTurn && playerSequence.length === sequence.length) {
      if (JSON.stringify(playerSequence) === JSON.stringify(sequence)) {
        setPlayerSequence([]);
        setIsPlayerTurn(false);
        setTimeout(() => setRound(round + 1), 1000);
      } else {
        alert("Game Over");
        setSequence([]);
        setPlayerSequence([]);
        setRound(0);
      }
    }
  }, [playerSequence]);

  const handleClick = (index: number) => {
    if (isPlayerTurn) {
      setPlayerSequence([...playerSequence, index]);
    }
  };

  const startGame = () => {
    setRound(1);
    setSequence([]);
    setPlayerSequence([]);
    setIsPlayerTurn(false);
  };

  return (
    <GameContainer>
      <h1>Genius Game</h1>
      <ButtonContainer>
        {colors.map((color, index) => (
          <Button
            key={index}
            color={color}
            onClick={() => handleClick(index)}
          />
        ))}
      </ButtonContainer>
      <button onClick={startGame}>Start Game</button>
    </GameContainer>
  );
};

export default Game;
