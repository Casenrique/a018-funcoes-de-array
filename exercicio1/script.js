const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// const caixaAlta = objeto.map((maiuscula) => {
//     objeto.toUpperCase()
//     return maiuscula
// })

// console.log(caixaAlta(objeto))

let novoObjeto = {}

function caixaAltaDoObjeto (usuario) {
    usuario.nome = usuario.nome.toUpperCase()
    usuario.profissao = usuario.profissao.toUpperCase()
    usuario.username = usuario.username.toUpperCase()
    usuario.senha = usuario.senha.toUpperCase()

    return usuario
}
console.log(caixaAltaDoObjeto(objeto))

function textoCorrido (usuario){
    const stringJuntas = [usuario.nome, usuario.profissao, usuario.username, usuario.senha]
    const novoString = stringJuntas.join(' ')
    return novoString
}

console.log(textoCorrido(objeto))
const textoCaixaAltaECorrido = (objeto, caixaAltaDoObjeto) => {
    let  texto = null
    objeto.nome = objeto.nome.toUpperCase(),
    objeto.profissao = objeto.profissao.toUpperCase(),
    objeto.username = objeto.username.toUpperCase(),
    objeto.senha = objeto.senha.toUpperCase()
    
        
        caixaAltaDoObjeto(objeto2)
}
console.log(textoCaixaAltaECorrido(objeto, caixaAltaDoObjeto))
