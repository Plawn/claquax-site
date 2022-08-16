import React from 'react';

type Props = {
    size: string;
    variant: "horizontal" | "vertical";
}

export default function Spacer(props: Props) {
    const { size, variant } = props;
    if (variant === "horizontal") {
        return (
            <div style={{ width: size }}></div>
        )
    } else {
        return (
            <div style={{ height: size }}></div>
        )
    }

}