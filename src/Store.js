import { createStore } from 'redux';
import counter from './reducer/counter';

const Store = createStore(counter);

export default Store;
