export class Currency{
    id: string;
    attributes : {
        code: string;
        name: string;
        currency_type: string;
        code_iso_numeric3: string;
        code_iso_alpha3: string;
        symbol: string;
        native_symbol: string;
        category: string;
    }
}

export class TableData {
    data : Currency [];
    totalElements : number;
    lastIndex: number;
}