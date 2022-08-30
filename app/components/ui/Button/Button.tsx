import React, {FC, PropsWithChildren} from 'react';
import {IButton} from "@/ui/Button/button.interface";

import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({children, ...rest}) => {

    return (
        <button className={styles.button} {...rest}>
            {children}
        </button>
    );
};

export default Button;