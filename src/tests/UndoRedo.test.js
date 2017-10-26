import React from 'react'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UndoRedo } from '../containers/UndoRedo';

configure({ adapter: new Adapter() });

describe('Render Component',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<UndoRedo />)
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
      
    it('+++ contains two buttons', () => {
        expect(wrapper.find('button').length).toEqual(2)
    });
    
});