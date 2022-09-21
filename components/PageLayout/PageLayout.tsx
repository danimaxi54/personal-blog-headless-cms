import type { FC } from 'react';

import React from 'react';

import {
    Container
} from 'react-bootstrap';

import BlogNavbar from 'components/BlogNavbar/BlogNavbar';

import { useTheme } from 'providers/ThemeProvider';

import GithubIcon from 'assets/icons/socials/github.svg';
import TelegramIcon from 'assets/icons/socials/telegram.svg';
import MailIcon from 'assets/icons/socials/mail.svg';

import type { PageLayoutPropsType } from './types';

const PageLayout: FC<PageLayoutPropsType> = ({
    className= '',
    children,
}) => {
    const {
        theme,
        toggleTheme
    } = useTheme();

    return (
        <Container>
            <BlogNavbar
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <div className={`page-wrapper ${className}`}>
                {children}
            </div>

            <footer className='page-footer'>
                <div className='page-footer__info'>
                    <h5 className='page-footer__author'>
                        Ivanov Daniil
                    </h5>

                    <p className='page-footer__author-info'>
                        Frontend Developer (React.JS)
                    </p>
                </div>

                <div className='page-footer__socials'>
                    <a
                       className='page-footer__socials-link'
                       href='https://github.com/danimaxi54'
                       target='_blank'
                    >
                        <GithubIcon id="github" />
                    </a>

                    <a
                        className='page-footer__socials-link'
                        href='https://t.me/danimaxi54'
                        target='_blank'
                    >
                        <TelegramIcon id='telegram' />
                    </a>

                    <a
                        className='page-footer__socials-link'
                        href='mailto:ddmaxie12@mail.ru'
                    >
                        <MailIcon id='mail' />
                    </a>
                </div>
            </footer>
        </Container>
    );
};

export default PageLayout;
