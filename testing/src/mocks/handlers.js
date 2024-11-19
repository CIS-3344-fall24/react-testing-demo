import {rest} from 'msw';

export const handlers = [
    rest.get(`${process.env.REACT_APP_API_ENDPOINT}`, (req, res, ctx) =>{
        return res(
            ctx.status(200),
            ctx.json({
                "data": [
                    "A cat can sprint at about thirty-one miles per hour."
                ]
            })
        )
    }),
]