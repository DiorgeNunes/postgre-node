const db = require('./_database')

//CRIANDO TABELA
async function createTable(){
    await db.connect()

    await db.query(`CREATE TABLE empresas (
        id SERIAL PRIMARY KEY,
        nome CHARACTER VARYING(200),
        cnpj INTEGER UNIQUE
    )`)

    await db.end()

    console.log('Tabela criada com sucesso!')
}
createTable()

//INSERINDO REGISTRO
async function insertData(){
    await db.connect()

    const queryEmpresa = "INSERT INTO evento (nome, cnpj) VALUES ($1, $2)"

    await db.query(queryEmpresa, ['Bradesco', 60746948000112])
    await db.query(queryEmpresa, ['Vale', 33592510000154])
    await db.query(queryEmpresa, ['Amazon', 15436940000103])

    await db.end()

    console.log('Dados inseridos com sucesso!')
}
insertData()

//ATUALIZANDO REGISTRO
async function updateData(){
    await db.connect()

    const queryUpCidade = "UPDATE empresas SET nome = '($1)' WHERE nome = '($2)'"

    await db.query(queryUpCidade,['Nubank', 'Bradesco'])
    await db.end()

    console.log('Dados alterados com sucesso!')

}
updateData()

//DELETANDO REGISTRO
async function deleteData(){
    await db.connect()
    const queryDelEmpresa = "DELETE FROM empresas WHERE id_empresa = empresas.id"

    await db.query(queryDelEmpresa, [3])

    await db.end()

    console.log('Dados exluídos com sucesso!')
}
deleteData()

//CONSULTANDO REGISTRO
async function listData(){
    await db.connect()
    let list

    //Consultado Ciade da Empresa
    list = await db.query("SELECT e.nome AS empresas, c.nome AS cidades FROM empresas AS e, cidades AS c, cidade_empresa ce WHERE ce.empresa_id = e.id AND ce.cidade_id = c.id")
    console.log("CIDADES E EMPRESAS: ")
    console.log(list.rows);

    //Consultando todas as empresas
    list = await db.query("SELECT * FROM empresas")

}
listData()
