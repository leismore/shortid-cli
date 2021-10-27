import { assert } from 'chai';
import { nanoid } from '../src/lib/nanoid';
import { insert_separator, CHUNK_SIZE, SEPARATOR } from '../src/lib/insert_separator';

const PATTERN = /^([346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz]{4}\-){4}[346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz]{4}$/;

describe('Leismore Short ID Syntax Checking', function(){

    it('Validation:', function(){
        nanoid().then(
            id => {
                id = insert_separator(id, CHUNK_SIZE, SEPARATOR);
                assert(PATTERN.test(id));
            }
        );
    });
    
});
