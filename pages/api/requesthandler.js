import randomPassword from "@/functions/randomPassword"
import { data } from "autoprefixer"

export default async function requestHandler(req, res, form) {

    let sessionList
    if(req.method === 'POST'){
        if ("New Session") {
            // Await
            // Generate random string for the ID - about 6 digits - mix of letter and numbers
            const newPassword = randomPassword()
            // Create entry into database using the above ID
            // Vague Scheema: id: {
            //     sessionUsers: [
            //         user1,
            //         user2,
            //         user3
            //     ]
            // }
            // Add user as host to new session at top of list.
            // Populate list with single user
            // Send user to live with the list
            // Return List
            return sessionList
            
        } else if ("Join Session"){
            // Await
            
            // find session using ID
            // Add user data to document
            // Ping the rest of users to update their lists
            // Send user to live with list
            
            // Return list?
            return sessionList

        } else {
            console.log("This has failed at new or joins session")
        }
    }
    res.status(200).json({data: sessionList})
  }