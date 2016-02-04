import { text as importedText } from './text-to-import.js';
import styles from './hello.mss';

console.dir(styles)
// counter starts at 0
Session.setDefault('counter', 0);
Template.hello.helpers({
    counter: function () {
        return Session.get('counter');
    },
    styles: styles,
    importedText: importedText
});

Template.hello.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    }
});