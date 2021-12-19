import { animated, useSpring } from "react-spring";

export function AnimRoute({ children }: { children: JSX.Element }) {
    const transitionProps = useSpring({
        delay: 10,
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    return (
        <animated.div className="component-with-navbar" style={transitionProps}>
            {children}
        </animated.div>
    );
}
