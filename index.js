

const isCardList = (list, id) => {
    return list.indexOf(id) > -1
}

const createRandomId = () => {
    let cardIndex =  Math.floor(Math.random() * Math.floor(52))
    let cardId = questionList[cardIndex].id

    return cardId
}

// const createRandomIndex = (currentCard) => {
//     let length = createRandomLength()
//     log('lengh', length)
//     for(let i = 0; i < 30; i++) {
//
//     }
// }

const createCardList = (currentCard, length) => {
    let tempList = []
    for(let i = 0; i < length; i++) {
        let id = createRandomId()
        let hasAdd = isCardList(currentCard, id)

        if (!hasAdd) {
            tempList.push(id)
        }
    }

    log('tempLIst', tempList)
    return tempList
}

const initCard = () => {
    let currentCard = []
    let lib = {
        repo : [],
        operateArea: [],
    }

    let repo  = createCardList(currentCard, 30)
    return lib
}

const game = () => {
    let card = initCard()
}

const createBackground = () => {

}
const __main = () => {
    createBackground()
    game()
}

__main()
