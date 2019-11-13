import uuid from 'uuid/v4';
import { prettyPrint } from '../utils/utils';
import { types as t } from 'mobx-state-tree';


export const TodoModel = t
  .model('MyModel', {
    id: t.identifier,
    title: t.string,
    isCompleted: t.optional(t.boolean, false),
    isFavorite: t.optional(t.boolean, false),
  })
  .actions((store) => ({
    toggelCompleted() {
      store.isCompleted = !store.isCompleted;
    },
    toggelFavorite() {
      store.isFavorite = !store.isFavorite;
    },
  }))

export const TodoListModel = t.
  model('TodoListModel', {
    list: t.array(TodoModel),
  })
  .views((store) => ({
    get favoriteList() {
      return store.list.filter(item => item.isFavorite);
    }
  }))
  .actions(store => ({
    add(title) {
      const todo = {
        id: uuid(),
        title: title,
      };

      store.list.unshift(todo);
    }
  }))

