class OperateCard {
    // constructor
    constructor(front, back) {
        // 展示的卡片一定是排好序的
        this.frontList = front
        this.backList = back
    }

    addFront(card) {
        let current = this.frontList.push(card)
        return current
    }
    removeFront(card) {
        let index = this.frontList.findIndex(item => {
            return item === card
        })
        this.frontList.splice(index, 1)
    }
    openBack(card) {
        this.frontList.push(card)

        let index = this.backList.findIndex(item => {
            return item === card
        })
        this.backList.splice(index, 1)
    }
}

class PointCard {
    // constructor
    constructor() {
        // 展示的卡片一定是排好序的
        this.pointCard = []
    }
    addCard(card) {
        let current = this.pointCard.push(card)
        return current
    }
    removeCard(card) {
        let index = this.pointCard.findIndex(item => {
            return item === card
        })
        this.pointCard.splice(index, 1)
    }
}
