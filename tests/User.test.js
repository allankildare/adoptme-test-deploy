// import mongoose from "mongoose";
// import User from '../src/dao/Users.dao.js'
// import Assert from 'assert'
// import { config } from 'dotenv'

// config()

// mongoose.connect(process.env.MONGO_DB_URI)

// const assert = Assert.strict

// // mocks
// const USER_MOCKED = {
//   first_name: 'João',
//   last_name: 'Silva',
//   email: 'joao@email.com',
//   password: 'senha123',
//   role: 'user'
// }

// const USER_CHANGE_MOCKED = {
//   first_name: 'João',
//   last_name: 'Santos',
//   email: 'joao@email.com',
//   password: 'senha123',
//   role: 'user'
// }

// //                                () => 
// describe('Teste de DAO de Users', function () {
//   before(() => {
//     this.usersDao = new User()
//   })

//   beforeEach(() => {
//     this.timeout(5000)
//   })

//   it('deve retornar os usuários em um array', async () => {
//     const result = await this.usersDao.get();
//     assert.strictEqual(Array.isArray(result), true)
//   })

//   it('deve retornar um usuário pelo e-mail', async () => {
//     const result = await this.usersDao.getBy({ email: 'test@email.com' })
//     const resultObj = result.toObject()
    
//     console.log(Object.keys(resultObj).indexOf('_id'))
//     assert.strictEqual(typeof result === 'object' && !Array.isArray(result), true)
//     assert.strictEqual(Object.keys(resultObj).indexOf('_id') !== -1, true)
//   })

//   it('deve adicionar um novo usuário ao banco de dados e iniciar pets como array vazio', async () => {
//     const result = await this.usersDao.save(USER_MOCKED)
//     const resultObj = result.toObject()
//     console.log(resultObj)
//     this.newUserId = resultObj._id

//     assert.strictEqual(typeof result === 'object' && !Array.isArray(result), true)
//     assert.strictEqual(resultObj.pets && Array.isArray(resultObj.pets) && resultObj.pets.length === 0, true)
//   })

//   it('deve alterar o sobrenome do usuário recém criado', async () => {
//     const result = await this.usersDao.update(this.newUserId, USER_CHANGE_MOCKED)
//     const newUserResult = await this.usersDao.getBy({ _id: this.newUserId })
//     const resultObj = newUserResult.toObject()

//     assert.strictEqual(typeof result === 'object' && !Array.isArray(result), true)
//     assert.strictEqual(resultObj.last_name === USER_CHANGE_MOCKED.last_name, true)
//   })
// })
