const { usuarios, nextId } = require('../data/db')

module.exports = {
    novoUsuario(_, {nome, email, idade}) {
        const novo = {
            id: nextId(),
            nome,
            email,
            idade,
            perfil_id: 1,
            status: 'ATIVO',
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, {id}) {
        index = usuarios.findIndex(usuario => usuario.id === id)
        console.log(index, usuarios)
        if(index < 1) {
            return null
        }

        const deletado = usuarios.splice(index, 1)

        return deletado[0]
    }
}