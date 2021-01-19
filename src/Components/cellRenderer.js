export const CellRenderer = params => {
    let showValue = params.value;
    const eDiv = document.createElement('div');
    // const ePopup = document.createElement('div');
    // ePopup.innerHTML = params.popupThingy()

    eDiv.innerHTML = `
        <p style="display: inline-flex;">${showValue}</p>
<!--        <button style="display: inline-flex">Edit</button>-->
    `;

    // const eButton = eDiv.querySelector('button');
    // eButton.addEventListener('click', () => {
    //     params.toggleModal(params.data.id);
    // })
    return eDiv;
}

