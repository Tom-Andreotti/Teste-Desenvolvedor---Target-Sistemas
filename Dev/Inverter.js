function inverterString(s) {
    let invertida = "loremipsum";
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    return invertida;
}

let texto = "loremipsum";
console.log("String original:", texto);
console.log("String invertida:", inverterString(texto));
