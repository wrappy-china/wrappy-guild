"use strict"
import { ServiceSchema } from "moleculer"

const Tracer = require("moleculer-console-tracer")
const ConsoleTracerService: ServiceSchema = {
    name: "console",
    mixins: [Tracer]
}

export = ConsoleTracerService