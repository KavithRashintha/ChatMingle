import './chat.css';
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import Conversation from "../../components/conversation.jsx";

function Chat(){

    const token = localStorage.getItem('token');

    const [chats, setChats] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                localStorage.setItem('id', decodedToken.id);
                setUser(decodedToken);
                console.log('Decoded Token:', decodedToken);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        } else {
            console.warn('No token found in local storage');
        }
    }, [token]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        console.log(id);
        const getAllChats = async() => {
            try {
                const {data} = await axios.get(`http://localhost:3000/chat/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setChats(data);
                console.log(data);
            }catch (error){
                console.log(error);
            }
        }
        getAllChats()
    }, [user,token]);

    return(
        <div>

            <div className="chatOutter flex min-h-screen">

                <div className="chatLeftSide w-4/12 flex flex-col items-center">

                    <div className="chatListTopic w-full h-16 flex flex-col justify-center text-center">
                        <h1>ChatMingle</h1>
                    </div>

                    <div className="chatList h-[36.5em] w-[20em]">
                        {chats.map((chat) => (
                            <div className="chatItem" key={chat._id}>
                                <Conversation
                                    data={chat}
                                    currentUser={localStorage.getItem('id')}
                                />
                            </div>
                        ))}
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