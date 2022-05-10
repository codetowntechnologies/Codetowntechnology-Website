import { Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import styles from '../../../styles/header/Breadcrumb.module.scss';
export const PageHeader = ({ title, subtitle, bgImage, classNames }) => {
  return (
    <Parallax className={styles.section} bgImageStyle={{ height: '100%' }} blur={1} bgImage={bgImage} bgImageAlt={title} strength={10} >
      <Container className={styles.container}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Container>
    </Parallax>
  );
};  