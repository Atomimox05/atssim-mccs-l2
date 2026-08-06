"use strict"

class ATSTrain {
    rollingStockNumber
    trainIndex
    positions = []
    train

    constructor(rollingStockNumber, trainIndex, train, trainManager) {
        this.rollingStockNumber = rollingStockNumber
        this.trainIndex = trainIndex
        this.train = train
        this.trainManager = trainManager
    }

    updatePosition(trackCircuits) {
        if (this.positions) {
            this.positions.forEach(pos => {
                if (this.trainManager.trainNumberMap[pos] === this) {
                    this.trainManager.trainNumberMap[pos] = null
                }
            })
        }
        
        if (!Array.isArray(trackCircuits)) {
            trackCircuits = [trackCircuits]
        }
        
        this.positions = trackCircuits.map(tc => tc.name)
        
        this.positions.forEach(pos => {
            this.trainManager.trainNumberMap[pos] = this
        })
    }
}