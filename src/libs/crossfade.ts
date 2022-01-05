import { quintOut } from 'svelte/easing'
import { crossfade } from 'svelte/transition'

import { duration } from '@src/constants'

const speed = duration * 2;

const [send, receive] = crossfade({
  easing: quintOut,
  duration: () => speed,
  fallback (node) {
    // const style = getComputedStyle(node)
    // const transform = style.transform === 'none' ? '' : style.transform

    // animation used when match is not found
    return {
      duration: speed,
      easing: quintOut,
      css: t => `opacity: ${t}`
    }
  }
})

export { send, receive }
