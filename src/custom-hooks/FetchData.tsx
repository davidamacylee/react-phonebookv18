import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])
  
    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // UseEffect on mount
    // with no second argument, useEffect occurs whenever there is a change to the page
    // with empty array as second argument, useEffect occurs only on mount
    // with array containing variable name componentName it will watch for changes just on that one component
    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch }
}