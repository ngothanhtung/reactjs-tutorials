let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id: id
});
