import faker from 'faker'

const createTweet = (total) => {
  let array = []
  for (let i = 0; i < total; i++) {
    array.push({
      id: faker.random.uuid(),
      tweet: faker.lorem.sentence(),
      username: faker.internet.userName(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avater: faker.random.image(),
      text: faker.lorem.paragraph(),
    })
  }

  return array
}

export { createTweet }
