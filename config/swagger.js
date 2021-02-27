'use strict'

module.exports = {
    /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

    enable: true,
    specUrl: '/swagger.json',

    options: {
        swaggerDefinition: {
            info: {
                title: 'Call Center API Documentation',
                version: '0.9.0'
            },

            basePath: '/api',

            securityDefinitions: {
                bearerAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization'
                },

                callCenterAccount: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Call-Center-Account'
                }
            }
        },

        // Path to the API docs
        apis: ['docs/**/*.yml']
    }
}
