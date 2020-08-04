

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

const createOperateEle = (index, id) => {
    let ele = `
    <div data-location=${ index } data-id="${ id }"
        class="card-shape card-back"></div>
    `
    return ele
}

const createOperateContainer = (index) => {
    let cardClass = window.operateArea[index]
    let frontList = cardClass.frontList

    let allContainer = ''
    for (let i = 0; i < frontList.length; i++) {
        let eachCard = frontList[i]
        let ele = createOperateEle(index, eachCard)
        allContainer += ele
    }

    let ele = `
    <div data-location=${ index } 
        class="operate-container">${ allContainer }</div>
    `
    return ele
}

const renderOperateArea = () => {
    let allEle = ''
    let area = window.operateArea
    for (let i = 0; i < area.length; i++) {
        // let eachDesk = area[i]
        let deskEle = createOperateContainer(i)
        allEle += deskEle
    }

    let areaEle = eleSelector('.operate-area')
    areaEle.insertAdjacentHTML('beforeend', allEle)
}

const renderPage = () => {
    renderOperateArea()
}

const game = () => {
    let cardData = initCard()
    valueStore(cardData)
    renderPage()
    eventDelegation()
}

const createBackground = () => {

}
const __main = () => {
    createBackground()
    game()
}

__main()
