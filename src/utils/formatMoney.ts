
export const formatMoney = (value: string): string => {
    const cleanValue = value.replace(/[^\d]/g, ''); // Remove todos os caracteres não numéricos
    if (cleanValue === '') return '';
    const intValue = parseInt(cleanValue, 10);

    if (isNaN(intValue)) return '';

    const formattedValue = (intValue / 100).toFixed(2).replace('.', ',');

    const parts = formattedValue.split(',');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${parts.join(',')}`;
  };

export function FormatToFloat(value: string): number{
    let newValue = value.replace('.', "")
    newValue = newValue.replace(",", ".")
    let numberValue = parseFloat(newValue)
    numberValue = Math.round(numberValue * 100) / 100
    return(numberValue)

}

export function floatToString(value: number){
    
}