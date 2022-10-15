"use strict";
/**
 * @swagger
 * /user:
 *  get:
 *    description: something
 *    responses:
 *      '200':
 *        description: Clientes obtidos com sucesso
 */
/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                    email:
 *                     type: integer
 *                    name:
 *                      type: string
 *                    firstName:
 *                      type: string
 *                    lastName:
 *                      type: string
 *                    createdAt:
 *                      type: string
 *                    updatedAt:
 *                      type: string
 *
 *
 *
 */
