import type { FC } from 'react';

import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import {
    Navbar,
    Nav,
} from 'react-bootstrap';

import ThemeToggle from 'components/ThemeToggle/ThemeToggle';

import type { BlogNavbarPropsType } from './types';

const BlogNavbar: FC<BlogNavbarPropsType> = ({
    theme,
    toggleTheme
}) => {
    const { asPath } = useRouter();

    return (
        <Navbar
            className='fj-navbar fj-nav-base'
            bg='transparent'
            expand='lg'
            variant={theme}
        >
            <Navbar.Brand
                className={`fj-navbar-brand ${
                    asPath === '/' && 'fj-navbar-brand-not-clickable'
                }`}
            >
                <Link href='/'>
                    <a>Daniil Ivanov</a>
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />

            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    {asPath !== '/' && (
                        <Nav.Link as={
                            () => (
                                <Link href='/'>
                                    <a className='fj-navbar-item fj-navbar-link'>
                                        Home
                                    </a>
                                </Link>
                            )}
                        >
                            Home
                        </Nav.Link>
                    )}

                    <ThemeToggle
                        themeType={theme}
                        onChange={toggleTheme}
                    />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default BlogNavbar;
