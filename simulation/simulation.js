"use strict"

var map = new Map(mapData)
var interlocking = new Interlocking(map)
var track = new Track(interlocking)
var windowManager = new UIWindowManager(document.body, window)
var ats = new ATS(map, interlocking, windowManager)

//VIA 1
//interlocking.getSignalFromName("IDP05").requestFleeting()

//VIA 2
//interlocking.getSignalFromName("TCP04").requestFleeting()

// Pre-reservar rutas críticas  
/*requestReserveForRouteMultipleTrackCircuits("IDP_09", "GCP_03", "northbound")  
requestReserveForRouteMultipleTrackCircuits("GCP_03", "ALP_05", "northbound")  
requestReserveForRouteMultipleTrackCircuits("ALP_06", "GCP_04", "southbound")  
requestReserveForRouteMultipleTrackCircuits("GCP_04", "IDP_08", "southbound")*/

//interlocking.getCycleFromName("IDP_1").enable();
//interlocking.getCycleFromName("AJU_1").enable();

var trains = []
trains.push(new Train("01", 6, map, track, map.getTrackCircuitFromName("AJU_02"), "southbound", interlocking, ats))
//trains.push(new Train("19", 6, map, track, map.getTrackCircuitFromName("AJU_08"), "southbound", interlocking, ats))

function requestReserveForRouteMultipleTrackCircuits(startTrackCircuitName, endTrackCircuitName, direction) {
    var startTrackCircuit = interlocking.getTrackCircuitFromName(startTrackCircuitName)
    var endTrackCircuit = interlocking.getTrackCircuitFromName(endTrackCircuitName)
    var route = interlocking.findRouteBetweenTrackCircuits(startTrackCircuit, endTrackCircuit, direction)
    route.path.forEach(trackCircuit => {
        interlocking.getTrackCircuitFromName(trackCircuit).reserveForRouteRequests++
    })
}