import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {View, Text, Button} from 'react-native';
import { ListProps } from "../types";

const List: React.FC<ListProps> = ({navigation}) => {
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