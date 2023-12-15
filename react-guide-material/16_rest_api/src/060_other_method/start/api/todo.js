import axios from 'axios';

// APIエンドポイントを指定
const ENDPOINT_URL = 'http://localhost:3003/todo';

const todoApi = {
  // すべてのTodoを取得
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    console.log(result);
    return result.data;
  },

  // Todoを追加
  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    return result.data;
  },

  // Todoを削除
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id);
    return result.data;
  },

  // Todoを更新
  async put(todo) {
    const result = await axios.put(ENDPOINT_URL + '/' + todo.id, todo);
    return result.data;
  },
};

// todoApi.getAll();

// todoApi.post({
//   id: 234234,
//   content: 'test',
// });

// todoApi.delete({
//   id: 234234,
// });

export default todoApi;