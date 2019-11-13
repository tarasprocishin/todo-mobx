import uuid from 'uuid/v4';
import { prettyPrint } from '../utils/utils';
import { types as t } from 'mobx-state-tree';

import { TodoModel } from './TodoStore';


export const GroupModel = t
    .model('GroupModel', {
        id: t.string,
        title: t.string,
        todos: t.array(t.reference(TodoModel)),

    })
    .actions((store) => ({
        addTodo(todo) {
            store.todos.unshift(todo)
        },
    }))

export const GroupListModel = t.
    model('GroupListModel', {
        list: t.array(GroupModel),
    })
    .actions(store => ({
        add(title) {
            const group = {
                id: uuid(),
                title,
            };

            store.list.unshift(group);
        }
    }))

