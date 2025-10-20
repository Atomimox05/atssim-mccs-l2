"use strict"
//CICLOS DE MANIOBRAS
var interlockingData = {
    cycles: [
        // {
        //     "name": "IDP_1",
        //     "routes": {
        //         "entry": {
        //             "start": "IDP04",
        //             "end": "SP1"
        //         },
        //         "exit": {
        //             "start": "IDP01",
        //             "end": "IDP05"
        //         }
        //     }
        // },
    ],
    shuntingRoutes: [
        {
            "entry": {
                "start": "AJU02",
                "end": "ZR2"
            },
            "exit": {
                "start": "AJU04",
                "end": "SP1"
            }
        },
        {
            "entry": {
                "start": "AJU02",
                "end": "ZR1"
            },
            "exit": {
                "start": "AJU03",
                "end": "SP1"
            }
        },
        {
            "entry": {
                "start": "AJU01",
                "end": "ZR2"
            },
            "exit": {
                "start": "AJU04",
                "end": "SP2"
            }
        },
        {
            "entry": {
                "start": "AJU01",
                "end": "ZR1"
            },
            "exit": {
                "start": "AJU03",
                "end": "SP2"
            }
        },
        {
            "entry": {
                "start": "RUI03",
                "end": "ZR3"
            },
            "exit": {
                "start": "RUI01",
                "end": "RUI06"
            }
        },
        {
            "entry": {
                "start": "RUI04",
                "end": "ZR3"
            },
            "exit": {
                "start": "RUI01",
                "end": "RUI05"
            }
        },
        {
            "entry": {
                "start": "ZOO06",
                "end": "ZR4"
            },
            "exit": {
                "start": "ZOO07",
                "end": "ZOO03"
            }
        },
        {
            "entry": {
                "start": "ZOO05",
                "end": "ZR4"
            },
            "exit": {
                "start": "ZOO07",
                "end": "ZOO04"
            }
        },
    ]
}