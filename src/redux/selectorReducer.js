import { createSelector } from "reselect"

export const getStatus = (state) => {
    return state.profilePage.status
}
export const getProfiles = (state) => {
    return state.profilePage.profiles
}
// export const getProfilesSelector = (state) => {
//     return getProfiles(state).filter(u => true)
// }
// export const getProfilesSuperSelector = createSelector(getProfiles, (profiles) => {
//     return profiles.filter(u => true) 
// })





export const getAuth = (state) => {
    return state.auth.isAuth
}
export const getAuthorizedUserId = (state) => {
    return state.auth.id
}