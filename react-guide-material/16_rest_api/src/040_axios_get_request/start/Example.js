import { useEffect } from "react";
import axios from "axios";

// axiosでリクエストを送信
const Example = () => {
  // useEffect(() => {
  //   axios.get('http://localhost:3003/user').then((res)  => {
  //     console.log("res: ", res);
  //     console.log("res.data: ", res.data);
  //   });
  // });

  // awaitを使う場合は、asyncをつける
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user');
      console.log("res: ", res);
      console.log("res.data: ", res.data);
    };
    getUser();
  });


  return <></>;
};

export default Example;
