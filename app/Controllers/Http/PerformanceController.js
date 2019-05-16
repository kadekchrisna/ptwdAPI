'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Performance = use('App/Models/Performance')
const { validate } = use('Validator')

/**
 * Resourceful controller for interacting with performances
 */
class PerformanceController {
    /**
     * Show a list of all performances.
     * GET performances
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        try {
            const perform = await Performance.all()
            return response.status(200).json({
                data: perform
            })
        } catch (error) {
            console.log(error);
            return response.status(400).json({
                message: 'Something went wrong!'
            })

        }
    }

    /**
     * Render a form to be used for creating a new performance.
     * GET performances/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {

    }

    /**
     * Create/save a new performance.
     * POST performances
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {
            const rules = {
                terget_time: 'required|number',
                work_time: 'required|number',
                achievment: 'required|number',
                over_time: 'required|number',
                info: 'required|string'
            }
            const validation = await validate(request.all(), rules)
            if (validation.fails())
                return response.status(400).json({
                    message: validation.messages()
                })


            const performData = request.only(['terget_time', 'work_time', 'achievment', 'over_time', 'info'])
            const perform = await Performance.create(performData)

            return response.status(200).json({
                data: perform
            })

        } catch (error) {
            console.log(error);
            return response.status(400).json({
                message: 'Something went wrong!'
            })

        }
    }

    /**
     * Display a single performance.
     * GET performances/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
    }

    /**
     * Render a form to update an existing performance.
     * GET performances/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {
    }

    /**
     * Update performance details.
     * PUT or PATCH performances/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
    }

    /**
     * Delete a performance with id.
     * DELETE performances/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
    }
}

module.exports = PerformanceController
