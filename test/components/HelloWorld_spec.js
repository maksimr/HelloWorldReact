import React from 'react';
import {expect} from 'chai';
import Hello from '../../src/components/Hello';
import {
  renderIntoDocument,
  getRenderedChildOfCompositeComponent
} from 'react-addons-test-utils';


describe('Hello', function() {

  it('should render hello world', function() {
    let text = 'World';
    let component = renderIntoDocument(
      <Hello message={text}/>
    );

    expect(
      getRenderedChildOfCompositeComponent(component).textContent
    ).to.equal('Hello ' + text);
  });

});
