import Component  from '@glimmer/component';

export default class PhotoView extends Component {
  get url() {
    return this.args.url
  }

};
