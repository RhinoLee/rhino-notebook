import YAML from 'js-yaml'
import { reactify } from '../../front-end/vueuse/shared'

export const stringify = reactify(
  input => YAML.dump(input, {
    skipInvalid: true,
    forceQuotes: true,
    condenseFlow: true,
    noCompatMode: true,
    quotingType: '\'',
  }),
)
