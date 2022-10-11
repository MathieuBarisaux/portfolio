import checkMail from "./checkMail";

describe("CheckMail Unit Test Suite", () => {
  it("Should true", () => {
    expect(checkMail("blop@mail.fr")).toBeTruthy();
  });

  it("should be true", () => {
    expect(checkMail("mathieu.check.joke@gmail.com")).toBeTruthy();
  });

  it("should be false", () => {
    expect(checkMail("mathieu.check.jokegmail.com")).toBeFalsy();
  });

  it("should be false", () => {
    expect(checkMail("mathieu.check.jokegmailcom")).toBeFalsy();
  });

  it("should be false", () => {
    expect(checkMail("mathieu.jokegmailcom")).toBeFalsy();
  });

  it("should be false", () => {
    expect(checkMail("mathieu")).toBeFalsy();
  });

  it("should be true", () => {
    expect(checkMail("mathieu.check@gmail.com")).toBeTruthy();
  });
});
