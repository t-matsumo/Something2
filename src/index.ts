import http from 'http'

import { Controller } from './controllers/contract/Controller'
import { ContractController } from './controllers/ContractController'
import { ErrorController } from './controllers/ErrorController'

const hostname = '127.0.0.1'
const port = 3000

const routing: { [controllerName: string]: Controller } = {
    'contracts': new ContractController,
    'error': new ErrorController,
}

const server = http.createServer((request, response) => {
    console.log('request ', request.url)

    const controllerName = request.url ? request.url.split('/')[1] : 'error'
    const route = routing[controllerName] ? routing[controllerName] : routing['error']

    const sendResponse200 = (contents: Object) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(contents));
    }
    const sendResponse404 = () => {
        response.writeHead(404, { 'Content-Type': 'application/octet-stream' });
        response.end("404 not found", 'utf-8');
    }

    var method: (() => Promise<Object>) | undefined
    switch (request.method) {
        case 'GET':
            method = route.index
            break;
        case 'POST':
            method = route.create
            break;
        case 'PUT':
            method = route.update
            break;
        case 'DESTROY':
            method = route.destroy
            break;
    }
    method ? method().then(sendResponse200).catch(sendResponse404) : sendResponse404()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
