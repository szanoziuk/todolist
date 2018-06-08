import { percentCompletedItems } from '../../reducers/header';
import { createConnectorForSelector } from '../../helpers';

export const headerConnector = createConnectorForSelector( percentCompletedItems );
