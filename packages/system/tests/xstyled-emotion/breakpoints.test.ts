import { matchers } from '@emotion/jest'
import styled, { css } from '@wttj/xstyled-emotion'
import { testBreakpoints } from '../common/breakpoints'

expect.extend(matchers)

testBreakpoints({ styled, css })
