"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseData_1 = require("../model/ResponseData");
class Helper {
    static log(base, text) {
        base.logger.info("**************************");
        base.logger.info(text);
        base.logger.info("**************************");
    }
    static response() {
        const response = new ResponseData_1.ResponseData();
        response.data = 100;
        response.description = Helper.RESPONSE_SUCCESS;
        return response;
    }
}
exports.Helper = Helper;
Helper.RESPONSE_SUCCESS = "SUCCESS";
Helper.RESPONSE_FAILED = "FAILED";
//# sourceMappingURL=Helper.js.map