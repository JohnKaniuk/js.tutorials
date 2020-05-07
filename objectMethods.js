let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 25,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity -this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount += partySize
        return this.guestCount
    },

    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
        return this.guestCount

    }
}

//seatParty
//remove party
let res = restaurant
let seatingTotal = res.seatParty(10)
let removedTotal = res.removeParty(10)
console.log(removedTotal)
console.log(seatingTotal)
// let seatingTotal = restaurant.seatParty(72)
// let seatingTotal = restauarant.seatParty(total)
// console.log(restaurant.checkAvailability(4))
// restaurant.removeParty(5)
// console.log(restaurant.checkAvailability(4))