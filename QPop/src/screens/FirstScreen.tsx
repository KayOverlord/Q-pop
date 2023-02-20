import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Button,
  ScrollView,
} from 'react-native';
import {generateSlug} from 'random-word-slugs';

const FirstScreen = ({navigation}: any) => {
  const [beepData, setBeepData] = useState<string[]>([]);

  const makeList = () => {
    let fifth = 0;
    let twentieth = 0;
    let hundred = 0;
    let data = [];
    for (let i = 0; i < 1000; i++) {
      fifth++;
      twentieth++;
      hundred++;

      if (fifth == 5 || twentieth == 20 || hundred == 100) {
        if (fifth == 5) {
          fifth = 0;
          data.push(`beep`);
        }

        if (twentieth == 20) {
          twentieth = 0;
          data.push(`boop`);
        }
        if (hundred == 100) {
          hundred = 0;
          data.push(`beep boop`);
        }
      } else {
        data.push(generateSlug(1));
      }
    }

    setBeepData(data);
  };

  useEffect(() => {
    makeList();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Welcome To</Text>
      <Text style={styles.title}>Q-POP</Text>
      {beepData.length > 0 ? (
        <ScrollView style={styles.beepTable}>
          {beepData.map((item, index) => {
            return (
              <Text
                key={index}
                style={{
                  color:
                    item == 'beep' || item == 'boop' || item == 'beep boop'
                      ? 'green'
                      : 'black',
                }}>
                {item}
              </Text>
            );
          })}
        </ScrollView>
      ) : (
        <ActivityIndicator color={'black'} size="large" />
      )}
      <View style={[{width: '90%', margin: 10, backgroundColor: 'red'}]}>
        <Button
          title={'Next'}
          onPress={() => navigation.navigate('Second')}></Button>
      </View>
    </View>
  );
};

export default FirstScreen;

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
  },
});
