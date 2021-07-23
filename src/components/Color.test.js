import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Color from './Color';
import ColorList from './ColorList';

const testColor = {"color":"aliceblue","code":{"hex":"#f0f8ff"},"id":1};

test("Renders without errors with blank color passed into component", () => {
    render(<ColorList colors={[]}/>);
});

test("Renders the color passed into component", () => {
    const r = render(<Color color={testColor}/>);
    const color = screen.queryByTestId('color');
    expect(color).toBeInTheDocument();

});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    let toggleClicked = false;
    let deleteClicked = false;

    let mockToggleEdit = ()=>{
        toggleClicked = true;
    }

    let mockHandleDelete = () => {
        deleteClicked = true;
    }

    const r = render(<ColorList deleteColor={mockHandleDelete} toggleEdit={mockToggleEdit} colors={[testColor]}/>);
    const color = screen.queryByTestId('color');
    const deleteSpan = screen.queryByTestId('delete');
    expect(toggleClicked).toBeFalsy();
    fireEvent.click(color);
    expect(toggleClicked).toBeTruthy();

    expect(deleteClicked).toBeFalsy();
    fireEvent.click(deleteSpan);
    expect(deleteClicked).toBeTruthy();

});

test("Executes setEditColor and toggleEdit property when color div is clicked", async () => {
    const setEditColor = jest.fn();
    const toggleEdit = jest.fn();
    render(<Color color={testColor} toggleEdit={toggleEdit} setEditColor={setEditColor} />);

    const handleEdit = screen.queryByTestId('color');
    fireEvent.click(handleEdit);
    expect(setEditColor).toBeCalled();
    expect(toggleEdit).toBeCalled();
});
