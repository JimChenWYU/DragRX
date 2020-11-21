import React from 'react';
import { Chip, ListItemIcon, ListItemText, ListItem, createStyles, makeStyles, Theme } from '@material-ui/core';
import IMenuItem from 'base/IMenuItem';
import MdiIcon from 'components/common/MdiIcon';
import MenuDivider from './MenuDivider';
import classNames from 'classnames';
import { RXNode } from 'base/RXNode';

const useStyles = makeStyles((theme: Theme) => createStyles({
  itemText: {
    color:theme.palette.text.primary,
  },

}));

export default function MenuItem(
  props:{
    node: RXNode<IMenuItem>, 
    className?:any,
    draggedNode?: RXNode<IMenuItem>,
    onClick?:()=>void,
    children?:any
  }
){
  const {node,className, draggedNode, onClick, children} = props;
  const item = node.meta;
  const {title, type, icon, chip, badge} = item;
  const classes = useStyles();
  return (
    type === 'divider'?
    <MenuDivider
      draggable = {true} 
      className = {className} 
      onClick = {onClick}
    />
    :
    <ListItem 
      draggable = {true}
      className = {classNames(classes.itemText, className)} 
      onClick = {onClick}>
      {
        type !== 'subheader' &&
        <ListItemIcon>
          <MdiIcon iconClass = {icon} />
        </ListItemIcon>
      }
  
      <ListItemText primary={title} >
      </ListItemText>
      {(badge && badge.field) &&
        <Chip color={badge.color} label={'B'} size={badge.size}/>          
      }
      {chip&&
        <Chip color={chip.color} label={chip.label} size={chip.size}/>          
      }
      {
        children
      }
    </ListItem>
   
  )
}