import HomeIcon from "@mui/icons-material/Home";
import LinkIcon from "@mui/icons-material/Link";
import FilePresentIcon from "@mui/icons-material/FilePresent";
const Navbar = [
  {
    id: 1,
    icon: <HomeIcon></HomeIcon>,
    title: "Home",
    path: "Home",
  },
  {
    id: 2,
    icon: <FilePresentIcon></FilePresentIcon>,
    title: "Projects",
    path: "Projects",
  },
  {
    id: 3,
    icon: <LinkIcon></LinkIcon>,
    title: "About",
    path: "About",
  },
];
export default Navbar;
