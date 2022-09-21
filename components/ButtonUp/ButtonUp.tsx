import React, {
    useState,
    useEffect
} from 'react';

import useScrollY from 'hooks/useScrollY';

import ArrowUp from 'assets/icons/arrowUp.svg';

const ButtonUp = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const scrollY = useScrollY();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(
        () => {
            const scrollH = document.body.scrollHeight;

            setIsVisible(scrollY >= scrollH / 2);
        },
        [scrollY]
    );

    return (
        <button
            className={`button-up ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <ArrowUp />
        </button>
    );
};

export default ButtonUp;
