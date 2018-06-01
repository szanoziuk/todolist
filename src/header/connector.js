import { percentCompletedItems } from '../selectors/header';
import { createConnectorForSelector } from '../helpers';

export const headerConnector = createConnectorForSelector( percentCompletedItems );
