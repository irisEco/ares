import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from './style'
const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return (
            <Loading>
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </Loading>
        )
    },
})

export default () => <LoadableComponent /> 