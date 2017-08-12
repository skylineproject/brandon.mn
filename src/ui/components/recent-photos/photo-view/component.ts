import Component  from '@glimmer/component';

export default class PhotoView extends Component {
  get url() {
    return this.args.photo.url
  }

  get caption() {
    return this.args.photo.caption
  }

  get link() {
    return this.args.photo.link
  }
};
