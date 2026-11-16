const conexao = require("../config/conexao.js")

export async function cadastrar(equipamento) {
    const sql = `
    insert into equipamentos (codigo_patrimonio, nome, setor)
    values(?, ?, ?);`

    const [result] = await conexao.execute(sql, 
        [equipamento.codigo, equipamento.nome, equipamento.setor]
    )}

export async function listar() {
    const sql = `
    select * from equipamentos`

    const [result] = await conexao.execute(sql)

    return result;
}

export async function buscarPorId(id) {
    const sql = `
    select * from equipamentos
    where id = ?`

    const [result] = await conexao.execute(sql, [id]);

    return result;
}

export async function atualizar(id, equipamento) {
    const sql = `
    update equipamentos
    set codigo_patrimonio = ?, nome = ?, setor = ?
    where id = ?`

    const [result] = await conexao.execute(sql, 
    [equipamento.codigo, equipamento.nome, equipamento.setor, id]
)
    if(result.affectedRows == 0){
        return undefined;
    }

    return buscarPorId(id);
}

export async function deletar(id) {
    const sql = `
    delete from equipamentos where id = ?
    `

    const [result] = await conexao.execute(sql, [id]);

    return result.affectedRows > 0;
}

