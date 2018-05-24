import { items } from '../selectors';
import { createConnectorForSelector } from '../helpers';
import { createSelector } from 'reselect';

const contentSelector = createSelector(
    items,
    (todos) => ({
        todos: todos.toJS()
    })
);

export const headerConnector = createConnectorForSelector( contentSelector );

// export const headerConnector = connect(mapStateToProps);
