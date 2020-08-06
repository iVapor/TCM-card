
const isOrderOperate = (dragId, placeId) => {
    let dragPoint = getCardData(dragId).point
    let containerPoint = getCardData(placeId).point

    let correct = false
    if (containerPoint === '2') {
        correct = dragPoint === 'A'
    } else if (containerPoint === 'J') {
        correct = dragPoint === '10'
    } else if (containerPoint === 'Q') {
        correct = dragPoint === 'J'
    } else if (containerPoint === 'K') {
        correct = dragPoint === 'Q'
    } else  {
        let placeNum = parseInt(dragPoint)
        let containerNum = parseInt(containerPoint)
        correct = placeNum < containerNum
    }

    return correct
}

const isOrderPoint = (dragId, placeId) => {
    let dragPoint = getCardData(dragId).point
    let placePoint = getCardData(placeId).point

    let correct = false
    if (placePoint === 'A') {
        correct = dragPoint === '2'
    } else if (placePoint === '10') {
        correct = dragPoint === 'J'
    } else if (placePoint === 'J') {
        correct = dragPoint === 'Q'
    } else if (placePoint === 'Q') {
        correct = dragPoint === 'K'
    } else  {
        let dragNum = parseInt(dragPoint)
        let placeNum = parseInt(placePoint)
        correct = dragNum > placeNum
    }

    return correct
}

const isRightColor = (placeColor, containerColor) => {
    let spade = placeColor === 'spade'
    let heart = placeColor === 'heart'
    let club = placeColor === 'club'
    let diamond = placeColor === 'diamond'

    let rightColor = false
    if (spade || club) {
        rightColor = containerColor === 'heart' || containerColor === 'diamond'
    } else if (heart || diamond) {
        rightColor = containerColor === 'spade' || containerColor === 'club'
    }

    return rightColor
}

/**
 * 花色相同才能放置
 * @param dragColor
 * @param placeColor
 * @return {boolean}
 */
const isPointColor = (dragColor, placeColor) => {
    return dragColor === placeColor
}

/**
 * 判断两张卡牌能否堆叠
 * @param dragEle 鼠标拖动的元素
 * @param placeEle 被放置的元素
 * @return {boolean|boolean}
 */
const isRightPlace = (dragEle, placeEle) => {
    log('dragEle', dragEle)
    // 放置到纸牌的内容上
    let placeContent = placeEle.classList.contains("content-card")
    if (placeContent) {
        placeEle = placeEle.parentNode
    }

    let { area, id, location, color } = placeEle.dataset

    let cardContent = placeEle.classList.contains("card-front")
    let isCardEle = area === 'operateArea' && cardContent

    let dragId = dragEle.dataset.id
    let dragColor = dragEle.dataset.color
    let rightColor = isRightColor(dragColor, color)

    let rightNum = isOrderOperate(parseInt(dragId), parseInt(id))

    let pass = true || isCardEle && rightColor && rightNum
    return pass
}

/**
 * 得分区域，堆叠规则
 */
const isPointStack = (dragEle, placeEle) => {
    // 放置到纸牌的内容上
    let cardInside = placeEle.classList.contains("content-card")
    if (cardInside) {
        placeEle = placeEle.parentNode
    }

    let { area, id, location, color } = placeEle.dataset
    let isPointContainer = id === undefined
    if (isPointContainer) {
        return
    }

    let dragId = dragEle.dataset.id
    let dragColor = dragEle.dataset.color
    let rightColor = isPointColor(dragColor, color)

    let rightNum = isOrderPoint(parseInt(dragId), parseInt(id))

    let pass = true || rightColor && rightNum

    return pass
}

const changeStackOpeate = (dragEle, placeEle) => {
    let dragLocation = dragEle.dataset.location
    let dragId = dragEle.dataset.id
    let dragArea = dragEle.dataset.area

    if (dragArea === 'operateArea') {
        removeOperateFront(dragLocation, dragId)
    } else if (dragArea === 'displayArea') {
        removeRepo(dragId)
    } else if (dragArea === 'pointArea') {
        removePointCard(dragLocation, dragId)
    }

    let placeLocation = placeEle.dataset.location || placeEle.parentNode.dataset.location

    addOperateFront(placeLocation, parseInt(dragId))
}

