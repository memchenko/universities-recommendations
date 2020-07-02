import React from 'react';

import { ILayoutProps } from './types';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout(
    { children }: ILayoutProps
) {
    return (
        <>
            <Header></Header>
            <div className="clearfix"></div>
            <main className="p-3">{ children }</main>
            <Footer></Footer>
        </>
    );
}