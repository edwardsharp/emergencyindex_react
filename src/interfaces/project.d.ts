export default interface Project {
  layout?: string
  url?: string
  volume?: string
  image?: string
  photo_credit?: string
  title?: string
  first_performed?: string
  place?: string
  times_performed?: string
  contributor?: string
  collaborators?: string[]
  home?: string
  links?: string[]
  contact?: string
  footnote?: string
  tags?: string[]
  pages?: string
  needs_review?: boolean
  content: string
}
