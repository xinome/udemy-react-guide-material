import { produce } from 'immer';

const state = {
  name: 'Tom',
  hobbies: ['tennis', 'soccer'],
};

const newState = produce(state, draft => {
  draft.name = 'John';
  draft.hobbies[0] = 'baseball';
  console.log(draft);

  // 値を変更した時には、draftを返す必要はない
})

console.log(state, newState);