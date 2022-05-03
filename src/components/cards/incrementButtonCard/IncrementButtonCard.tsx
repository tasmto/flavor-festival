import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BiPlus, BiMinus, BiCheck } from 'react-icons/bi';
import ButtonGroup from '@mui/material/ButtonGroup';
import './incrementButtonCard.css';

type BtnProps = {
  label: string;
  labelIcon: IconType;
  onchange: Function;
  current: number;
  unit?: string;
  id: string;
};

const IncrementButtonCard = ({
  label,
  labelIcon = <BiCheck />,
  onchange,
  current,
  unit,
  id,
}: BtnProps) => {
  return (
    <Typography
      variant='h6'
      className='incrementButtonCard--container'
      color='#303030'
    >
      <span className='incrementButtonCard--label'>
        {labelIcon}
        {label}
      </span>
      <ButtonGroup aria-label='outlined button group' size='medium'>
        <Button onClick={(event) => onchange(event, id, false)}>
          <BiMinus className='incrementButtonCard--increment-btn' />
        </Button>
        <Button disabled className='incrementButtonCard--increment-num'>
          {current} {unit}
        </Button>
        <Button onClick={(event) => onchange(event, id)}>
          <BiPlus className='incrementButtonCard--increment-btn' />
        </Button>
      </ButtonGroup>
    </Typography>
  );
};

export default IncrementButtonCard;
