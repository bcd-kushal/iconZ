export const findDataNode = ( arr:string[], searchKey:string ) => {
    searchKey = searchKey.toLowerCase()
    const n: number = arr.length
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