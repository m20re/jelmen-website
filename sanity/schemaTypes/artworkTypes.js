export const artworkTypes = {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Artwork Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image or GIF',
      type: 'image',
      options: {
        // allows for cropping
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      // makes text box taller
      rows: 3,
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
      description: 'Link to the live project or GitHub repo',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
  ],
};
