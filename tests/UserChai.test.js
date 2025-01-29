// import mongoose from "mongoose";
// import User from '../src/dao/Users.dao.js'
// import { config } from 'dotenv'
// import { expect } from 'chai'

// config()
// mongoose.connect(process.env.MONGO_DB_URI)

// const USER_MOCKED = {
//   first_name: 'João',
//   last_name: 'Silva',
//   email: 'joao@email.com',
//   password: 'senha123',
//   role: 'user'
// }

// describe('Teste de DAO de Users', function () {
//   before(() => {
//     this.usersDao = new User()
//   })

//   beforeEach(() => {
//     this.timeout(5000)
//   })

//   it('deve retornar os usuários em um array', async () => {
//     const result = await this.usersDao.get();
//     expect(Array.isArray(result)).to.be.deep.equal(true)
//   })

//   it('deve retornar um usuário pelo e-mail', async () => {
//     const result = await this.usersDao.getBy({ email: 'test@email.com' })
//     const resultObj = result.toObject()
    
//     console.log(Object.keys(resultObj).indexOf('_id'))
//   })

//   it('deve adicionar um novo usuário ao banco de dados e iniciar pets como array vazio', async () => {
//     const result = await this.usersDao.save(USER_MOCKED)
//     const resultObj = result.toObject()
//     console.log(resultObj)
//     this.newUserId = resultObj._id

//     expect(typeof resultObj).to.be.equal('object')
//     expect(resultObj).to.have.property('pets')
//     expect(Array.isArray(resultObj.pets)).to.be.equal(true)
//   })

//   // it('deve alterar o sobrenome do usuário recém criado', async () => {
//   //   const result = await this.usersDao.update(this.newUserId, USER_CHANGE_MOCKED)
//   //   const newUserResult = await this.usersDao.getBy({ _id: this.newUserId })
//   //   const resultObj = newUserResult.toObject()

//   // })
// })
