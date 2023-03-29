import React, { Component } from 'react';
import { Searchbar } from './Searchbar/searchbar';
import { Button } from './Button/button';
import { ImageGallery } from './ImageGallery/imageGallery';
import { Loader } from './Loader/loader';
import { Modal } from './Modal/modal';
import css from './styles.module.css';

const KEYCODE_ENTER = 13;
const KEYCODE_ESC = 27;

class App extends Component {
  state = {
    articles: [],
    searchName: '',
    page: 1,
    isLoading: false,
    modalItem: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://pixabay.com/api/?q=cat&page=1&key=33018629-fbe0e3699e0e90be35e2ad394&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(res => {
        this.setState({
          articles: res.hits,
          isLoading: false,
        });
      });

    document.addEventListener('keydown', this.keyDownEventsHandle);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownEventsHandle);
  }

  keyDownEventsHandle = (e) => {
    const isEscButton = e.keyCode === KEYCODE_ESC;

    switch (true) {
      case isEscButton:
        return this.closeModal();

      default:
        return null;
    }
  };

  closeModal = (e) => {
    if (e !== undefined) {
      if (e.target.tagName === 'IMG') return false;
    }

    const { modalItem } = this.state;

    if (modalItem != null) {
      this.setState({
        modalItem: null,
      });
    }
  };

  findImg = (event) => {
    this.setState({ isLoading: true });
    event.preventDefault();
    fetch(`https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.page}&key=33018629-fbe0e3699e0e90be35e2ad394&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          articles: res.hits,
          isLoading: false,
        });
      });
  };

  onPush = (id) => {
    this.setState({
      modalItem: this.state.articles.find((item) =>
        item.id === id,
      ),
    });
  };

  pushBut = () => {
    this.setState({ isLoading: true });
    let page = this.state.page += 1;
    fetch(`https://pixabay.com/api/?q=${this.state.searchName}&page=${page}&key=33018629-fbe0e3699e0e90be35e2ad394&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...res.hits],
          isLoading: false,
        }));
      });
  };

  setSearchName = (event) => {
    this.setState({
      searchName: event.target.value,
    });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar
          findName={this.setSearchName}
          onSubmit={this.findImg}
        />
        <ImageGallery
          onPushUl={this.onPush}
          newGallery={this.state.articles}/>
        {this.state.articles.length !== 0 ?
          <Button className={css.findButton} onPushBut={this.pushBut}/> : null
        }
        {this.state.isLoading ? <Loader
        /> : null}
        { this.state.modalItem !== null ?
          <Modal
            closeModal={this.closeModal}
            item={this.state.modalItem}
          />
          : null
        }
      </div>

    );
  }
}

export default App;