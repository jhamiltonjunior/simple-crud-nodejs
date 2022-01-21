// sempre colocar os arquivos mais importantes por ultimo

import '../../css/variable.css';
import '../../css/default.css';
import '../../css/animation.css';
import '../../css/page/home.css';

import SetImage from '../util/setImage.js';
import '../animation.js';

new SetImage(
  'http://localhost:5000/img/page/home/hero-img.png',
  'hero-head-line',
).innerImage();

new SetImage(
  'http://localhost:5000/img/emphasis/initial-page.png',
  'initial-page',
).innerImage();
