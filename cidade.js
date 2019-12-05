const db = require('./_database')

//CRIANDO A TABELA
async function createTable() {
    await db.connect()

    await db. query(`CREATE TABLE cidades (
        id SERIAL PRIMARY KEY,
        nome CHARACTER VARYING(200),
        area NUMERIC(10,2)
    )`)


    await db.end()

    console.log('Tabela Criada com Sucesso!')
}
createTable()

//INSERINDO REGISTRO
async function insertData(){
    await db.connect()

    const queryCidade = "INSERT INTO cidades (nome, area) VALUES ($1, $2)"

    await db.query(queryCidade, ['Campinas', 795])
    await db.query(queryCidade, ['Niterói', 133.9])
    await db.query(queryCidade, ['Caruaru', 920.6])
    await db.query(queryCidade, ['Juazeiro do Norte', 248.2])
    await db.query(queryCidade, ['Porto Alegre', 496.7 ])
    await db.query(queryCidade, ['São Paulo', 1521])

    await db.end()

    console.log('Dados Inseridos com Sucesso!')

}
insertData()

//ALTERANDO REGISTRO
async function updateData(){
    await db.connect()

    const queryUpCidade = "UPDATE cidades SET area = '($1)' WHERE area = '($1)' AND id = '($3)'"

    await db.query(queryUpCidade,[800, 1])
    await db.end()

    console.log('Dados alterados com sucesso!')
}
updateData()


//DELETANDO REGISTRO
async function deleteData(){
    await db.connect()
    const queryDelCidade = "DELETE FROM cidades WHERE id_cidade = cidades.id"

    await db.query(queryDelCidade, [4])

    await db.end()

    console.log('Dados exluídos com sucesso!')
}
deleteData()

//CONSULTANDO REGISTRO
async function listData(){
    await db.connect()
    let list

    //Consultado Ciade da Empresa
    list = await db.query("SELECT c.area AS area_cidade, c.nome AS nome_cidade, e.nome AS empresas FROM cidade AS c, empresas AS e, cidade_empresa AS ce WHERE ce.cidade_id = c.id AND ce.empresa_id = e.id")
    console.log("EMPRESAS DAS CIDADES: ")
    console.log(list.rows);

    //Consultando todas as empresas
    list = await db.query("SELECT * FROM cidades")

}
listData()
