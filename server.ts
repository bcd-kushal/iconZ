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
    // GREET USER ++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if(Object.keys(req.query).length===0){
        return res.status(200).json({
            "message": "Welcome to IconZ!",
            "instructions": "To get started, send a GET request to / with your desired brand name as a query parameter.",
            "example_endpoint": "/?gatsby=svg&scss=all&sqlite=png",
            "supported_formats": [ "svg", "png" ]
        })
    }

    // HANDLE REAL REQUEST ++++++++++++++++++++++++++++++++++++++++++++++++++++++
    let result = {}

    const params = req.query
    let keys = Object.keys(params)
    
    const MAX_REQUEST_LENGTH = Math.min(20,keys.length)  // total of 20 requests per bandwidth

    for(let i=0; i<MAX_REQUEST_LENGTH;i++){
        const key = keys[i]
        // GET DATA ---------------------------
        const data = await selectJSONFile(key) 
        // FILTER DATA ------------------------
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
