import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import axios from "axios";

const Conversation = ({ data, currentUser }) => {

    const token = localStorage.getItem('token');
    const otherUserId = data.users.find(id => id !== currentUser);
    const [userData, setUserData] = useState(null);

    useEffect(() => {

        const getUserData = async() => {
            try {
                const {data} = await axios.get(`http://localhost:3000/user/${otherUserId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(data);
                console.log(userData);
            }catch (error){
                console.log(error);
            }
        }
        getUserData();
    }, []);

    return (
        <div className="p-4 m-2 w-68 bg-white bg-opacity-60 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-opacity-70 hover:shadow-2xl hover:-translate-y-0.25">
            <div className="text-left font-inter">
                <span className="block text-[16px] font-medium text-blue-800">
                    {userData?.firstName} {userData?.lastName}
                </span>
                <span className="block text-sm font-normal text-gray-500">Online</span>
            </div>
        </div>
    );
};

Conversation.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        users: PropTypes.arrayOf(PropTypes.string).isRequired,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
    }).isRequired,
    currentUser: PropTypes.string.isRequired,
};

export default Conversation;
