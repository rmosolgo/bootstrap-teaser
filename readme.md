# Bootstrap-Teaser

A [jQuery](http://jquery.com/) plugin for [Twitter Bootstrap](http://twitter.github.io/bootstrap/) which uses the first few sentances of html as a teaser and shows a "See more..." link to show all the html. 

See it in action [on Bl.ocks](http://bl.ocks.org/rmosolgo/raw/5446195/).

Gives a preview of paragraph contents and a link to see the rest of the paragraph.

## Usage

### Basic

- Include `bootstrap-teaser.js` in your page: 

```HTML
<script src='bootstrap-teaser.js'></script>
```

- Add `class="teaser"` to an element and the _first sentence_ will be used as a teaser and a _See more..._ link will be created for you.

### Settings

Add `data-teaser-length` to the element to specify the number of sentences, eg `data-teaser-length=3` will show the first three sentences as a preview.

The created _See more..._ link has class `text-info` -- so it will be affected by other changes to that Bootstrap class.

 
