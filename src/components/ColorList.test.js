import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const testColor = {"color":"aliceblue","code":{"hex":"#f0f8ff"},"id":1};

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>);
});

test("Renders a list of colors without errors", () => {
    const r = render(<ColorList colors={[testColor]}/>);
    const color = screen.queryByTestId('color');
    expect(color).toBeInTheDocument();
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList colors={[testColor]} editing={true} />);
    const editMenu = screen.queryByTestId("edit_menu");
    expect(editMenu).toBeTruthy();

    rerender(<ColorList colors={[testColor]} editing={false} />);
    expect(editMenu).not.toBeInTheDocument();
});
