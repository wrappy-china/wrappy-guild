"use strict";
const brokerConfig = {
    namespace: "",
    nodeID: null,
    logger: true,
    logLevel: "info",
    logFormatter: "default",
    logObjectPrinter: null,
    transporter: "NATS",
    serializer: "JSON",
    requestTimeout: 10 * 1000,
    retryPolicy: {
        enabled: false,
        retries: 5,
        delay: 100,
        maxDelay: 1000,
        factor: 2,
        check: (err) => err && !!err.retryable,
    },
    maxCallLevel: 100,
    heartbeatInterval: 5,
    heartbeatTimeout: 15,
    tracking: {
        enabled: false,
        shutdownTimeout: 5000,
    },
    disableBalancer: false,
    registry: {
        strategy: "RoundRobin",
        preferLocal: true,
    },
    circuitBreaker: {
        enabled: true,
        threshold: 0.5,
        minRequestCount: 20,
        windowTime: 60,
        halfOpenTime: 10 * 1000,
        check: (err) => err && err.code >= 500,
    },
    bulkhead: {
        enabled: true,
        concurrency: 10,
        maxQueueSize: 100,
    },
    validation: true,
    validator: null,
    metrics: true,
    metricsRate: 1,
    internalServices: true,
    internalMiddlewares: true,
    hotReload: false,
    middlewares: [],
    created(broker) {
    },
    started(broker) {
    },
    stopped(broker) {
    },
    replCommands: null,
};
module.exports = brokerConfig;
//# sourceMappingURL=moleculer.config.js.map