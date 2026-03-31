"use strict"

var map = new Map(mapData)
var interlocking = new Interlocking(map)
var track = new Track(interlocking)
var windowManager = new UIWindowManager(document.body, window)
var ats = new ATS(map, interlocking, windowManager)

//VIA 1
interlocking.getSignalFromName("RUI03").requestFleeting()
interlocking.getSignalFromName("CRC01").requestFleeting()
interlocking.getSignalFromName("RUI07").requestFleeting()
interlocking.getSignalFromName("MAM03").requestFleeting()
interlocking.getSignalFromName("ANT01").requestFleeting()
interlocking.getSignalFromName("ANT05").requestFleeting()
interlocking.getSignalFromName("ANT09").requestFleeting()
interlocking.getSignalFromName("CRP01").requestFleeting()
interlocking.getSignalFromName("YAG01").requestFleeting()
interlocking.getSignalFromName("PAZ03").requestFleeting()
interlocking.getSignalFromName("PAZ07").requestFleeting()
interlocking.getSignalFromName("ART01").requestFleeting()
interlocking.getSignalFromName("MAT01").requestFleeting()
interlocking.getSignalFromName("CPU01").requestFleeting()
interlocking.getSignalFromName("CPU05").requestFleeting()
interlocking.getSignalFromName("SIL01").requestFleeting()
interlocking.getSignalFromName("SIL05").requestFleeting()

//VIA 2
interlocking.getSignalFromName("RUI02").requestFleeting()
interlocking.getSignalFromName("RUI06").requestFleeting()
interlocking.getSignalFromName("CRC02").requestFleeting()
interlocking.getSignalFromName("MAM02").requestFleeting()
interlocking.getSignalFromName("MAM06").requestFleeting()
interlocking.getSignalFromName("ANT04").requestFleeting()
interlocking.getSignalFromName("ANT08").requestFleeting()
interlocking.getSignalFromName("CRP02").requestFleeting()
interlocking.getSignalFromName("YAG02").requestFleeting()
interlocking.getSignalFromName("PAZ02").requestFleeting()
interlocking.getSignalFromName("PAZ06").requestFleeting()
interlocking.getSignalFromName("PAZ10").requestFleeting()
interlocking.getSignalFromName("ART04").requestFleeting()
interlocking.getSignalFromName("MAT04").requestFleeting()
interlocking.getSignalFromName("CPU04").requestFleeting()
interlocking.getSignalFromName("CPU08").requestFleeting()
interlocking.getSignalFromName("SIL04").requestFleeting()

// Pre-reservar rutas críticas  
requestReserveForRouteMultipleTrackCircuits("AJU_15", "AJU_13", "southbound")
requestReserveForRouteMultipleTrackCircuits("RUI_16", "Y_02", "northbound")  
requestReserveForRouteMultipleTrackCircuits("AJU_15", "AJU_13", "southbound")  
requestReserveForRouteMultipleTrackCircuits("MAM_03", "Y_09", "southbound")
requestReserveForRouteMultipleTrackCircuits("ANT_19", "ANT_17", "southbound")

interlocking.getCycleFromName("AJU_1").enable();
interlocking.getCycleFromName("ZOO_2").enable()
interlocking.getCycleFromName("Y_1").enable();
interlocking.getCycleFromName("Y_2").enable()
interlocking.getCycleFromName("SIL_3").enable()

var trains = []
trains.push(new Train("01", 6, map, track, map.getTrackCircuitFromName("MAM_06"), "northbound", interlocking, ats))
trains.push(new Train("02", 6, map, track, map.getTrackCircuitFromName("CRC_04"), "northbound", interlocking, ats))
trains.push(new Train("03", 6, map, track, map.getTrackCircuitFromName("AJU_15"), "southbound", interlocking, ats))
trains.push(new Train("04", 6, map, track, map.getTrackCircuitFromName("MAM_03"), "southbound", interlocking, ats))
trains.push(new Train("05", 6, map, track, map.getTrackCircuitFromName("ANT_17"), "southbound", interlocking, ats))
trains.push(new Train("06", 6, map, track, map.getTrackCircuitFromName("PAZ_03"), "southbound", interlocking, ats))
trains.push(new Train("07", 6, map, track, map.getTrackCircuitFromName("PAZ_06"), "northbound", interlocking, ats))
trains.push(new Train("08", 6, map, track, map.getTrackCircuitFromName("ANT_18"), "northbound", interlocking, ats))
trains.push(new Train("09", 6, map, track, map.getTrackCircuitFromName("AJU_01"), "southbound", interlocking, ats))
trains.push(new Train("10", 6, map, track, map.getTrackCircuitFromName("PAZ_20"), "southbound", interlocking, ats))
trains.push(new Train("11", 6, map, track, map.getTrackCircuitFromName("ZOO_05"), "northbound", interlocking, ats))
trains.push(new Train("12", 6, map, track, map.getTrackCircuitFromName("SIL_16"), "northbound", interlocking, ats))
trains.push(new Train("13", 6, map, track, map.getTrackCircuitFromName("MAT_01"), "southbound", interlocking, ats))
trains.push(new Train("14", 6, map, track, map.getTrackCircuitFromName("SIL_07"), "southbound", interlocking, ats))
trains.push(new Train("15", 6, map, track, map.getTrackCircuitFromName("ART_08"), "northbound", interlocking, ats))
trains.push(new Train("16", 6, map, track, map.getTrackCircuitFromName("CPU_12"), "northbound", interlocking, ats))


function requestReserveForRouteMultipleTrackCircuits(startTrackCircuitName, endTrackCircuitName, direction) {
    var startTrackCircuit = interlocking.getTrackCircuitFromName(startTrackCircuitName)
    var endTrackCircuit = interlocking.getTrackCircuitFromName(endTrackCircuitName)
    var route = interlocking.findRouteBetweenTrackCircuits(startTrackCircuit, endTrackCircuit, direction)
    route.path.forEach(trackCircuit => {
        interlocking.getTrackCircuitFromName(trackCircuit).reserveForRouteRequests++
    })
}