import { rest } from "msw";
import { records } from "./recordsModel";
import { exercises } from "./exercisesModel";

const handlers = [
    rest.get('/records', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(records)
        )
    }),
    rest.get('/record/:recordId', (req, res, ctx) => {
        let record = records.find(record => {
            return record.id === req.params.recordId;
        })

        return res(
            ctx.status(200),
            ctx.json(record)
        )
    }),
    rest.get('/exercises', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(exercises)
        )
    }),
    rest.get('/exercise/:exerciseId', (req, res, ctx) => {
        let exercise = exercises.find(exercise => {
            return exercise.id === req.params.exerciseId;
        })

        return res(
            ctx.status(200),
            ctx.json(exercise)
        )
    })
];

export default handlers;