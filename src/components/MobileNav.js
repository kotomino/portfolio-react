import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from "react-scroll";
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ContactsIcon from '@material-ui/icons/Contacts';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#29293d",
  },
});

const MobileNav = () => {

  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  return (
    <Box display={{ xs: 'block', md: 'none' }}>
      <BottomNavigation
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        // showLabels
        className={classes.root}
      > 
        <Link to="about" smooth={true} duration={1200} >
          <BottomNavigationAction label="About" icon={<InfoIcon />} />
        </Link>
        <Link to="blogs" smooth={true} duration={1200}>
          <BottomNavigationAction label="Blogs" icon={<CreateIcon />} />
        </Link>
        <Link to="projects" smooth={true} duration={1200}>
          <BottomNavigationAction label="Projects" icon={<AccountTreeIcon />} />
        </Link>
        <Link to="contact" smooth={true} duration={1200}>
          <BottomNavigationAction label="Contact" icon={<ContactsIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}


export default MobileNav