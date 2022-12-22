let id = 1
function nextId() {
    id++
    return id
}

const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
]

const usuarios = [{
    id: nextId(),
    nome: 'João Silva',
    email: 'jsilva@gmail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: nextId(),
    nome: 'Rafael Junior',
    email: 'rafajun@gmail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: nextId(),
    nome: 'Daniela Smith',
    email: 'danismi@gmail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis, nextId }