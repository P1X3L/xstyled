/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { css as scCss, Interpolation } from 'styled-components'
import {
  Styles,
  NoInfer,
  RuleSet,
  BaseObject,
} from 'styled-components/dist/types'
import { StyleGenerator } from '@wttj/xstyled-system'
import { flattenStrings } from '@wttj/xstyled-util'
import { createTransform } from '@wttj/xstyled-core'

export type XCSSFunction = <Props extends object = BaseObject>(
  styles: Styles<NoInfer<Props>>,
  ...interpolations: Interpolation<NoInfer<Props>>[]
) => RuleSet<NoInfer<Props>>

export const createCssFunction = <TGen extends StyleGenerator>(
  generator: TGen,
): XCSSFunction => {
  const transform = createTransform(generator)
  return ((...args: Parameters<XCSSFunction>) => {
    const scCssArgs = scCss(...args)
    const flattenedArgs = flattenStrings(scCssArgs as any[])
    return flattenedArgs.map(transform) as Interpolation<any>
  }) as XCSSFunction
}
