
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

const isRightPlace = (placeEle, container ) => {
    // 放置到纸牌的内容上
    let placeContent = container.classList.contains("content-card")
    if (placeContent) {
        container = container.parentNode
    }

    let { area, id, location, color } = container.dataset

    let cardContent =
        container.classList.contains("card-front")
    let isCardEle = area === 'operateArea' && cardContent

    log('id', id, 'location', location)
    let placeId = placeEle.dataset.id
    let placeColor = placeEle.dataset.color
    let rightColor = isRightColor(placeColor, color)
    log('rightColor', rightColor)

    return isCardEle
}

const dragCard = () => {
    var dragged;

    document.addEventListener("dragstart", function( event ) {
        // 保存拖动元素的引用(ref.)
        log('dragstart')
        dragged = event.target;
        log('dragged', dragged)
        // 使其半透明
        event.target.style.opacity = 0;
    }, false);

    document.addEventListener("dragend", function( event ) {
        // 重置透明度
        event.target.style.opacity = "";
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
        let self = event.target
        log('drop self',self, self.classList)

        // 操作区域的卡牌容器
        let operateContainer = self.classList.contains("operate-container")
        let placeCard = isRightPlace(dragged, self)
        if ( operateContainer || placeCard ) {
            event.target.style.background = ""
            dragged.parentNode.removeChild( dragged )
            self.appendChild( dragged )
        }

        if (placeCard) {
            let placeContent = self.classList.contains("content-card")
            if (placeContent) {
                self = self.parentNode
            }

            event.target.style.background = ""
            dragged.parentNode.removeChild( dragged )
            // 牌堆容器
            let container = self.parentNode
            container.appendChild( dragged )
        }

    }, false);
}

const removeOperateBack = (location, id) => {
    let CurrentStack = window.operateArea[location]
    CurrentStack.openBack(id)
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
