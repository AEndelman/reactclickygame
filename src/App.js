import React, { Component } from "react";
import Wrapper from "./Components/Wrapper/Wrapper";
import ImageCard from "./Components/ImageCard";
import photos from "./photos.json";
import Title from "./Components/Title"

class App extends Component {
    state = {
        photos: photos,
        unselectedPhotos: photos,
        score: 0,
        selectedPhotos: [],
    };

    shufflePhotos = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    selectPhoto = id => {
        let score = this.state.score;
        let selectedPhotos = this.state.selectedPhotos;
        const findPhoto = this.state.unselectedPhotos.find(item => item.id === id)
        console.log(findPhoto);
        this.setState({
            selectedPhotos: [findPhoto, ...this.state.selectedPhotos]
        })
        console.log(selectedPhotos)

        if (selectedPhotos.includes(findPhoto)) {
            this.setState({
                score: 0,
                photos: photos,
                unselectedPhotos: photos,
                selectedPhotos: []
            });
        }

        else {
            const newSelected = this.state.unselectedPhotos.filter(item => item.id !== id);

            this.setState({
                score: this.state.score + 1,
                photos: photos,
                unselectedPhotos: photos
            })
        }

        this.shufflePhotos(photos);
    }


    render() {
        return (
            <Wrapper>
             <Title>Click the Photos. Remember which you haven't clicked yet! Try for 12 in a row... Score: {this.state.score}</Title>
                {this.state.photos.map(photo => (
                    <ImageCard
                        selectPhoto={this.selectPhoto}
                        id={photo.id}
                        image={photo.image}
                    />
                ))}
            </Wrapper>
        );
    }
}


export default App;
