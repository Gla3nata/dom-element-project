const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function (text) {
    let element;

    if (this.selector.startsWith('.')) {
        element = document.createElement('div');
        element.className = this.selector.slice(1);
    } else if (this.selector.startsWith('#')) {
        element = document.createElement('p');
        element.id = this.selector.slice(1);
    }

    element.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
    `;

    element.textContent = text;
    document.body.appendChild(element);

    return element;
};

document.addEventListener('DOMContentLoaded', function () {
    const square = new DomElement('.square', '100px', '100px', 'lightblue', '16px');
    const squareElement = square.createElement('Квадрат');
    let posX = 0;
    let posY = 0;
    function moveSquare(direction) {
        const step = 10;

        switch (direction) {
            case 'ArrowUp':
                posY -= step;
                break;
            case 'ArrowDown':
                posY += step;
                break;
            case 'ArrowLeft':
                posX -= step;
                break;
            case 'ArrowRight':
                posX += step;
                break;
        }
        squareElement.style.top = posY + '%';
        squareElement.style.left = posX + '%';
        squareElement.textContent = `X: ${posX}, Y: ${posY}`;
    }

    function handleKeyDown(event) {
        console.log('Сработал keydown! Клавиша:', event.key);

        // Проверяем только стрелки
        const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

        if (arrowKeys.includes(event.key)) {
            // Вызываем функцию перемещения и передаем нажатую клавишу
            moveSquare(event.key);
        }
    }
    document.addEventListener('keydown', handleKeyDown);
});

