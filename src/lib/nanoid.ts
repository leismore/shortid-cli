import { customAlphabet } from 'nanoid/async';
import { nolookalikes }   from 'nanoid-dictionary';

const LENGTH  = 20;
const nanoid  = customAlphabet(nolookalikes, LENGTH);

export { nanoid };
