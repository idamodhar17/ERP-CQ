// export default (fn) => {
//     return (req, res, next) => {
//         fn(req, res, next).catch(next);
//     };
// };
export default function wrapAsync(handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (err) {
            next(err);
        }
    };
}