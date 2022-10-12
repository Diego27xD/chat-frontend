import { useEffect } from "react";
import "./index.css";
const Message = ({ senderUser, messages }) => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        console.log("entrando a message");
      }, []);

    
    return (
        <>

        {messages.map((message, index) => (

            <div key={index} className="message__content__text">        
                <div className="message__content__image">
                <img 
                    width={45}
                    src={
                        senderUser.name === message.User.name
                        ? senderUser.profile_url
                        : localUser.profile_url
                    }
                />
                </div>
                <div className="message__content__message">
                    <p className="c__name">{senderUser.name === message.User.name ? senderUser.name: localUser.name }</p>
                    <p className="c__message" style={{background: senderUser.name === message.User.name
                ? "palegreen"
                : "skyblue"}}>{message.message}</p>
                </div>
            </div>
            ))}
        </>
        
        );             
};

export default Message;
