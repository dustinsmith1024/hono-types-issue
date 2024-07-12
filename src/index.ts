import { Hono } from 'hono'
import { Context } from 'hono';

export async function proxyToDcRequest(c: Context, request: Request, dcName: string) {
  if (!dcName) {
    c.status(400);
    return c.json({ message: 'DC not found' });
  }

  const routeToDc = c.get('dcs').find((dc) => dc.name === dcName);

  if (!routeToDc) {
    c.status(500);
    return c.json({ message: `Could not find a DC for ${dcName}. Check DC store.` });
  }

  // change the hostname to match storeDc.url and then fetch the request with original request headers
  const originalUrl = new URL(c.req.url);
  const newUrl = new URL(routeToDc.url + originalUrl.pathname + originalUrl.search);

  // https://hono.dev/guides/examples#proxy
  const response = await fetch(newUrl, request);
  return new Response(response.body, response);
}

const app = new Hono()

// Doens't look like this is required to produce the error, but this is what I am doing in my app.
app.all('*', async (c: Context, next: Function) => {
  c.set('dcs', c.env.DATACENTERS);
});

app.get('/', (c) => {
  const dcs = c.get('dcs');
  console.log(dcs);
  return c.text('Hello Hono!')
})

export default app;
