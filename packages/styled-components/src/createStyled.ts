/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { BoxElements } from '@wttj/xstyled-core'
import { string } from '@wttj/xstyled-util'
import isPropValid from '@emotion/is-prop-valid'
import {
  StyleGenerator,
  StyleGeneratorProps,
  Theme,
} from '@wttj/xstyled-system'
import { StyledOptions } from 'styled-components'
import { scStyled } from './scStyled'
import { createCssFunction, XCSSFunction } from './createCssFunction'
import { Styled } from 'styled-components/dist/constructors/constructWithOptions'
import { StyledTarget } from 'styled-components/dist/types'

const getCreateStyle = (
  baseCreateStyle: Styled<'web', any, any>,
  css: XCSSFunction,
  generator?: StyleGenerator,
) => {
  const createStyle = (...args: Parameters<typeof css>) =>
    // @ts-ignore
    baseCreateStyle`${css(...args)}${generator}`
  createStyle.attrs = (attrs: Parameters<typeof baseCreateStyle.attrs>[0]) =>
    getCreateStyle(baseCreateStyle.attrs(attrs), css, generator)
  createStyle.withConfig = (config: StyledOptions<'web', object>) =>
    getCreateStyle(baseCreateStyle.withConfig(config), css, generator)
  return createStyle
}

type BoxStyledTags<TProps extends object> = {
  [Key in keyof BoxElements]: Styled<'web', BoxElements[Key], Theme, TProps>
}

export type XStyled<TGen extends StyleGenerator> = typeof scStyled &
  BoxStyledTags<StyleGeneratorProps<TGen>>

const createShouldForwardProp = (
  generator: StyleGenerator,
): ((
  prop: string | number | symbol,
  elementToBeCreated: StyledTarget<'web'>,
) => boolean) => {
  const propSet = new Set<string>(generator.meta.props)
  return (prop: string | number | symbol, elementToBeCreated) => {
    if (string(prop) && propSet.has(prop)) {
      return false
    }
    if (string(prop) && typeof elementToBeCreated === 'string') {
      return isPropValid(prop)
    }
    return true
  }
}

export const createBaseStyled = <TGen extends StyleGenerator>(
  css: XCSSFunction,
  generator?: TGen,
): XStyled<TGen> => {
  const config = generator
    ? {
        shouldForwardProp: createShouldForwardProp(generator),
      }
    : {}
  return ((component: Parameters<typeof scStyled>[0]) => {
    const baseStyled = scStyled(component)
    return getCreateStyle(
      config ? baseStyled.withConfig(config) : baseStyled,
      css,
      generator,
    )
  }) as XStyled<TGen>
}

export const createStyled = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyled<TGen> => {
  const css = createCssFunction(generator)
  const styled = createBaseStyled(css)
  const xstyled = createBaseStyled(css, generator)
  styled.box = xstyled('div')
  Object.keys(scStyled).forEach((key) => {
    // @ts-ignore
    styled[key] = styled(key)
    // @ts-ignore
    styled[`${key}Box`] = xstyled(key)
  })
  return styled
}
