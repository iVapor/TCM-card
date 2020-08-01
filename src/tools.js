const log = console.log.bind(console)

const eleSelector = (selector) => document.querySelector(selector)

const eleSelectorAll = (selector) => document.querySelectorAll(selector)

const bindEleEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}