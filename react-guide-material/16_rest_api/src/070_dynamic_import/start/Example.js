// 通常のimport
import { add } from './add';

const Example = () => {
  // ダイナミックインポート
  import('./add').then((module) => {
    console.log(module);
  });

  import('./add').then(({ add }) => {
    console.log(add(1, 2));
  });

  console.log(add(1, 2));
};

export default Example;
