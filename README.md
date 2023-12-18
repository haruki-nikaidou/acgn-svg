# ACGN SVG Club

A lot of ACGN images do not have a high resolution. In contrast, huge amounts of space are often taken up unexpectedly for higher resolution, especially for comic and anime.

There are some inverse graphics researches, like [BézierSketch](https://arxiv.org/abs/2007.02190), which can convert low-resolution images to vector graphics with no larger size but more clear. Maybe there will be some algorithms that can convert all kinds of ACGN images to vector graphics in future.

However, we think that the best high-resolution images must be the native vector graphics. Thus, we found ACGN SVG club.

The ACGN SVG club is a collection of native vector graphics illustrations. To join us, your artwork must satisfy both of the following requirements:

1. Must be a colored illustration of anime, comic, game or light novel.
2. Must be SVG compliant and render perfectly as SVG.

## How to join

1. Ensure your artwork satisfy the requirements.
2. Fork this repo
3. Add your artwork to `public/artworks` and add meta in `src/artworksInfo.json`
4. PR. After checking, we will add your artwork to the club.

Artwork meta is defined in `/src/components/ArtworkCard.astro`:

```ts
interface Artwork {
    name: string;
    tags: string[];
    author: string;
    authorLink?: string;
    artworkSrc: string;
}
```