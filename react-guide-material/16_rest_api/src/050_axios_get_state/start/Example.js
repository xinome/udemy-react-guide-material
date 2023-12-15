import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {

  // JSONデータを格納するためのstateは空配列で初期化
  const [users, setUsers] = useState([]);

  // サーバーから取得したデータを画面表示
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://localhost:3003/user");
      setUsers(res.data);
    };
    getUser();
  }, []);

  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.age}</p>
            <p>{user.hobbies.join(", ")}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Example;
