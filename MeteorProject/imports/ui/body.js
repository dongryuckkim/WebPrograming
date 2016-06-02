/**
 * Created by KDR on 2016-06-02.
 */
import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.Write.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1 } });
    },
});

Template.Write.events({
    'submit .new-task'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // Insert a task into the collection
        Tasks.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        target.text.value = '';
    },
});