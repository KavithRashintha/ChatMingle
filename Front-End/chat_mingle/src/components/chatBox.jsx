import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import InputEmoji from 'react-input-emoji';

const ChatBox = ({ chat, currentUser }) => {
    const token = localStorage.getItem('token');
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

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

    const handleChange = (newMessage) => {
        setNewMessage(newMessage);
    }

    const handleSend = async (e)=> {
        e.preventDefault();
        const message = {
            senderId: currentUser,
            message: newMessage,
            chatId: chat._id,

        }

        try{
            const { data } = await axios.post('http://localhost:3000/message/', message, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            setMessages([...messages, data]);
            setNewMessage('');
        }catch (error){
            console.log(error);
        }
    }

    if (!chat) {
        return (
            <div className="userConversation flex flex-col h-full font-inter justify-center items-center">
                <span className="text-[18px] text-gray-500">
                    Click the chat to start the conversation
                </span>
            </div>
        );
    }

    return (
        <div className="userConversation flex flex-col h-full font-inter">
            <div className="chatHeader w-full bg-[#e8f6ff] pl-[22px] pt-[28px] pb-[20px] mb-[12px]">
                <div className="text-left">
                    <span className="block text-[24px] text-[#483D8B] font-semibold">
                        {userData?.firstName} {userData?.lastName}
                    </span>
                    <span className="block text-[12px] font-normal text-[#483D8B]">
                        Online
                    </span>
                </div>
            </div>

            <div className="chatBody flex-1 p-2 overflow-y-auto">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`max-w-[400px] w-max p-2 mb-2 rounded-lg ${
                            message.senderId === currentUser
                                ? "bg-gradient-to-r from-[#D3EBF9] to-[#66C4FF] text-right ml-auto pl-2 pr-2 mr-[12px]"
                                : "bg-gradient-to-r from-[#A88BEB] to-[#F8CEEC] text-left mr-auto pl-2 pr-2 ml-[12px]"
                        }`}
                        style={{ width: 'max-content' }}
                    >
                        <span className={`block text-[14px] font-medium text-black ${
                            message.senderId === currentUser ? "text-right" : "text-left"
                        }`} style={{ marginLeft: '12px', marginRight: '12px' }}>
                            {message.message}
                        </span>
                        <span className="block text-[9px] text-gray-600" style={{ marginLeft: '12px', marginRight: '12px' }}>
                            {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                ))}
            </div>

            <div className="chatSender flex items-center p-2 bg-white border-t border-gray-200 sticky bottom-0 pb-[22px] pt-[20px]">
                <div
                    className="text-2xl font-bold text-gray-400 mr-4 flex items-center justify-center"
                    style={{ transform: 'scale(1.5)', lineHeight: '1', strokeWidth: '2', paddingLeft: '12px', paddingBottom: '4px' }}
                >
                    +
                </div>
                <InputEmoji
                    value={newMessage}
                    onChange={handleChange}
                    className="flex-grow"
                />
                <div
                    className="sendButton px-7 py-2.5 text-white font-inter"
                    style={{
                        background: 'linear-gradient(45deg, #2196F3, #1E40AF)',
                        borderRadius: '6px',
                        marginLeft: '12px',
                        marginRight: '12px',
                        fontSize: '12px',
                        transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #42A5F5, #3747D6)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #2196F3, #1E40AF)'}
                    onClick={handleSend}
                >
                    Send
                </div>
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
