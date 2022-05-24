let InitialState = {
    Dialogs: [
        {id: "1", name: "Dmitry"},
        {id: "2", name: "Sasha"},
        {id: "3", name: "Timofey"}
    ]
}

const DialogsReducer = (state = InitialState, action) => {
    let stateCopy = {
        ...state
    }

    switch (action.type){

    }

    return stateCopy
}

export default DialogsReducer