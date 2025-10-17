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
    ]
}