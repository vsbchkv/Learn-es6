import createNode from './createNode';

const newLoader = () => {
    const addLoader = (params) => {
        const { htmlTag, text, idName } = params;
        const loader = createNode(htmlTag, text, { name: 'id', value: idName });
        document.body.append(loader);
    };

    const hideLoader = (params) => {
        const { idName } = params;
        const loader = document.getElementById(idName);
        loader.remove();
    };

    return {
        addLoader,
        hideLoader
    };
};

const loader = newLoader();

export { loader };