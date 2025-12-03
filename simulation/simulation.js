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

//VIA 2
interlocking.getSignalFromName("RUI02").requestFleeting()
interlocking.getSignalFromName("RUI06").requestFleeting()
interlocking.getSignalFromName("CRC02").requestFleeting()
interlocking.getSignalFromName("MAM02").requestFleeting()
interlocking.getSignalFromName("MAM06").requestFleeting()
interlocking.getSignalFromName("ANT04").requestFleeting()
interlocking.getSignalFromName("ANT08").requestFleeting()
interlocking.getSignalFromName("CRP02").requestFleeting()

// Pre-reservar rutas críticas  
/*requestReserveForRouteMultipleTrackCircuits("IDP_09", "GCP_03", "northbound")  
requestReserveForRouteMultipleTrackCircuits("GCP_03", "ALP_05", "northbound")  
requestReserveForRouteMultipleTrackCircuits("ALP_06", "GCP_04", "southbound")  
requestReserveForRouteMultipleTrackCircuits("GCP_04", "IDP_08", "southbound")*/

interlocking.getCycleFromName("ZOO_2").enable();
interlocking.getCycleFromName("Y_1").enable();
interlocking.getCycleFromName("Y_2").enable()

var trains = []
//trains.push(new Train("01", 6, map, track, map.getTrackCircuitFromName("AJU_02"), "southbound", interlocking, ats))
//trains.push(new Train("02", 6, map, track, map.getTrackCircuitFromName("ZOO_06"), "northbound", interlocking, ats))
//trains.push(new Train("03", 6, map, track, map.getTrackCircuitFromName("RUI_05"), "southbound", interlocking, ats))
//trains.push(new Train("04", 6, map, track, map.getTrackCircuitFromName("CRC_03"), "southbound", interlocking, ats))
//trains.push(new Train("05", 6, map, track, map.getTrackCircuitFromName("ANT_03"), "southbound", interlocking, ats))
//trains.push(new Train("06", 6, map, track, map.getTrackCircuitFromName("Y_14"), "northbound", interlocking, ats))
//trains.push(new Train("07", 6, map, track, map.getTrackCircuitFromName("Y_18"), "northbound", interlocking, ats))

function requestReserveForRouteMultipleTrackCircuits(startTrackCircuitName, endTrackCircuitName, direction) {
    var startTrackCircuit = interlocking.getTrackCircuitFromName(startTrackCircuitName)
    var endTrackCircuit = interlocking.getTrackCircuitFromName(endTrackCircuitName)
    var route = interlocking.findRouteBetweenTrackCircuits(startTrackCircuit, endTrackCircuit, direction)
    route.path.forEach(trackCircuit => {
        interlocking.getTrackCircuitFromName(trackCircuit).reserveForRouteRequests++
    })
}