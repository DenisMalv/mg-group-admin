export function convertIsoToDmy(isoStr) {
    // Создаем объект Date из строки ISO
    const date = new Date(isoStr);
    
    // Получаем день, месяц и год
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Месяцы в JS начинаются с 0
    const year = date.getUTCFullYear();

    // Форматируем в нужный формат
    return `${day}.${month}.${year}`;
}