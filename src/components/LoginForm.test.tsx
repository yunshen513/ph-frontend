import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

test('on initial render, the submit button is abled', async () => {
    render(<LoginForm closeModal={()=>{}}/>);

    expect(screen.getByRole('button', {name: /Submit/i})).toBeEnabled();
    expect(screen.getByRole('button', {name: /Cancel/i})).toBeEnabled();
})

test('submit wrong info trigger alert', async () => {
    render(<LoginForm closeModal={()=>{}}/>)
    
    userEvent.type(screen.getByTestId("username"), 'John')
    userEvent.type(screen.getByTestId("password"), '123')

    userEvent.click(screen.getByRole('button', {name: /Submit/i}))

    expect(window.alert).toBeCalled();
  
  })

