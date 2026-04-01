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
  const [activeTag, setActiveTag] = useState('all');
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

  // populate the variables with artworks
  const filtered =
    activeTag === 'all'
      ? artworks
      : artworks.filter(a => a.tags?.some(t => t.label === activeTag));

  if (loading) {
    return <div>Loading artwork...</div>;
  }

  return (
    <div className="flex min-w-full flex-col gap-2">
      <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTag('all')}
          className={`shrink-0 rounded-full border px-3 py-1 text-sm transition-colors ${activeTag === 'all' ? 'border-blue-400 bg-blue-100 text-blue-800' : 'border-border text-muted'}`}
        >
          all
        </button>
        {tags.map(tag => (
          <button
            key={tag.label}
            onClick={() => setActiveTag(tag.label)}
            className={`shrink-0 rounded-full border px-3 py-1 text-sm transition-colors ${activeTag === tag.label ? 'border-blue-400 bg-blue-100 text-blue-800' : 'border-border text-muted'}`}
          >
            #{tag.label}
          </button>
        ))}
      </div>

      <main className="grid h-full grid-cols-2 gap-4 overflow-y-auto md:grid-cols-3">
        {filtered.map(artwork => (
          <div
            key={artwork._id}
            className="border-border border-border overflow-hidden rounded-xl border"
          >
            {artwork.tags?.[0] && (
              <div className="flex flex-wrap gap-1 p-2">
                {artwork.tags?.map(tag => (
                  <span
                    key={artwork._id}
                    className="m-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800"
                  >
                    #{artwork.tags[0].label}
                  </span>
                ))}
              </div>
            )}
            {artwork.imageUrl && (
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full object-cover"
              />
            )}
            <div className="p-2">
              <p className="text-sm font-medium">{artwork.title}</p>
              {artwork.description && (
                <p className="text-muted-foreground text-xs">
                  {artwork.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
