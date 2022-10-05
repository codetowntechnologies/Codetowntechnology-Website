import { Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import styles from '../../../styles/header/Breadcrumb.module.scss';
export const PageHeader = ({ title, subtitle, bgImage, classNames, open = false, classtitle, classsubtitle }) => {
  return (
    <Parallax className={styles.section} bgImageStyle={{ height: '100%', width: '100%' }} blur={0} bgImage={bgImage} bgImageAlt={title} strength={10} >
      <Container className={open ? styles.container_1 : styles.container}>
        <h2 className={classtitle}>{title}</h2>
        <p className={!classNames ? classsubtitle : classNames}>{subtitle}</p>
      </Container>
    </Parallax>
  );
};  