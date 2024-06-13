import './chat.css';
import {useState} from "react";

function Chat(){

    const [chats, setChats] = useState([]);
    return(
        <div>

            <div className="chatOutter flex min-h-screen">

                <div className="chatLeftSide w-4/12 flex flex-col items-center">

                    <div className="chatListTopic w-full h-16 flex flex-col justify-center text-center">
                        <h1>ChatMingle</h1>
                    </div>

                    <div className="chatList h-[36.5em] w-[20em]">

                    </div>

                </div>

                <div className="chatRightSide w-full">
                    <h2>Hello</h2>
                </div>

            </div>

        </div>
    )
}

export default Chat;