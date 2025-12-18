"use strict"
//CICLOS DE MANIOBRAS
var interlockingData = {
    cycles: [
        {
            name: "AJU_1",
            routes: {
                "entry": {
                    start: "AJU03",
                    end: "SP2"
                },
                "exit": {
                    start: "AJU02",
                    end: "RUI02"
                }
            }
        },
        {
            name: "AJU_2",
            routes: {
                "entry": {
                    start: "AJU03",
                    end: "SP1"
                },
                "exit": {
                    start: "AJU01",
                    end: "RUI02"
                }
            }
        },
        // {
        //     name: "ZOO_1",
        //     routes: {
        //         "entry": {
        //             start: "ZOO03",
        //             end: "SP3"
        //         },
        //         "exit": {
        //             start: "ZOO01",
        //             end: "ZOO06"
        //         }
        //     }
        // },
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
                    end: "CRC01"
                },
                "exit": {
                    start: "Y05",
                    end: "RUI07"
                }
            }
        },
        {
            name: "Y_2",
            routes: {
                "entry": {
                    start: "Y02",
                    end: "MAM02"
                },
                "exit": {
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
        },
        {
            name: "ANT_1",
            routes: {
                "entry": {
                    start: "ANT04",
                    end: "ANT08"
                },
                "exit": {
                    start: "ANT06",
                    end: "ANT01"
                }
            }
        },
        {
            name: "ANT_2",
            routes: {
                "entry": {
                    start: "ANT04",
                    end: "ANT07"
                },
                "exit": {
                    start: "ANT05",
                    end: "ANT01"
                }
            }
        },
        {
            name: "ANT_3",
            routes: {
                "entry": {
                    start: "ANT05",
                    end: "ANT02"
                },
                "exit": {
                    start: "ANT04",
                    end: "ANT08"
                }
            }
        },
        {
            name: "ANT_4",
            routes: {
                "entry": {
                    start: "ANT05",
                    end: "ANT01"
                },
                "exit": {
                    start: "ANT03",
                    end: "ANT08"
                }
            }
        },
        {
            name: "PAZ_1",
            routes: {
                "entry": {
                    start: "PAZ06",
                    end: "PAZ10"
                },
                "exit": {
                    start: "PAZ08",
                    end: "PAZ03"
                }
            }
        },
        {
            name: "PAZ_2",
            routes: {
                "entry": {
                    start: "PAZ06",
                    end: "PAZ09"
                },
                "exit": {
                    start: "PAZ07",
                    end: "PAZ03"
                }
            }
        },
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
        {
            "entry": {
                "start": "PAZ06",
                "end": "ZR5"
            },
            "exit": {
                "start": "PAZ11",
                "end": "PAZ03"
            }
        },
    ]
}