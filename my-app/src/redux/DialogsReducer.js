let InitialState = {
    Dialogs: [
        {id: "1", name: "Dmitry"},
        {id: "2", name: "Sasha"},
        {id: "3", name: "Timofey"}
    ]
}

const DialogsReducer = (State = InitialState, Action) => {
    return State
}

export default DialogsReducer