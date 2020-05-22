"use strict"
import { ServiceSchema } from "moleculer"

const PromService = require("moleculer-prometheus")
const PrometheusService: ServiceSchema = {
    name: "prometheus",
    mixins: [PromService],
    settings: {
        port: 3030,
        collectDefaultMetrics: true,
        timeout: 5 * 1000, 
    }
}

export = PrometheusService