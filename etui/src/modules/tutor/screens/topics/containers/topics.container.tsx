import {FC, useEffect, useState} from 'react';

import {TopicsComponent} from '../components';
import {TTopic, TTopicsContainerProps} from '../types';
import {TutorLayout} from '../../../../../components/TutorLayout';
import {getTopics} from '../helpers';

export const Topics: FC<TTopicsContainerProps> = ({}) => {

  const [topics, setTopics] = useState<TTopic[]>([]);


  useEffect(() => {
    getTopics().then(data => {
      setTopics(data);
    }).catch(error => console.log(error));
  }, []);

  return (
    <TutorLayout>
      <TopicsComponent data={topics} />
    </TutorLayout>
  );
};
