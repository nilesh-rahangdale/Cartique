import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
// Redux import
import { useDispatch, useSelector } from 'react-redux';
import { showUserList } from './Redux/action';

export default function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.reducer);

  useEffect(() => {
    dispatch(showUserList());
  }, [dispatch]);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>ID: {item.id}</Text>
      <Text style={styles.itemText}>Title: {item.title}</Text>
      <Text style={styles.itemText}>Body: {item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartData.length === 0 ? (
        <Text style={styles.emptyText}>No items in the cart</Text>
      ) : (
        <FlatList
          data={cartData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});