"use strict"
import { ServiceSchema } from "moleculer"
import { Helper } from "../utils/Helper"

const CoreService: ServiceSchema = {
    name: "core",
    version: 1,
    settings: {
    },
    dependencies: [],
    actions: {

        /**
        * Get node ID of responding service
        * 
        * @remarks
        * Authorization: Required
        * 
        * @param none - no parameter required
        * @returns Node ID of the responding service
        */
        node(ctx) {
            /*** Action Definition Logging ***/
            this.logger.info(`Parameter: ${JSON.stringify(ctx.params)}`)

            ctx.broker.emit("core::node", ctx.broker.nodeID)
            return `${ctx.broker.nodeID}`
        },
        info: {
            params: {
                id: { type: "string" },
                comment: { type: "object", optional: true }
            },
            handler(ctx) {
                /*** Action Definition Logging ***/
                this.logger.info(`Parameter: ${JSON.stringify(ctx.params)}`)

                Helper.log(this, `Meta User: ${JSON.stringify(ctx.meta.user)}`)
                return ctx.params.id
            }
        },
    },

    events: {
        "core::node": {
            handler(payload) {
                this.logger.info(`Event: "core::node" -> ${payload}`)
            }
        }
    },

    methods: {
    },

    created() {
    },

	/**
	 * Service started lifecycle event handler
	 */
    // async started() {
    // },

	/**
	 * Service stopped lifecycle event handler
	 */
    // async stopped() {
    // },
}

export = CoreService
