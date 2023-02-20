import AsyncStorage from '@react-native-async-storage/async-storage';
const dataset1 = {name: 'Michael', surname: 'Baker'};
const dataset2 = {email: 'michael@test.com', cell_no: '0825558364'};

const getData = async (key: string) => {
  let data = await AsyncStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    let info = JSON.stringify([{...dataset1, ...dataset2}]);

    await AsyncStorage.setItem(key, info!);
    return JSON.parse(info);
  }
};

// function to update data in async storage
const updateData = async (key: string, data: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export {getData, updateData};
