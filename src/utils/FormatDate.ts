function FormatDate(date: string): string {
  const NewDate = new Date(date)

  const day = padToTwoDigits(NewDate.getDate())
  const month = padToTwoDigits(NewDate.getMonth() + 1) // Os meses começam do zero, então adicionamos 1
  const year = NewDate.getFullYear()
  const hours = padToTwoDigits(NewDate.getHours())
  const minutes = padToTwoDigits(NewDate.getMinutes())

  const FormatedString = `${day}/${month}/${year} - ${hours}:${minutes}`
  return FormatedString
}

function padToTwoDigits(num: number): string {
  return num < 10 ? `0${num}` : num.toString()
}

export default FormatDate
