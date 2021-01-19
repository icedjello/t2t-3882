import React, {useState} from "react";
import Popup from 'reactjs-popup';


export const PopupRenderer = props => {
    const [value, setValue] = useState(props.value);
    const [open, setOpen] = useState(false);

    const inputId = `input-area-${props.data.id}`

    const popupThingy = () => (
            <div style={{display: 'flex'}}>
                <p>{value}</p>
                <Popup
                    style={{display: 'flex'}}
                    trigger={<button>Edit</button>}
                    position="center center"
                    closeOnDocumentClick
                    open={open}
                >
                    <div style={{display: 'flex'}}>
                        <form
                            onSubmit={handleSubmit}
                            style={{display: 'flex'}}>
                            <input
                                type="text"
                                id={inputId}
                                style={{display: 'flex', width: 125}}/>
                            <button
                                type="submit"
                                style={{display: 'flex'}}
                                onClick={() => setOpen(false)}
                            >Commit
                            </button>
                        </form>
                    </div>
                </Popup>
            </div>
        )
    ;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newValue = document.getElementById(inputId).value;
        const rowNode = props.node;
        rowNode.setDataValue('price', newValue);
    }


    return popupThingy();
}
