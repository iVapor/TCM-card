

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
        log('drop event.target', event.target)

        // 操作区域的卡牌容器
        let operateContainer = event.target.classList.includes("operate-container")
        if ( operateContainer ) {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
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
