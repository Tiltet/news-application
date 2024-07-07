// Хардкодед данные с бека, если не удалось отправить запрос
const staticGraphs = [
    {
        id: "bd9c7079-6ac6-4731-80c6-a89b69c32ba9",
        date: "2024-06-30T23:00:02.217Z",
        viewDate: "01.07.24",
        EURToUSD: "1.07150435",
        USDToJPY: "160.8830954",
        GBPToUSD: "1.2646623",
        USDToRUB: "85.74921478",
        EURToRUB: "91.88065708",
        USDToRON: "4.64816048",
        EURToRON: "4.9805242",
        percentageEURToUSD: "0.02",
        percentageUSDToJPY: "-0.01",
        percentageGBPToUSD: "0.01",
        percentageUSDToRUB: "0.10",
        percentageEURToRUB: "0.12",
        percentageUSDToRON: "0.06",
        percentageEURToRON: "0.08",
        differenceEURToUSD: "0.0002",
        differenceUSDToJPY: "-0.0140",
        differenceGBPToUSD: "0.0001",
        differenceUSDToRUB: "0.0864",
        differenceEURToRUB: "0.1107",
        differenceUSDToRON: "0.0026",
        differenceEURToRON: "0.0037"
    },
    {
        id: "979d90f2-741f-49ff-85bd-5b55be3bcb26",
        date: "2024-06-29T23:00:02.995Z",
        viewDate: "30.06.24",
        EURToUSD: "1.07129347",
        USDToJPY: "160.897117",
        GBPToUSD: "1.264551",
        USDToRUB: "85.66279434",
        EURToRUB: "91.76999245",
        USDToRON: "4.64557758",
        EURToRON: "4.97677694",
        percentageEURToUSD: "-0.21",
        percentageUSDToJPY: "0.70",
        percentageGBPToUSD: "-0.33",
        percentageUSDToRUB: "-3.74",
        percentageEURToRUB: "-4.18",
        percentageUSDToRON: "0.07",
        percentageEURToRON: "-0.01",
        differenceEURToUSD: "-0.0023",
        differenceUSDToJPY: "1.1150",
        differenceGBPToUSD: "-0.0041",
        differenceUSDToRUB: "-3.3305",
        differenceEURToRUB: "-3.9983",
        differenceUSDToRON: "0.0034",
        differenceEURToRON: "-0.0004"
    },
    {
        id: "79aee67b-9ee1-49d2-91eb-01998ef595ba",
        date: "2024-06-26T23:00:02.567Z",
        viewDate: "27.06.24",
        EURToUSD: "1.07354702",
        USDToJPY: "159.78214549",
        GBPToUSD: "1.26868089",
        USDToRUB: "88.99329765",
        EURToRUB: "95.7683419",
        USDToRON: "4.64214106",
        EURToRON: "4.97716807",
        percentageEURToUSD: "0.00",
        percentageUSDToJPY: "0.24",
        percentageGBPToUSD: "0.00",
        percentageUSDToRUB: "-0.24",
        percentageEURToRUB: "0.00",
        percentageUSDToRON: "0.13",
        percentageEURToRON: "0.00",
        differenceEURToUSD: "0.0000",
        differenceUSDToJPY: "0.3781",
        differenceGBPToUSD: "0.0000",
        differenceUSDToRUB: "-0.2141",
        differenceEURToRUB: "0.0000",
        differenceUSDToRON: "0.0060",
        differenceEURToRON: "0.0000"
    },
    {
        id: "05c5c547-5c61-4d07-a0a6-d7c4860b7c07",
        date: "2024-06-25T23:00:02.502Z",
        viewDate: "26.06.24",
        EURToUSD: "1.07354702",
        USDToJPY: "159.40407892",
        GBPToUSD: "1.26871335",
        USDToRUB: "89.20740349",
        EURToRUB: "95.7683419",
        USDToRON: "4.63619012",
        EURToRON: "4.97716807",
        percentageEURToUSD: "0.46",
        percentageUSDToJPY: "-0.20",
        percentageGBPToUSD: "0.41",
        percentageUSDToRUB: "-1.84",
        percentageEURToRUB: "-1.39",
        percentageUSDToRON: "-0.45",
        percentageEURToRON: "0.00",
        differenceEURToUSD: "0.0049",
        differenceUSDToJPY: "-0.3264",
        differenceGBPToUSD: "0.0052",
        differenceUSDToRUB: "-1.6706",
        differenceEURToRUB: "-1.3499",
        differenceUSDToRON: "-0.0212",
        differenceEURToRON: "0.0000"
    },
    {
        id: "7b2bb8c2-31c6-4522-8c1f-ee4b806a5df6",
        date: "2024-06-24T23:00:01.691Z",
        viewDate: "25.06.24",
        EURToUSD: "1.06866663",
        USDToJPY: "159.73044515",
        GBPToUSD: "1.26356136",
        USDToRUB: "90.87797834",
        EURToRUB: "97.1182631",
        USDToRON: "4.65734159",
        EURToRON: "4.97714555",
        percentageEURToUSD: "-0.19",
        percentageUSDToJPY: "0.42",
        percentageGBPToUSD: "-0.17",
        percentageUSDToRUB: "2.65",
        percentageEURToRUB: "2.45",
        percentageUSDToRON: "0.21",
        percentageEURToRON: "0.01",
        differenceEURToUSD: "-0.0021",
        differenceUSDToJPY: "0.6682",
        differenceGBPToUSD: "-0.0022",
        differenceUSDToRUB: "2.3495",
        differenceEURToRUB: "2.3266",
        differenceUSDToRON: "0.0096",
        differenceEURToRON: "0.0006"
    },
    {
        id: "baaaa663-1e4e-4c35-a418-1f6983a7e23e",
        date: "2024-06-21T23:00:01.524Z",
        viewDate: "22.06.24",
        EURToUSD: "1.07074863",
        USDToJPY: "159.06222609",
        GBPToUSD: "1.26573166",
        USDToRUB: "88.52844314",
        EURToRUB: "94.79170943",
        USDToRON: "4.64772829",
        EURToRON: "4.97654871",
        percentageEURToUSD: "-0.34",
        percentageUSDToJPY: "0.64",
        percentageGBPToUSD: "-0.44",
        percentageUSDToRUB: "1.69",
        percentageEURToRUB: "1.34",
        percentageUSDToRON: "0.34",
        percentageEURToRON: "0.00",
        differenceEURToUSD: "-0.0036",
        differenceUSDToJPY: "1.0051",
        differenceGBPToUSD: "-0.0056",
        differenceUSDToRUB: "1.4674",
        differenceEURToRUB: "1.2555",
        differenceUSDToRON: "0.0157",
        differenceEURToRON: "0.0001"
    },
    {
        id: "9a1c736c-4c6b-4abf-8637-591ee0d44e4b",
        date: "2024-06-20T23:00:01.458Z",
        viewDate: "21.06.24",
        EURToUSD: "1.0743747",
        USDToJPY: "158.05710683",
        GBPToUSD: "1.27137536",
        USDToRUB: "87.06102784",
        EURToRUB: "93.53616529",
        USDToRON: "4.63197884",
        EURToRON: "4.97648086",
        percentageEURToUSD: "0.07",
        percentageUSDToJPY: "0.14",
        percentageGBPToUSD: "0.06",
        percentageUSDToRUB: "-1.34",
        percentageEURToRUB: "-1.28",
        percentageUSDToRON: "-0.05",
        percentageEURToRON: "0.02",
        differenceEURToUSD: "0.0007",
        differenceUSDToJPY: "0.2276",
        differenceGBPToUSD: "0.0008",
        differenceUSDToRUB: "-1.1836",
        differenceEURToRUB: "-1.2085",
        differenceUSDToRON: "-0.0021",
        differenceEURToRON: "0.0010"
    }
];

export default staticGraphs
