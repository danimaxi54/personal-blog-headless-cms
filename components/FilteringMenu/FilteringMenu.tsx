import type { FC } from 'react';

import React, {
    useCallback
} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import type { FilteringMenuPropsType } from './types';

import {
    LIST_VIEW_ICONS,
    DATE_FILTERING_ICONS
} from './constants';

const FilteringMenu: FC<FilteringMenuPropsType> = ({
    view,
    sortingType,
    onChange,
}) => {
    const handleViewClick = useCallback(
        () => {
            onChange(
                'view',
                {
                    list: !view.list
                }
            );
        },
        [
            view,
            onChange
        ],
    );

    const handleSortByDateClick = useCallback(
        () => {
            onChange(
                'date',
                {
                    asc: !sortingType.asc
                }
            );
        },
        [
            sortingType,
            onChange
        ],
    );

    return (
        <div className='filtering-menu mb-2'>
            <span onClick={handleViewClick}>
                <FontAwesomeIcon
                    className='clickable hoverable mr-3'
                    size="2x"
                    icon={LIST_VIEW_ICONS[view.list ? 1 : 0] as IconProp}
                />
            </span>


            <span onClick={handleSortByDateClick}>
                <FontAwesomeIcon
                    className='clickable hoverable'
                    size='2x'
                    icon={DATE_FILTERING_ICONS[sortingType.asc ? 1 : 0] as IconProp}
                />
            </span>
        </div>
    );
};

export default FilteringMenu;
