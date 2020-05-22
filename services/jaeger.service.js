"use strict";
const JaegerService = require("moleculer-jaeger");
const JaegarTracerService = {
    name: "jaeger",
    mixins: [JaegerService],
    settings: {
        host: "moleculer.networkgateway.net",
        port: 6832,
        type: "Const",
        options: {
            decision: 1
        }
    }
};
module.exports = JaegarTracerService;
//# sourceMappingURL=jaeger.service.js.map