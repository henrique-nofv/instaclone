import React, { Fragment, useState, useEffect } from 'react';
import Header from '../Components/Feed/Header'
import {
    FlatList,
    Text
} from 'react-native';
import Content from '../Components/Feed/Content';

const users = [
    { id: 1, name: 'João', avatarUrl: require('../Images/avatar.jpg') },
    { id: 2, name: 'Maria', avatarUrl: require('../Images/avatar.jpg') },
]

const FeedPage = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        const requestFeed = async () => {
            const feedResponse = await fetch(
                'http://10.0.2.2:3030/feed'
            )

            const feedResponseJson = await feedResponse.json()
            
            setFeed(feedResponseJson)
        }

        requestFeed();

    }, [])

    return (
        <FlatList
            data={feed}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
                <Fragment>
                    <Text>{item}</Text>
                    <Header user={item} />
                    <Content urlImage={item.avatarUrl} />
                </Fragment>
            }
        />
    )
}

export default FeedPage;