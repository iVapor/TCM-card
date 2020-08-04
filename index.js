

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

const renderPage = (data) => {
    let { repo, operateArea } = data

}

const game = () => {
    let cardData = initCard()
    renderPage(cardData)
}

const createBackground = () => {

}
const __main = () => {
    createBackground()
    game()
}

__main()
