type ClassName = string | null | undefined | boolean

export const joinClassNames = (classnames: Array<ClassName>): string =>
  classnames
    .filter((item) => !!item)
    .join(' ')
    .replace(/ +/g, ' ')
    .trim()

export const toKebabCase = (text: string): string => {
  const onlyAlphaNumeric = text?.replace(/[^\w\s]/gi, '')
  return onlyAlphaNumeric?.trim().replace(/\s+/g, '-').toLowerCase()
}
