console.log("exemplos com findindex()");
console.log("exemplo 1: posição do primeiro maior de idade");
const idades = [12, 15, 17, 20, 25];
const indecemaiordeidade = idades.findIndex((idade) => idade >= 18);
console.log("idades:", idades)
console.log(`primeiro maior de idade está no indece: ${indecemaiordeidade} (valor: ${idades[indecemaior de idade]})`)
console.log ("exemplo 2: posição de objetos por Id")