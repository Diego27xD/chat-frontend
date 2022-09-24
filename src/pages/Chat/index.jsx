import { ModalRegister, DrawerList } from "../../components";
import { useState, useEffect } from "react";
import { get } from "../../service";
import Pusher from "pusher-js";

const Chat = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await get("/user")
    console.log(response)
    setUsers(response.data)
  }

  useEffect(() => {
    fetchUsers();
  }, [])

 useEffect(()=>{
    const pusher = new Pusher('fd04e8681c38af3ff51a', {
      cluster: 'us2'
    });
    const channel = pusher.subscribe('my-chat');
    channel.bind('my-list-contacts', async ({ message }) => {
      console.log("message from pusher", message)
    });
  }, []) 

  return (
    <div>
      { users.length > 0 && <DrawerList users = {users}/> }
      <ModalRegister fetchUsers={fetchUsers} />
    </div>
  );
};

export default Chat;
