import faker from 'faker'
import iProject from '../interfaces/project'

const timesPerformedWord = (times: number, volume: string): string => {
  const words = [
    'not even once',
    'once',
    'twice',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ]
  const howMany = words[times] ? words[times] : times
  return `performed ${howMany} ${times > 2 ? 'times' : ''} in ${volume}`
}

export const generateFakeProject = (idx?: number): iProject => ({
  volume: '2011',
  image: `${faker.image.cats()}?cachebustr=${idx}`,
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
  times_performed: timesPerformedWord(faker.random.number(24), '2011'),
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
  pages: `${
    idx
      ? `${(idx * 2).toString().padStart(3, '0')}-${(idx * 2 + 1)
          .toString()
          .padStart(3, '0')}`
      : '001-002'
  }`,
  needs_review: true,
  description: `${faker.hacker.phrase()} ${faker.hacker.phrase()}\n${faker.lorem.paragraphs(
    Math.max(4, faker.random.number(25))
  )}`,
})

export const generateFakeProjects = (projectCount: number): iProject[] =>
  Array(projectCount)
    .fill({})
    .map((_, idx) => generateFakeProject(idx))
