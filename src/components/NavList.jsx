import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";

export default function NavList() {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <PrivacyTipIcon />
            </ListItemIcon>
            <ListItemText primary="Nuestor Servicios"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contacto"></ListItemText>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
