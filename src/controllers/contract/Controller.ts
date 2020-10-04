export interface Controller {
    /** GET */
    index?: () => Promise<Object>
    /** POST */
    create?: () => Promise<Object>
    /** PUT */
    update?: () => Promise<Object>
    /** DELETE */
    destroy?: () => Promise<Object>
}
