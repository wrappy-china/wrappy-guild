import { ResponseData } from "../model/ResponseData"
export class Helper { 
    private static readonly RESPONSE_SUCCESS = "SUCCESS"
    private static readonly RESPONSE_FAILED = "FAILED"

    static log(base: any, text: string): void {
      base.logger.info("**************************")
      base.logger.info(text)
      base.logger.info("**************************")
    }
    
    static response():ResponseData { 
       const response = new ResponseData()
       response.data = 100
       response.description = Helper.RESPONSE_SUCCESS
       return response 
    } 
 } 