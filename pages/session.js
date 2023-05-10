import Title from "@/componants/constants/Title"
import UserPostion from "@/componants/liveusers/UserPostion"

export default function session(userlist){
    return(
        <div>
            <div className="wrapper">

                
                <Title />

                
                <div>
                    <div>
                        {userlist.map(postion =>{
                            <UserPostion user={postion} />
                        }

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}