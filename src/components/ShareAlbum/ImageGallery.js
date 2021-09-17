import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import theme from '../../../assets/themes'

const ListImage = ({ image }) => {
    return <Image source={image.background} style={styles.galleryImage}></Image>
}

const ImageGallery = ({ images }) => {
    console.log(images)
    return (
        <View style={styles.galleryContainer}>
            <Text style={styles.galleryText}>Photo</Text>
            <FlatList
                data={images}
                keyExtractor={(item) => item.id}
                numColumns={3}
                scrollEnabled={false}
                renderItem={({ item }) => <ListImage image={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    galleryImage: {
        height: theme.imageHeight.l,
        width: theme.imageHeight.l,
        margin: 2,
    },
    galleryContainer: {
        alignItems: 'center',
        marginBottom: theme.spacing.l,
    },
    galleryText: {
        ...theme.textVariants.body3,
        color: theme.colors.gray,
    },
})

export default ImageGallery
