import type { FC } from 'react';

import React, {
    useRef,
    useEffect,
} from 'react';

import highlight from 'highlight.js';

import type { HighlightCodePropsType } from './types';

const HighlightCode: FC<HighlightCodePropsType> = ({
    language,
    children
}) => {
    const code = useRef<HTMLElement>(null);

    useEffect(
        () => {
        highlight.highlightBlock(code.current as HTMLElement);
    },
        []
    );

    return (
        <pre>
            <code
                className={language}
                ref={code}
            >
                {children}
            </code>
        </pre>
    );
};

export default HighlightCode;
