import { FC } from 'react';

import { PanelComponent } from '../components';
import { TPanelContainerProps } from '../types';
import {TutorLayout} from '../../../../../components/TutorLayout';

export const Panel: FC<TPanelContainerProps> = ({}) => {


  return (
    <TutorLayout>
      <PanelComponent  />
    </TutorLayout>
  );
};
