const faker = require('faker')

module.exports = () => {
  let tweets = []
  for (let i = 0; i < 10; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    tweets.push({
      id: faker.random.uuid(),
      tweet: faker.lorem.sentence(),
      username: faker.internet.userName(firstName, lastName),
      name: `${firstName} ${lastName}`,
      avater: faker.random.image(),
      text: faker.lorem.paragraph(),
    })
  }

  return { tweets }
}
