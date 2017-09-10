import './index.scss';
import { wordsToSentence } from './utils/utils';

var el = document.createElement('div'),
    text = document.createTextNode(
        wordsToSentence('Welcome', 'to', 'my', 'app!')
      );
el.id = 'app';
el.appendChild(text);
document.body.appendChild(el);
