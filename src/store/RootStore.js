import { prettyPrint } from '../utils/utils';
import { types as t } from 'mobx-state-tree';
import { autorun } from 'mobx';
import { TodoListModel } from './TodoStore';
import { GroupListModel } from './GroupStore';



const RootStore = t
    .model('RootStore', {
        todos: t.optional(TodoListModel, {}),
        groups: t.optional(GroupListModel, {}),
    });


const rootStore = RootStore.create({});
// autorun(() => prettyPrint(rootStore))

rootStore.todos.add('potato');
rootStore.todos.add('chockolate');

const todo = rootStore.todos.list[0];
rootStore.groups.add('shoping list');

const group = rootStore.groups.list[0];
group.addTodo(todo)

// prettyPrint(group.todos[0])

export default rootStore;


