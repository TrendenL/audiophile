import React from 'react'

export const DataContext = React.createContext()

export default function ContextProvider(props){

    

    return (
        <DataContext.Provider>
            {props.children}
        </DataContext.Provider>
    )
}