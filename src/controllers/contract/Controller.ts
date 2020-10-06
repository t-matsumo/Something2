export type Action = (url: URL) => Promise<Object>

export interface Controller {
    /** GET */
    index?: Action
    /** GET */
    show?: Action
    /** POST */
    create?: Action
    /** PUT */
    update?: Action
    /** DELETE */
    destroy?: Action
}
