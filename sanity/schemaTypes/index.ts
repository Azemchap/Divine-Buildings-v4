import { type SchemaTypeDefinition } from 'sanity'
import { plans } from '../schemas/plans'
import { category } from '../schemas/categories'
import personalInfo from '../schemas/personalInfo'
import video from '../schemas/video'
import eBook from '../schemas/e-book'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [plans, category, personalInfo, video, eBook],
}
