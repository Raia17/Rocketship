

interface Attributes {
    name: string;
    value: string;
}

function createElement(elementString: string, classes?: string[], attrs?: Attributes[]) {

    const element = document.createElement(elementString)

    if (classes) {
        classes.forEach(classe => {
            element.classList.add(classe)
        });
    }   

    if (attrs) {
        attrs.forEach(attr => {
            element.setAttribute(attr.name, attr.value)
        })
    }

    return element
}

const navbar = createElement('div', ['navbar', 'active'], [{name: 'data-id', value: '1'}])
document.appendChild(navbar);