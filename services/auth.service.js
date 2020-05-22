"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
const jwt = __importStar(require("jsonwebtoken"));
const { UnAuthorizedError } = require("moleculer-web").Errors;
const Helper_1 = require("../utils/Helper");
const AuthService = {
    name: "auth",
    version: 1,
    settings: {
        JWT_SECRET: process.env.JWT_SECRET || "W3Ar3Flatt3ningTheW0rld",
    },
    dependencies: [],
    actions: {
        token(ctx) {
            const token = this.generateToken({
                id: "100-9999",
                username: "aguel"
            });
            return token;
        },
        /**
        * Login action.
        *
        * Required params:
        * 	- 'username'
        *   - 'password'
        *
        * @param {any} ctx
        * @returns
        */
        authenticate: {
            rest: "POST /",
            params: {
                username: { type: "string", min: 4, max: 16, pattern: /^[a-zA-Z0-9]+$/ },
                password: { type: "string", min: 4, max: 16 }
            },
            handler(ctx) {
                let response = Helper_1.Helper.response();
                const username = ctx.params.username;
                const password = ctx.params.password;
                let user = null;
                if (username == "admin")
                    user = {
                        id: "000-000",
                        name: "Alex Ramil Aguel"
                    };
                if (user) {
                    response.data = {
                        token: this.generateToken(user),
                        user: user
                    };
                    return response;
                }
                else
                    return Promise.reject(new UnAuthorizedError("Invalid Credential", ctx.params));
            }
        },
        /**
         * Verify a JWT token
         *
         * @param {any} ctx
         * @returns
         */
        verifyToken(ctx) {
            return this.verify(ctx.params.token, this.settings.JWT_SECRET);
        },
        /**
         * Get user by JWT token (for API GW authentication)
         *
         * @actions
         * @param {String} token - JWT token
         *
         * @returns {Object} Resolved user
         */
        resolveToken: {
            cache: {
                keys: ["token"],
                ttl: 60 * 60 // 1 hour
            },
            params: {
                token: "string"
            },
            handler(ctx) {
                return new this.Promise((resolve, reject) => {
                    jwt.verify(ctx.params.token, this.settings.JWT_SECRET, (err, decoded) => {
                        if (err)
                            return reject(err);
                        resolve(decoded);
                    });
                })
                    .then(decoded => {
                    if (decoded.id)
                        return decoded;
                });
            }
        },
    },
    methods: {
        /**
         * Generate a JWT token from user entity
         *
         * @param {Object} user
         */
        generateToken(user) {
            return jwt.sign({
                id: user.id,
                name: user.name
            }, this.settings.JWT_SECRET, { expiresIn: 604800 });
        },
    },
};
module.exports = AuthService;
//# sourceMappingURL=auth.service.js.map