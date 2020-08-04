class OperateCard {
    // constructor
    constructor(front, back, order) {
        this.frontList = front
        this.backList = back
        this.orderList = order
    }

    addFront(list) {
        let current = this.frontList.concat(list)
        return current
    }
    openBack(card) {
        this.frontList.push(card)
        log('this.frontList', this.frontList)

        let index = this.backList.findIndex(item => {
            return item === card
        })
        this.backList.splice(index, 1)
        log('backList', this.backList)
    }
}
