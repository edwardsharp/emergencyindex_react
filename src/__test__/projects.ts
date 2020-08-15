import faker from 'faker'
import iProject from '../interfaces/project'

export const generateFakeProject = (): iProject => ({
  volume: '2011',
  image: `${faker.image.cats()}?cachebustr=${Math.random()}`,
  photo_credit: `${faker.name.firstName()} ${faker.name.lastName()}`,
  title: `${faker.hacker.adjective()} ${faker.hacker.adjective()} ${faker.hacker.noun()}`,
  first_performed: `${faker.date.month()} ${Math.max(
    1,
    faker.random.number(28)
  )}, 2011`,
  place: `${faker.random.arrayElement([
    faker.commerce.productMaterial(),
    faker.hacker.verb().toUpperCase(),
    faker.hacker.abbreviation(),
  ])} ${faker.random.arrayElement([
    'Gallery',
    'Art Institute',
    'Club',
    'Space',
    'Spot',
    'Hub',
    'Joint',
  ])}, ${faker.address.city()}, ${faker.address.countryCode()}`,
  times_performed: faker.random.number(10).toString(),
  contributor: `${faker.name.firstName()} ${faker.name.lastName()}`,
  collaborators: Array.from(
    { length: faker.random.number(6) },
    () => `${faker.name.firstName()} ${faker.name.lastName()}`
  ),
  home: faker.address.county(),
  links: [faker.internet.url()],
  contact: faker.internet.email(),
  footnote: ``,
  tags: [
    ...Array.from({ length: faker.random.number(5) }, () =>
      faker.hacker.adjective()
    ),
    ...Array.from({ length: faker.random.number(5) }, () =>
      faker.hacker.verb()
    ),
    ...Array.from({ length: faker.random.number(5) }, () =>
      faker.hacker.noun()
    ),
  ],
  pages: `002-003`,
  needs_review: true,
  description: `${faker.hacker.phrase()} ${faker.hacker.phrase()}\n${faker.lorem.paragraphs(
    Math.max(4, faker.random.number(25))
  )}`,
})

export const generateFakeProjects = (projectCount: number): iProject[] =>
  Array(projectCount)
    .fill({})
    .map(() => generateFakeProject())
