import { faker } from '@faker-js/faker'

export const PET_MOCK = {
  name: faker.animal.petName(),
  specie: 'cachorro',
  birthDate: '10-10-2019'
}