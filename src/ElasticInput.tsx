import * as React from 'react';
import { InputProps, Input } from 'reactstrap';

export interface ElasticInputProps extends InputProps {
}

/**
 * Input wrapper that provides autosizing when used with a textarea.
 * 
 * @param props
 */
export const ElasticInput = (props: ElasticInputProps) => {
    const { className, onInput, type, ...rest } = props;
    const [calculatedHeight, setCalculatedHeight] = React.useState<string | number | undefined>(undefined);

    let inputRef = React.useRef<HTMLInputElement>(null);

    // Calcualte the best height for input.
    const resizeToBestHeight = React.useCallback((target: HTMLInputElement): void => {
        // Reset the height and then set it based on the scrollHeight.
        target.style.height = '';
        let newHeight = target.scrollHeight + 10; /* The 10 provides a nice buffer to avoid flicker */;
        target.style.height = `${newHeight}px`;

        // Store the height for the next render.
        setCalculatedHeight(newHeight);
    }, [setCalculatedHeight]);

    // Calculate height when the user provides input to the control.
    const onInputWrapper = React.useCallback((event: React.FormEvent<HTMLInputElement>): void => {
        resizeToBestHeight(event.currentTarget);

        // Pass on the input event.
        if (onInput) {
            onInput(event);
        }
    }, [resizeToBestHeight, onInput]);

    // Calculate the height when we mount or are first displayed on screen with a non-zero height.
    React.useEffect(() => {
        if (!calculatedHeight && inputRef.current && inputRef.current.scrollHeight > 0) {
            resizeToBestHeight(inputRef.current);
        }
    }, [inputRef.current, calculatedHeight, resizeToBestHeight]);

    return (
        <Input innerRef={inputRef} type={type || 'textarea'} className={`elastic ${className || ''}`} {...rest} onInput={onInputWrapper} style={{ height: calculatedHeight }} />
    );
};
