/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from "@testing-library/react";
import PostComments from ".."; // This is actually the PostComments component

describe("Componente PostComments", () => {
  beforeEach(() => {
    render(<PostComments />);
  });

  const comentar = (texto: string) => {
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: texto },
    });
    fireEvent.click(screen.getByRole("button", { name: "Comentar" }));
  };

  test("Adiciona comentário 'Muito Bom'", () => {
    comentar("Muito Bom");
    expect(screen.getByText("Muito Bom")).toBeInTheDocument();
  });

  test("Adiciona comentário 'Tá na hora...'", () => {
    comentar("Tá na hora...");
    expect(screen.getByText("Tá na hora...")).toBeInTheDocument();
  });
});