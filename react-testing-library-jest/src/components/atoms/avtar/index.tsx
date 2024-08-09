import { Avatar, AvatarProps } from '@mui/material';

const AvatarComponent: React.FC<AvatarProps> = (
  props: AvatarProps
) => <Avatar alt={props.alt} src={props.src} />;

AvatarComponent.defaultProps = {
  src: '',
  alt: '',
};

export default AvatarComponent;
