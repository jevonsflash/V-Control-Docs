export const isValidUsername = (str: string) => {
  return str.length > 0
}

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

export const isArray = (arg: any) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export const isValidURL = (url: string) => {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * 判断字符串是否为空或undefined,不判断为0,不判断为false
 * @param str
 * @returns {boolean}
 */
export const isEmpty = (str: any): boolean => {
  if (
    str === null ||
    str === '' ||
    str === undefined ||
    str.length === 0
  ) {
    return true
  } else {
    return false
  }
};
export const isNotEmpty = (str: any): boolean => {
  if (
    str === null ||
    str === '' ||
    str === undefined ||
    str.length === 0
  ) {
    return false
  } else {
    return true
  }
};


