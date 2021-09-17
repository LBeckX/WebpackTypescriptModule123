import * as _ from "lodash";

const templateFn = _.template('<div class="my-template"><%= comment %></div>');

const html = templateFn({comment: 'This is my important comment'});
document.body.innerHTML += html;
