import React from 'react';
import MutationObserver from 'mutationobserver-shim';
jest.mock('../services/fetchColorService')

import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    await waitFor(()=>{
        render(<BubblePage />);
    });
    const  items = await screen.findAllByTestId('color');
    expect(items.length).toBe(1);

});
