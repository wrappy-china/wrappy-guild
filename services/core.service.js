"use strict";
const Helper_1 = require("../utils/Helper");
const CoreService = {
    name: "core",
    version: 1,
    settings: {},
    dependencies: [],
    actions: {
        /**
        * Get node ID of responding service
        *
        * @remarks
        * Authorization: Administrator
        *
        * @param none - no parameter required
        * @returns Node ID of the responding service
        */
        node(ctx) {
            ctx.broker.emit("core::node", ctx.broker.nodeID);
            return `${ctx.broker.nodeID}`;
        },
        info: {
            params: {
                id: { type: "string" },
                comment: { type: "object", optional: true }
            },
            handler(ctx) {
                Helper_1.Helper.log(this, `Meta User: ${JSON.stringify(ctx.meta.user)}`);
                return ctx.params.id;
            }
        },
    },
    events: {
        "core::node": {
            handler(payload) {
                this.logger.info(`Event: "core::node" -> ${payload}`);
            }
        }
    },
    methods: {},
    created() {
    },
};
module.exports = CoreService;
//# sourceMappingURL=core.service.js.map