import { createGlobalStyle } from 'styled-components'
import { getPreflightStyles } from '@wttj/xstyled-system'

export const Preflight = createGlobalStyle(({ theme }) =>
  getPreflightStyles(theme),
)
