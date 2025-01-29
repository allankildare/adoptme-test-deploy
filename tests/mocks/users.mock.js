import { faker } from "@faker-js/faker"

export const USER_MOCK = {
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
}
