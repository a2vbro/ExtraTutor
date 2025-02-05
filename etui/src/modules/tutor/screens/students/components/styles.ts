import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleContainer: {
    height: 30,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: '100%',
  },
  buttonContainer: {
    height: 60,
  },
});
