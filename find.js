console.log("exemplos com find()");
console.log("exemplo 1: primeira nota aprovada");
const notas = [4, 7, 8, 9, 6];
const primeiraNotaAprovada = notas.find((nota) => nota >= 7);
console.log("primeira nota >= 7: ", primeiraNotaAprovada);
console.log("\n");
console.log("exemplo 2: buscar cliente por nome");
const clientes = [
    { id: 1, nome: "marcos", plano: "free" },
    { id: 2, nome: "juliana", plano: "premium" },
    { id: 3, nome: "carlos", plano: "pro" },
];
const clienteEncontrado = clientes.find((c) => c.nome === "juliana");
console.log("cliente encontrado: ", clienteEncontrado);
console.log("\n");
console.log("exemplo 3: rota GET/usuarios/:id");
const usuariosbanco = [
    { id: 1, nome: "ana",email: "ana@email.com",cargo: "desenvolvedora" }
,    { id: 2, nome: "Bruno",email: "bruno@email.com",cargo: "designer" }
,    { id: 3, nome: "Carla",email: "carla@email.com",cargo: "tech lead" }
];
function buscarUsuarioPorId(idrequisitado) {
    const usuario = usuariosbanco.find((u) => u.id === idrequisitado);
    if (!usuario) {
        return { 
            status: 404,
            mensagem: "erro: usuario com id " + idrequisitado + " não encontrado"
        };
    }
    return {
        status: 200,
        usuario: usuario
    }
}
console.log("buscando usuario com id 2: ", buscarUsuarioPorId(2));
console.log("buscando usuario com id 99: ", buscarUsuarioPorId(99));