/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-shadow */
/* eslint-disable space-infix-ops */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {FunctionComponent, useState, useEffect} from 'react';
import {ActivityIndicator, Image, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import * as dayjs from 'dayjs';
import {gql, useQuery} from '@apollo/client';
import * as S from './styled';

type OwnProps = {
  route: any;
};

type Props = OwnProps;

const Get_SINGEL_LAUNCH = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      details
      mission_name
      launch_date_unix
      launch_success
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
    }
  }
`;

export const Detail: FunctionComponent<Props> = ({route}) => {
  const likesCollection = firestore().collection('likes');
  const {spacexID} = route.params;
  const {data, loading} = useQuery(Get_SINGEL_LAUNCH, {
    variables: {id: spacexID},
    fetchPolicy: 'cache-and-network',
  });
  const [count, setCount] = useState(0);

  const updateCount = (id: string) => {
    console.log('count', count);
    likesCollection
      .doc(id)
      .update('like_count', firestore.FieldValue?.increment(1))
      .then(() => {
        console.log('User updated!');
      });
  };

  useEffect(() => {
    const subscriber = likesCollection
      .doc(spacexID)
      .onSnapshot((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setCount(documentSnapshot.data()?.like_count);
        } else {
          likesCollection.doc(spacexID).set({
            like_count: 0,
          });
        }
      });
    return () => subscriber();
  }, [spacexID, likesCollection]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <S.Container>
      <Text>{data.launch?.mission_name}</Text>
      <Text>{data.launch?.rocket.rocket_name}</Text>
      <Text>
        {dayjs
          .unix(data.launch?.launch_date_unix)
          .format('MMMM D, YYYY h:mm A')}
      </Text>
      <Image
        style={{width: 150, height: 150}}
        source={{
          uri: data.launch?.links?.flickr_images[1],
        }}
      />
      <Text>{data.launch?.details}</Text>
      <S.FloatingBTN onPress={() => updateCount(spacexID)} activeOpacity={0.7}>
        <S.ButtonText>{`likes ${count}`}</S.ButtonText>
      </S.FloatingBTN>
    </S.Container>
  );
};

export default Detail;
