const items = [
    {
      id: 0,
      title: 'The Maskin Project',
      subheader: '',
      description: `Robots with swords.  There really isn't much else to say about it.`,
    },
    {
      id: 1,
      title: `The Angel's Game`,
      subheader: '',
      description: `What would it be like to live a hundred lifetimes, trying to win an almost impossible game?`,
    },
  ]

export function getStorySummaries(setStories) {
    setStories(items);
}