export default (node, textContent, attr) => {
    const newNode = document.createElement(node);
    newNode.textContent = textContent || '';
    if (attr) {
        newNode.setAttribute(attr.name, attr.value);
    }
    return newNode;
};