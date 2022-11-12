import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Inicio from ".";

describe("Tela 1 / Inicio", () => {
  test("Verificar se o titulo está no documento", () => {
    render(
      <Router>
        <Inicio />
      </Router>
    );

    expect(document.title).toBe("Inicio");
  });

  test("Encontrar na tela a descrição", () => {
    render(
      <Router>
        <Inicio />
      </Router>
    );

    const string =
      "Digite seu nome de usuário e veja informações sobre seu perfil";

    expect(screen.getByText(string)).toBeInTheDocument();
  });

  test("Encontrar o input de username", () => {
    render(
      <Router>
        <Inicio />
      </Router>
    );

    const input = screen.getByPlaceholderText("username");

    expect(input).toBeInTheDocument();
  });

  test("Encontrar o botão", () => {
    render(
      <Router>
        <Inicio />
      </Router>
    );

    const button = screen.getByRole("button");

    expect(button).toBeVisible();
    expect(button).toBeInTheDocument();
  });
});
