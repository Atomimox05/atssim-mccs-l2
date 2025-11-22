"use strict"
//CICLOS DE MANIOBRAS
var interlockingData = {
    cycles: [
        {
            name: "ZOO_1",
            routes: {
                "entry": {
                    start: "ZOO03",
                    end: "SP3"
                },
                "exit": {
                    start: "ZOO01",
                    end: "ZOO06"
                }
            }
        },
        {
            name: "ZOO_2",
            routes: {
                "entry": {
                    start: "ZOO07",
                    end: "ZOO04"
                },
                "exit": {
                    start: "ZOO06",
                    end: "CRC02"
                }
            }
        },
        {
            name: "Y_1",
            routes: {
                "entry": {
                    start: "Y05",
                    end: "RUI07"
                },
                "exit": {
                    start: "Y05",
                    end: "CRC01"
                }
            }
        },
        {
            name: "Y_2",
            routes: {
                "exit": {
                    start: "Y02",
                    end: "MAM02"
                },
                "entry": {
                    start: "Y04",
                    end: "MAM02"
                }
            }
        },
        {
            name: "MAM_1",
            routes: {
                "entry": {
                    start: "MAM03",
                    end: "SP6"
                },
                "exit": {
                    start: "MAM07",
                    end: "MAM06"
                }
            }
        }
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