import { fastify } from "fastify";
// import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./dataabase-postgres.js";

const app = fastify()

// const database = new DatabaseMemory()
const database = new DatabasePostgres()

app.get('/videos/:id', (request, reply) => {
    
    const video = request.params.id

    return video

})

app.get('/videos', async (request, reply) => {

    const search = request.query.id

    const videos = await database.list(search)

    return videos
    
})

app.post('/videos', async (request, reply) => { // metodo cria um video na rota pela API

    const {
        title,
        description,
        duration
    } = request.body

    await database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()

})

app.delete('/videos/:id', async (request, reply) => {

    const videoId = request.params.id

    await database.delete(videoId)

    return reply.status(204).send("Deleted") // status 204 para deletado

})


app.put('/videos/:id', async (request, reply) =>{
    
    const videoId = request.params.id
    const { title, description, duration } = request.body

    await database.update(videoId, {
        title,
        description,
        duration
    })
    
    return reply.status(204).send() // 204 --> teve sucesso mas é uma resposta vazia
}) // PUT http://localhost:3333/video/3 -> Atualiza o video de id 3

app.listen({
    port: process.env.PORT || 3333,
})
