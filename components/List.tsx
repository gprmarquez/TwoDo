import React from "react";
import {View, Text, Button} from 'react-native';

const List = ({navigation}) => {
    return (
        <View>
            <Text>List</Text>
            <Button onPress={() => navigation.navigate("Details")}
            title="Details"
            ></Button>
        </View>
    );
}

export default List;