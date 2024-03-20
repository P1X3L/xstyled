/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { scStyled } from './scStyled'
import { StyleGenerator } from '@xstyled/system'
import { createBaseStyled, XStyled } from './createStyled'
import { createCssFunction } from './createCssFunction'

type JSXElementKeys = keyof JSX.IntrinsicElements

export type X<TGen extends StyleGenerator> = {
  [Key in JSXElementKeys]: XStyled<TGen>
}

export const createX = <TGen extends StyleGenerator>(
  generator: TGen,
): X<TGen> => {
  const xstyled = createBaseStyled(createCssFunction(generator), generator)
  const x = {} as X<TGen>
  Object.keys(scStyled).forEach((tag) => {
    // @ts-ignore
    x[tag] = xstyled(tag)``
  })
  return x
}
