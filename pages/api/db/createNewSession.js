import mongoConnection from "./connection"

async function createNewSession (req, res, data){ 
    const client = await mongoConnection;
  const db = client.db("nextjs-mongodb-demo");
  switch (req.method) {
    case "POST":
      let data = JSON.parse(req.body);
      let myPost = await db.collection("User").insertOne(data);
      res.json(myPost.ops[0]);
      break;
    
  }
}

export default createNewSession