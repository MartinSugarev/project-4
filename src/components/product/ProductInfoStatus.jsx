import styles from './ProductInfoStatus.module.scss';
import { Chip } from '@mui/material';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

export default function ProductInfoStatus() {
    const theme = useTheme()
    return (
        <div className={classNames(styles['product-info-status'])}>
            < Chip icon={<CircleIcon fontSize="small" />} variant='outlined' label="LIVE" sx={{background: theme.palette.secondary.main, color: theme.palette.background.default, fontWeight: '600'}} className={classNames(styles['status'])}/>
        </div>
    )
}
