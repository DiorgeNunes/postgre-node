const db = require('./_database')

//CRIANDO TABELA
async function createTable(){
    await db.connect()

    await db.query(`CREATE TABLE cidade_empresa (
        cidade_id INTEGER NOT NULL,
        empresa_id INTEGER NOT NULL,
        PRIMARY KEY(cidade_id, empresa_id),
        FOREIGN KEY(cidade_id) REFERENCES cidade(id),
        FOREIGN KEY(empresa_id) REFERENCES empresa(id)
    )`)

    await db.end()

    console.log('Tabela criada com sucesso!')
}
createTable()

//INSERINDO REGISTRO DE RELACIONAMENTO CIDADE-EMPRESA
async function insertData(){
    await db.connect()

    const queryCidadeEmpresa = "INSERT INTO cidade_empresa (cidade_id, empresa_id) VALUES($1, $2)"

    //Empresas Campinas
    await db.query(queryCidadeEmpresa, [1, 1])
    await db.query(queryCidadeEmpresa, [1, 3])

    //Empresas Niterói
    await db.query(queryCidadeEmpresa, [2, 1])
    await db.query(queryCidadeEmpresa, [2, 2])
    await db.query(queryCidadeEmpresa, [2, 3])

    //Empresas Caruaru
    await db.query(queryCidadeEmpresa, [3, 2])


    //Empresas Juazeiro do Norte
    await db.query(queryCidadeEmpresa, [4, 1])

    //Empresas Porto Alegre
    await db.query(queryCidadeEmpresa, [5, 1])
    await db.query(queryCidadeEmpresa, [5, 3])
    

    //Empresas São Paulo
    await db.query(queryCidadeEmpresa, [6, 1])
    await db.query(queryCidadeEmpresa, [6, 2])
    await db.query(queryCidadeEmpresa, [6, 3])


    await db.end()
    console.log('Dados Inseridos com Sucesso!')
}
insertData()
