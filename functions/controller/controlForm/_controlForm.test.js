import controlForm from "./controlForm";

describe("ControlForm Unit Test Suit", () => {
  it("should return error message", () => {
    expect(controlForm()).toBe(
      "Veuillez remplir tous les champs pour pouvoir envoyer un message."
    );
  });

  it("should return error", () => {
    expect(controlForm("mathieu", "mathieu", "mail@mail.com", "jok")).toBe(
      "Veuillez cocher les conditions afin que je puisse répondre à votre message."
    );
  });

  it("should return error message", () => {
    expect(controlForm("m", "met", "mail", "jok", true)).toBe(
      "Votre prénom et votre nom doivent contenir au moins deux caratères pour être valide."
    );
  });

  it("should return error message", () => {
    expect(controlForm("mathieu", "mathieu", "mail", "jok", true)).toBe(
      "Veuillez entrer une adresse email valide, afin que je puisse vous recontacter."
    );
  });

  it("should return error message", () => {
    expect(
      controlForm("mathieu", "mathieu", "mail@mail.com", "jok", true)
    ).toBe(
      "Votre message doit contenir au moins 5 caractères pour être valide."
    );
  });

  it("should be true", () => {
    expect(
      controlForm(
        "mathieu",
        "mathieu",
        "mail@mail.com",
        "Voici mon message",
        true
      )
    ).toBe(true);
  });
});
