

const isCardList = (list, id) => {
    return list.indexOf(id) > -1
}

const createRandomId = (idList) => {
    let cardIndex =  Math.floor(Math.random() * Math.floor(idList.length))
    let cardId = idList[cardIndex]
    idList.splice(cardIndex, 1)

    return cardId
}

// const createRandomIndex = (currentCard) => {
//     let length = createRandomLength()
//     log('lengh', length)
//     for(let i = 0; i < 30; i++) {
//
//     }
// }


const createCardList = (idList, length) => {
    let tempList = []
    for(let i = 0; i < length; i++) {

        let id = createRandomId(idList)
        tempList.push(id)
    }

    log('tempLIst', tempList)
    return tempList
}

const initCard = () => {
    let lib = {
        repo : [],
        operateArea: [],
    }

    let currentCard = questionList.map(item => item.id)
    let repo  = createCardList(currentCard, 30)

    let operate = currentCard
    Object.assign(lib, {
        repo : repo,
        operateArea: operate,
    })

    return lib
}

const valueStore = (data) => {
    log('valueStore')
    let { operateArea } = data
    window.repo = data.repo
    let operate = []

    let cardCount = [ 2, 2, 2, 3, 4, 4, 5, ]
    for (let i = 0; i < cardCount.length; i++) {
        let each = cardCount[i]
        let cardNum = createCardList(operateArea, each)

        let card = new OperateCard(cardNum, [])
        operate.push(card)
    }

    log('operate', operate)
    window.operateArea = operate
}

const renderPage = () => {

}

const game = () => {
    let cardData = initCard()
    valueStore(cardData)
    renderPage()
}

const createBackground = () => {

}
const __main = () => {
    createBackground()
    game()
}

__main()
