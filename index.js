

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

    return tempList
}

const initCard = () => {
    let lib = {
        repo : [],
        operateArea: [],
    }

    let currentCard = cardList.map(item => item.id)
    let repo  = createCardList(currentCard, 30)

    let operate = currentCard
    Object.assign(lib, {
        repo : repo,
        operateArea: operate,
    })

    return lib
}

const valueStore = (data) => {
    let { operateArea } = data
    window.repo = data.repo
    let operate = []

    let cardCount = [ 2, 2, 2, 3, 4, 4, 5, ]
    for (let i = 0; i < cardCount.length; i++) {
        let each = cardCount[i]
        let cardNum = createCardList(operateArea, each)

        let card = new OperateCard([], cardNum)
        operate.push(card)
    }

    window.operateArea = operate
}

const createBackCard = (index, id) => {
    let ele = `
    <div data-location=${ index } data-id="${ id }"
        class="card-shape card-back"></div>
    `
    return ele
}

const getCardData = (cardId) => {
    let cardIndex = cardList.findIndex(item => item.id === cardId)
    let card = cardList[cardIndex]

    return card
}

const createFrontCard = (index, id) => {
    let cardData = getCardData(id)

    let ele = `
    <div data-location=${index} data-id="${ cardData.id }"
        draggable="true" 
        class="card-front card-shape">
        <div class="num-container">
            <div class="num-card">${ cardData.point }</div>
            <div class="color-card">
                <i class="iconfont icon_${ cardData.type }"></i>
            </div>
        </div>
        <div class="content-card">${ cardData.view }</div>
        <div class="action-btn-container">
            <div class="action-btn">分析</div>
            <div class="action-btn">反驳</div>
        </div>
        <div class="num-reverse">
            <div class="num-card">${ cardData.point }</div>
            <div class="color-card">
                <i class="iconfont icon_${ cardData.type }"></i>
                </div>
        </div>
    </div>
    `
    return ele
}

const createOperateEle = (type, index, id) => {
    let ele = ''
    if (type === 'back') {
        ele = createBackCard(index, id)
    } else if (type === 'front') {
        ele = createFrontCard(index, id)
    }

    return ele
}


const createOperateStack = (index) => {
    let cardClass = window.operateArea[index]
    let backList = cardClass.backList

    let allContainer = ''
    for (let i = 0; i < backList.length; i++) {
        let eachCard = backList[i]
        let ele = createOperateEle('back', index, eachCard)
        allContainer += ele
    }

    let frontList = cardClass.frontList
    for (let j = 0; j < frontList.length; j++) {
        let eachCard = frontList[j]
        let ele = createOperateEle('front', index, eachCard)
        allContainer += ele
    }

    return allContainer
}

const createOperateContainer = (index) => {
    let allStack = createOperateStack(index)

    let ele = `
    <div data-location=${ index } 
        class="operate-container">${ allStack }</div>
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
