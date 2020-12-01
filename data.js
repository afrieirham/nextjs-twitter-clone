import faker from 'faker'

const createTweet = (total) => {
  let array = []
  for (let i = 0; i < total; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    array.push({
      id: faker.random.uuid(),
      tweet: faker.lorem.sentence(),
      username: faker.internet.userName(firstName, lastName),
      name: `${firstName} ${lastName}`,
      avater: faker.random.image(),
      text: faker.lorem.paragraph(),
    })
  }

  return array
}

export { createTweet }
