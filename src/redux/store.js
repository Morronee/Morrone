import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
    getState() {
        return this._state;
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, all right', nick: 'Kenny' },
                { id: 2, message: 'Test .map', nick: 'Larry' },
                { id: 3, message: 'Test props', nick: 'Henry' },
                { id: 4, message: 'Test props 2', nick: 'Bob' },
                { id: 5, message: 'Test props from state 2', nick: 'Log' }
            ],
            newPostText: ''
        },
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
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state);
    }





}

export default store;
window.store = store;