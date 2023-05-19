export interface Stock{
    c: string, // Тикер
    pcp: number | null, //Изменение в процентах относительно цены закрытия предыдущей торговой сессии
    ltr: string | null, // Биржа последней сделки
    name: string | null, // Название бумаги
    ltp: number | null, // Цена последней сделки
    ltp_positive: boolean | null,
    ltp_negative: boolean | null
    chg: number | null, // Изменение цены последней сделки в пунктах относительно цены закрытия предыдущей торговой сессии
}
export interface Stocks extends Array<Stock>{}