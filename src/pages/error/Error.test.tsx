import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Error from ".";

describe("Tela 3 / Error", () => {
  test("Verificar se o titulo está no documento", () => {
    render(
      <Router>
        <Error />
      </Router>
    );

    expect(document.title).toBe("Not Found");
  });

  test("Encontrar texto de erro", () => {
    render(
      <Router>
        <Error />
      </Router>
    );

    const text = screen.getByText(
      "Desculpe a página que você buscou não está disponivel."
    );

    expect(text).toBeInTheDocument();
  });
});
