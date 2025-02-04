import { ParamListBase } from '@react-navigation/native';

export type ParamList = ParamListBase & {
  CONNECT_WALLET: Record<string, never>;
  TUTOR_PANEL: Record<string, never>;
};

export type TRootNavigationProps =  ParamListBase & {
  initialRouteName: string;
}
