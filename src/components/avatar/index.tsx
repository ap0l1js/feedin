import styles from './styles.module.css';

interface AvatarProperties {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProperties) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
