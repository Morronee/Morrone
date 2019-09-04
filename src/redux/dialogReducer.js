const ADD_MESSAGE_IN_DIALOG = 'ADD-MESSAGE-IN-DIALOG';
const ADD_MESSAGE_IN_STATE = 'ADD-MESSAGE-IN-STATE';

let initialState = {
    dialogsPage: {
        dialogsData: [
            { id: 12, nickname: 'Ivan' },
            { id: 32, nickname: 'Petr' },
            { id: 42, nickname: 'Vova' },
            { id: 23, nickname: 'Alex' },
            { id: 7, nickname: 'Test Props2' }
        ],
        messagesData: [
            { id: 1, nick: 'Kenny', message: 'Hi, man', author: 'other' },
            { id: 2, nick: 'Me', message: 'Hi ^_^', author: 'me' },
            { id: 3, nick: 'Kenny', message: 'How are you?', author: 'other' },
            { id: 4, nick: 'Me', message: 'Ty, Im fine, u?', author: 'me' },
            { id: 5, nick: 'Kenny', message: 'Lol, im good', author: 'other' }
        ],
        newMessage: ''
    }
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE_IN_DIALOG:
            let newMessage = {
                id: 123,
                message: state.dialogsPage.newMessage,
                nick: 'Me',
                author: 'Me'
            }
            state.dialogsPage.messagesData.push(newMessage)
            state.dialogsPage.newMessage = ''
            return state;

        case ADD_MESSAGE_IN_STATE: {
            state.dialogsPage.newMessage = action.text
            return state;
        }
        default:
            return state;
    }
    
}
export const addMessageInStateActionCreate = (textEl) => ({ type: 'ADD-MESSAGE-IN-STATE', text: textEl })
export const addMessageInDialogActionCreate = () => ({ type: 'ADD-MESSAGE-IN-DIALOG' })


export default dialogReducer;
