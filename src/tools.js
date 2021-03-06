const log = console.log.bind(console)

const eleSelector = (selector) => document.querySelector(selector)

const eleSelectorAll = (selector) => document.querySelectorAll(selector)

const bindEleEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}


const getCardData = (cardId) => {
    let cardIndex = cardList.findIndex(item => item.id === cardId)
    let card = cardList[cardIndex]

    return card
}
