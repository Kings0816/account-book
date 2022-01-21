function component() {
    var element = document.createElement('div');
    element.innerHTML = 'React Boilerplate';
    return element;
}

const root = document.querySelector('#root');
root.appendChild(component());
