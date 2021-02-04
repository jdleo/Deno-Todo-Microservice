## React To-Do App, powered by Deno

This app is a POC for a Microservice (CRUD) for a to-do list.

**Technology**

-   Frontend: React
-   API: Deno, Typescript
-   Infrastructure: Docker, Docker Swarm
-   Database: MongoDB

**Build & Run Swarm**

```
docker-compose -f stack.yml up --build
```

**Run Swarm**

```
docker-compose -f stack.yml up
```

**Frontend**

```
localhost:8000
```

**API: Create**

```
curl --request POST \
  --url http://localhost:3001/todos \
  --header 'Content-Type: application/json' \
  --data '{
	"text": "this is a note 111"
}'
```

**API: Read**

```
curl --request GET \
  --url http://localhost:3001/todos/601868a38acf972ff1664ae1
```

**API: Update**

```
curl --request PUT \
  --url http://localhost:3001/todos/60186817becc9315f0ccf7fc \
  --header 'Content-Type: application/json' \
  --data '{
	"text": "updated text..."
}'
```

**API: Delete**

```
curl --request DELETE \
  --url http://localhost:3001/todos/601868a38acf972ff1664ae1
```

**API: List**

```
curl --request GET \
  --url http://localhost:3001/todos
```
