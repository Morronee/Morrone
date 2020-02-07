import React, {Suspense} from 'react'

export const LazyLoad = (Component) => {
        return (props) => {
                return (<Suspense fallback={<div>Load...</div>}><Component {...props} /></Suspense>)
                }


        return LazyLoad
}