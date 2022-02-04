import { rest } from 'msw';

import { transactions } from './transactions';

export const handlers = [
    rest.get(`${process.env.API_SERVER}/transactions`, (req, res, ctx) => {
        return res(
            ctx.json({
                data: transactions,
            }),
        );
    }),
];
