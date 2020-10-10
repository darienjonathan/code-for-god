<template>
  <div>
    <div class="my-4">
      <h1 class="d.flex text-center">{{ post.title }}</h1>
    </div>
    <v-img
      v-if="post.featured_image"
      :src="post.featured_image"
      max-height="500"
      class="d.flex text-center mb-5"
      contain
    />
    <div class="content text-wrap" v-html="post.content" />
  </div>
</template>
<script>
export default {
  name: "Wordpress",
  props: ["post"]
};
</script>
<style lang="scss" scoped>
// wordpress
.content {
  & ::v-deep {
    p {
      margin-bottom: 24px;
    }
    .wp-block-cover,
    .wp-block-image,
    .wp-block-embed,
    .wp-block-audio {
      margin: 32px 0;
    }
    dfn,
    cite,
    em,
    i {
      font-style: italic;
    }

    a {
      text-decoration: underline;
    }

    ul {
      list-style: disc;
      list-style-position: inside;
      & ul {
        list-style-type: circle;
      }
    }

    ol {
      list-style: decimal;
      list-style-position: inside;
    }

    li > ul,
    li > ol {
      padding-left: 2rem;
    }

    h1,
    h2,
    h3 {
      font-weight: 600;
    }
    h4,
    h5,
    h6 {
      font-weight: 800;
    }

    @mixin heading($size) {
      font-size: $size;
      margin-bottom: $size / 2;
    }

    h1 {
      @include heading(24px);
    }
    h2 {
      @include heading(22px);
    }
    h3 {
      @include heading(20px);
    }
    h4 {
      @include heading(16px);
    }
    h5 {
      @include heading(14px);
    }
    h6 {
      @include heading(12px);
    }

    .wp-block-cover {
      position: relative;
      min-height: 430px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000000;
      background-size: cover;
      background-position: 50%;
      & p {
        margin: 1em;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: inherit;
        opacity: 0.5;
        z-index: 1;
      }
    }

    .wp-block-image > .aligncenter {
      text-align: center;
    }

    .wp-block-image > .alignright {
      text-align: right;
    }

    .wp-block-image img,
    iframe {
      max-width: 100%;
    }

    .wp-block-column {
      &s {
        display: flex;
        flex-wrap: wrap;
      }
      flex: 1 0 auto;
    }

    .wp-block-gallery {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    .blocks-gallery-item {
      $margin: 15px;
      margin-bottom: $margin;
      &:not(:last-child) {
        margin-right: $margin;
      }

      & > figure {
        display: flex;
        height: 100%;
      }

      & [class^="wp-image"] {
        max-width: 100%;
        object-fit: cover;
      }
    }

    .wp-block-image.is-resized {
      text-align: center;
    }

    .wp-block-media-text {
      display: grid;
      grid-template-rows: auto;
      align-items: center;
      grid-template-areas: "media-text-media media-text-content";
      grid-template-columns: 50% auto;

      &__media {
        grid-area: media-text-media;
        & > img {
          width: 100%;
        }
      }

      &__content {
        grid-area: media-text-content;
        word-break: break-word;
        padding: 0 8%;
      }
    }

    .wp-block-quote {
      border-left: 2px solid #0073aa;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 1em;
    }

    .wp-block-audio {
      & > audio {
        width: 100%;
      }
      & > figcaption {
        text-align: center;
      }
    }

    .has-text-align-left {
      text-align: left;
    }
    .has-text-align-center {
      text-align: center;
    }
    .has-text-align-right {
      text-align: right;
    }
    .has-text-align-justify {
      text-align: justify;
    }
  }
}
</style>
