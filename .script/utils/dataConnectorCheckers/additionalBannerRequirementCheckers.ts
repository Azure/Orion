import { DataConnectorValidationError } from "../validationError";


const requirementBannerText = "this Kusto function"
export function isValidRequirementBanner(requirementBanner: string) {  

    console.log(requirementBanner.includes("http")) 
    if((requirementBanner.includes(requirementBannerText)) && (requirementBanner.includes("http")))
    {
          return true;
    }
    throw new DataConnectorValidationError("Addition requirement banner text does not contain parser.");

}

