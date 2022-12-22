const { usuarios, nextId } = require('../data/db')

module.exports = {
    novoUsuario(_, { dados }) {
        const {nome, email, idade} = dados
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

    excluirUsuario(_, {filtro}) {
        const { id, email } = filtro

        console.log({ id })
        index = usuarios.findIndex(usuario => usuario.id === id)
        console.log(index, usuarios)
        if(index < 0) {
            return null
        }

        const deletado = usuarios.splice(index, 1)

        return deletado[0]
    },

    alterarUsuario(_,{id, nome, email, idade} ) {
        const indice = usuarios.findIndex(usuario => usuario.id === id);

        if(indice< 0) {
            return
        }

        if(nome) {
            usuarios[indice].nome = nome
        }

        if(email) {
            usuarios[indice].email = email
        }

        if(idade) {
            usuarios[indice].idade = idade
        }

        return usuarios[indice]
    }
}