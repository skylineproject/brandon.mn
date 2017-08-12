import Component, { tracked } from '@glimmer/component';

export default class RecentPhotos extends Component {

  @tracked photos = null;

  fetchInstaPhotos() {
    return fetch('https://brandon-mn-proxy-duzsidqgct.now.sh')
      .then((res) => res.json())
      .then((data) => {
        this.photos = data.items.map(p => p.images.thumbnail.url).slice(0, 5)
      })
  }

  didInsertElement() {
    this.fetchInstaPhotos()
  }
};