const changeStackPoint = (dragEle, placeEle) => {
    let dragLocation = dragEle.dataset.location
    let dragId = dragEle.dataset.id
    let dragArea = dragEle.dataset.area

    if (dragArea === 'operateArea') {
        removeOperateFront(dragLocation, dragId)
    } else if (dragArea === 'displayArea') {
        removeRepo(dragId)
    }

    let placeLocation = placeEle.dataset.location || placeEle.parentNode.dataset.location
    addPointCard(placeLocation, parseInt(dragId))
}

/**
 * 改变拖动卡牌的区域和位置
 * @param dragEle
 * @param placeEle
 */
const changeDragData = (dragEle, placeEle) => {
    let pointArea = placeEle.dataset.area || placeEle.parentNode.dataset.area
    let placeLocation = placeEle.dataset.location || placeEle.parentNode.dataset.location

    dragEle.dataset.area = pointArea
    dragEle.dataset.location = placeLocation
}

const placeEmptyOperate = (dragEle, placeEle) => {
    // 操作区域的卡牌容器
    let operateContainer = placeEle.classList.contains("operate-container")
    if ( operateContainer ) {
        dragEle.parentNode.removeChild(dragEle)
        placeEle.appendChild(dragEle)

        changeDragData(dragEle, placeEle)
        changeStackOpeate(dragEle, placeEle)
    }
}

/**
 * 将卡牌移动到操作区域的卡牌上
 * @param dragEle
 * @param placeEle
 */
const putOperateArea = (dragEle, placeEle) => {
    let placeCard = isRightPlace(dragEle, placeEle)
    // 操作区域的卡牌容器
    let operateContainer = placeEle.classList.contains("operate-container")

    if (placeCard || operateContainer) {
        dragEle.parentNode.removeChild(dragEle)
        let container = placeEle

        // 牌堆容器，如果牌堆为空，直接放入容器。否则，父元素的父元素才是容器
        let cardInside = placeEle.classList.contains("content-card")
        if (cardInside) {
            container = placeEle.parentNode.parentNode
        }

        container.appendChild(dragEle)
        changeStackOpeate(dragEle, placeEle)
        changeDragData(dragEle, placeEle)
    }
}

const putPointArea = (dragEle, placeEle) => {
    let placeCard = isPointStack(dragEle, placeEle)
    // 操作区域的卡牌容器
    let pointContainer = placeEle.classList.contains("point-container")

    if (pointContainer || placeCard ) {
        dragEle.parentNode.removeChild(dragEle)
        let container = placeEle

        // 牌堆容器，如果牌堆为空，直接放入容器。否则，父元素的父元素才是容器
        let cardInside = placeEle.classList.contains("content-card")
        if (cardInside) {
            container = placeEle.parentNode.parentNode
        }

        container.appendChild(dragEle)
        changeStackPoint(dragEle, placeEle)
        changeDragData(dragEle, placeEle)
    }
}

const checkBatchDrag = (dragEle) => {
    let { id, area, location } = dragEle.dataset
    // 只有操作区域有批量拖动
    if (area !== 'operateArea') {
        return
    }
    let isFirst = isFirstFront(location, parseInt(id))

    return isFirst
}

const createMoveFront = (dragEle) => {
    let { id, area, location } = dragEle.dataset
    let ele = createFrontStack('', window.operateArea[location], location)

    return ele
}

const dragCard = () => {
    var dragged;

    document.addEventListener("dragstart", function( event ) {
        // 保存拖动元素的引用(ref.)
        dragged = event.target
        let batch = checkBatchDrag(dragged)

        log('batch', batch)
        log('before if, dragged', dragged)
        if (batch) {
            let allFront = createMoveFront(dragged)
            dragged = allFront
        }
    }, false);

    /* 放置目标元素时触发事件 */
    document.addEventListener("dragover", function( event ) {
        // 阻止默认动作以启用drop
        event.preventDefault();
    }, false);

    document.addEventListener("drop", function( event ) {
        // 阻止默认动作（如打开一些元素的链接）
        event.preventDefault();
        // 将拖动的元素到所选择的放置目标节点中
        let placeEle = event.target
        let area = placeEle.dataset.area || placeEle.parentNode.dataset.area

        log('in drop, dragged', dragged)
        if (area === 'operateArea') {
            putOperateArea(dragged, placeEle)
        } else if (area === 'pointArea') {
            putPointArea(dragged, placeEle)
        }

    }, false);
}

