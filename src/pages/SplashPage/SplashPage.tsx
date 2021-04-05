import React, { FC, useContext } from 'react';
import type { RouteComponentProps } from '@reach/router';
import { Button, Text } from '@chakra-ui/react';
import PageWrapper from 'core/components/PageWrapper';
import PageContext from 'core/components/PageContext';
import styles from './SplashPage.module.less';

const SplashPage: FC<RouteComponentProps> = () => {
  const { navigate } = useContext(PageContext);

  return (
    <PageWrapper backgroundImage="url('/images/background/littleBoxes.jpg')">
      <div className={styles.splashPage}>
        <header className={styles.heading}>
          <h1>Living in a Box</h1>
          <Text className={styles.subHeading}>An Open Arts Project</Text>
        </header>

        <Button
          colorScheme="pink"
          size="lg"
          padding="25px 50px"
          onClick={() => navigate('/menu')}
        >
          <h1>ENTER</h1>
        </Button>
      </div>
    </PageWrapper>
  );
};

export default SplashPage;
