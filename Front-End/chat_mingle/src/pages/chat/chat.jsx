import './chat.css';
import {useEffect} from "react";
import {jwtDecode} from "jwt-decode";

function Chat(){

    const token = localStorage.getItem('token');

    /*const [chats, setChats] = useState([]);*/
    /*const [user, setUser] = useState(null);*/

    useEffect(() => {

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                /*setUser(decodedToken);*/
                console.log(decodedToken);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        } else {
            console.warn('No token found in local storage');
        }
    }, []);

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