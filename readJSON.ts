import browsers from "./data/browsers.json"
import companies from "./data/companies.json"
import databases from "./data/databases.json"
import engines from "./data/engines.json"
import frameworks from "./data/frameworks.json"
import ide from "./data/ide.json"
import languages from "./data/languages.json"
import others from "./data/others.json"
import search from "./data/search.json"
import servers from "./data/servers.json"
import socials from "./data/socials.json"

export const readBrowserJSON = async( searchKey:string ) => { return(browsers[searchKey]) }
export const readCompaniesJSON = async( searchKey:string ) => { return(companies[searchKey]) }
export const readDatabasesJSON = async( searchKey:string ) => { return(databases[searchKey]) }
export const readEnginesJSON = async( searchKey:string ) => { return(engines[searchKey]) }
export const readFrameworksJSON = async( searchKey:string ) => { return(frameworks[searchKey]) }
export const readIDEJSON = async( searchKey:string ) => { return(ide[searchKey]) }
export const readLanguagesJSON = async( searchKey:string ) => { return(languages[searchKey]) }
export const readOthersJSON = async( searchKey:string ) => { return(others[searchKey]) }
export const readSearchJSON = async( searchKey:string ) => { return(search[searchKey]) }
export const readServersJSON = async( searchKey:string ) => { return(servers[searchKey]) }
export const readSocialsJSON = async( searchKey:string ) => { return(socials[searchKey]) }