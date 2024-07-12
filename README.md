
With hono 4.4.6

```sh

➜  my-app npm run tsc

> tsc
> tsc --noEmit
```


Swap to latest hono in package json

```sh
➜  my-app npm i

changed 1 package, and audited 85 packages in 986ms

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
➜  my-app npm run tsc

> tsc
> tsc --noEmit

src/index.ts:13:40 - error TS7006: Parameter 'dc' implicitly has an 'any' type.

13   const routeToDc = c.get('dcs').find((dc) => dc.name === dcName);
                                          ~~


Found 1 error in src/index.ts:13

➜  my-app
```