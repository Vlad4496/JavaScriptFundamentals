let dacia = {
    mark: "Dacia",
    model: 1310,
    color: "verde",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    averageConsumption: 11.5,
    batteryCapacity: 150,
    batteryCharge: 150,
    paint(color) {
        this.color = color
    },
    move(distance) {
        consumption = this.averageConsumption * distance / 100
        if (consumption > this.batteryCharge) {
            this.batteryCharge = 0
            this.mileage += this.distanceToEmpty()
        } else {
            this.batteryCharge -= consumption
            this.mileage += distance
        }
    },
    recharge() {
        this.batteryCharge = this.batteryCapacity
    },
    distanceToEmpty: function() {
        return 100 * this.batteryCharge / this.averageConsumption
    }
}
dacia.paint("galben")
dacia.move(100)
console.log(dacia.distanceToEmpty())
console.log(dacia)
console.log(dacia.distanceToEmpty())
console.log(dacia)