import express, { json } from 'express'
import cors from 'cors'
import { selectJSONFile } from './helpers/selectJSONFile'
import { PORT as DEFAULT_PORT } from './constants/constants'
import { API_ROUTE, MAX_REQUEST_LENGTH } from './constants/constants'
import { MSGS } from './constants/messages'
import { showSupportedList } from './helpers/showSupportedList'
import { rootData, typesList } from './helpers/readJSON'


// =========================================================================================================
// =====[ INITIALIZATIONS ]======================================================================================
// =========================================================================================================

const app = express()
app.use(cors())
app.use(json())
const PORT = process.env.PORT || DEFAULT_PORT





// =========================================================================================================
// =====[ ENDPOINTS ]======================================================================================
// =========================================================================================================

// PUBLIC USE ENDPOINT +++++++++++++++++++++++++
app.get(API_ROUTE.PUBLIC_USE_ENDPOINT, async (req,res) => {

    // welcome message -------------------------
    if(Object.keys(req.query).length===0){
        return res.status(200).json(MSGS.WELCOME_MSG)
    }


    // return requested data -------------------
    let result: { [key:string]: { png?:string, svg?:string } } = {}

    const params = req.query
    let keys = Object.keys(params)
    
    const requestLength = Math.min(MAX_REQUEST_LENGTH,keys.length)

    for(let i=0; i<requestLength;i++){
        const brandName = keys[i]
        const data = await selectJSONFile(brandName)

        const keyList = Object.keys(data)
        if(keyList.length!==0 && keyList[0]!==""){
            if(params[brandName]==='png')                                   result[brandName] = { png: data.png }
            else if(params[brandName]==='svg')                              result[brandName] = { svg: data.svg } 
            else if(params[brandName]==='' || params[brandName]==='all')    result[brandName] = data
            else{}
        }
    }

    if(Object.keys(result).length > 0)
        return res.status(200).json({ success:true, data: result })
    
    return res.status(200).json({ success:true, data: {}, error: MSGS.ERROR_MSG })
})




// SHOW SUPPORTED NAME LIST +++++++++++++++++++++++++
app.get(API_ROUTE.ALL_SUPPORTED_LIST, async (req,res) => {
    const msg = MSGS.SUPPORTED_FULL_LIST_MSG
    const data = await showSupportedList(rootData, typesList)
    return res.status(200).json({ success:true, message:msg, data:data })
})



for(let i=0; i<typesList.length; i++) {
    const typeName = typesList[i]
    const endpoint = `${API_ROUTE.ALL_SUPPORTED_LIST}/${typeName.toLowerCase()}`

    // SHOW FULL SUPPORTED LIST FOR DISTINCT CATEGORY ++++++++++++++++++++++++++
    app.get(endpoint, async (req,res) => {
        const data = rootData[i]
        const otherTypes = typesList.filter((type,index) => index!==i)
                                    .map((type,index) => { 
                                        return `${API_ROUTE.ALL_SUPPORTED_LIST}/${type}` 
                                    })
        return res.status(200).json({ success:true, data:{ type:typeName, list:data, other_supported_types:otherTypes } })
    })
}










// =========================================================================================================
// =====[ SERVER LISTENER ]======================================================================================
// =========================================================================================================

app.listen( PORT, () => console.log(`iconZ listening at port ${PORT}...`))

module.exports = app