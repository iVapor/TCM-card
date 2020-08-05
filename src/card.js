class OperateCard {
    // constructor
    constructor(front, back) {
        // 展示的卡片一定是排好序的
        this.frontList = front
        this.backList = back
    }

    addFront(list) {
        let current = this.frontList.concat(list)
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
