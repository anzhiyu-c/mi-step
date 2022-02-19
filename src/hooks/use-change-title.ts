import { ref, watch } from 'vue'

export function useChangeTitle(title = '德信官网') {
  const titleRef = ref(title)

  watch(
    titleRef,
    (newValue) => {
      document.title = newValue
    },
    {
      immediate: true
    }
  )

  return titleRef
}
