import React from 'react';
import dialogReducer, {addMessageInDialogActionCreate, deleteMessage} from "./dialogReducer";

let state = {
    dialogsPage: {
        messagesData: [
            { id: 1, nick: 'Kenny', message: 'Hi, man', author: 'other' },
            { id: 2, nick: 'Me', message: 'Hi ^_^', author: 'me' },
            { id: 3, nick: 'Kenny', message: 'How are you?', author: 'other' },
            { id: 4, nick: 'Me', message: 'Ty, Im fine, u?', author: 'me' },
            { id: 5, nick: 'Kenny', message: 'Lol, im good', author: 'other' }
        ]
    }
}

it('length increment +1', () => {
    let action = addMessageInDialogActionCreate('new message completed')

    let newState = dialogReducer(state, action)

    expect(newState.dialogsPage.messagesData.length).toBe(6)
});

it('text add correct', () => {
    let action = addMessageInDialogActionCreate('new message completed')

    let newState = dialogReducer(state, action)

    expect(newState.dialogsPage.messagesData[newState.dialogsPage.messagesData.length - 1].message).toBe('new message completed')
});

it('after delete, length of message should be descrement', () => {
    let action = deleteMessage(1)

    let newState = dialogReducer(state, action)

    expect(newState.dialogsPage.messagesData.length).toBe(4)
})