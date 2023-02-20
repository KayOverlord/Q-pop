import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, Button} from 'react-native';
import {getData} from '../util/data';

type info = {
  name: string;
  surname: string;
  email: string;
  cell_no: string;
};

const SecondScreen = ({navigation}: any) => {
  const [Data, setData] = useState<info[]>([]);
  useEffect(() => {
    getData('mainData').then(result => {
      setData(result);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Q-POP</Text>
      <Text style={styles.subTitle}>user info...</Text>
      <View style={styles.beepTable}>
        {Data.length > 0 &&
          Data.map((item, index) => {
            return (
              <View
                style={{justifyContent: 'center', alignItems: 'flex-start'}}
                key={index}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  {item.name + `\n`}
                  {item.surname + `\n`}
                  {item.email + `\n`}
                  {item.cell_no}
                </Text>
              </View>
            );
          })}
      </View>
      <View style={[{width: '90%', margin: 10, backgroundColor: 'red'}]}>
        <Button
          title={'Refresh'}
          onPress={() =>
            getData('mainData').then(result => {
              setData(result);
            })
          }
        />
      </View>
      <View style={[{width: '90%', margin: 10, backgroundColor: 'red'}]}>
        <Button title={'Next'} onPress={() => navigation.navigate('Third')} />
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
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
  beepTable: {
    width: '100%',
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
