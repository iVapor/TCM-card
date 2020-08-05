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
    openBack(card) {
        this.frontList.push(card)

        let index = this.backList.findIndex(item => {
            return item === card
        })
        this.backList.splice(index, 1)
    }
}
