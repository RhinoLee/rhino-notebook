import { computed, unref } from 'vue'

export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'
export const defaultWindow = isClient ? window : undefined

export function noop() {}

export function toValue(r) {
  return typeof r === 'function'
    ? r()
    : unref(r)
}

export function unrefElement(elRef) {
  const plain = toValue(elRef)
  // 有 $el 的話是 vue component instance
  return plain?.$el ?? plain
}

export function notNullish(val) {
  return val != null
}

export function resolveElement(el) {
  if (typeof Window !== 'undefined' && el instanceof Window)
    return el.document.documentElement

  if (typeof Document !== 'undefined' && el instanceof Document)
    return el.documentElement

  return el
}

/**
 * Converts plain function into a reactive function.
 * The converted function accepts refs as it's arguments
 * and returns a ComputedRef, with proper typing.
 *
 * @param fn - Source function
 */
export function reactify(fn, options) {
  const unrefFn = options?.computedGetter === false ? unref : toValue
  return function (...args) {
    return computed(() => fn.apply(this, args.map(i => unrefFn(i))))
  }
}
