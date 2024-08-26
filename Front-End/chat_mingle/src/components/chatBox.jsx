import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ChatBox = ({ chat, currentUser }) => {
    const token = localStorage.getItem('token');
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const otherUserId = chat?.users.find(id => id !== currentUser);

        const getUserData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/user/${otherUserId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (chat) {
            getUserData();
        }
    }, [currentUser, chat]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/message/${chat._id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMessages(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (chat) {
            fetchMessages();
        }
    }, [chat]);

    return (
        <div className="userConversation">
            <div className="chatHeader p-4 m-2 w-68 bg-white bg-opacity-60 rounded-lg shadow-lg">
                <div className="text-left font-inter">
                    <span className="block text-[20px] font-medium text-[#5F6675]">
                        {userData?.firstName} {userData?.lastName}
                    </span>
                    <span className="block text-[12px] font-normal text-gray-500">
                        Online
                    </span>
                    <hr className="mt-2 border-t-[1px] border-gray-200" />
                </div>
            </div>

            <div className="chatBody p-2">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`max-w-[400px] w-max p-2 mb-2 rounded-lg ${
                            message.senderId === currentUser
                                ? "bg-gradient-to-r from-[#D3EBF9] to-[#66C4FF] text-right ml-auto pl-2 pr-2"
                                : "bg-gradient-to-r from-[#66C4FF] to-[#D3EBF9] text-left mr-auto pl-2 pr-2"
                        }`}
                        style={{ width: 'max-content' }}
                    >
                        <span className={`block text-[13px] font-medium text-black font-inter ${
                            message.senderId === currentUser ? "text-right" : "text-left"
                        }`} style={{ marginLeft: '12px', marginRight: '12px' }}>
                            {message.message}
                        </span>
                        <span className="block text-[8px] text-gray-600 font-inter" style={{ marginLeft: '12px', marginRight: '12px' }}>
                            {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

ChatBox.propTypes = {
    chat: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        users: PropTypes.arrayOf(PropTypes.string).isRequired,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
    }).isRequired,
    currentUser: PropTypes.string.isRequired,
};

export default ChatBox;
