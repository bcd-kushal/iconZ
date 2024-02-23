import { readBrowserJSON, readCompaniesJSON, readDatabasesJSON, readEnginesJSON, readFrameworksJSON, readIDEJSON, readLanguagesJSON, readOthersJSON, readSearchJSON, readServersJSON, readSocialsJSON } from "./readJSON"
import root from "./data/_root.json"

const rootData = [ root.browsers, root.companies, root.databases, root.engines, root.frameworks, root.ide, root.languages, root.others, root.search, root.servers, root.socials ]
const readData = [ readBrowserJSON, readCompaniesJSON, readDatabasesJSON, readEnginesJSON, readFrameworksJSON, readIDEJSON, readLanguagesJSON, readOthersJSON, readSearchJSON, readServersJSON, readSocialsJSON ]

const findDataNode = ( arr:string[], searchKey:string ) => {
    searchKey = searchKey.toLowerCase()
    const n = arr.length
    for(let i=0;i<n;i++){
        const x = arr[i]
        if(x===searchKey){ 
            return( { complete: x } )
        }
        const index = x.indexOf(searchKey)
        if(index>-1){ return( { partial: x } ) }
    }
    return( { notfound: -1 })
}

export const selectJSONFile = async ( searchKey:string ) => {
    let partialData: any[] = []
    const n = rootData.length
    for(let i=0;i<n;i++){
        const arr = rootData[i]
        const result = findDataNode(arr,searchKey)
        if(Object.keys(result).includes('complete'))
            return( readData[i](result.complete) )
        else if(Object.keys(result).includes('partial')){
            partialData.push({from:readData[i],key:result.partial})
        }
    }
    if(partialData.length>0){
        return(partialData[0]["from"](partialData[0].key))
    }
    return( {"":""} )
}