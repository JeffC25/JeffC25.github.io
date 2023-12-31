import { useState, useEffect } from "react";

const useScroll = () => {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState("");

    const handleScroll = () => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
        setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return {
        scrollY,
        scrollX,
        scrollDirection
    };
}

export default useScroll;