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
            signals: {
                southbound: "RUI03",//J
                northbound: "RUI05"//H
            },
            length: 7
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
            length: 14
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
                reverse: "RUI_07"
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
            signals: {
                southbound: "RUI04",//D
            },
            length: 3
        },
        {
            name: "RUI_10",
            southbound: "RUI_08",
            northbound: "RUI_12",
            signals: {
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
            length: 12
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
            length: 7
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
            length: 7
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
            signals: {
                southbound: "ZOO07",    //G
            },
            shuntingPanels: {
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
            length: 7
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
            length: 7
        },
        {
            name: "ZOO_06",
            southbound: "ZOO_04",
            northbound: "ZOO_08",
            signals: {
                northbound: "ZOO06", //E
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
            name: "CRC_01",
            southbound: "ZOO_09",
            northbound: "CRC_03",
            length: 14
        },
        {
            name: "CRC_03",
            southbound: "CRC_01",
            northbound: "CRC_05",
            signals: {
                southbound: "CRC01", //S1
            },
            length: 7
        },
        {
            name: "CRC_05",
            southbound: "CRC_03",
            northbound: "CRC_07",
            length: 4
        },
        {
            name: "CRC_07",
            southbound: "CRC_05",
            northbound: "CRC_09",
            length: 15
        },
        {
            name: "CRC_09",
            southbound: "CRC_07",
            northbound: "Y_11",
            length: 12
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
            signals: {
                northbound: "CRC02", //S2
            },
            length: 7
        },
        {
            name: "CRC_06",
            southbound: "CRC_04",
            northbound: "CRC_08",
            length: 4
        },
        {
            name: "CRC_08",
            southbound: "CRC_06",
            northbound: "CRC_10",
            length: 3
        },
        {
            name: "CRC_10",
            southbound: "CRC_08",
            northbound: "Y_12",
            length: 12
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
            length: 10
        },
        {
            name: "Y_03",
            southbound: "Y_01",
            northbound: "Y_05",
            length: 3
        },
        //VIA 1 - ZOOLOGICO
        {
            name: "Y_11",
            southbound: "CRC_09",
            northbound: "Y_13",
            signals: {
                northbound: "Y03" //Q
            },
            length: 12
        },
        {
            name: "Y_13",
            southbound: "Y_11",
            northbound: "Y_05",
            length: 7
        },
        //VIA 1 - Y
        {
            name: "Y_05",
            southbound: "dependsOnPoint",
            northbound: "Y_07",
            dependsOnPoint: {
                point: "Y_A1",
                normal: "Y_13",
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
                reverse: "Y_15"
            },
            length: 7
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
            length: 10
        },
        {
            name: "Y_04",
            southbound: "Y_02",
            northbound: "Y_06",
            length: 3
        },
        //VIA 2 - ZOOLOGICO
        {
            name: "Y_12",
            southbound: "CRC_10",
            northbound: "Y_14",
            length: 12
        },
        {
            name: "Y_14",
            southbound: "Y_12",
            northbound: "Y_16",
            signals: {
                northbound: "Y04" //P
            },
            length: 18
        },
        {
            name: "Y_16",
            southbound: "Y_14",
            northbound: "Y_06",
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
                reverse: "Y_15"
            },
            length: 8
        },
        {
            name: "Y_10",
            southbound: "Y_08",
            northbound: "MAM_02",
            signals: {
                southbound: "Y06" //D
            },
            length: 12
        },
        //VÍA R
        {
            name: "Y_15",
            southbound: "dependsOnPoint",
            northbound: "Y_17",
            dependsOnPoint: {
                point: "Y_A5",
                normal: "Y_07",
                reverse: "Y_08"
            },
            length: 1
        },
        {
            name: "Y_17",
            southbound: "Y_15",
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
            length: 12
        },
        {
            name: "MAM_03",
            southbound: "MAM_01",
            northbound: "MAM_05",
            signals: {
                northbound: "MAM01" //H
            },
            length: 12
        },
        {
            name: "MAM_05",
            southbound: "dependsOnPoint",
            northbound: "MAM_07",
            dependsOnPoint: {
                point: "MAM_A1",
                normal: "MAM_03",
                reverse: "MAM_15"
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
            length: 12
        },
        {
            name: "MAM_04",
            southbound: "MAM_02",
            northbound: "MAM_06",
            signals: {
                northbound: "MAM02" //E
            },
            length: 8
        },
        {
            name: "MAM_06",
            southbound: "MAM_04",
            northbound: "MAM_08",
            length: 4
        },
        {
            name: "MAM_08",
            southbound: "dependsOnPoint",
            northbound: "MAM_10",
            dependsOnPoint: {
                point: "MAM_A2",
                normal: "MAM_06",
                reverse: "MAM_15"
            },
            length: 2
        },
        {
            name: "MAM_10",
            southbound: "MAM_08",
            northbound: "MAM_12",
            signals: {
                southbound: "MAM04" //F
            },
            length: 3
        },
        {
            name: "MAM_12",
            southbound: "MAM_10",
            northbound: "MAM_14",
            signals: {
                northbound: "MAM06" //A
            },
            length: 4
        },
        {
            name: "MAM_14",
            southbound: "MAM_12",
            northbound: "ANT_02",
            length: 8
        },
        //VIA Z
        {
            name: "MAM_13",
            southbound: "endOfTrack",
            northbound: "MAM_15",
            signals: {
                southbound: "SP6",
                northbound: "MAM07" //Z
            },
            length: 7
        },
        {
            name: "MAM_15",
            southbound: "MAM_13",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "MAM_A3",
                normal: "MAM_05",
                reverse: "MAM_08"
            },
            length: 1
        },
        //ANTIMANO
        //VIA 1
        {
            name: "ANT_01",
            southbound: "MAM_11",
            northbound: "ANT_03",
            length: 12
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
            length: 2
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
            length: 3
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
            southbound: "MAM_14",
            northbound: "ANT_04",
            length: 12
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
            length: 2
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
            length: 3
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
            length: 3
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
            length: 3
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
            length: 10
        },
        {
            name: "YAG_03",
            southbound: "YAG_01",
            northbound: "YAG_05",
            signals: {
                southbound: "YAG01" //S1
            },
            length: 7
        },
        {
            name: "YAG_05",
            southbound: "YAG_03",
            northbound: "PAZ_01",
            length: 16
        },
        //VÍA 2
        {
            name: "YAG_02",
            southbound: "CRP_10",
            northbound: "YAG_04",
            length: 10
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
            length: 3
        },
        {
            name: "YAG_08",
            southbound: "YAG_06",
            northbound: "PAZ_02",
            length: 16
        },
        //LA PAZ
        //VIA 1
        {
            name: "PAZ_01",
            southbound: "YAG_05",
            northbound: "PAZ_03",
            signals: {
                northbound: "PAZ01" //M
            },
            length: 8
        },
        {
            name: "PAZ_03",
            southbound: "PAZ_01",
            northbound: "PAZ_05",
            length: 4
        },
        {
            name: "PAZ_05",
            southbound: "PAZ_03",
            northbound: "PAZ_07",
            length: 4
        },
        {
            name: "PAZ_07",
            southbound: "PAZ_05",
            northbound: "PAZ_09",
            signals: {
                southbound: "PAZ03", //L
                northbound: "PAZ05" //K
            },
            length: 7
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
            length: 3
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
            length: 2
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
            northbound: "PAZ_17",
            signals: {
                southbound: "PAZ07", //J
                northbound: "PAZ09" //H
            },
            length: 7
        },
        {
            name: "PAZ_17",
            northbound: "PAZ_19",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PAZ_A6",
                normal: "PAZ_15",
                reverse: "PAZ_22"
            },
            length: 1
        },
        {
            name: "PAZ_19",
            southbound: "PAZ_17",
            northbound: "ART_01",
            length: 7
        },
        //VIA 2
        {
            name: "PAZ_02",
            southbound: "YAG_08",
            northbound: "PAZ_04",
            signals: {
                northbound: "PAZ02" //A
            },
            length: 8
        },
        {
            name: "PAZ_04",
            southbound: "PAZ_02",
            northbound: "PAZ_06",
            length: 4
        },
        {
            name: "PAZ_06",
            southbound: "PAZ_04",
            northbound: "PAZ_08",
            length: 4
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
            length: 3
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
            length: 3
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
            northbound: "PAZ_18",
            signals: {
                southbound: "PAZ08", //D
                northbound: "PAZ10" //E
            },
            length: 7
        },
        {
            name: "PAZ_18",
            southbound: "PAZ_16",
            northbound: "ART_02",
            length: 10
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
            northbound: "PAZ_21",
            length: 1
        },
        {
            name: "PAZ_21",
            southbound: "PAZ_20",
            northbound: "PAZ_22",
            signals: {
                southbound: "PAZ11", //Q
            },
            shuntingPanels: {
                northbound: "ZR5"
            },
            length: 7
        },
        {
            name: "PAZ_22",
            southbound: "PAZ_21",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PAZ_A7",
                normal: "endOfTrack",
                reverse: "PAZ_17"
            },
            length: 2
        },
        //ARTIGAS
        //VIA 1
        {
            name: "ART_01",
            southbound: "PAZ_19",
            northbound: "ART_03",
            length: 6
        },
        {
            name: "ART_03",
            southbound: "ART_01",
            northbound: "ART_05",
            length: 6
        },
        {
            name: "ART_05",
            southbound: "ART_03",
            northbound: "ART_07",
            signals: {
                southbound: "ART01", //G
            },
            length: 7
        },
        {
            name: "ART_07",
            southbound: "ART_05",
            northbound: "ART_09",
            length: 7
        },
        {
            name: "ART_09",
            southbound: "ART_07",
            northbound: "MAT_01",
            length: 7
        },
        //VIA 2
        {
            name: "ART_02",
            southbound: "PAZ_18",
            northbound: "ART_04",
            length: 8
        },
        {
            name: "ART_04",
            southbound: "ART_02",
            northbound: "ART_06",
            signals: {
                southbound: "ART02", //F
            },
            length: 4
        },
        {
            name: "ART_06",
            southbound: "ART_04",
            northbound: "ART_08",
            signals: {
                northbound: "ART04", //S2
            },
            length: 3
        },
        {
            name: "ART_08",
            southbound: "ART_06",
            northbound: "ART_10",
            length: 7
        },
        {
            name: "ART_10",
            southbound: "ART_08",
            northbound: "MAT_02",
            length: 7
        },
        //MATERNIDAD
        //VIA 1
        {
            name: "MAT_01",
            southbound: "ART_09",
            northbound: "MAT_03",
            length: 8
        },
        {
            name: "MAT_03",
            southbound: "MAT_01",
            northbound: "MAT_05",
            signals: {
                southbound: "MAT01", //S1
            },
            length: 3
        },
        {
            name: "MAT_05",
            southbound: "MAT_03",
            northbound: "MAT_07",
            signals: {
                northbound: "MAT03", //M
            },
            length: 4
        },
        {
            name: "MAT_07",
            southbound: "MAT_05",
            northbound: "MAT_09",
            length: 8
        },
        {
            name: "MAT_09",
            southbound: "MAT_07",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "MAT_A1",
                normal: "CPU_01",
                reverse: "CPU_23"
            },
            length: 4
        },
        //VIA 2
        {
            name: "MAT_02",
            southbound: "ART_10",
            northbound: "MAT_04",
            length: 8
        },
        {
            name: "MAT_04",
            southbound: "MAT_02",
            northbound: "MAT_06",
            length: 4
        },
        {
            name: "MAT_06",
            southbound: "MAT_04",
            northbound: "MAT_08",
            signals: {
                northbound: "MAT04", //A
            },
            length: 3
        },
        {
            name: "MAT_08",
            southbound: "MAT_06",
            northbound: "MAT_10",
            length: 8
        },
        {
            name: "MAT_10",
            southbound: "MAT_08",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "MAT_A2",
                normal: "CPU_02",
                reverse: "CPU_18"
            },
            length: 4
        },
        //CAPUCHINOS
        //VIA 1
        {
            name: "CPU_01",
            southbound: "MAT_09",
            northbound: "CPU_03",
            length: 4
        },
        {
            name: "CPU_03",
            southbound: "CPU_01",
            northbound: "CPU_05",
            signals: {
                southbound: "CPU01", //L
                northbound: "CPU03" //K
            },
            length: 7
        },
        {
            name: "CPU_05",
            southbound: "CPU_03",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "CPU_A1",
                normal: "CPU_07",
                reverse: "CPU_CV"
            },
            length: 2
        },
        {
            name: "CPU_07",
            northbound: "CPU_09",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "CPU_A3",
                normal: "CPU_05",
                reverse: "CPU_CV"
            },
            length: 2
        },
        {
            name: "CPU_09",
            southbound: "CPU_07",
            northbound: "CPU_11",
            signals: {
                southbound: "CPU05", //J
            },
            length: 2
        },
        {
            name: "CPU_11",
            southbound: "CPU_09",
            northbound: "CPU_13",
            length: 1
        },
        {
            name: "CPU_13",
            southbound: "CPU_11",
            northbound: "CPU_15",
            length: 2
        },
        {
            name: "CPU_15",
            southbound: "CPU_13",
            northbound: "CPU_17",
            signals: {
                northbound: "CPU07", //H
            },
            length: 2
        },
        {
            name: "CPU_17",
            southbound: "CPU_15",
            northbound: "CPU_19",
            length: 7
        },
        {
            name: "CPU_19",
            southbound: "CPU_17",
            northbound: "CPU_21",
            length: 7
        },
        {
            name: "CPU_21",
            southbound: "CPU_19",
            northbound: "SIL_01",
            signals: {
                southbound: "SIL01", //G
            },
            length: 7
        },
        //VIA 2
        {
            name: "CPU_02",
            southbound: "MAT_10",
            northbound: "CPU_04",
            length: 4
        },
        {
            name: "CPU_04",
            southbound: "CPU_02",
            northbound: "CPU_06",
            signals: {
                southbound: "CPU02", //B
                northbound: "CPU04" //C
            },
            length: 7
        },
        {
            name: "CPU_06",
            southbound: "CPU_04",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "CPU_A2",
                normal: "CPU_08",
                reverse: "CPU_CV"
            },
            length: 2
        },
        {
            name: "CPU_08",
            northbound: "CPU_10",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "CPU_A4",
                normal: "CPU_06",
                reverse: "CPU_CV"
            },
            length: 2
        },
        {
            name: "CPU_10",
            southbound: "CPU_08",
            northbound: "CPU_12",
            signals: {
                southbound: "CPU06", //D
            },
            length: 4
        },
        {
            name: "CPU_12",
            southbound: "CPU_10",
            northbound: "CPU_14",
            signals: {
                northbound: "CPU08", //E
            },
            length: 3
        },
        {
            name: "CPU_14",
            southbound: "CPU_12",
            northbound: "CPU_16",
            length: 7
        },
        {
            name: "CPU_16",
            southbound: "CPU_14",
            northbound: "SIL_02",
            length: 7
        },
        {
            name: "CPU_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "CPU_06",
            southboundLineNorthboundDirection: "CPU_08",
            northboundLineSouthboundDirection: "CPU_05",
            northboundLineNorthboundDirection: "CPU_07",
            length: 1
        },
        //V1 L4
        {
            name: "CPU_23",
            southbound: "MAT_09",
            northbound: "CPU_25",
            length: 7
        },
        {
            name: "CPU_25",
            southbound: "CPU_23",
            northbound: "CPU_27",
            length: 7
        },
        {
            name: "CPU_27",
            southbound: "CPU_25",
            northbound: "CPU_29",
            signals: {
                southbound: "CPU09", //P
            },
            length: 4
        },
        {
            name: "CPU_29",
            southbound: "CPU_27",
            northbound: "CPU_31",
            length: 3
        },
        {
            name: "CPU_31",
            southbound: "CPU_29",
            northbound: "TEA_01",
            length: 18
        },
        //V2 L4
        {
            name: "CPU_18",
            southbound: "MAT_10",
            northbound: "CPU_20",
            length: 7
        },
        {
            name: "CPU_20",
            southbound: "CPU_18",
            northbound: "CPU_22",
            length: 7
        },
        {
            name: "CPU_22",
            southbound: "CPU_20",
            northbound: "CPU_24",
            signals: {
                southbound: "CPU10", //N
            },
            length: 4
        },
        {
            name: "CPU_24",
            southbound: "CPU_22",
            northbound: "CPU_26",
            signals: {
                northbound: "CPU12", //S2
            },
            length: 3
        },
        {
            name: "CPU_26",
            southbound: "CPU_24",
            northbound: "CPU_28",
            length: 6
        },
        {
            name: "CPU_28",
            southbound: "CPU_26",
            northbound: "CPU_30",
            length: 6
        },
        {
            name: "CPU_30",
            southbound: "CPU_28",
            northbound: "TEA_02",
            length: 6
        },
        //EL SILENCIO
        //VIA 1
        {
            name: "SIL_01",
            southbound: "CPU_21",
            northbound: "SIL_03",
            signals: {
                northbound: "SIL03" //K
            },
            length: 7
        },
        {
            name: "SIL_03",
            southbound: "SIL_01",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "SIL_A1",
                normal: "SIL_05",
                reverse: "SIL_CV"
            },
            length: 2
        },
        {
            name: "SIL_05",
            northbound: "SIL_07",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "SIL_A3",
                normal: "SIL_03",
                reverse: "SIL_CV"
            },
            length: 2
        },
        {
            name: "SIL_07",
            southbound: "SIL_05",
            northbound: "SIL_09",
            signals: {
                southbound: "SIL05", //J
            },
            length: 4
        },
        {
            name: "SIL_09",
            southbound: "SIL_07",
            northbound: "SIL_11",
            signals: {
                northbound: "SIL07", //H
            },
            length: 3
        },
        {
            name: "SIL_11",
            southbound: "SIL_09",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "SIL_A5",
                normal: "SIL_13",
                reverse: "SIL_CV2"
            },
            length: 2
        },
        {
            name: "SIL_13",
            northbound: "SIL_15",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "SIL_A7",
                normal: "SIL_11",
                reverse: "SIL_CV2"
            },
            length: 2
        },
        {
            name: "SIL_15",
            southbound: "SIL_13",
            northbound: "endOfTrack",
            signals: {
                southbound: "SIL09", //G
                northbound: "SIL11" //SP07
            },
            length: 7
        },
        //VIA 2
        {
            name: "SIL_02",
            southbound: "CPU_14",
            northbound: "SIL_04",
            signals: {
                southbound: "SIL02", //F
                northbound: "SIL04" //C
            },
            length: 14
        },
        {
            name: "SIL_04",
            southbound: "SIL_02",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "SIL_A2",
                normal: "SIL_06",
                reverse: "SIL_CV"
            },
            length: 2
        },
        {
            name: "SIL_06",
            northbound: "SIL_08",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "SIL_A4",
                normal: "SIL_04",
                reverse: "SIL_CV"
            },
            length: 2
        },
        {
            name: "SIL_08",
            southbound: "SIL_06",
            northbound: "SIL_10",
            signals: {
                southbound: "SIL06", //D
            },
            length: 4
        },
        {
            name: "SIL_10",
            southbound: "SIL_08",
            northbound: "SIL_12",
            signals: {
                northbound: "SIL08", //E
            },
            length: 3
        },
        {
            name: "SIL_12",
            southbound: "SIL_10",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "SIL_A6",
                normal: "SIL_14",
                reverse: "SIL_CV2"
            },
            length: 2
        },
        {
            name: "SIL_14",
            northbound: "SIL_16",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "SIL_A8",
                normal: "SIL_12",
                reverse: "SIL_CV2"
            },
            length: 2
        },
        {
            name: "SIL_16",
            southbound: "SIL_14",
            northbound: "endOfTrack",
            signals: {
                southbound: "SIL10", //F
                northbound: "SIL12" //SP8
            },
            length: 7
        },
        {
            name: "SIL_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "SIL_04",
            southboundLineNorthboundDirection: "SIL_06",
            northboundLineSouthboundDirection: "SIL_03",
            northboundLineNorthboundDirection: "SIL_05",
            length: 1
        },
        {
            name: "SIL_CV2",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "SIL_12",
            southboundLineNorthboundDirection: "SIL_14",
            northboundLineSouthboundDirection: "SIL_11",
            northboundLineNorthboundDirection: "SIL_13",
            length: 1
        },
        //TEATROS
        //VIA 1
        {
            name: "TEA_01",
            southbound: "CPU_31",
            northbound: "TEA_03",
            length: 7
        },
        {
            name: "TEA_03",
            southbound: "TEA_01",
            northbound: "TEA_05",
            signals: {
                southbound: "TEA01", //S1
            },
            length: 7
        },
        {
            name: "TEA_05",
            southbound: "TEA_03",
            northbound: "CIR_01",
            signals: {
                northbound: "TEA03", //K
            },
            length: 12
        },
        //VIA 2
        {
            name: "TEA_02",
            southbound: "CPU_30",
            northbound: "TEA_04",
            length: 7
        },
        {
            name: "TEA_04",
            southbound: "TEA_02",
            northbound: "TEA_06",
            signals: {
                northbound: "TEA02", //S2
            },
            length: 7
        },
        {
            name: "TEA_06",
            southbound: "TEA_04",
            northbound: "CIR_02",
            signals: {
                northbound: "TEA04", //C
            },
            length: 12
        },
        //NUEVO CIRCO
        //VIA 1
        {
            name: "CIR_01",
            southbound: "TEA_05",
            northbound: "CIR_03",
            length: 7
        },
        {
            name: "CIR_03",
            southbound: "CIR_01",
            northbound: "CIR_05",
            length: 7
        },
        {
            name: "CIR_05",
            southbound: "CIR_03",
            northbound: "CIR_07",
            signals: {
                southbound: "CIR01", //J
                northbound: "CIR03", //H
            },
            length: 7
        },
        {
            name: "CIR_07",
            southbound: "CIR_05",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "CIR_A1",
                normal: "CIR_09",
                reverse: "CIR_CV"
            },
            length: 3
        },
        {
            name: "CIR_09",
            northbound: "CIR_11",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "CIR_A3",
                normal: "CIR_07",
                reverse: "CIR_CV"
            },
            length: 4
        },
        {
            name: "CIR_11",
            southbound: "CIR_09",
            northbound: "PQC_01",
            signals: {
                southbound: "CIR05", //G
                northbound: "CIR07", //M
            },
            length: 7
        },
        //VIA 2
        {
            name: "CIR_02",
            southbound: "TEA_06",
            northbound: "CIR_04",
            length: 7
        },
        {
            name: "CIR_04",
            southbound: "CIR_02",
            northbound: "CIR_06",
            length: 7
        },
        {
            name: "CIR_06",
            southbound: "CIR_04",
            northbound: "CIR_08",
            signals: {
                southbound: "CIR02", //D
                northbound: "CIR04", //E
            },
            length: 7
        },
        {
            name: "CIR_08",
            southbound: "CIR_06",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "CIR_A2",
                normal: "CIR_10",
                reverse: "CIR_CV"
            },
            length: 3
        },
        {
            name: "CIR_10",
            northbound: "CIR_12",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "CIR_A4",
                normal: "CIR_08",
                reverse: "CIR_CV"
            },
            length: 4
        },
        {
            name: "CIR_12",
            southbound: "CIR_10",
            northbound: "PQC_02",
            signals: {
                southbound: "CIR06", //F
                northbound: "CIR08", //A
            },
            length: 7
        },
        {
            name: "CIR_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "CIR_08",
            southboundLineNorthboundDirection: "CIR_10",
            northboundLineSouthboundDirection: "CIR_07",
            northboundLineNorthboundDirection: "CIR_09",
            length: 1
        },
        //PARQUE CENTRAL
        //VIA 1
         {
            name: "PQC_01",
            southbound: "CIR_11",
            northbound: "PQC_03",
            length: 7
        },
        {
            name: "PQC_03",
            southbound: "PQC_01",
            northbound: "PQC_05",
            length: 7
        },
        {
            name: "PQC_05",
            southbound: "PQC_03",
            northbound: "PQC_07",
            signals: {
                southbound: "PQC01", //L
                northbound: "PQC03", //P
            },
            length: 7
        },
        {
            name: "PQC_07",
            southbound: "PQC_05",
            northbound: "PQC_09",
            length: 14
        },
        {
            name: "PQC_09",
            southbound: "PQC_07",
            northbound: "PQC_11",
            signals: {
                southbound: "PQC05", //I1
            },
            length: 12
        },
        {
            name: "PQC_11",
            southbound: "PQC_09",
            northbound: "PQC_13",
            signals: {
                southbound: "PQC07", //N
                northbound: "PQC09", //M
            },
            length: 7
        },
        {
            name: "PQC_13",
            northbound: "PQC_15",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PQC_A1",
                normal: "PQC_11",
                reverse: "PQC_16"
            },
            length: 3
        },
        {
            name: "PQC_15",
            southbound: "PQC_13",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PQC_A3",
                normal: "ZOR_01",
                reverse: "PQC_17"
            },
            length: 4
        },
        //VIA 2
         //VIA 1
         {
            name: "PQC_02",
            southbound: "CIR_12",
            northbound: "PQC_04",
            length: 7
        },
        {
            name: "PQC_04",
            southbound: "PQC_02",
            northbound: "PQC_06",
            length: 7
        },
        {
            name: "PQC_06",
            southbound: "PQC_04",
            northbound: "PQC_08",
            signals: {
                southbound: "PQC02", //B
                northbound: "PQC04", //S2
            },
            length: 7
        },
        {
            name: "PQC_08",
            southbound: "PQC_06",
            northbound: "PQC_10",
            length: 7
        },
        {
            name: "PQC_10",
            southbound: "PQC_08",
            northbound: "PQC_12",
            signals: {
                southbound: "PQC06", //I2
            },
            length: 7
        },
        {
            name: "PQC_12",
            southbound: "PQC_10",
            northbound: "PQC_14",
            signals: {
                northbound: "PQC08", //A
            },
            length: 12
        },
        {
            name: "PQC_14",
            southbound: "PQC_12",
            northbound: "PQC_16",
            length: 7
        },
        {
            name: "PQC_16",
            southbound: "PQC_14",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "PQC_A2",
                normal: "ZOR_02",
                reverse: "PQC_15"
            },
            length: 4
        },
        //ZT
        {
            name: "PQC_17",
            southbound: "PQC_16",
            northbound: "PQC_18",
            length: 1
        },
        {
            name: "PQC_18",
            southbound: "PQC_17",
            northbound: "endOfTrack",
            signals: {
                southbound: "PQC10", //Q
                northbound: "PQC11", //SP11
            },
            length: 7
        },
        //ZONA RENTAL
        //VIA 1
        {
            name: "ZOR_01",
            southbound: "PQC_15",
            northbound: "ZOR_03",
            length: 9
        },
        {
            name: "ZOR_03",
            southbound: "ZOR_01",
            northbound: "ZOR_05",
            signals: {
                southbound: "ZOR01", //L
                northbound: "ZOR03", //K
            },
            length: 7
        },
        {
            name: "ZOR_05",
            southbound: "ZOR_03",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ZOR_A1",
                normal: "ZOR_07",
                reverse: "ZOR_CV"
            },
            length: 2
        },
        {
            name: "ZOR_07",
            northbound: "ZOR_09",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ZOR_A3",
                normal: "ZOR_05",
                reverse: "ZOR_CV"
            },
            length: 2
        },
        {
            name: "ZOR_09",
            southbound: "ZOR_07",
            northbound: "ZOR_11",
            signals: {
                southbound: "ZOR05", //J
                northbound: "ZOR07", //SP09
            },
            length: 7
        },
        {
            name: "ZOR_11",
            southbound: "ZOR_09",
            northbound: "endOfTrack",
            length: 4
        },
        //VIA 2
        {
            name: "ZOR_02",
            southbound: "PQC_16",
            northbound: "ZOR_04",
            length: 7
        },
        {
            name: "ZOR_04",
            southbound: "ZOR_02",
            northbound: "ZOR_06",
            signals: {
                southbound: "ZOR02", //B
                northbound: "ZOR04", //C
            },
            length: 7
        },
        {
            name: "ZOR_06",
            southbound: "ZOR_04",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ZOR_A2",
                normal: "ZOR_08",
                reverse: "ZOR_CV"
            },
            length: 4
        },
        {
            name: "ZOR_08",
            northbound: "ZOR_10",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "ZOR_A4",
                normal: "ZOR_06",
                reverse: "ZOR_CV"
            },
            length: 2
        },
        {
            name: "ZOR_10",
            southbound: "ZOR_08",
            northbound: "ZOR_12",
            signals: {
                southbound: "ZOR06", //D
                northbound: "ZOR08", //SP10
            },
            length: 7
        },
        {
            name: "ZOR_12",
            southbound: "ZOR_10",
            northbound: "endOfTrack",
            length: 4
        },
        {
            name: "ZOR_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "ZOR_06",
            southboundLineNorthboundDirection: "ZOR_08",
            northboundLineSouthboundDirection: "ZOR_05",
            northboundLineNorthboundDirection: "ZOR_07",
            length: 1
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
            trackCircuit: "Y_13",
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
            name: "PAZ_A7",
            trackCircuit: "PAZ_22",
        },
        {
            name: "PAZ_A2",
            trackCircuit: "PAZ_12",
        },
        {
            name: "PAZ_A4",
            trackCircuit: "PAZ_14",
        },
        {
            name: "MAT_A1",
            trackCircuit: "MAT_09",
        },
        {
            name: "MAT_A2",
            trackCircuit: "MAT_10",
        },
        {
            name: "CPU_A1",
            trackCircuit: "CPU_05",
        },
        {
            name: "CPU_A3",
            trackCircuit: "CPU_07",
        },
        {
            name: "CPU_A2",
            trackCircuit: "CPU_06",
        },
        {
            name: "CPU_A4",
            trackCircuit: "CPU_08",
        },
        {
            name: "SIL_A1",
            trackCircuit: "SIL_03",
        },
        {
            name: "SIL_A3",
            trackCircuit: "SIL_05",
        },
        {
            name: "SIL_A2",
            trackCircuit: "SIL_04",
        },
        {
            name: "SIL_A4",
            trackCircuit: "SIL_06",
        },
        {
            name: "SIL_A5",
            trackCircuit: "SIL_11",
        },
        {
            name: "SIL_A7",
            trackCircuit: "SIL_13",
        },
        {
            name: "SIL_A6",
            trackCircuit: "SIL_12",
        },
        {
            name: "SIL_A8",
            trackCircuit: "SIL_14",
        },
        {
            name: "CIR_A1",
            trackCircuit: "CIR_07",
        },
        {
            name: "CIR_A3",
            trackCircuit: "CIR_09",
        },
        {
            name: "CIR_A2",
            trackCircuit: "CIR_08",
        },
        {
            name: "CIR_A4",
            trackCircuit: "CIR_10",
        },
        {
            name: "PQC_A1",
            trackCircuit: "PQC_13",
        },
        {
            name: "PQC_A3",
            trackCircuit: "PQC_15",
        },
        {
            name: "PQC_A2",
            trackCircuit: "PQC_16",
        },
        {
            name: "ZOR_A1",
            trackCircuit: "ZOR_05",
        },
        {
            name: "ZOR_A3",
            trackCircuit: "ZOR_07",
        },{
            name: "ZOR_A2",
            trackCircuit: "ZOR_06",
        },
        {
            name: "ZOR_A4",
            trackCircuit: "ZOR_08",
        },
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
        {
            name: "ART01",
            direction: "southbound"
        },
        {
            name: "ART02",
            direction: "southbound"
        },
        {
            name: "ART04",
            direction: "northbound"
        },
        {
            name: "MAT01",
            direction: "southbound"
        },
        {
            name: "MAT03",
            direction: "northbound"
        },
        {
            name: "MAT04",
            direction: "northbound"
        },
        {
            name: "CPU01",
            direction: "southbound"
        },
        {
            name: "CPU03",
            direction: "northbound"
        },
        {
            name: "CPU05",
            direction: "southbound"
        },
        {
            name: "CPU07",
            direction: "northbound"
        },
        {
            name: "CPU09",
            direction: "southbound"
        },
        {
            name: "CPU02",
            direction: "southbound"
        },
        {
            name: "CPU04",
            direction: "northbound"
        },
        {
            name: "CPU06",
            direction: "southbound"
        },
        {
            name: "CPU08",
            direction: "northbound"
        },
        {
            name: "CPU10",
            direction: "southbound"
        },
        {
            name: "CPU12",
            direction: "northbound"
        },
        {
            name: "SIL01",
            direction: "southbound"
        },
        {
            name: "SIL03",
            direction: "northbound"
        },
        {
            name: "SIL05",
            direction: "southbound"
        },
        {
            name: "SIL07",
            direction: "northbound"
        },
        {
            name: "SIL09",
            direction: "southbound"
        },
        {
            name: "SIL11",
            direction: "northbound"
        },
        {
            name: "SIL02",
            direction: "southbound"
        },
        {
            name: "SIL04",
            direction: "northbound"
        },
        {
            name: "SIL06",
            direction: "southbound"
        },
        {
            name: "SIL08",
            direction: "northbound"
        },
        {
            name: "SIL10",
            direction: "southbound"
        },
        {
            name: "SIL12",
            direction: "northbound"
        },
        {
            name: "TEA01",
            direction: "southbound"
        },
        {
            name: "TEA03",
            direction: "northbound"
        },
        {
            name: "TEA02",
            direction: "northbound"
        },
        {
            name: "TEA04",
            direction: "northbound"
        },
        {
            name: "CIR01",
            direction: "southbound"
        },
        {
            name: "CIR03",
            direction: "northbound"
        },
        {
            name: "CIR05",
            direction: "southbound"
        },
        {
            name: "CIR07",
            direction: "northbound"
        },
        {
            name: "CIR02",
            direction: "southbound"
        },
        {
            name: "CIR04",
            direction: "northbound"
        },
        {
            name: "CIR06",
            direction: "southbound"
        },
        {
            name: "CIR08",
            direction: "northbound"
        },
        {
            name: "PQC01",
            direction: "southbound"
        },
        {
            name: "PQC03",
            direction: "northbound"
        },
        {
            name: "PQC05",
            direction: "southbound"
        },
        {
            name: "PQC07",
            direction: "southbound"
        },
        {
            name: "PQC09",
            direction: "northbound"
        },
        {
            name: "PQC02",
            direction: "southbound"
        },
        {
            name: "PQC04",
            direction: "northbound"
        },
        {
            name: "PQC06",
            direction: "northbound"
        },
        {
            name: "PQC08",
            direction: "northbound"
        },
        {
            name: "PQC10",
            direction: "southbound"
        },
        {
            name: "PQC11",
            direction: "northbound"
        },
        {
            name: "ZOR01",
            direction: "southbound"
        },
        {
            name: "ZOR03",
            direction: "northbound"
        },
        {
            name: "ZOR05",
            direction: "southbound"
        },
        {
            name: "ZOR07",
            direction: "northbound"
        },
        {
            name: "ZOR02",
            direction: "southbound"
        },
        {
            name: "ZOR04",
            direction: "northbound"
        },
        {
            name: "ZOR06",
            direction: "southbound"
        },
        {
            name: "ZOR08",
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
                position: 7
            },
            southbound: {
                trackCircuit: "AJU_01",
                position: 1
            },
            terminus: true
        },
        {
            name: "ADJUNTAS_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "AJU_02",
                position: 7
            },
            southbound: {
                trackCircuit: "AJU_02",
                position: 1
            },
            terminus: true
        },
        {
            name: "RUIZPINEDA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "RUI_11",
                position: 7
            },
            southbound: {
                trackCircuit: "RUI_11",
                position: 1
            }
        },
        {
            name: "RUIZPINEDA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "RUI_10",
                position: 3
            },
            southbound: {
                trackCircuit: "RUI_08",
                position: 1
            }
        },
        {
            name: "ZOOLOGICO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "ZOO_05",
                position: 7
            },
            southbound: {
                trackCircuit: "ZOO_05",
                position: 1
            },
        },
        {
            name: "ZOOLOGICO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "ZOO_06",
                position: 7
            },
            southbound: {
                trackCircuit: "ZOO_06",
                position: 1
            },
            terminus: true
        },
        {
            name: "CARICUAO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "CRC_03",
                position: 7
            },
            southbound: {
                trackCircuit: "CRC_03",
                position: 1
            },
        },
        {
            name: "CARICUAO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "CRC_04",
                position: 7
            },
            southbound: {
                trackCircuit: "CRC_04",
                position: 1
            }
        },
        {
            name: "MAMERA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "MAM_09",
                position: 4
            },
            southbound: {
                trackCircuit: "MAM_07",
                position: 1
            },
        },
        {
            name: "MAMERA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "MAM_12",
                position: 4
            },
            southbound: {
                trackCircuit: "MAM_10",
                position: 1
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
                position: 1
            },
        },
        {
            name: "ANTIMANO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "ANT_14",
                position: 3
            },
            southbound: {
                trackCircuit: "ANT_12",
                position: 1
            },
        },
        {
            name: "CARAPITA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "CRP_05",
                position: 4
            },
            southbound: {
                trackCircuit: "CRP_03",
                position: 1
            },
        },
        {
            name: "CARAPITA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "CRP_06",
                position: 3
            },
            southbound: {
                trackCircuit: "CRP_04",
                position: 1
            },
        },
        {
            name: "YAGUARA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "YAG_03",
                position: 7
            },
            southbound: {
                trackCircuit: "YAG_03",
                position: 1
            },
        },
        {
            name: "YAGUARA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "YAG_06",
                position: 3
            },
            southbound: {
                trackCircuit: "YAG_04",
                position: 1
            },
        },
        {
            name: "PAZ_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "PAZ_07",
                position: 7
            },
            southbound: {
                trackCircuit: "PAZ_07",
                position: 1
            },
        },
        {
            name: "PAZ_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "PAZ_10",
                position: 3
            },
            southbound: {
                trackCircuit: "PAZ_08",
                position: 1
            },
        },
        {
            name: "ARTIGAS_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "ART_05",
                position: 7
            },
            southbound: {
                trackCircuit: "ART_05",
                position: 1
            },
        },
        {
            name: "ARTIGAS_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "ART_06",
                position: 3
            },
            southbound: {
                trackCircuit: "ART_04",
                position: 1
            },
        },
        {
            name: "MATERNIDAD_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "MAT_05",
                position: 4
            },
            southbound: {
                trackCircuit: "MAT_03",
                position: 1
            },
        },
        {
            name: "MATERNIDAD_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "MAT_06",
                position: 3
            },
            southbound: {
                trackCircuit: "MAT_04",
                position: 1
            },
        },
        {
            name: "CAPUCHINOS_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "CPU_15",
                position: 2
            },
            southbound: {
                trackCircuit: "CPU_09",
                position: 1
            },
        },
        {
            name: "CAPUCHINOS_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "CPU_12",
                position: 3
            },
            southbound: {
                trackCircuit: "CPU_10",
                position: 1
            },
        },
        {
            name: "CAPUCHINOS_V3",
            direction: "southbound",
            northbound: {
                trackCircuit: "CPU_29",
                position: 3
            },
            southbound: {
                trackCircuit: "CPU_27",
                position: 1
            },
        },
        {
            name: "CAPUCHINOS_V4",
            direction: "northbound",
            northbound: {
                trackCircuit: "CPU_24",
                position: 3
            },
            southbound: {
                trackCircuit: "CPU_22",
                position: 1
            },
        },
        {
            name: "SILENCIO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "SIL_09",
                position: 3
            },
            southbound: {
                trackCircuit: "SIL_07",
                position: 1
            },
        },
        {
            name: "SILENCIO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "SIL_10",
                position: 3
            },
            southbound: {
                trackCircuit: "SIL_08",
                position: 1
            },
        },
        {
            name: "TEATROS_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "TEA_03",
                position: 7
            },
            southbound: {
                trackCircuit: "TEA_03",
                position: 1
            },
        },
        {
            name: "TEATROS_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "TEA_04",
                position: 7
            },
            southbound: {
                trackCircuit: "TEA_04",
                position: 1
            }
        },
        {
            name: "NUEVOCIRCO_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "CIR_05",
                position: 7
            },
            southbound: {
                trackCircuit: "CIR_05",
                position: 1
            },
        },
        {
            name: "NUEVOCIRCO_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "CIR_06",
                position: 7
            },
            southbound: {
                trackCircuit: "CIR_06",
                position: 1
            }
        },
        {
            name: "PARQUECENTRAL_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "PQC_05",
                position: 7
            },
            southbound: {
                trackCircuit: "PQC_05",
                position: 1
            },
        },
        {
            name: "PARQUECENTRAL_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "PQC_06",
                position: 7
            },
            southbound: {
                trackCircuit: "PQC_06",
                position: 1
            }
        },
        {
            name: "ZONARENTAL_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "ZOR_09",
                position: 7
            },
            southbound: {
                trackCircuit: "ZOR_09",
                position: 1
            },
            terminus: true
        },
        {
            name: "ZONARENTAL_V2",
            direction: "southbound",
            northbound: {
                trackCircuit: "ZOR_10",
                position: 7
            },
            southbound: {
                trackCircuit: "ZOR_10",
                position: 1
            },
            terminus: true
        },
    ],
}