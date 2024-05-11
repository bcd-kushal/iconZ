import root from "../data/_root.json"
import browsers from "../data/browsers.json"
import companies from "../data/companies.json"
import databases from "../data/databases.json"
import engines from "../data/engines.json"
import frameworks from "../data/frameworks.json"
import ide from "../data/ide.json"
import languages from "../data/languages.json"
import others from "../data/others.json"
import search from "../data/search.json"
import servers from "../data/servers.json"
import socials from "../data/socials.json"

const readBrowserJSON            = async( searchKey:keyof typeof browsers )       => { return(browsers[searchKey]) }
const readCompaniesJSON          = async( searchKey:keyof typeof companies )      => { return(companies[searchKey]) }
const readDatabasesJSON          = async( searchKey:keyof typeof databases )      => { return(databases[searchKey]) }
const readEnginesJSON            = async( searchKey:keyof typeof engines )        => { return(engines[searchKey]) }
const readFrameworksJSON         = async( searchKey:keyof typeof frameworks )     => { return(frameworks[searchKey]) }
const readIDEJSON                = async( searchKey:keyof typeof ide )            => { return(ide[searchKey]) }
const readLanguagesJSON          = async( searchKey:keyof typeof languages )      => { return(languages[searchKey]) }
const readOthersJSON             = async( searchKey:keyof typeof others )         => { return(others[searchKey]) }
const readSearchJSON             = async( searchKey:keyof typeof search )         => { return(search[searchKey]) }
const readServersJSON            = async( searchKey:keyof typeof servers )        => { return(servers[searchKey]) }
const readSocialsJSON            = async( searchKey:keyof typeof socials )        => { return(socials[searchKey]) }

export const typesList= [ 'browsers', 'companies', 'databases', 'engines', 'frameworks', 'ide', 'languages', 'others', 'search', 'servers', 'socials' ]
export const rootData = [ root.browsers, root.companies, root.databases, root.engines, root.frameworks, root.ide, root.languages, root.others, root.search, root.servers, root.socials ]
export const readData = [ readBrowserJSON, readCompaniesJSON, readDatabasesJSON, readEnginesJSON, readFrameworksJSON, readIDEJSON, readLanguagesJSON, readOthersJSON, readSearchJSON, readServersJSON, readSocialsJSON ]
