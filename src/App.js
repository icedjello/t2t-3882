import {useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import {PopupRenderer} from "./Components/popupRenderer"
import 'reactjs-popup/dist/index.css';

function App() {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [modalVisible, setModalVisible] = useState(false)
    const [editingRowId, setEditingRowId] = useState(null);

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000, id: 1},
        {make: "Ford", model: "Mondeo", price: 32000, id: 2},
        {make: "Porsche", model: "Boxter", price: 72000, id: 3}
    ]);

    const gridOptions = {
        frameworkComponents: {
            'popupRenderer': PopupRenderer
        },
        getRowNodeId: data => data.id
    }

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    const gridStyles = {
        height: 200,
        width: 550,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

    return (
        <div className="ag-theme-alpine" style={gridStyles}>
            <AgGridReact
                rowData={rowData}
                gridOptions={gridOptions}
                onGridReady={onGridReady}
            >
                <AgGridColumn
                    field="make"
                />
                <AgGridColumn
                    field="model"
                />
                <AgGridColumn
                    field="price"
                    cellRenderer='popupRenderer'
                    cellRendererParams={{
                        gridApi: gridApi
                    }}
                />
            </AgGridReact>
        </div>
    );
}

export default App;
