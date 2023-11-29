# z-case-study

## Backend

Go 1.21.4

### Exigences

go version 1.21.4 - https://go.dev/doc/install

### Étapes

`cd backend && go run server.go`

OU

`cd backend && go build && ./zbackend`

root api: localhost:1323/api/v1

### Tests

`go test -coverprofile=coverage.out ./...`

## Frontend

NextJS 14

### Exigences

yarn 1.22.21 (sinon npm)

### Étapes

`cd zfrontend && yarn install && yarn build && yarn start`

servi sur: localhost:3000

### Tests

<table style="text-align:center">
 <tr>
    <td><b style="font-size:20px">Jest</b></td>
    <td><b style="font-size:20px">Cypress</b></td>
 </tr>
 <tr>
    <td><pre>yarn test</pre></td>
    <td><pre>yarn e2e</pre></td>
 </tr>
</table>

## Suggestions

### Real world considerations

Pagination, plus de tests, .env, containerization, plus de commentaires et docs, API auth, connection db, utiliser versions stables en prod, ci/cd, scripts de démarrage, logger

### Autres Questions

Préférences pour graphQL vs REST api?

Définir useState vs useReducer?
