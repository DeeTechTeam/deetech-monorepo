import { StatusCode } from "hono/utils/http-status";
import { Context } from "hono";

export default function response(c:Context, code: StatusCode, data: any = null, error: any = null) {
    c.status(code)
    return c.json({
        status: code > 299 ? false : true,
        data,
        error
    })   
}