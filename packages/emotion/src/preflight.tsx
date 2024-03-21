import * as React from 'react'
import { Global, useTheme } from '@emotion/react'
import { getPreflightStyles } from '@wttj/xstyled-system'

export const Preflight: React.FC = () => {
  const theme = useTheme()
  return <Global styles={getPreflightStyles(theme)} />
}
