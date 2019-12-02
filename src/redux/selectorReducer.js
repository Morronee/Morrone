export const getStatus = (state) => {
    return state.profilePage.status
}
export const getProfiles = (state) => {
    return state.profilePage.profiles
}
export const getAuth = (state) => {
    return state.auth.isAuth
}
export const getAuthorizedUserId = (state) => {
    return state.auth.id
}