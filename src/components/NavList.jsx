import { List, ListItem, ListItemButton,  ListItemText } from "@mui/material";
import { Box } from "@mui/system";

export default function NavList({navLinks, onClick}) {
  return (
   <Box
     sx={{
     width:
     250,bgcolor:
     "#666666",
     color:"beige"
     }}
     onClick={onClick}
     >
      <nav>
        <List>
        {navLinks.map((item) =>(
            <ListItem
              disablePadding
              key={item.title}
              sx={{mt:7,
              ml:
              2,
              color:"beige"}}>
          <ListItemButton
            href={item.path}
            component="a">
           <ListItemText primary={item.title}/>
           </ListItemButton>
          </ListItem>
          ))
        }
        </List>
      </nav>
    </Box>
  );
}
