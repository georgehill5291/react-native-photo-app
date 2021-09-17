import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import theme from '../../assets/themes'
import Avatars from './Avatars'
import ShareAlbumTitleCard from './ShareAlbum/ShareAlbumTitleCard'
import ImageGallery from './ShareAlbum/ImageGallery'
import backgroundImages from './../../assets/data/backgroundImages'

const ShareAlbum = ({ route }) => {
    const album = route.params.album
    console.log(album)
    return (
        <ScrollView>
            <ShareAlbumTitleCard album={album} />
            <View style={styles.avatarContainer}>
                <Avatars avatars={album.avatars} />
                <Text style={styles.avatarContainerText}>{`${album.avatars.length} people`}</Text>
            </View>
            <ImageGallery images={backgroundImages} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.gray,
        marginVertical: theme.spacing.l,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
    },
    avatarContainerText: {
        ...theme.textVariants.body3,
        color: theme.colors.black,
        opacity: 0.3,
    },
})

export default ShareAlbum