const removeOperateBack = (location, id) => {
    let CurrentStack = window.operateArea[location]
    CurrentStack.openBack(id)
}

const removeOperateFront = (location, id) => {
    log('removeOperateFront')
    let CurrentStack = window.operateArea[location]
    log('CurrentStack', CurrentStack)
    CurrentStack.removeFront(id)
    log('CurrentStack', CurrentStack)
}

const isFirstFront = (location, id) => {
    let CurrentStack = window.operateArea[location]
    let frontList = CurrentStack.frontList

    if (frontList.length === 1) {
        return false
    }
    let first = frontList[0]

    return first === id
}

const removeRepo = (cardId) => {
    let repo = window.repo
    let cardIndex = repo.findIndex(item => item === cardId)
    repo.splice(cardIndex, 1)
}

const addOperateFront = (location, id) => {
    log('addOperateFront')
    let CurrentStack = window.operateArea[location]
    log('CurrentStack', CurrentStack)
    CurrentStack.addFront(id)
    log('CurrentStack', CurrentStack)
}

const initPointData = () => {
    let container = []
    for (let i = 0; i < 4; i++) {
        let eachStack = new PointCard()
        container.push(eachStack)
    }

    window.pointArea = container
}

const addPointCard = (location, id) => {
    let isEmpty = window.pointArea.length === 0
    if (isEmpty) {
        initPointData()
    }
    let CurrentStack = window.pointArea[location]
    CurrentStack.addCard(id)
}

const removePointCard = (location, id) => {
    log('removeOperateFront')
    let CurrentStack = window.pointArea[location]
    log('CurrentStack', CurrentStack)
    CurrentStack.removeCard(id)
    log('CurrentStack', CurrentStack)
}

/**
 * 渲染新的牌堆
 * @param location 牌堆在操作区域的位置
 * @param cardEle 牌堆的容器元素
 */
const renderOperateStack = (location, cardEle) => {
    let container = cardEle.parentNode
    container.innerHTML = ''
    let stack = createOperateStack(location)
    container.insertAdjacentHTML('beforeend', stack)
}

const showOperateBack = (location, id, cardEle) => {
    let CurrentStack = window.operateArea[location]
    let { backList, frontList } = CurrentStack

    let isLast = backList[backList.length - 1] === id
    // 前面没有展开的卡片时，才能点击卡背面展开
    let withoutWhite = frontList.length === 0

    if (isLast && withoutWhite) {
        removeOperateBack(location, id)
        renderOperateStack(location, cardEle)
    }
}

const showOperateCard = () => {
    let areaEle = eleSelector('#operateArea')
    bindEleEvent(areaEle, 'click', function (e) {
        let self = e.target
        let cardBack = self.classList.contains('card-back')

        if (cardBack) {
            let { id, location } = self.dataset
            let cardId = parseInt(id)
            let cardLocation = parseInt(location)
            showOperateBack(cardLocation, cardId, self)
        }
    })
}

const getRepoCard = () => {
    let repo = window.repo
    let lastIndex = repo.length - 1
    let last = repo[lastIndex]

    // 将最后一个元素移到首位
    repo.splice(lastIndex, 1)
    repo.unshift(last)

    return last
}
const showDisplayCard = () => {
    let areaEle = eleSelector('#repo')
    bindEleEvent(areaEle, 'click', function (e) {
        let displayArea = eleSelector('#displayArea')
        let cardId = getRepoCard()

        let cardFront = createFrontCard('displayArea', 0, cardId)
        displayArea.innerHTML = cardFront
    })
}

const showCard = () => {
    showOperateCard()
    showDisplayCard()
}

const eventDelegation = () => {
    dragCard()
    showCard()
}
