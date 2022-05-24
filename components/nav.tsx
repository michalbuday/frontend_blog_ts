import React from 'react';
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

export interface Category {
    id: string,
    attributes: {
        slug: string,
        name: string
    }
}

interface NavProps {
    categories: Array<Category>
}

const Nav: React.FC<NavProps> = ({ categories }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <AppBar position='static'>
          <Container maxWidth='xl' sx={{backgroundColor: 'rgb(199,0,185)'}}>
              <Toolbar disableGutters sx={{ justifyContent: 'space-between'}}>
                  <Typography
                    variant='h6'
                    noWrap
                    component='a'
                    href='/'
                    sx={{
                        mr:2,
                        display: { xs: 'flex', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    Marta Jelinkova
                  </Typography>
                  <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                    <IconButton
                      size='large'
                      aria-label='navbar menu'
                      aria-controls='menu-appbar'
                      aria-haspopup='true'
                      onClick={handleOpenNavMenu}
                      color='inherit'
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                      id='menu-appbar'
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left'
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left', 
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                          display: { xs:'block', md:'none' }
                      }}
                    >
                        {categories.map((category)=> (
                          <Link key={category.attributes.slug} href={`/category/${category.attributes.slug}`}>  
                            <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign='center'>{category.attributes.name}</Typography>
                            </MenuItem>
                          </Link>
                        ))}
                        <Link href={`#contact`}>  
                          <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign='center'>Kontakt</Typography>
                          </MenuItem>
                        </Link>
                    </Menu>
                  </Box>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {categories.map((category) => (
                            <Link key={category.id} href={`/category/${category.attributes.slug}`}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                    <Typography textAlign='center'>{category.attributes.name}</Typography>
                                </Button>
                            </Link>
                        ))}
                        <Link href={`#contact`}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                <Typography textAlign='center'>Kontakt</Typography>
                            </Button>
                        </Link>
                    </Box>
              </Toolbar>    
          </Container>
      </AppBar>
    </React.Fragment>  
  );
};

export default Nav;