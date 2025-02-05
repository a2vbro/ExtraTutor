import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',

  },
  listContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    marginTop: 10,
  },
  itemLabel: {
    color: 'red',
  },
  item: {
    height: 50,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    margin: 16,
    left: 10,
    top: 0,
  },
});
