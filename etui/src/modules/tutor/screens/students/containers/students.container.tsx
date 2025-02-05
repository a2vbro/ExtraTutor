import {FC, useEffect, useState} from 'react';

import { StudentsComponent } from '../components';
import {TStudent, TStudentsContainerProps} from '../types';
import {TutorLayout} from '../../../../../components/TutorLayout';
import {getStudents} from '../helpers';

export const Students: FC<TStudentsContainerProps> = ({}) => {

  const [students, setStudents] = useState<TStudent[]>([]);


  useEffect(() => {
    getStudents().then(data => {
      setStudents(data);
    }).catch(error => console.log(error));
  }, []);

  return (
    <TutorLayout>
      <StudentsComponent data={students} />
    </TutorLayout>
  );
};
