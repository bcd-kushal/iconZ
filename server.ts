import express, { json } from 'express'
import cors from 'cors'
import { selectJSONFile } from './jsonNavigator'

const app = express()
app.use(cors())
app.use(json())
const PORT = process.env.PORT || 5001

// ==================================================================================
// ==================================================================================

// @GET
app.get('/', async (req,res) => {
    let result = {}

    const params = req.query
    let keys = Object.keys(params)
    console.log(params)
    
    const MAX_REQUEST_LENGTH = Math.min(20,keys.length)

    for(let i=0; i<MAX_REQUEST_LENGTH;i++){
        const key = keys[i]
        const data = await selectJSONFile(key)
        if(Object.keys(data).length!==0){
            if(params[key]==='png')                             result[key] = { png: data.png }
            else if(params[key]==='svg')                        result[key] = { svg: data.svg } 
            else if(params[key]==='' || params[key]==='all')    result[key] = data
            else{}
        }
    }

    return res.status(200).json({ success:true, data: result })
})

// ==================================================================================
// ==================================================================================

app.listen( PORT, () => console.log(`Iconz listening at port ${PORT}...`))