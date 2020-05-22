"use strict";
const PromService = require("moleculer-prometheus");
const PrometheusService = {
    name: "prometheus",
    mixins: [PromService],
    settings: {
        port: 3030,
        collectDefaultMetrics: true,
        timeout: 5 * 1000,
    }
};
module.exports = PrometheusService;
//# sourceMappingURL=prometheus.service.js.map