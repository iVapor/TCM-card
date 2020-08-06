
const isOrderOperate = (placeId, containerId) => {
    let placePoint = getCardData(placeId).point
    let containerPoint = getCardData(containerId).point

    let corrent = false
    if (containerPoint === '2') {
        corrent = placePoint === 'A'
    } else if (containerPoint === 'J') {
        corrent = placePoint === '10'
    } else if (containerPoint === 'Q') {
        corrent = placePoint === 'J'
    } else if (containerPoint === 'K') {
        corrent = placePoint === 'Q'
    } else  {
        let placeNum = parseInt(placePoint)
        let containerNum = parseInt(containerPoint)
        corrent = placeNum < containerNum
    }

    return corrent
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
    // 放置到纸牌的内容上
    let placeContent = placeEle.classList.contains("content-card")
    if (placeContent) {
        placeEle = placeEle.parentNode
    }

    let { area, id, location, color } = placeEle.dataset

    let cardContent = placeEle.classList.contains("card-front")
    let isCardEle = area === 'operateArea' && cardContent

    let placeId = dragEle.dataset.id
    let placeColor = dragEle.dataset.color
    let rightColor = isRightColor(placeColor, color)

    let rightNum = isOrderOperate(parseInt(placeId), parseInt(id))

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

    let pass = rightColor && rightNum

    return pass
}

const changeStackData = (dragEle, placeEle) => {
    let dragLocation = dragEle.dataset.location
    let dragId = dragEle.dataset.id
    let dragArea = dragEle.dataset.area
    if (dragArea === 'operateArea') {
        removeOperateFront(dragLocation, dragId)
    } else if (dragArea === 'displayArea') {
        removeRepo(dragId)
    }


    let placeId = placeEle.dataset.id
    let placeLocation = placeEle.dataset.location
    addOperateFront(placeLocation, placeId)
}

/**
 * 改变拖动卡牌的区域和位置
 * @param dragEle
 * @param placeEle
 */
const changeDragData = (dragEle, placeEle) => {
    let pointArea = placeEle.dataset.area
    let placeLocation = placeEle.dataset.location

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
        changeStackData(dragEle, placeEle)
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
        changeDragData(dragEle, placeEle)
        changeStackData(dragEle, placeEle)
    }
}

const putPointArea = (dragEle, placeEle) => {
    let placeCard = isPointStack(dragEle, placeEle)
    // 操作区域的卡牌容器
    let pointContainer = placeEle.classList.contains("point-container")
    log('pointContainer', pointContainer)
    if (pointContainer || placeCard ) {
        dragEle.parentNode.removeChild(dragEle)
        let container = placeEle

        // 牌堆容器，如果牌堆为空，直接放入容器。否则，父元素的父元素才是容器
        let cardInside = placeEle.classList.contains("content-card")
        if (cardInside) {
            container = placeEle.parentNode.parentNode
        }

        container.appendChild(dragEle)
        changeDragData(dragEle, placeEle)
        changeStackData(dragEle, placeEle)
    } else if (placeCard) {

    }
}

const dragCard = () => {
    var dragged;

    document.addEventListener("dragstart", function( event ) {
        // 保存拖动元素的引用(ref.)
        dragged = event.target;
        log('dragged', dragged)
        // 使其半透明
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
        let area = placeEle.dataset.area

        log('area', area)
        if (area === 'operateArea') {
            putOperateArea(dragged, placeEle)
        } else if (area === 'pointArea') {
            log('in pointarea')
            putPointArea(dragged, placeEle)
        }



    }, false);
}

const removeOperateBack = (location, id) => {
    let CurrentStack = window.operateArea[location]
    CurrentStack.openBack(id)
}

const removeOperateFront = (location, id) => {
    let CurrentStack = window.operateArea[location]
    CurrentStack.removeFront(id)
}

const removeRepo = (cardId) => {
    let repo = window.repo
    let cardIndex = repo.findIndex(item => item === cardId)
    repo.splice(cardIndex, 1)
}

const addOperateFront = (location, id) => {
    let CurrentStack = window.operateArea[location]
    CurrentStack.addFront(id)
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
