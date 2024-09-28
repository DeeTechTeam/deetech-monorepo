import { t } from "elysia";

function pick(schema: { shape: { [x: string]: any; }; }, fields: any[]) {
    const pickedFields: { [x: string]: any } = {};
    fields.forEach((field: string | number) => {
        pickedFields[field] = schema.shape[field];
    });
    return t.Object(pickedFields);
}

export { pick };