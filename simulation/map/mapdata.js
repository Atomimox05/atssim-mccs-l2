"use strict"

let mapData = {
    trackCircuits: [
        //LAS ADJUNTAS
        //VÍA 1
        {
            name: "AJU_01",
            southbound: "endOfTrack",
            northbound: "AJU_03",
            signals: {
                northbound: "AJU01", //H
                southbound: "SP1"
            },
            length: 7
        },
        {
            name: "AJU_03",
            southbound: "AJU_01",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A1",
                normal: "AJU_05",
                reverse: "AJU_51"
            },
            length: 1
        },
        {
            name: "AJU_05",
            southbound: "AJU_03",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A3",
                normal: "AJU_07",
                reverse: "AJU_CV"
            },
            length: 2
        },
        {
            name: "AJU_07",
            northbound: "AJU_09",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A5",
                normal: "AJU_05",
                reverse: "AJU_CV"
            },
            length: 2
        },
        {
            name: "AJU_09",
            southbound: "AJU_07",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A7",
                normal: "AJU_11",
                reverse: "AJU_52"
            },
            length: 1
        },
        {
            name: "AJU_11",
            northbound: "AJU_13",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A9",
                normal: "AJU_09",
                reverse: "AJU_53"
            },
            length: 1
        },
        {
            name: "AJU_13",
            southbound: "AJU_11",
            northbound: "AJU_15",
            signals: {
                northbound: "AJU03", //G
            },
            length: 7
        },
        {
            name: "AJU_15",
            southbound: "AJU_13",
            northbound: "AJU_17",
            length: 10
        },
        {
            name: "AJU_17",
            southbound: "AJU_15",
            northbound: "RUI_01",
            length: 10
        },
        //VÍA 2
        {
            name: "AJU_02",
            southbound: "endOfTrack",
            northbound: "AJU_04",
            signals: {
                northbound: "AJU02",//E
                southbound: "SP2"
            },
            length: 7
        },
        {
            name: "AJU_04",
            southbound: "AJU_02",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A2",
                normal: "AJU_06",
                reverse: "AJU_CV"
            },
            length: 3
        },
        {
            name: "AJU_06",
            southbound: "dependsOnPoint",
            northbound: "AJU_08",
            dependsOnPoint: {
                point: "AJU_A4",
                normal: "AJU_04",
                reverse: "AJU_CV"
            },
            length: 3
        },
        {
            name: "AJU_08",
            southbound: "AJU_06",
            northbound: "AJU_10",
            length: 2
        },
        {
            name: "AJU_10",
            southbound: "AJU_08",
            northbound: "AJU_12",
            signals: {
                southbound: "AJU04",//F
            },
            length: 8
        },
        {
            name: "AJU_12",
            southbound: "AJU_10",
            northbound: "AJU_14",
            length: 10
        },
        {
            name: "AJU_14",
            southbound: "AJU_12",
            northbound: "RUI_02",
            length: 10
        },
        {
            name: "AJU_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "AJU_05",
            southboundLineNorthboundDirection: "AJU_07",
            northboundLineSouthboundDirection: "AJU_04",
            northboundLineNorthboundDirection: "AJU_06",
            length: 1
        },
        {
            name: "AJU_51",
            southbound: "AJU_03",
            northbound: "endOfTrack",
            length: 1
        },
        {
            name: "AJU_52",
            southbound: "AJU_09",
            northbound: "endOfTrack",
            length: 1
        },
        {
            name: "AJU_53",
            southbound: "endOfTrack",
            northbound: "AJU_11",
            length: 1
        },
        //RUIZ PINEDA
        //VÍA 1
        {
            name: "RUI_01",
            southbound: "AJU_17",
            northbound: "RUI_03",
            signals: {
                northbound: "RUI01",//K
            },
            length: 5
        },
        {
            name: "RUI_03",
            southbound: "dependsOnPoint",
            northbound: "RUI_05",
            dependsOnPoint: {
                point: "RUI_A1",
                normal: "RUI_01",
                reverse: "RUI_51"
            },
            length: 4
        },
        {
            name: "RUI_05",
            southbound: "RUI_03",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "RUI_A3",
                normal: "RUI_07",
                reverse: "RUI_04"
            },
            length: 2
        },
        {
            name: "RUI_07",
            southbound: "RUI_05",
            northbound: "RUI_09",
            length: 3
        },
        {
            name: "RUI_09",
            southbound: "RUI_07",
            northbound: "RUI_11",
            signals:{
                southbound: "RUI03",//J
                northbound: "RUI05"//H
            },
            length: 7
        },
        {
            name: "RUI_11",
            southbound: "RUI_09",
            northbound: "RUI_13",
            length: 1
        },
        {
            name: "RUI_13",
            southbound: "RUI_11",
            northbound: "RUI_15",
            length: 1
        },
        {
            name: "RUI_15",
            southbound: "RUI_13",
            northbound: "Y_01",
            signals: {
                southbound: "RUI07",//G
            },
            length: 12
        },
        //VIA 2
        {
            name: "RUI_02",
            southbound: "AJU_14",
            northbound: "RUI_04",
            signals: {
                northbound: "RUI02",//C
            },
            length: 7
        },
        {
            name: "RUI_04",
            southbound: "dependsOnPoint",
            northbound: "RUI_06",
            dependsOnPoint: {
                point: "RUI_A2",
                normal: "RUI_02",
                reverse: "RUI_05"
            },
            length: 7
        },
        {
            name: "RUI_06",
            southbound: "RUI_04",
            northbound: "ALP_04",
            length: 2
        },
        {
            name: "RUI_08",
            southbound: "RUI_06",
            northbound: "RUI_08",
            signals:{
                southbound: "RUI04",//D
                northbound: "RUI06"//E
            },
            length: 7
        },
        {
            name: "RUI_10",
            southbound: "RUI_08",
            northbound: "RUI_12",
            length: 1
        },
        {
            name: "RUI_12",
            southbound: "RUI_10",
            northbound: "RUI_14",
            length: 3
        },
        {
            name: "RUI_14",
            southbound: "RUI_12",
            northbound: "Y_02",
            signals: {
                southbound: "RUI08",//F
            },
            length: 7
        },
        {
            name: "RUI_51",
            southbound: "endOfTrack",
            northbound: "RUI_03",
            length: 1
        },
        //ZOOLOGICO
        //VIA 1
        {
            name: "ZOO_01",
            southbound: "endOfTrack",
            northbound: "ZOO_03",
            signals: {
                northbound: "ZOO01", //K
                southbound: "SP3"
            },
            length: 8
        },
        {
            name: "ZOO_03",
            southbound: "ZOO_01",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ZOO_A1",
                normal: "ZOO_05",
                reverse: "ZOO_04"
            },
            length: 5
        },
        {
            name: "ZOO_05",
            southbound: "ZOO_03",
            northbound: "ZOO_07",
            signals: {
                northbound: "ZOO05", //H
                southbound: "ZOO03" //J
            },
            length: 7
        },
        {
            name: "ZOO_07",
            southbound: "dependsOnPoint",
            northbound: "ZOO_09",
            dependsOnPoint: {
                point: "ZOO_A3",
                normal: "ZOO_05",
                reverse: "ZOO_08"
            },
            length: 4
        },
        {
            name: "ZOO_09",
            southbound: "ZOO_07",
            northbound: "CRC_01",
            signals:{
                southbound: "ZOO07",    //G
            },
            shuntingPanels:{
                northbound: "ZR1"
            },
            length: 7
        },
        //VIA 2
        {
            name: "ZOO_02",
            southbound: "endOfTrack",
            northbound: "ZOO_04",
            signals: {
                northbound: "ZOO02", //C
                southbound: "SP4"
            },
            length: 8
        },
        {
            name: "ZOO_04",
            southbound: "dependsOnPoint",
            northbound: "ZOO_06",
            dependsOnPoint: {
                point: "ZOO_A2",
                normal: "ZOO_02",
                reverse: "ZOO_04"
            },
            length: 5
        },
        {
            name: "ZOO_06",
            southbound: "ZOO_04",
            northbound: "ZOO_08",
            signals: {
                northbound: "ZOO06",    //E
                southbound: "ZOO04" //D
            },
            length: 7
        },
        {
            name: "ZOO_08",
            southbound: "ZOO_06",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ZOO_A4",
                normal: "ZOO_10",
                reverse: "ZOO_07"
            },
            length: 4
        },
        {
            name: "ZOO_10",
            southbound: "ZOO_08",
            northbound: "CRC_02",
            signals: {
                southbound: "ZOO08",    //F
            },
            length: 8
        },
        //CARICUAO
        //VIA 1
        {
            name: "Y_01",
            southbound: "ZOO_09",
            northbound: "CRC_03",
            length: 10
        },
        {
            name: "CRC_03",
            southbound: "CRC_01",
            northbound: "CRC_05",
            signals:{
                southbound: "CRC01", //S1
            },
            length: 7
        },
        {
            name: "CRC_05",
            southbound: "CRC_03",
            northbound: "CRC_05",
            length: 8
        },
        {
            name: "CRC_07",
            southbound: "CRC_05",
            northbound: "Y_11",
            length: 7
        },
        //VIA 1
        {
            name: "CRC_02",
            southbound: "ZOO_10",
            northbound: "CRC_04",
            length: 10
        },
        {
            name: "CRC_04",
            southbound: "CRC_02",
            northbound: "CRC_06",
            signals:{
                southbound: "CRC02", //S2
            },
            length: 7
        },
        {
            name: "CRC_06",
            southbound: "CRC_04",
            northbound: "CRC_08",
            length: 8
        },
        {
            name: "CRC_08",
            southbound: "CRC_06",
            northbound: "Y_12",
            length: 7
        },
        //Y
        //VIA 1 - ADJUNTAS
        {
            name: "Y_01",
            southbound: "RUI_15",
            northbound: "Y_03",
            signals: {
                northbound: "Y01" //K
            },
            length: 5
        },
        {
            name: "Y_03",
            southbound: "Y_01",
            northbound: "Y_05",
            length: 2
        },
        //VIA 1 - ZOOLOGICO
        {
            name: "Y_11",
            southbound: "CRC_07",
            northbound: "Y_13",
            length: 5
        },
        {
            name: "Y_13",
            southbound: "Y_11",
            northbound: "Y_05",
            signals: {
                northbound: "Y03" //Q
            },
            length: 6
        },
        //VIA 1 - Y
        {
            name: "Y_05",
            southbound: "dependsOnPoint",
            northbound: "Y_07",
            dependsOnPoint: {
                point: "Y_A1",
                normal: "Y_03",
                reverse: "Y_13"
            },
            length: 4
        },
        {
            name: "Y_07",
            southbound: "Y_05",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "Y_A3",
                normal: "Y_09",
                reverse: "Y_15"
            },
            length: 4
        },
        {
            name: "Y_09",
            southbound: "Y_07",
            northbound: "MAM_01",
            signals: {
                southbound: "Y05" //J
            },
            length: 10
        },
        //VIA 2 - ADJUNTAS
        {
            name: "Y_02",
            southbound: "RUI_14",
            northbound: "Y_04",
            signals: {
                northbound: "Y02" //C
            },
            length: 5
        },
        {
            name: "Y_04",
            southbound: "Y_02",
            northbound: "Y_06",
            length: 2
        },
        //VIA 2 - ZOOLOGICO
        {
            name: "Y_12",
            southbound: "CRC_08",
            northbound: "Y_14",
            length: 4
        },
        {
            name: "Y_14",
            southbound: "Y_12",
            northbound: "Y_06",
            signals: {
                northbound: "Y04" //P
            },
            length: 7
        },
        //VIA 2 - Y
        {
            name: "Y_06",
            southbound: "dependsOnPoint",
            northbound: "Y_08",
            dependsOnPoint: {
                point: "Y_A2",
                normal: "Y_04",
                reverse: "Y_14"
            },
            length: 4
        },
        {
            name: "Y_08",
            southbound: "Y_06",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "Y_A4",
                normal: "Y_10",
                reverse: "Y_16"
            },
            length: 4
        },
        {
            name: "Y_10",
            southbound: "Y_08",
            northbound: "MAM_02",
            signals: {
                southbound: "Y06" //D
            },
            length: 10
        },
        //VÍA R
        {
            name: "Y_15",
            southbound: "Y_16",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "Y_A5",
                normal: "endOfTrack",
                reverse: "Y_07"
            },
            length: 1
        },
        {
            name: "Y_16",
            southbound: "dependsOnPoint",
            northbound: "Y_17",
            dependsOnPoint: {
                point: "Y_A6",
                normal: "Y_15",
                reverse: "Y_08"
            },
            length: 2
        },
        {
            name: "Y_17",
            southbound: "Y_16",
            northbound: "endOfTrack",
            signals: {
                southbound: "Y07" //R
            },
            length: 8
        },
        //MAMERA
        //VIA 1
        {
            name: "MAM_01",
            southbound: "Y_09",
            northbound: "MAM_03",
            length: 1
        },
        {
            name: "MAM_03",
            southbound: "MAM_01",
            northbound: "MAM_05",
            signals: {
                northbound: "MAM01" //H
            },
            length: 8
        },
        {
            name: "MAM_05",
            southbound: "dependsOnPoint",
            northbound: "MAM_07",
            dependsOnPoint: {
                point: "MAM_A1",
                normal: "MAM_03",
                reverse: "MAM_14"
            },
            length: 3
        },
        {
            name: "MAM_07",
            southbound: "MAM_05",
            northbound: "MAM_09",
            signals: {
                southbound: "MAM03" //G
            },
            length: 3
        },
        {
            name: "MAM_09",
            southbound: "MAM_07",
            northbound: "MAM_11",
            signals: {
                northbound: "MAM05" //M
            },
            length: 4
        },
        {
            name: "MAM_11",
            southbound: "MAM_09",
            northbound: "ANT_01",
            length: 8
        },
        //VIA 2
        {
            name: "MAM_02",
            southbound: "Y_10",
            northbound: "MAM_04",
            signals: {
                northbound: "MAM02" //E
            },
            length: 7
        },
        {
            name: "MAM_04",
            southbound: "MAM_02",
            northbound: "MAM_06",
            length: 1
        },
        {
            name: "MAM_06",
            southbound: "dependsOnPoint",
            northbound: "MAM_08",
            dependsOnPoint: {
                point: "MAM_A2",
                normal: "MAM_04",
                reverse: "MAM_15"
            },
            length: 2
        },
        {
            name: "MAM_08",
            southbound: "MAM_06",
            northbound: "MAM_10",
            signals: {
                southbound: "MAM04" //F
            },
            length: 3
        },
        {
            name: "MAM_10",
            southbound: "MAM_08",
            northbound: "MAM_12",
            signals: {
                northbound: "MAM06" //A
            },
            length: 4
        },
        {
            name: "MAM_12",
            southbound: "MAM_10",
            northbound: "ANT_02",
            length: 8
        },
        //VIA Z
        {
            name: "MAM_13",
            southbound: "endOfTrack",
            northbound: "MAM_14",
            signals: {
                northbound: "MAM07" //Z
            },
            length: 8
        },
        {
            name: "MAM_14",
            southbound: "MAM_13",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "MAM_A3",
                normal: "MAM_15",
                reverse: "MAM_05"
            },
            length: 1
        },
        {
            name: "MAM_15",
            southbound: "MAM_14",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "MAM_A4",
                normal: "endOfTrack",
                reverse: "MAM_06"
            },
            length: 1
        },
        //CORRAL DE PIEDRA
        //VIA 2
        {
            name: "TCP_02",
            southbound: "TRC_12",
            northbound: "TCP_04",
            length: 10
        },
        {
            "name": "TCP_04",
            southbound: "TCP_02",
            northbound: "TCP_06",
            length: 10
        },
        {
            "name": "TCP_06",
            southbound: "TCP_04",
            northbound: "TCP_08",
            signals: {
                northbound: "TCP02" //I4
            },
            length: 10
        },
        {
            "name": "TCP_08",
            southbound: "TCP_06",
            northbound: "TCP_10",
            signals: {
                southbound: "TCP04" //I2
            },
            length: 10
        },
        {
            name: "TCP_10",
            southbound: "TCP_08",
            northbound: "TCP_12",
            length: 10
        },
        {
            "name": "TCP_12",
            southbound: "TCP_10",
            northbound: "AJU_02",
            length: 10
        },
        //VIA 1
        {
            name: "TCP_01",
            southbound: "TRC_11",
            northbound: "TCP_03",
            length: 10
        },
        {
            "name": "TCP_03",
            southbound: "TCP_01",
            northbound: "TCP_05",
            length: 10
        },
        {
            "name": "TCP_05",
            southbound: "TCP_03",
            northbound: "TCP_07",
            signals: {
                northbound: "TCP01" //I9
            },
            length: 10
        },
        {
            "name": "TCP_07",
            southbound: "TCP_05",
            northbound: "TCP_09",
            signals: {
                southbound: "TCP03" //I11
            },
            length: 10
        },
        {
            name: "TCP_09",
            southbound: "TCP_07",
            northbound: "TCP_11",
            length: 10
        },
        {
            "name": "TCP_11",
            southbound: "TCP_09",
            northbound: "AJU_01",
            length: 10
        },
        //LAS ADJUNTAS
        //VIA 2
        {
            name: "AJU_02",
            southbound: "TCP_12",
            northbound: "AJU_04",
            signals:{
                northbound: "AJU02" //B
            },
            shuntingPanels: {
                southbound: "ZR6"
            },
            length: 8
        },
        {
            name: "AJU_04",
            southbound: "AJU_02",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A2",
                normal: "AJU_06",
                reverse: "AJU_CV"
            },
            length: 2
        },
        {
            name: "AJU_06",
            northbound: "AJU_08",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A4",
                normal: "AJU_04",
                reverse: "AJU_CV"
            },
            length: 8
        },
        {
            name: "AJU_08",
            southbound: "AJU_06",
            northbound: "AJU_10",
            signals: {
                southbound: "AJU04", //A
                northbound: "AJU06" //N
            },
            length: 8
        },
        {
            name: "AJU_10",
            southbound: "AJU_08",
            northbound: "endOfTrack",
            length: 8
        },
        //VIA 1
        {
            name: "AJU_01",
            southbound: "TCP_11",
            northbound: "AJU_03",
            signals: {
                northbound: "AJU01" //L
            },
            shuntingPanels: {
                southbound: "ZR5"
            },
            length: 8
        },
        {
            name: "AJU_03",
            southbound: "AJU_01",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A1",
                normal: "AJU_05",
                reverse: "AJU_CV"
            },
            length: 2
        },
        {
            name: "AJU_05",
            northbound: "AJU_07",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "AJU_A3",
                normal: "AJU_03",
                reverse: "AJU_CV"
            },
            length: 8
        },
        {
            name: "AJU_07",
            southbound: "AJU_05",
            northbound: "AJU_09",
            signals: {
                southbound: "AJU03", //M
                northbound: "AJU05" //K
            },
            length: 8
        },
        {
            name: "AJU_09",
            southbound: "AJU_07",
            northbound: "endOfTrack",
            length: 8
        },
        {
            name: "AJU_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "AJU_04",
            southboundLineNorthboundDirection: "AJU_06",
            northboundLineSouthboundDirection: "AJU_03",
            northboundLineNorthboundDirection: "AJU_05",
            length: 2
        },

    ],
    points: [
        {
            name: "IDP_A2",
            trackCircuit: "IDP_04",
        },
        {
            name: "IDP_A4",
            trackCircuit: "IDP_06",
        },
        {
            name: "IDP_A1",
            trackCircuit: "IDP_03",
        },
        {
            name: "IDP_A3",
            trackCircuit: "IDP_05",
        },
        {
            name: "ALP_A2",
            trackCircuit: "ALP_08",
        },
        {
            name: "ALP_A4",
            trackCircuit: "ALP_10",
        },
        {
            name: "ALP_A1",
            trackCircuit: "ALP_07",
        },
        {
            name: "ALP_A3",
            trackCircuit: "ALP_09",
        },
        {
            name: "AYA_A2",
            trackCircuit: "AYA_04"
        },
        {
            name: "AYA_A4",
            trackCircuit: "AYA_06"
        },
        {
            name: "AYA_A6",
            trackCircuit: "AYA_12"
        },
        {
            name: "AYA_A8",
            trackCircuit: "AYA_14"
        },
        {
            name: "AYA_A1",
            trackCircuit: "AYA_03"
        },
        {
            name: "AYA_A3",
            trackCircuit: "AYA_05"
        },
        {
            name: "AYA_A5",
            trackCircuit: "AYA_11"
        },
        {
            name: "AYA_A7",
            trackCircuit: "AYA_13"
        },
        {
            name: "AJU_A2",
            trackCircuit: "AJU_04"
        },
        {
            name: "AJU_A4",
            trackCircuit: "AJU_06"
        },
        {
            name: "AJU_A1",
            trackCircuit: "AJU_03"
        },
        {
            name: "AJU_A3",
            trackCircuit: "AJU_05"
        },
    ],
    signals: [
        {
            name: "IDP02",
            direction: "northbound"
        },
        {
            name: "IDP04",
            direction: "southbound"
        },
        {
            name: "IDP06",
            direction: "northbound"
        },
        {
            name: "IDP08",
            direction: "southbound"
        },
        {
            name: "IDP01",
            direction: "northbound"
        },
        {
            name: "IDP03",
            direction: "southbound"
        },
        {
            name: "IDP05",
            direction: "northbound"
        },
        {
            name: "IDP07",
            direction: "southbound"
        },
        {
            name: "GCP-S1",
            direction: "northbound"
        },
        {
            name: "GCP-S2",
            direction: "southbound"
        },
        {
            name: "ALP02",
            direction: "northbound"
        },
        {
            name: "ALP04",
            direction: "southbound"
        },
        {
            name: "ALP06",
            direction: "northbound"
        },
        {
            name: "ALP08",
            direction: "southbound"
        },
        {
            name: "ALP01",
            direction: "northbound"
        },
        {
            name: "ALP03",
            direction: "southbound"
        },
        {
            name: "ALP05",
            direction: "northbound"
        },
        {
            name: "ALP07",
            direction: "southbound"
        },
        {
            name: "AYA02",
            direction: "northbound"
        },
        {
            name: "AYA04",
            direction: "southbound"
        },
        {
            name: "AYA06",
            direction: "northbound"
        },
        {
            name: "AYA08",
            direction: "southbound"
        },
        {
            name: "AYA01",
            direction: "northbound"
        },
        {
            name: "AYA03",
            direction: "southbound"
        },
        {
            name: "AYA05",
            direction: "northbound"
        },
        {
            name: "AYA07",
            direction: "southbound"
        },
        {
            name: "TCA02",
            direction: "northbound"
        },
        {
            name: "TCA04",
            direction: "southbound"
        },
        {
            name: "TCA01",
            direction: "northbound"
        },
        {
            name: "TCA03",
            direction: "southbound"
        },
        {
            name: "TRC02",
            direction: "northbound"
        },
        {
            name: "TRC04",
            direction: "southbound"
        },
        {
            name: "TRC01",
            direction: "northbound"
        },
        {
            name: "TRC03",
            direction: "southbound"
        },
        {
            name: "TCP02",
            direction: "northbound"
        },
        {
            name: "TCP04",
            direction: "southbound"
        },
        {
            name: "TCP01",
            direction: "northbound"
        },
        {
            name: "TCP03",
            direction: "southbound"
        },
        {
            name: "AJU02",
            direction: "northbound"
        },
        {
            name: "AJU04",
            direction: "southbound"
        },
        {
            name: "AJU06",
            direction: "northbound"
        },
        {
            name: "AJU01",
            direction: "northbound"
        },
        {
            name: "AJU03",
            direction: "southbound"
        },
        {
            name: "AJU05",
            direction: "northbound"
        },
        {
            name: "SP1",
            direction: "southbound"
        },
        {
            name: "SP2",
            direction: "southbound"
        },
        {
            name: "SP3",
            direction: "northbound"
        },
        {
            name: "SP4",
            direction: "northbound"
        }
    ],
    shuntingPanels: [
        {
            name: "ZR1",
            direction: "northbound"
        },
        {
            name: "ZR3",
            direction: "northbound"
        },
        {
            name: "ZR5",
            direction: "southbound"
        },
        {
            name: "ZR2",
            direction: "northbound"
        },
        {
            name: "ZR4",
            direction: "northbound"
        },
        {
            name: "ZR6",
            direction: "southbound"
        },
    ],
    platforms: [
        {
            name: "INDEPENDENCIA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "IDP_07",
                position: 6
            },
            southbound: {
                trackCircuit: "IDP_07",
                position: 3
            }
        },
        {
            name: "INDEPENDENCIA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "IDP_08",
                position: 6
            },
            southbound: {
                trackCircuit: "IDP_08",
                position: 3
            },
        },
        {
            name: "GUAICAIPURO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "GCP_03",
                position: 6
            },
            southbound: {
                trackCircuit: "GCP_03",
                position: 3
            }
        },
        {
            name: "GUAICAIPURO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "GCP_04",
                position: 6
            },
            southbound: {
                trackCircuit: "GCP_04",
                position: 3
            }
        },
        {
            name: "ALIPRIMERA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "ALP_05",
                position: 6
            },
            southbound: {
                trackCircuit: "ALP_05",
                position: 3
            },
        },
        {
            name: "ALIPRIMERA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "ALP_06",
                position: 6
            },
            southbound: {
                trackCircuit: "ALP_06",
                position: 3
            }
        },
        {
            name: "AYACUCHO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "AYA_07",
                position: 6
            },
            southbound: {
                trackCircuit: "AYA_07",
                position: 3
            },
        },
        {
            name: "AYACUCHO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "AYA_08",
                position: 6
            },
            southbound: {
                trackCircuit: "AYA_08",
                position: 3
            }
        },
        {
            name: "ADJUNTAS_V1",
            direction: "northbound",
            northbound: {
                trackCircuit: "AJU_07",
                position: 6
            },
            southbound: {
                trackCircuit: "AJU_07",
                position: 3
            },
            terminus: true
        },
        {
            name: "ADJUNTAS_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "AJU_08",
                position: 6
            },
            southbound: {
                trackCircuit: "AJU_08",
                position: 3
            },
            terminus: true
        }
    ],
}