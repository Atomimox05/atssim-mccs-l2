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
            length: 8
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
                southbound: "AJU03", //G
            },
            shuntingPanels: {
                northbound: "ZR1"
            },
            length: 7
        },
        {
            name: "AJU_15",
            southbound: "AJU_13",
            northbound: "AJU_17",
            length: 16
        },
        {
            name: "AJU_17",
            southbound: "AJU_15",
            northbound: "RUI_01",
            length: 16
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
            shuntingPanels: {
                northbound: "ZR2"
            },
            length: 8
        },
        {
            name: "AJU_12",
            southbound: "AJU_10",
            northbound: "AJU_14",
            length: 16
        },
        {
            name: "AJU_14",
            southbound: "AJU_12",
            northbound: "RUI_02",
            length: 16
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
            shuntingPanels: {
                southbound: "ZR3"
            },
            length: 7
        },
        {
            name: "RUI_03",
            southbound: "RUI_01",
            northbound: "RUI_05",
            length: 3
        },
        {
            name: "RUI_05",
            southbound: "dependsOnPoint",
            northbound: "RUI_07",
            dependsOnPoint: {
                point: "RUI_A1",
                normal: "RUI_03",
                reverse: "RUI_51"
            },
            length: 4
        },
        {
            name: "RUI_07",
            southbound: "RUI_05",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "RUI_A3",
                normal: "RUI_09",
                reverse: "RUI_04"
            },
            length: 2
        },
        {
            name: "RUI_09",
            southbound: "RUI_07",
            northbound: "RUI_11",
            length: 3
        },
        {
            name: "RUI_11",
            southbound: "RUI_09",
            northbound: "RUI_13",
            signals:{
                southbound: "RUI03",//J
                northbound: "RUI05"//H
            },
            length: 8
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
            northbound: "RUI_17",
            length: 1
        },
        {
            name: "RUI_17",
            southbound: "RUI_15",
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
            northbound: "RUI_08",
            length: 2
        },
        {
            name: "RUI_08",
            southbound: "RUI_06",
            northbound: "RUI_10",
            signals:{
                southbound: "RUI04",//D
            },
            length: 4
        },
        {
            name: "RUI_10",
            southbound: "RUI_08",
            northbound: "RUI_12",
            signals:{
                northbound: "RUI06"//E
            },
            length: 4
        },
        {
            name: "RUI_12",
            southbound: "RUI_10",
            northbound: "RUI_14",
            length: 1
        },
        {
            name: "RUI_14",
            southbound: "RUI_12",
            northbound: "RUI_16",
            length: 3
        },
        {
            name: "RUI_16",
            southbound: "RUI_14",
            northbound: "Y_02",
            signals: {
                southbound: "RUI08",//F
            },
            length: 8
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
            length: 8
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
                northbound: "ZR4"
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
                reverse: "ZOO_03"
            },
            length: 5
        },
        {
            name: "ZOO_06",
            southbound: "ZOO_04",
            northbound: "ZOO_08",
            signals: {
                northbound: "ZOO06", //E
                southbound: "ZOO04" //D
            },
            length: 8
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
            name: "CRC_01",
            southbound: "ZOO_09",
            northbound: "CRC_03",
            length: 14
        },
        {
            name: "CRC_03",
            southbound: "CRC_01",
            northbound: "CRC_05",
            signals:{
                southbound: "CRC01", //S1
            },
            length: 8
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
            length: 14
        },
        //VIA 2
        {
            name: "CRC_02",
            southbound: "ZOO_10",
            northbound: "CRC_04",
            length: 14
        },
        {
            name: "CRC_04",
            southbound: "CRC_02",
            northbound: "CRC_06",
            signals:{
                northbound: "CRC02", //S2
            },
            length: 8
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
            length: 14
        },
        //Y
        //VIA 1 - ADJUNTAS
        {
            name: "Y_01",
            southbound: "RUI_17",
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
            length: 8
        },
        {
            name: "Y_13",
            southbound: "Y_11",
            northbound: "Y_15",
            signals: {
                northbound: "Y03" //Q
            },
            length: 7
        },
        {
            name: "Y_15",
            southbound: "Y_13",
            northbound: "Y_05",
            length: 2
        },
        //VIA 1 - Y
        {
            name: "Y_05",
            southbound: "dependsOnPoint",
            northbound: "Y_07",
            dependsOnPoint: {
                point: "Y_A1",
                normal: "Y_15",
                reverse: "Y_03"
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
                reverse: "Y_17"
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
            length: 16
        },
        //VIA 2 - ADJUNTAS
        {
            name: "Y_02",
            southbound: "RUI_16",
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
            length: 8
        },
        {
            name: "Y_14",
            southbound: "Y_12",
            northbound: "Y_16",
            signals: {
                northbound: "Y04" //P
            },
            length: 7
        },
        {
            name: "Y_16",
            southbound: "Y_14",
            northbound: "Y_06",
            length: 2
        },
        //VIA 2 - Y
        {
            name: "Y_06",
            southbound: "dependsOnPoint",
            northbound: "Y_08",
            dependsOnPoint: {
                point: "Y_A2",
                normal: "Y_04",
                reverse: "Y_16"
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
                reverse: "Y_17"
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
            length: 16
        },
        //VÍA R
        {
            name: "Y_17",
            southbound: "dependsOnPoint",
            northbound: "Y_18",
            dependsOnPoint: {
                point: "Y_A5",
                normal: "Y_07",
                reverse: "Y_08"
            },
            length: 1
        },
        {
            name: "Y_18",
            southbound: "Y_17",
            northbound: "endOfTrack",
            signals: {
                southbound: "Y07", //R
                northbound: "SP5"
            },
            length: 8
        },
        //MAMERA
        //VIA 1
        {
            name: "MAM_01",
            southbound: "Y_09",
            northbound: "MAM_03",
            length: 4
        },
        {
            name: "MAM_03",
            southbound: "MAM_01",
            northbound: "MAM_05",
            signals: {
                northbound: "MAM01" //H
            },
            length: 10
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
            length: 4
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
            length: 10
        },
        {
            name: "MAM_04",
            southbound: "MAM_02",
            northbound: "MAM_06",
            length: 3
        },
        {
            name: "MAM_06",
            southbound: "dependsOnPoint",
            northbound: "MAM_08",
            dependsOnPoint: {
                point: "MAM_A2",
                normal: "MAM_04",
                reverse: "MAM_14"
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
            length: 4
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
                southbound: "SP6",
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
                normal: "MAM_05",
                reverse: "MAM_06"
            },
            length: 1
        },
        //ANTIMANO
        //VIA 1
        {
            name: "ANT_01",
            southbound: "MAM_11",
            northbound: "ANT_03",
            length: 5
        },
        {
            name: "ANT_03",
            southbound: "ANT_01",
            northbound: "ANT_05",
            signals: {
                northbound: "ANT03", //K
                southbound: "ANT01" //L
            },
            length: 7
        },
        {
            name: "ANT_05",
            southbound: "ANT_03",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ANT_A1",
                normal: "ANT_07",
                reverse: "ANT_CV"
            },
            length: 1
        },
        {
            name: "ANT_07",
            northbound: "ANT_09",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ANT_A3",
                normal: "ANT_05",
                reverse: "ANT_CV"
            },
            length: 1
        },
        {
            name: "ANT_09",
            southbound: "ANT_07",
            northbound: "ANT_11",
            length: 1
        },
        {
            name: "ANT_11",
            southbound: "ANT_09",
            northbound: "ANT_13",
            signals: {
                southbound: "ANT05" //J
            },
            length: 4
        },
        {
            name: "ANT_13",
            southbound: "ANT_11",
            northbound: "ANT_15",
            signals: {
                northbound: "ANT07" //H
            },
            length: 4
        },
        {
            name: "ANT_15",
            southbound: "ANT_13",
            northbound: "ANT_17",
            length: 4
        },
        {
            name: "ANT_17",
            southbound: "ANT_15",
            northbound: "ANT_19",
            length: 4
        },
        {
            name: "ANT_19",
            southbound: "ANT_17",
            northbound: "CRP_01",
            signals: {
                southbound: "ANT09" //G
            },
            length: 7
        },
        //VIA 2
        {
            name: "ANT_02",
            southbound: "MAM_12",
            northbound: "ANT_04",
            length: 5
        },
        {
            name: "ANT_04",
            southbound: "ANT_02",
            northbound: "ANT_06",
            signals: {
                northbound: "ANT04", //C
                southbound: "ANT02" //B
            },
            length: 7
        },
        {
            name: "ANT_06",
            southbound: "ANT_04",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ANT_A2",
                normal: "ANT_08",
                reverse: "ANT_CV"
            },
            length: 1
        },
        {
            name: "ANT_08",
            northbound: "ANT_10",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ANT_A4",
                normal: "ANT_06",
                reverse: "ANT_CV"
            },
            length: 1
        },
        {
            name: "ANT_10",
            southbound: "ANT_08",
            northbound: "ANT_12",
            length: 1
        },
        {
            name: "ANT_12",
            southbound: "ANT_10",
            northbound: "ANT_14",
            signals: {
                southbound: "ANT06" //D
            },
            length: 4
        },
        {
            name: "ANT_14",
            southbound: "ANT_12",
            northbound: "ANT_16",
            signals: {
                northbound: "ANT08" //E
            },
            length: 4
        },
        {
            name: "ANT_16",
            southbound: "ANT_14",
            northbound: "ANT_18",
            length: 4
        },
        {
            name: "ANT_18",
            southbound: "ANT_16",
            northbound: "ANT_20",
            length: 4
        },
        {
            name: "ANT_20",
            southbound: "ANT_18",
            northbound: "CRP_02",
            signals: {
                southbound: "ANT10" //F
            },
            length: 7
        },
        {
            name: "ANT_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "ANT_06",
            southboundLineNorthboundDirection: "ANT_08",
            northboundLineSouthboundDirection: "ANT_05",
            northboundLineNorthboundDirection: "ANT_07",
            length: 1
        },
        //CARAPITA
        //VIA 1
        {
            name: "CRP_01",
            southbound: "ANT_19",
            northbound: "CRP_03",
            length: 9
        },
        {
            name: "CRP_03",
            southbound: "CRP_01",
            northbound: "CRP_05",
            signals: {
                southbound: "CRP01" //S1
            },
            length: 4
        },
        {
            name: "CRP_05",
            southbound: "CRP_03",
            northbound: "CRP_07",
            length: 4
        },
        {
            name: "CRP_07",
            southbound: "CRP_05",
            northbound: "CRP_09",
            length: 8
        },
        {
            name: "CRP_09",
            southbound: "CRP_07",
            northbound: "YAG_01",
            length: 8
        },
        //VIA 2
        {
            name: "CRP_02",
            southbound: "ANT_20",
            northbound: "CRP_04",
            length: 9
        },
        {
            name: "CRP_04",
            southbound: "CRP_02",
            northbound: "CRP_06",
            length: 4
        },
        {
            name: "CRP_06",
            southbound: "CRP_04",
            northbound: "CRP_08",
            signals: {
                northbound: "CRP02" //S2
            },
            length: 4
        },
        {
            name: "CRP_08",
            southbound: "CRP_06",
            northbound: "CRP_10",
            length: 8
        },
        {
            name: "CRP_10",
            southbound: "CRP_08",
            northbound: "YAG_02",
            length: 8
        },
        //LA YAGUARA
        //VIA 1
        {
            name: "YAG_01",
            southbound: "CRP_09",
            northbound: "YAG_03",
            length: 7
        },
        {
            name: "YAG_03",
            southbound: "YAG_01",
            northbound: "YAG_05",
            signals: {
                southbound: "YAG01" //S1
            },
            length: 8
        },
        {
            name: "YAG_05",
            southbound: "YAG_03",
            northbound: "PAZ_01",
            length: 12
        },
        //VÍA 2
        {
            name: "YAG_02",
            southbound: "CRP_10",
            northbound: "YAG_04",
            length: 7
        },
        {
            name: "YAG_04",
            southbound: "YAG_02",
            northbound: "YAG_06",
            length: 4
        },
        {
            name: "YAG_06",
            southbound: "YAG_04",
            northbound: "YAG_08",
            signals: {
                northbound: "YAG02" //S2
            },
            length: 4
        },
        {
            name: "YAG_08",
            southbound: "YAG_06",
            northbound: "PAZ_02",
            length: 12
        },
        //LA PAZ
        //VIA 1
        {
            name: "PAZ_01",
            southbound: "YAG_05",
            northbound: "PAZ_03",
            signals:{
                northbound: "PAZ01" //M
            },
            length: 7
        },
        {
            name: "PAZ_03",
            southbound: "PAZ_01",
            northbound: "PAZ_05",
            length: 3
        },
        {
            name: "PAZ_05",
            southbound: "PAZ_03",
            northbound: "PAZ_07",
            length: 3
        },
        {
            name: "PAZ_07",
            southbound: "PAZ_05",
            northbound: "PAZ_09",
            signals: {
                southbound: "PAZ03", //L
                northbound: "PAZ05" //K
            },
            length: 8
        },
        {
            name: "PAZ_09",
            southbound: "PAZ_07",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PAZ_A1",
                normal: "PAZ_11",
                reverse: "PAZ_CV"
            },
            length: 2
        },
        {
            name: "PAZ_11",
            northbound: "PAZ_13",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PAZ_A3",
                normal: "PAZ_09",
                reverse: "PAZ_CV"
            },
            length: 1
        },
        {
            name: "PAZ_13",
            southbound: "PAZ_11",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PAZ_A5",
                normal: "PAZ_15",
                reverse: "PAZ_20"
            },
            length: 1
        },
        {
            name: "PAZ_15",
            southbound: "PAZ_13",
            northbound: "endOfTrack",
            signals: {
                southbound: "PAZ07", //J
                northbound: "PAZ09" //H
            },
            length: 8
        },
        {
            name: "PAZ_17",
            northbound: "PAZ_19",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PAZ_A6",
                normal: "PAZ_15",
                reverse: "PAZ_20"
            },
            length: 1
        },
        {
            name: "PAZ_19",
            southbound: "PAZ_17",
            northbound: "endOfTrack",
            length: 3
        },
        //VIA 2
        {
            name: "PAZ_02",
            southbound: "YAG_08",
            northbound: "PAZ_04",
            signals:{
                northbound: "PAZ02" //A
            },
            length: 7
        },
        {
            name: "PAZ_04",
            southbound: "PAZ_02",
            northbound: "PAZ_06",
            length: 3
        },
        {
            name: "PAZ_06",
            southbound: "PAZ_04",
            northbound: "PAZ_08",
            length: 3
        },
        {
            name: "PAZ_08",
            southbound: "PAZ_06",
            northbound: "PAZ_10",
            signals: {
                southbound: "PAZ04", //B
            },
            length: 4
        },
        {
            name: "PAZ_10",
            southbound: "PAZ_08",
            northbound: "PAZ_12",
            signals: {
                northbound: "PAZ06" //C
            },
            length: 4
        },
        {
            name: "PAZ_12",
            southbound: "PAZ_10",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PAZ_A2",
                normal: "PAZ_14",
                reverse: "PAZ_CV"
            },
            length: 2
        },
        {
            name: "PAZ_14",
            northbound: "PAZ_16",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PAZ_A4",
                normal: "PAZ_12",
                reverse: "PAZ_CV"
            },
            length: 2
        },
        {
            name: "PAZ_16",
            southbound: "PAZ_14",
            northbound: "endOfTrack",
            signals: {
                southbound: "PAZ08", //D
                northbound: "PAZ10" //E
            },
            length: 8
        },
        {
            name: "PAZ_18",
            southbound: "PAZ_16",
            northbound: "endOfTrack",
            length: 5
        },
        {
            name: "PAZ_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "PAZ_12",
            southboundLineNorthboundDirection: "PAZ_14",
            northboundLineSouthboundDirection: "PAZ_09",
            northboundLineNorthboundDirection: "PAZ_11",
            length: 1
        },
        {
            name: "PAZ_20",
            southbound: "PAZ_13",
            northbound: "PAZ_17",
            signals: {
                southbound: "PAZ11", //O
            },
            shuntingPanels: {
                northbound: "ZR5"
            },
            length: 8
        },
    ],
    points: [
        {
            name: "AJU_A1",
            trackCircuit: "AJU_03",
        },
        {
            name: "AJU_A3",
            trackCircuit: "AJU_05",
        },
        {
            name: "AJU_A5",
            trackCircuit: "AJU_07",
        },
        {
            name: "AJU_A7",
            trackCircuit: "AJU_09",
        },
        {
            name: "AJU_A9",
            trackCircuit: "AJU_11",
        },
        {
            name: "AJU_A2",
            trackCircuit: "AJU_04",
        },
        {
            name: "AJU_A4",
            trackCircuit: "AJU_06",
        },
        {
            name: "RUI_A1",
            trackCircuit: "RUI_03",
        },
        {
            name: "RUI_A3",
            trackCircuit: "RUI_05",
        },
        {
            name: "RUI_A2",
            trackCircuit: "RUI_04",
        },
        {
            name: "ZOO_A1",
            trackCircuit: "ZOO_03",
        },
        {
            name: "ZOO_A3",
            trackCircuit: "ZOO_07",
        },
        {
            name: "ZOO_A2",
            trackCircuit: "ZOO_04",
        },
        {
            name: "ZOO_A4",
            trackCircuit: "ZOO_08",
        },
        {
            name: "Y_A1",
            trackCircuit: "Y_05",
        },
        {
            name: "Y_A3",
            trackCircuit: "Y_07",
        },
        {
            name: "Y_A2",
            trackCircuit: "Y_06",
        },
        {
            name: "Y_A4",
            trackCircuit: "Y_08",
        },
        {
            name: "Y_A5",
            trackCircuit: "Y_15",
        },
        {
            name: "MAM_A1",
            trackCircuit: "MAM_05",
        },
        {
            name: "MAM_A3",
            trackCircuit: "MAM_14",
        },
        {
            name: "MAM_A2",
            trackCircuit: "MAM_06",
        },
        {
            name: "ANT_A1",
            trackCircuit: "ANT_05",
        },
        {
            name: "ANT_A3",
            trackCircuit: "ANT_07",
        },
        {
            name: "ANT_A2",
            trackCircuit: "ANT_06",
        },
        {
            name: "ANT_A4",
            trackCircuit: "ANT_08",
        },
        {
            name: "PAZ_A1",
            trackCircuit: "PAZ_09",
        },
        {
            name: "PAZ_A3",
            trackCircuit: "PAZ_11",
        },
        {
            name: "PAZ_A5",
            trackCircuit: "PAZ_13",
        },
        {
            name: "PAZ_A6",
            trackCircuit: "PAZ_17",
        },
        {
            name: "PAZ_A2",
            trackCircuit: "PAZ_12",
        },
        {
            name: "PAZ_A4",
            trackCircuit: "PAZ_14",
        }
    ],
    signals: [
        {
            name: "AJU01",
            direction: "northbound"
        },
        {
            name: "AJU03",
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
            name: "SP1",
            direction: "southbound"
        },
        {
            name: "SP2",
            direction: "southbound"
        },
        {
            name: "RUI01",
            direction: "northbound"
        },
        {
            name: "RUI03",
            direction: "southbound"
        },
        {
            name: "RUI05",
            direction: "northbound"
        },
        {
            name: "RUI07",
            direction: "southbound"
        },
        {
            name: "RUI02",
            direction: "northbound"
        },
        {
            name: "RUI04",
            direction: "southbound"
        },
        {
            name: "RUI06",
            direction: "northbound"
        },
        {
            name: "RUI08",
            direction: "southbound"
        },
        {
            name: "ZOO01",
            direction: "northbound"
        },
        {
            name: "ZOO03",
            direction: "southbound"
        },
        {
            name: "ZOO05",
            direction: "northbound"
        },
        {
            name: "ZOO07",
            direction: "southbound"
        },
        {
            name: "ZOO02",
            direction: "northbound"
        },
        {
            name: "ZOO04",
            direction: "southbound"
        },
        {
            name: "ZOO06",
            direction: "northbound"
        },
        {
            name: "ZOO08",
            direction: "southbound"
        },
        {
            name: "SP3",
            direction: "southbound"
        },
        {
            name: "SP4",
            direction: "southbound"
        },
        {
            name: "CRC01",
            direction: "southbound"
        },
        {
            name: "CRC02",
            direction: "northbound"
        },
        {
            name: "Y01",
            direction: "northbound"
        },
        {
            name: "Y03",
            direction: "northbound"
        },
        {
            name: "Y05",
            direction: "southbound"
        },
        {
            name: "Y02",
            direction: "northbound"
        },
        {
            name: "Y04",
            direction: "northbound"
        },
        {
            name: "Y06",
            direction: "southbound"
        },
        {
            name: "Y07",
            direction: "southbound"
        },
        {
            name: "SP5",
            direction: "northbound"
        },
        {
            name: "MAM01",
            direction: "northbound"
        },
        {
            name: "MAM03",
            direction: "southbound"
        },
        {
            name: "MAM05",
            direction: "northbound"
        },
        {
            name: "MAM02",
            direction: "northbound"
        },
        {
            name: "MAM04",
            direction: "southbound"
        },
        {
            name: "MAM06",
            direction: "northbound"
        },
        {
            name: "MAM07",
            direction: "northbound"
        },
        {
            name: "SP6",
            direction: "southbound"
        },
        {
            name: "ANT01",
            direction: "southbound"
        },
        {
            name: "ANT03",
            direction: "northbound"
        },
        {
            name: "ANT05",
            direction: "southbound"
        },
        {
            name: "ANT07",
            direction: "northbound"
        },
        {
            name: "ANT09",
            direction: "southbound"
        },
        {
            name: "ANT02",
            direction: "southbound"
        },
        {
            name: "ANT04",
            direction: "northbound"
        },
        {
            name: "ANT06",
            direction: "southbound"
        },
        {
            name: "ANT08",
            direction: "northbound"
        },
        {
            name: "ANT10",
            direction: "southbound"
        },
        {
            name: "CRP01",
            direction: "southbound"
        },
        {
            name: "CRP02",
            direction: "northbound"
        },
        {
            name: "YAG01",
            direction: "southbound"
        },
        {
            name: "YAG02",
            direction: "northbound"
        },
        {
            name: "PAZ01",
            direction: "northbound"
        },
        {
            name: "PAZ03",
            direction: "southbound"
        },
        {
            name: "PAZ05",
            direction: "northbound"
        },
        {
            name: "PAZ07",
            direction: "southbound"
        },
        {
            name: "PAZ09",
            direction: "northbound"
        },
        {
            name: "PAZ02",
            direction: "northbound"
        },
        {
            name: "PAZ04",
            direction: "southbound"
        },
        {
            name: "PAZ06",
            direction: "northbound"
        },
        {
            name: "PAZ08",
            direction: "southbound"
        },
        {
            name: "PAZ10",
            direction: "northbound"
        },
        {
            name: "PAZ11",
            direction: "northbound"
        },
    ],
    shuntingPanels: [
        {
            name: "ZR1",
            direction: "northbound"
        },
        {
            name: "ZR2",
            direction: "northbound"
        },
        {
            name: "ZR3",
            direction: "southbound"
        },
        {
            name: "ZR4",
            direction: "northbound"
        },
        {
            name: "ZR5",
            direction: "northbound"
        },
    ],
    platforms: [
        {
            name: "ADJUNTAS_V1",
            direction: "northbound",
            northbound: {
                trackCircuit: "AJU_01",
                position: 6
            },
            southbound: {
                trackCircuit: "AJU_01",
                position: 3
            },
            terminus: true
        },
        {
            name: "ADJUNTAS_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "AJU_02",
                position: 6
            },
            southbound: {
                trackCircuit: "AJU_02",
                position: 3
            },
            terminus: true
        },
        {
            name: "RUIZPINEDA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "RUI_11",
                position: 6
            },
            southbound: {
                trackCircuit: "RUI_11",
                position: 3
            }
        },
        {
            name: "RUIZPINEDA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "RUI_10",
                position: 2
            },
            southbound: {
                trackCircuit: "RUI_08",
                position: 3
            }
        },
        {
            name: "ZOOLOGICO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "ZOO_05",
                position: 6
            },
            southbound: {
                trackCircuit: "ZOO_05",
                position: 3
            },
        },
        {
            name: "ZOOLOGICO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "ZOO_06",
                position: 6
            },
            southbound: {
                trackCircuit: "ZOO_06",
                position: 3
            },
            terminus: true
        },
        {
            name: "CARICUAO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "CRC_03",
                position: 6
            },
            southbound: {
                trackCircuit: "CRC_03",
                position: 3
            },
        },
        {
            name: "CARICUAO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "CRC_04",
                position: 6
            },
            southbound: {
                trackCircuit: "CRC_04",
                position: 3
            }
        },
        {
            name: "MAMERA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "MAM_09",
                position: 3
            },
            southbound: {
                trackCircuit: "MAM_07",
                position: 2
            },
        },
        {
            name: "MAMERA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "MAM_10",
                position: 2
            },
            southbound: {
                trackCircuit: "MAM_08",
                position: 3
            },
        },
        {
            name: "ANTIMANO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "ANT_13",
                position: 3
            },
            southbound: {
                trackCircuit: "ANT_11",
                position: 2
            },
        },
        {
            name: "ANTIMANO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "ANT_14",
                position: 2
            },
            southbound: {
                trackCircuit: "ANT_12",
                position: 3
            },
        },
        {
            name: "CARAPITA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "CRP_05",
                position: 6
            },
            southbound: {
                trackCircuit: "CRP_03",
                position: 3
            },
        },
        {
            name: "CARAPITA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "CRP_06",
                position: 2
            },
            southbound: {
                trackCircuit: "CRP_04",
                position: 3
            },
        },
        {
            name: "YAGUARA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "YAG_03",
                position: 6
            },
            southbound: {
                trackCircuit: "YAG_03",
                position: 3
            },
        },
        {
            name: "YAGUARA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "YAG_06",
                position: 2
            },
            southbound: {
                trackCircuit: "YAG_04",
                position: 3
            },
        },
        {
            name: "PAZ_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "PAZ_07",
                position: 6
            },
            southbound: {
                trackCircuit: "PAZ_07",
                position: 3
            },
        },
        {
            name: "PAZ_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "PAZ_10",
                position: 2
            },
            southbound: {
                trackCircuit: "PAZ_08",
                position: 3
            },
        }
    ],
}