const fs = require('fs'),
    xml2js = require('xml2js');

const parser = new xml2js.Parser();

const tags = process.argv;

fs.readFile(
    'content/rss/rss_df.xml', 
    (err, data) => parser.parseString(
        data, (err, result) => {
            const filtered_items 
                = filter_items(result.rss, tags);

            const files = filtered_items.reduce(
                (files, item) => {
                    files.push(item.guid[0]);

                    return files;
                },
                []
            );

            console.log(files.length);
        }
    )
);

function filter_items(rss_obj, tags) {
    const all_items = rss_obj.channel[0].item;

    const cool_items = all_items.filter((current) => {
        // Item contains tag
        for(let tag of tags) {
            const regex = new RegExp(tag, 'i');

            if(current.description[0].search(regex) >= 0) {
                return true;
            }
        }

        // Item doesn't contain tag
        return false;
    });

    return cool_items;
}