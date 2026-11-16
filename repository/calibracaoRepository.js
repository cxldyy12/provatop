const conexao = require("../config/conexao.js")

export async function cadastrar(calibracao) {
    const sql = `
    insert into calibracoes (equipamento_id, data_calibracao, resultado, respnsavel)
    values(?, ?, ?);`

    const [result] = await conexao.execute(sql, 
        [calibracao.equipamento, calibracao.data, calibracao.resultado, calibracao.responsavel]
    )}

export async function listar() {
    const sql = `
    select * from calibracoes`

    const [result] = await conexao.execute(sql)

    return result;
}

export async function listarDetalhadas() {

}

export async function buscarPorId(id) {
    const sql = `
    select * from calibracoes
    where id = ?`

    const [result] = await conexao.execute(sql, [id]);

    return result;
}


export async function atualizar(id, calibracao) {
    const sql = `
    update calibracoes
    set equipamento_id = ?, data_calibracao = ?, resultado = ?, responsavel = ?
    where id = ?`

    const [result] = await conexao.execute(sql, 
    [calibracao.equipamento, calibracao.data, calibracao.resultado, calibracao.responsavel, id]
)
    if(result.affectedRows == 0){
        return undefined;
    }

    return buscarEquipamentoPorId(id);
}


export async function deletar(id) {
    const sql = `
    delete from calibracoes where id = ?
    `

    const [result] = await conexao.execute(sql, [id]);

    return result.affectedRows > 0;
}