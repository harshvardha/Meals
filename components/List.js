import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
    return (
        data.map(dataPoint =>
            <View key={dataPoint} style={styles.listItem}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        padddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497"
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})

export default List;