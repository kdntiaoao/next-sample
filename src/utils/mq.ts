type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const breakpoints: Record<Breakpoints, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const mq = (bp: Breakpoints): string => {
  const size = breakpoints[bp]
  return `@media (min-width: ${size})`
}
