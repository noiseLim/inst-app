import React from 'react';
import InstServiceContext from '../inst-service-context';

const WithInstService = () => (Wrapped) => {
    return (props) => {
        return (
            <InstServiceContext.Consumer>
                {
                    (InstService) => {
                        return <Wrapped {...props} InstService={InstService}/>
                    }
                }
            </InstServiceContext.Consumer>
        )
    }
};

export default WithInstService;