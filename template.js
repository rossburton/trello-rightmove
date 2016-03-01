TrelloPowerUp.initialize({
    'attachment-thumbnail': function (t, options) {
        if (!/^https?:\/\/www\.rightmove\.co\.uk\//.test(options.url)) {
            return {
                url: options.url,
                title: "Property on RightMove"
                image: {
                    url: './rightmove.jpg',
                    log: true
                },
                openText: 'View at RightMove'
            };
        } else {
            throw t.NotHandled();
        }
    }
});
