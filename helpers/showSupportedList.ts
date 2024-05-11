import { MAX_REQUEST_LENGTH } from "../constants/constants"

type SupportedListType = { [key:string]: string[] }

export const showSupportedList = async ( data:string[][], keys:string[] ): Promise<SupportedListType> => {
    let result: SupportedListType = {}
    let keyListLength = keys.length 

    for(let i=0; i<keyListLength; i++) {
        const n = data[i].length
        if(n > 0)
            result[keys[i]] = data[i].slice(0,Math.min(MAX_REQUEST_LENGTH,n))
    }

    return result
}