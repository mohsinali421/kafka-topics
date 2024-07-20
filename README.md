# kafka-topics
This is the Admin Portal of kafkajs. Here topics related things are managed like creation of topic, fetching, etc

### Before Executing
- make sure kafka broker is running on port 9092
- npm install
- hit the api for /all - all topics and /create - for creating new topic

## To Start a broker
- make sure Ubuntu is setup in windows
- start zookeeper with config
- `zookeeper-server-start.sh   ~/kafka_2.13-3.7.0/config/zookeeper.properties`
- start kafka broker
- `kafka-server-start.sh     ~/kafka_2.13-3.7.0/config/server.properties`
