import React from 'react';

const DataFetch = ({status}:{status:string}) => {
    if(status === 'loading'){
       return <h2>Data is Loading</h2>
    }
    else if(status === 'error'){
        return<h2>Data could not fetch</h2>
    }
    return (
        <div>
            <h2>Data is loading...</h2>
            <h2>Error. Data could not be fetched</h2>
            <h2>Data Fetched successfully</h2>
        </div>
    );
};

export default DataFetch;