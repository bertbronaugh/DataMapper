export class DataMap {

    dataMapId?: number;

    custno: number;

    state: string;

    table: string;

    data1Value: string;

    data1Description?: string;

    dataIntValue?: number;

    data2Value: string;

    data2Description?: string;

    created: Date;

    updated: Date;

}
// From DataMap.cs
// public int DataMapId { get; set; }
// public int CustNo { get; set; }
// public string State { get; set; }
// public string Table { get; set; }
// public string Data1Value { get; set; }
// public string Data1Description { get; set; }
// public int DataIntValue { get; set; }
// public string Data2Value { get; set; }
// public string Data2Description { get; set; }
// public DateTime Created { get; set; }
// public DateTime Updated { get; set; }