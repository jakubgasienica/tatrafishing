'use strict';

/**
 * fishery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fishery.fishery');
