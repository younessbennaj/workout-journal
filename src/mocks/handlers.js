import { rest } from "msw";

const handlers = [
    rest.get('/user', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                username: 'John',
            }),
        )
    })
];

export default handlers;