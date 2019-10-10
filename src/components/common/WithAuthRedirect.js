import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

export const WithAuthRedirect = (Component) => {

        class RedirectComponent extends React.Component {
                
                render() {
                        if (!this.props.auth) return <Redirect to='/login' />

                        return <Component {...this.props} />
                }
        }
        let mapStateToPropsForRedirect = (state) => {
                return {
                    auth: state.auth.isAuth
                }
            }
            
        let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

        return ConnectedAuthRedirectComponent
}