import React from 'react';
import {render} from '@testing-library/react';
import PlayerList from './PlayerList';

describe('PlayerList',() =>{
    test('renders without crashing',()=>{
        render(<PlayerList />)

    });
   

  
})