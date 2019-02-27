import faker from 'faker'
import iProject from '../interfaces/project'

export const projects:iProject[] = [
  {
    volume: '2011',
    image: faker.image.cats(),
    photo_credit: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: `${faker.hacker.adjective()} ${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    first_performed: `${faker.date.month()} ${faker.random.number(28)}, 2011`,
    place: `${[faker.commerce.productMaterial(), faker.hacker.verb().toUpperCase(), faker.hacker.abbreviation()][faker.random.number(2)]} ${['Gallery','Art Institute','Club','Space'][faker.random.number(3)]}, ${faker.address.city()}, ${faker.address.countryCode()}`,
    times_performed: faker.random.number(10).toString(),
    contributor: `${faker.name.firstName()} ${faker.name.lastName()}`,
    collaborators: [`${faker.name.firstName()} ${faker.name.lastName()}`, `${faker.name.firstName()} ${faker.name.lastName()}`],
    home: `${faker.address.county()}`,
    links: [`${faker.internet.url()}`],
    contact: `${faker.internet.email()}`,
    footnote: ``,
    tags: [`${faker.hacker.ingverb()}`, `${faker.hacker.ingverb()}`, `${faker.hacker.ingverb()}`],
    pages: `002-003`,
    needs_review: true,
    description: `${faker.hacker.phrase()}\n${faker.lorem.paragraphs(Math.min(2, faker.random.number(7)))}`
  }
]