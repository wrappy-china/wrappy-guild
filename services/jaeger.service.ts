"use strict"
import { ServiceSchema } from "moleculer"

const JaegerService = require("moleculer-jaeger")
const JaegarTracerService: ServiceSchema = {
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
}

export = JaegarTracerService