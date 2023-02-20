import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
  View,
} from 'react-native';
import {getData, updateData} from '../util/data';

const ThirdScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cell_no, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const data = await getData('mainData');

    setName(data[0].name);
    setSurname(data[0].surname);
    setEmail(data[0].email);
    setCell(data[0].cell_no);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const newData = [
      {name: name, email: email, surname: surname, cell_no: cell_no},
    ];
    await updateData('mainData', newData);
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={'height'} enabled>
      {!loading ? (
        <>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <TextInput
            style={styles.input}
            value={surname}
            onChangeText={setSurname}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            value={cell_no}
            onChangeText={setCell}
          />
          <View style={[{width: '90%', margin: 10, backgroundColor: 'red'}]}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </>
      ) : (
        <ActivityIndicator size="small" color="primary" />
      )}
    </KeyboardAvoidingView>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: 'black',
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  subTitle: {
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
