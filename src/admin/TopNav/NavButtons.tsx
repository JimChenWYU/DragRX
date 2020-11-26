import React, { Fragment } from "react";
import MdiIcon from "components/common/MdiIcon"
import IconButton from '@material-ui/core/IconButton';
import { Hidden, Badge, Typography, Menu, MenuItem, createStyles, makeStyles, Theme, ListItemIcon } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setAppInfoAction } from "store/app/actions";
import { TOKEN_NAME, LOGIN_URL } from "utils/consts";
import intl from "react-intl-universal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    grow: {
      flexGrow: 1,
    },

    githubLink:{
      color: theme.palette.text.secondary,
      marginRight:theme.spacing(1),
    },
    accountMenuItem:{
      padding:theme.spacing(1, 3),
    },
  }),
);


export default function NavButtons(props:{color?:string, onSidebarToggle: any}) {
  const {color} = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = ()=>{
    dispatch(setAppInfoAction(undefined));
    localStorage.removeItem(TOKEN_NAME);
    history.push(LOGIN_URL);
  }

  const handleShowProfile = ()=>{
    history.push("/admin/module/user/profile");
    setAnchorEl(null);
  }

  const handleChangePassword = ()=>{
    history.push("/admin/module/user/change-password");
    setAnchorEl(null);
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      
    >
      <MenuItem onClick={handleShowProfile} className = {classes.accountMenuItem}>
        <ListItemIcon>
          <MdiIcon iconClass = "mdi-account" />
        </ListItemIcon>
        {intl.get('profile')} 
      </MenuItem>
      <MenuItem className = {classes.accountMenuItem} onClick={handleChangePassword}>
        <ListItemIcon>
          <MdiIcon iconClass = "mdi-lock" />
        </ListItemIcon>
        {intl.get('change-password')} 
      </MenuItem>
      <MenuItem onClick={handleLogout} className = {classes.accountMenuItem}>
        <ListItemIcon>
          <MdiIcon iconClass = "mdi-logout-variant" />
        </ListItemIcon>
        {intl.get('logout')} 
      </MenuItem>
    </Menu>
  );
  


  return(
    <Fragment>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.onSidebarToggle}
        >
          <MenuIcon style={{color:color}}/>
        </IconButton>
        <Typography variant="h6" noWrap  style={{color:color}}>
          DragRX
        </Typography>          
      </Hidden>

      <div className={classes.grow} />

      
      <a href="https://github.com/rxwater/dragit" className={classes.githubLink} style={{color:color}} target="_blank" rel="noopener noreferrer">
        <MdiIcon iconClass = "mdi-github"/>
      </a>
      <IconButton aria-label="show 17 new notifications">
        <Badge badgeContent={17} color="secondary">
        <MdiIcon iconClass = "mdi-bell-outline" color={color}/>
        </Badge>
      </IconButton>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        
      >
        <AccountCircle style={{color:color}}/>
      </IconButton>
      {renderMenu}        
    </Fragment>
  )
}