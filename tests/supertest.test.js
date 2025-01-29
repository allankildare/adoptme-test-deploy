import { expect } from 'chai'
import supertest from 'supertest'
import { config } from 'dotenv'
import { PET_MOCK } from './mocks/pets.mock.js'
import { USER_MOCK } from './mocks/users.mock.js'

config()

const requester = supertest(`http://localhost:${process.env.PORT}`)

describe('Testando API AdoptMe e sua integração', () => {
  // describe('/pets', () => {
  //   it('Endpoint POST /api/pets deve criar um pet corretamente', async () => {
  //     const { statusCode, ok, body } = await requester.post('/api/pets').send(PET_MOCK)

  //     console.log('Mock definido é:\n', PET_MOCK)
  //     console.log(body.payload)

  //     expect(body.payload).to.have.property('_id')
  //   })
  // })

  describe('Teste avançado', () => {
    let cookie = null
    it('Deve registrar um novo usuário corretamente', async () => {
      const { body } = await requester.post('/api/sessions/register').send(USER_MOCK)
      console.log('Mock definido é:\n', USER_MOCK)
      console.log(body.payload)
      expect(body.payload).to.be.ok
    })

    it('Deve logar corretamente e retornar um cookie', async () => {
      const mockUser = {
        email: USER_MOCK.email,
        password: USER_MOCK.password,
      }
      const result = await requester.post('/api/sessions/login').send(mockUser)
      const cookieResult = result.headers['set-cookie'][0]

      expect(cookieResult).to.be.ok

      //token=kihaskjbdjasdfgagfuyebvfab
      // ['token', 'kihaskjbdjasdfgagfuyebvfab']

      cookie = {
        name: cookieResult.split('=')[0],
        value: cookieResult.split('=')[1],
      }

      console.log('Cookie é:\n', cookie)

      expect(cookie.name).to.be.ok.and.eql('coderCookie')
      expect(cookie.value).to.be.ok
    })

    it('Deve enviar o cookie que contém o usuário e destruturá-lo corretamente', async () => {
      const { body } = await requester.get('/api/sessions/current').set('Cookie', [`${cookie.name}=${cookie.value}`])
      expect(body.payload.email).to.be.equal(USER_MOCK.email)
    })
  })
})
