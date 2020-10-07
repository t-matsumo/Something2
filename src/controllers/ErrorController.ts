import { Controller } from './contract/Controller'

export class ErrorController implements Controller {
    index = async (_: URL) => {
        return "404 Not Found"
    }
}
