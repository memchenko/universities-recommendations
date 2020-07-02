import React from 'react';
import { Link } from 'react-router-dom';

import { IHeaderProps } from './types';
import { Routes } from '../../constants/urls';

import './Header.scss';

export default function Header(props: IHeaderProps) {
    return (
        <header className="px-4">
            <nav className="float-right">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to={ Routes.Root } className="nav-link">Рекомендации</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ Routes.Search } className="nav-link">Поиск</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ Routes.Favorite } className="nav-link">Избранное</Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}