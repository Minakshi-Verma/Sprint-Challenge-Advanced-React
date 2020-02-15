import React from 'react';
import {render,cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import PlayersList from './PlayersList';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

describe('PlayersList',() =>{
    

    // it("renders without crashing", ()=>{
    //  const div =document.createElement('div');
    //  ReactDOM.render(<PlayersList/>,div)
    // })
   
    // test('renders without crashing',()=>{
    //     render(<PlayersList />)

    // });

    test('Fake test',()=>{
        expect(true).toBeTruthy()
    })
   
    test('renders correctly'),() =>{
        const {getByText} = render (<PlayersList />)
         getByText(/darkMode/)
    }
  
    // test('it renders First',() =>{
    //     const h1 render(<PlayersList />)
    //     display.getByText(/players/)
        
    // })
    // it("renders Player list Title"),()=>{
    //     act(()=>{
    //         render(<PlayersList />);
    //     });
    //     const h1 = PlayersList.querySelector("h1");
    //  expect(h1.textContent).to.equal("Players List");
    //     };    
    })

