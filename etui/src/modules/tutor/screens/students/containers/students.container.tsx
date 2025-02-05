import { FC } from 'react';

import { StudentsComponent } from '../components';
import { TStudentsContainerProps } from '../types';
import {TutorLayout} from '../../../../../components/TutorLayout';

export const Students: FC<TStudentsContainerProps> = ({}) => {
  return (
    <TutorLayout>
      <StudentsComponent  />
    </TutorLayout>
  );
};
