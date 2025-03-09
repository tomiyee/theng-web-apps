import { IconButton, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

type HomeButtonProps = {
  color?: string;
};

export const HomeButton: React.FC<HomeButtonProps> = (props) => {
  const { color } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <IconButton onClick={() => navigate('')}>
      <HomeIcon sx={{ color: color ?? theme.palette.primary.contrastText }} />
    </IconButton>
  );
};
