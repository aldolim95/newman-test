const newman = require('newman');

newman.run({
    collection: require('./SQECC Example.postman_collection.json'), // can also provide a URL or path to a local JSON file.
    reporters: 'html',
    reporter: {
        html: {
            export: './report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
