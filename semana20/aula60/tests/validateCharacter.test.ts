import { validateCharacter } from "../src/validateCharacter"


test("Erro ao passar um nome vazio", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(false);
})

test("Erro ao passar a vida = 0", () => {
    const result = validateCharacter({
        name: "Tarcísio",
        life: 0,
        strength: 300,
        defense: 500,
    })

    expect(result).toBe(false);
})

test("Erro ao passar a força = 0", () => {
    const result = validateCharacter({
        name: "Tarcísio",
        life: 1500,
        strength: 0,
        defense: 500,
    })

    expect(result).toBe(false);
})

test("Erro ao passar a defesa = 0", () => {
    const result = validateCharacter({
        name: "Tarcísio",
        life: 1500,
        strength: 300,
        defense: 0,
    })

    expect(result).toBe(false);
})

test("Erro ao passar a defesa com número negativo", () => {
    const result = validateCharacter({
        name: "Tarcísio",
        life: 1500,
        strength: 300,
        defense: -100,
    })

    expect(result).toBe(false);
})

test("Imput válido", () => {
    const result = validateCharacter({
        name: "Tarcísio",
        life: 1500,
        strength: 300,
        defense: 500,
    })

    expect(result).toBe(true);
})

