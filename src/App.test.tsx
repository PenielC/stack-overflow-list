import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { getUsersList } from './store/actions/getUsersList';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('YourApp', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
 
test('renders 20 records', () => { 
    expect(getUsersList.length).toBe(20);
})
