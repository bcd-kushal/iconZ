import { readData, rootData } from "./readJSON"
import { findDataNode } from "./findDataNode"

export const selectJSONFile = async ( searchKey:string ) => {
    let partialData: any[] = []
    const n = rootData.length
    for(let i=0;i<n;i++){
        const arr = rootData[i]
        const result = findDataNode(arr,searchKey)
        if(Object.keys(result).includes('complete'))
            return( await readData[i](result.complete) )
        else if(Object.keys(result).includes('partial')){
            partialData.push({from:readData[i],key:result.partial})
        }
    }
    if(partialData.length>0){
        return(partialData[0]["from"](partialData[0].key))
    }
    return( {"":""} )
}