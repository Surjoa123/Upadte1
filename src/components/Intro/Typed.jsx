import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typer = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Developer.', 'Coder.', 'Designer.', 'Music Lover.', 'Follower of Krishna.'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };

        // el.current refers to the <span> mounted on the DOM
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        };
    }, []);

    return <span ref={el} />;
};

export default Typer;
