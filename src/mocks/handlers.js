import { rest } from "msw";
import { records } from "./recordsModel";
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
            ctx.json(record)
        )
    })
];

export default handlers;