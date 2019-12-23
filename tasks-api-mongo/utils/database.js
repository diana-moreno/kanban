const { MongoClient, ObjectId } = require('mongodb')

let client

function database(url) {
  return client
    ? client
    : (() => {
      let connectionSingleton

      // crear un nuevo cliente según Mongo
      client = new MongoClient(url, { useUnifiedTopology: true })

      const connectOriginal = client.connect.bind(client)

      client.connect = function() { // está redefiniendo el método original para que al llamarlo, si ya existe, no cree uno nuevo (singleton)
/*        return connectionSingleton
          ? Promise.resolve(connectionSingleton)
          : connectOriginal()
              .then(_connection => connectionSingleton = _connection)
      }
*/
        return connectionSingleton
          ? connectionSingleton
          : connectionSingleton = connectOriginal().then(connection => connection.db())
      }
      //hay que bindear el método close con el cliente, sino no funciona
      const closeOriginal = client.close.bind(client) // 0
      //const close = client.close // 1

      client.close = function() {
        closeOriginal() // 0
        // close.call(client) // 1
        //close.call(this) // 1
        client = undefined // limpia el cliente al cerrarlo
      }
      return client
    })()
}

database.ObjectId = ObjectId // es un método para crear id's de Mongo. Lo añadimos como propiedad a database para utilizarlo posteriormente

module.exports = database
