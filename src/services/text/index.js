export const snakeCaseToWords = (snakedWords) => {
  if (snakedWords === "") return ""
  const words = snakedWords.split('_')
  const capitalizedWords = words.map(word => {
    const capitalFirstLetter = word[0].toUpperCase()
    const lowerCaseRestOfWord = word.slice(1).toLowerCase()
    return `${capitalFirstLetter}${lowerCaseRestOfWord}`
  })
  return capitalizedWords.join(' ')
}

export const prettyCurrency = (dollarAmount) => {
  const formattedAmount = dollarAmount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  return `$${formattedAmount}`
}
