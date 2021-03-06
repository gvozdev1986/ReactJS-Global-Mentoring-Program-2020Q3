import React from 'react';
import rerender from 'react-test-renderer';
import {render, fireEvent, screen} from '@testing-library/react';
import Constants from '../../constants';
import MultiSelectInput from './js/MultiSelectInput';

describe('when Multi Select Input', () => {

  const title = 'title';
  const options = Constants.DEFAULT;
  const preselected = ['Comedy', 'Horror', 'Documentary'];
  const onAction = () => {
  };
  const onBlur = () => {
  };
  const error = 'error';

  test('then snapshot created', () => {
    const component = rerender.create(<MultiSelectInput title={title}
                                                        options={options}
                                                        preselected={preselected}
                                                        onAction={onAction}
                                                        onBlur={onBlur}
                                                        error={error}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Preselected is empty', () => {
    const emptyPreselected = {};
    expect(emptyPreselected).toEqual({});
  });

  test('on change arrow image',() => {
    render(<MultiSelectInput title={title}
                             options={options}
                             preselected={preselected}
                             onAction={onAction}
                             onBlur={onBlur}
                             error={error}/>);
    const arrow = screen.getByAltText('arrow_down');
    fireEvent.click(arrow);
    expect(screen.getByAltText('arrow_up')).toBeTruthy();
  });

});
