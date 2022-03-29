/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  NativeBaseProvider,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {Toast} from 'native-base';
import {StyleSheet} from 'react-native';

interface IInterval {
  start: number | null;
  end: number | null;
}

const App = () => {
  const [interval, setInterval] = useState<IInterval>({} as IInterval);
  const [result, setResult] = useState<string>('No number selected');

  const handleChangeValue = (value: string, key: string): void => {
    setInterval({...interval, [key]: Number(value)});
  };

  const showToast = (message: string) => {
    Toast.show({
      description: message,
    });
  };

  const lottery = (): void => {
    if (!interval.start || !interval.end) {
      showToast('Is necessary enter the interval');
      return;
    }

    if (interval.start >= interval.end) {
      showToast('Start must be less than End and different!');
      return;
    }

    setResult(
      generateRandomIntegerInRange(interval.start, interval.end).toString(),
    );
  };

  const generateRandomIntegerInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <NativeBaseProvider>
      {/* HEADER */}
      <Center bgColor="primary.900">
        <Heading color="white">Lottery</Heading>
      </Center>

      <Container style={styles.container}>
        <Flex direction="column" alignItems="center">
          <Box py="3">
            <Text>Interval to lottery</Text>
          </Box>
          <Flex direction="row" justifyContent="space-around">
            <Center>
              <Box alignItems="center">
                <Input
                  type="number"
                  keyboardType="numeric"
                  mx="3"
                  minW="50%"
                  placeholder="Start"
                  onChangeText={e => handleChangeValue(e, 'start')}
                  w="100%"
                />
              </Box>
            </Center>
            <Center>
              <Box alignItems="center">
                <Input
                  type="number"
                  keyboardType="numeric"
                  minW="50%"
                  mx="3"
                  onChangeText={e => handleChangeValue(e, 'end')}
                  placeholder="End"
                  w="100%"
                />
              </Box>
            </Center>
          </Flex>
          <Box py="3">
            <Text>{result}</Text>
          </Box>
          <Box alignItems="center">
            <Button onPress={() => lottery()}>Lottery</Button>
          </Box>
        </Flex>
      </Container>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  // header: {
  //   height: '65',
  // },
  // titleSection: {
  //   display: 'flex',
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
