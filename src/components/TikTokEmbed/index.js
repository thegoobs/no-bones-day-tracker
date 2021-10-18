import React, { useEffect, useState } from 'react';

export const TikTokEmbed = ({ url = 'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@jongraz/video/7020411242749758725' }) => {
    const [tikTokResults, setTikTokResults] = useState();

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setTikTokResults(data);
        });
    }, [url]);

    return <div dangerouslySetInnerHTML={{ __html: tikTokResults?.html || '' }}></div>;
};
