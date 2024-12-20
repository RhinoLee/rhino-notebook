import { computed } from 'vue'
import { useMounted } from '../useMounted'

export function useSupported(callback) {
  const isMounted = useMounted()

  return computed(() => {
    // to trigger the ref
    // eslint-disable-next-line no-unused-expressions
    isMounted.value
    return Boolean(callback())
  })
}
