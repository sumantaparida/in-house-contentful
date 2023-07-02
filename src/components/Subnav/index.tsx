/* eslint-disable tailwindcss/no-custom-classname */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

import SubNavWrapper from './style';

type SubNavProps = {
  children?: ReactNode;
};

const SubNav = (props: SubNavProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <SubNavWrapper className="flex flex-row items-center gap-4 bg-gray-200 px-4 py-1.5">
      <div className="_left flex flex-1 flex-col items-start">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col">
            <ArrowBackIcon sx={{ fontSize: 20 }} className="cursor-pointer" />
          </div>
          <div className="flex flex-col">
            <Link className="text-xs font-normal underline-offset-2 hover:underline" href="/contentModel">
              Test Content Type
            </Link>
            <p className="text-sm font-semibold">Test Title Document cx xcxc</p>
          </div>
        </div>
      </div>
      <div className="_right flex flex-col items-end">
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            color="primary"
          >
            <MoreVertIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Create new</MenuItem>
            <MenuItem onClick={handleClose}>Duplicate</MenuItem>
            <MenuItem onClick={handleClose}>View content type</MenuItem>
          </Menu>
        </div>
      </div>
      {props.children}
    </SubNavWrapper>
  );
};

export default SubNav;
