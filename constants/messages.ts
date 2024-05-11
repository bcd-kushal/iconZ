import { API_ROUTE, MAX_REQUEST_LENGTH } from "./constants"

// =========================================================================================================
// =====[ MESSAGES ]======================================================================================
// =========================================================================================================

export const MSGS = {
    WELCOME_MSG: {
        success: true,
        data: {
            message: "Welcome to iconZ",
            get_started: {
                endpoint: `${API_ROUTE.PUBLIC_USE_ENDPOINT}/`,
                request_type: "GET",
                format: `${API_ROUTE.PUBLIC_USE_ENDPOINT}/?brand_name=svg|png|all`
            },
            supported_formats: [ "svg", "png" ],
            example: "/?gatsby=svg&scss=all&sqlite=png",
            max_request_length: MAX_REQUEST_LENGTH,
            full_supported_list: API_ROUTE.ALL_SUPPORTED_LIST,
            about: {
                name: "Kushal Kumar Saha",
                portfolio: "https://portfolio.kushalkumarsaha.com/",
                linkedin: "https://linkedin.com/in/dev-kushal/",
                github: "https://github.com/bcd-kushal/iconZ",
            }
        }
    },
    ERROR_MSG: `No valid brand names were requested. Check full supported list at ${API_ROUTE.ALL_SUPPORTED_LIST}`,
    SUPPORTED_FULL_LIST_MSG: `Showing first ${MAX_REQUEST_LENGTH} names from each category... Get a full list at ${API_ROUTE.ALL_SUPPORTED_LIST}/<category_name>`,
}