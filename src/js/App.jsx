import React from "react";

export const App = () => {
  const imHappy = true;
  const element = imHappy ? 
    <h1>Bonjour, tu es content</h1>: 
    <h1>Bonjour, tu n'es content</h1>

  return element;
};
