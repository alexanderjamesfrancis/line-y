import mongoConnection from "./connection"

async function joinSession (req, res, userName,sessionId){ 
    const client = await mongoConnection;
  const db = client.db("User");
  switch (req.method) {
    case "GET":
      let data = JSON.parse(req.body);
      let myPost = await db.collection("User").insertOne(data);
      res.json(myPost.ops[0]);
      break;
    
  }
}

export default joinSession