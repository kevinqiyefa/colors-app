import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  DialogTitle,
  Dialog,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import useStyles from '../styles/PaletteListStyles';
import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes, history, deletePalette }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingId, setDeletingId] = useState('');
  const classes = useStyles();

  const openDialog = id => {
    setOpenDeleteDialog(true);
    setDeletingId(id);
  };
  const closeDialog = () => setOpenDeleteDialog(false);

  const handleDelete = () => {
    deletePalette(deletingId);
    closeDialog();
  };

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(palette => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                handleClick={() => goToPalette(palette.id)}
                openDialog={openDialog}
                id={palette.id}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>

          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

PaletteList.propTypes = {
  palettes: PropTypes.array,
  deletePalette: PropTypes.func,
  history: PropTypes.object
};

export default PaletteList;
