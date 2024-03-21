import {
  useThemeScreens,
  useThemeBreakpoint,
  useThemeUp,
  useThemeDown,
} from '@wttj/xstyled-core'
import { Screens } from '@wttj/xstyled-system'
import { useTheme } from './theme'

export { useViewportWidth } from '@wttj/xstyled-core'

export const useScreens = (): Screens => {
  return useThemeScreens(useTheme())
}

export const useBreakpoint = (): string | null => {
  return useThemeBreakpoint(useTheme())
}

export const useUp = (key: string | number): boolean => {
  return useThemeUp(useTheme(), key)
}

export const useDown = (key: string | number): boolean => {
  return useThemeDown(useTheme(), key)
}
