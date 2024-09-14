import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavList from "./NavList";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";

const navLinks =[
  {
  title:"Servicios" , path: "#"
},
{
  title:" Perfil" , path: "#Perfil"
},
{
  title:"Contacto" , path: "#Contacto"
},
];

export default function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <>
      <AppBar position ="fixed" sx={{ bgcolor: "#666666"}}>
        <Toolbar>
        <IconButton
            color="inherit"
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
            >    
          <MenuIcon />     
          </IconButton>
          <Typography variant="h6" sx={{flexGrow:1}}>
            Menu
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navLinks.map((
            item) =>(
              <Button key={item.title} sx={{p:3, color:"inherit"}} href={item.path} >{item.title}</Button>
            ))}     
           </Box>      
        </Toolbar>      
      </AppBar>
      <Drawer
         anchor="left"
         open={open}
         onClose={() => setOpen(false)}
         sx={{ display: { xs: "block", sm: "none" } }}>
      <NavList
      onClick={() => setOpen(false)}
      navLinks={navLinks} />
      </Drawer>
    </>
  );
}
