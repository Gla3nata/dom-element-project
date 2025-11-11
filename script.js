const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function(text) {
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
    `;

    element.textContent = text;
    document.body.appendChild(element);

    return element;
};

const myElement = new DomElement('.block', '100px', '200px', 'lightblue', '20px');
myElement.createElement('какой то текст');
