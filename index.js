const express = require("express")
const app = express()
const { Kafka } = require('kafkajs')

app.use(express.json())

const kafka = new Kafka({
    clientId: 'my-kafka-app-topics',
    brokers: ['localhost:9092', 'localhost:9092']
})

const admin = kafka.admin()

app.get("/", (req,res) => {
    console.log("Kafka-topics-hit")
    res.json("Kafka server is up and running")
})

app.get("/topic/all", async (req,res) => {
    console.log("Get all topics");
    let allTopics = await admin.listTopics()
    return res.json({
        totalTopics: allTopics.length,
        topics: allTopics
    })
})

app.post("/topic/create", async(req,res) => {
    console.log("Create a new topic");
    let topicName = req.body.topicName
    await admin.createTopics({
        topics: [{
            topic: topicName
        }],
    })
    res.json({
        message: "Topic created"
    })
})

app.listen(3000, () => {
    console.log("Server started at 3000");
})



