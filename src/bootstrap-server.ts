import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cors = require("cors"); 
// Error: server.ts doesn't seem to be Netlify compatible and is not known default. Please replace it with Netlify compatible server.ts.

// It seems like you use "CommonEngine" - for this case your server.ts file should contain following:

import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine';

const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(
  request: Request,
  context: any
): Promise<Response> {
  // Example API endpoints can be defined here.
  // Uncomment and define endpoints as necessary.
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  return await render(commonEngine);
}