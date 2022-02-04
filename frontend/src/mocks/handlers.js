import { rest } from 'msw';

import { transactions, transactionsWithDate } from './transactions';

export const handlers = [
    rest.get(`${process.env.API_SERVER}/transactions`, (req, res, ctx) => {
        const [year, month, _] = req.url.searchParams.values();
        const transactionInDate = transactionsWithDate[`${year}-${month}`];

        return res(
            ctx.json({
                data: transactionInDate || transactions,
            }),
        );
    }),
];
