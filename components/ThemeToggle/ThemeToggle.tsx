import type { FC } from 'react';

import React from 'react';

import Toggle from 'react-toggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { ThemeTogglePropsType } from './types';

const ThemeToggle: FC<ThemeTogglePropsType> = ({
    themeType,
    onChange
}) => (
    <label className='toggler'>
        <Toggle
            className='day-night-toggle'
            icons={{
                checked: (
                    <FontAwesomeIcon
                        inverse
                        icon='sun'
                    />
                ),
                unchecked: (
                    <FontAwesomeIcon
                        inverse
                        icon='moon'
                    />
                ),
            }}
            checked={themeType === 'dark'}
            onChange={onChange}
        />
    </label>
);

export default ThemeToggle;
