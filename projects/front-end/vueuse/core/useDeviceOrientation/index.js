import { ref } from 'vue'
import { defaultWindow } from '../../shared'
import { useEventListener } from '../useEventListener'
import { useSupported } from '../useSupported'

export function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options
  const isSupported = useSupported(() => window && 'DeviceOrientationEvent' in window)

  const isAbsolute = ref(false)
  const alpha = ref(null)
  const beta = ref(null)
  const gamma = ref(null)

  if (window && isSupported.value) {
    useEventListener(window, 'deviceorientation', (event) => {
      isAbsolute.value = event.absolute
      alpha.value = event.alpha
      beta.value = event.beta
      gamma.value = event.gamma
    })
  }

  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma,
  }
}
