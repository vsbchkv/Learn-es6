import createNode from './createNode';
/**
 * Create DOM-nodes of tables and tables elements joined to js-fragment and appends it into body
 * @param {array} tables
 */
const renderTables = (tables) => {

    const fragment = document.createDocumentFragment();

    const tablesArr = tables.map((item) => {
        const { tableName, tableHeaders, tableRows } = item;
        const htmlTable = createNode('table', null, { name: 'border', value: '1' });
        const tCaption = createNode('caption', tableName);
        const tableHeading = createNode('tr');
        const tHead = tableHeaders.map((head) => {
            return createNode('th', head);
        });

        const tRows = tableRows.map((item) => {
            const heads = tableHeaders;
            const tCells = heads.map((head) => {
                return createNode('td', item[head]);

            });
            const tRow = createNode('tr');
            tRow.append(...tCells);
            return tRow;
        });
        tableHeading.append(...tHead);
        htmlTable.append(tCaption, tableHeading, ...tRows);
        return htmlTable;
    });
    fragment.append(...tablesArr);
    document.body.append(fragment);
};

export default renderTables;