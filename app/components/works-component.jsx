'use client';

import { useState, useEffect } from 'react';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-03-30',
  useCdn: true,
});

export default function WorkComponent({ onClose }) {
  // upon new art, reload the page
  const [artworks, setArtworks] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "artwork"]{
      _id,
      title,
      description,
      link,
      "imageUrl": image.asset->url,
      "tags": tags[]->{ label },
    }`;
    // get tag for each artwork
    const tagQuery = `*[_type == "tag"] { label }`;

    client.fetch(query).then(data => {
      setArtworks(data);
      setLoading(false);
    });
    client.fetch(tagQuery).then(data => setTags(data));
  }, []);

  if (loading) {
    return <div>Loading artwork...</div>;
  }

  return (
    <div className="flex flex-col">
      <div id="tags" className='min-w-full'>
        {tags.map((tag, index) => (
          <button key={index}>{tag.label}</button>
        ))}
      </div>

    <main className="grid h-full grid-cols-2 gap-4 overflow-y-auto md:grid-cols-3">
      {artworks.map(artwork => (
        <div key={artwork._id}>
          {artwork.imageUrl && (
            <img src={artwork.imageUrl} alt={artwork.title} />
          )}
        </div>
      ))}
      </main>
    </div>
  );
}
