<template>
  <div>
    <nuxt-link to class="article-open-link" title="open this article in new tab">
      <div class="article-container" @click="openArticle(articleUrl)">
        <img :src="articleImage" alt class="article-image" />

        <div class="article-header">
          <p class="article-title">{{ articleHeadline}}</p>

          <p class="article-date">
            {{
            articlePublishTime
            }}
          </p>
        </div>
        <div class="content">
          <p class="article-body">{{articleBody }}</p>
        </div>
        <div class="article-footer">
          <p
            class="article-bloggers"
            v-if="articleByLine.length > 3"
            title="publishers names"
          >{{ articleByLine}}</p>

          <p class="article-site" title="article source">{{ articleSource}}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: [
    'article',
    'articleHeadline',
    'source',
    'articlePublishTime',
    'articleImage',
    'articleBody',
    'articleByLine',
    'articleSource',
    'articleUrl'
  ],
  methods: {
    openArticle(url) {
      console.log('Value of: openArticle -> url', url)
      window.open(url, '_blank')
      console.log('container pressed')
    }
  }
}
</script>

<style lang="scss">
/* Responsive mixins */

/* Tablet */

@mixin smallDesktop {
  @media screen and (max-width: 1000px) {
    @content;
  }
}
/* Tablet */

@mixin tablet {
  @media screen and (max-width: 780px) {
    @content;
  }
}

/* Mobile */

@mixin phone {
  @media screen and (max-width: 480px) {
    @content;
  }
}

/* Small Mobile */

@mixin smallPhone {
  @media screen and (max-width: 350px) {
    @content;
  }
}

/* variables */
$lightShadow: 2px 5px 8px rgba(0, 0, 0, 0.4);
$heavyShadow: 2px 20px 25px rgba(0, 0, 0, 0.4);

.article-open-link {
  color: #333;
  padding: 0;
  &:hover {
    .article-container {
      border: 2px solid red;
      background-image: linear-gradient(to right, #fff 60%, #eee);
      box-shadow: $heavyShadow;

      transition: 0.4s;
      .article-title {
        color: rgb(223, 75, 75);
        font-weight: bolder;
      }

      .article-date{
        color: #666;
      }
      .content {
        .article-body {
          color: #444;
        }
      }
      
      .article-footer {
        .article-bloggers {
          box-shadow: $lightShadow;
          transition: 0.3s;
        }
        .article-site {
          box-shadow: $lightShadow;
          transition: 0.3s;
        }
      }
    }
  }
  .article-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr 50px;
    grid-template-areas:
      'article-image article-header'
      'article-image article-body'
      'article-image article-footer';
    border: 2px solid transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);

    width: 95vw;
    border-radius: 20px;
    margin-bottom: 20px;

    .article-image {
      grid-area: article-image;
      background: #ddd;
      display: block;
      width: 400px;
      min-width: 400px;
      height: 250px;
      min-height: 250px;
      margin: 10px;
      border-radius: 15px;
    }

    .article-header {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      grid-area: article-header;
      text-align: left;
      .article-title {
        font-weight: bold;
        text-align: left;
        font-size: 24px;
        line-height: 1.2;
        padding-top: 10px;

      }
      .article-date {
        font-size: 14px;
        margin-top: 10px;
      }
    }

    .content {
      grid-area: article-body;
      .article-body {
        color: #777;
        text-align: left;
        line-height: 1.5em;
        height: 4.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 20px;
      }
    }
    .article-footer {
      grid-area: article-footer;

      display: flex;
      flex-flow: row wrap;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      bottom: 20px;

      .article-bloggers {
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 14px;
        margin-right: 20px;
        color: #fff;
        background: #777;
        max-width: 30ch;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .article-site {
        font-size: 14px;
        display: flex;

        align-items: center;
        background: #f14668;
        font-size: 12px;
        color: #fff;

        padding: 5px 15px;
        border-radius: 15px;
      }
    }
  }

  @include smallDesktop {
    .article-container {
      grid-template-columns: 430px 1fr;

      grid-template-rows: auto 80px 1fr;

      grid-template-areas:
        'article-image article-header'
        'article-body article-body'
        'article-image article-footer ';
      .article-header {
        .article-title {
          padding: 5px 0;
          font-size: 20px;
          line-height: 1.2;
          width: 80%;
        }
      }

      .content {
        font-size: 14px;
        margin-bottom: 10px;
      }

      .article-footer {
        flex-flow: row wrap;
        align-items: center;
        bottom: 0;

        .article-bloggers {
          margin: 10px 0;
        }
        .article-site {
          display: none;
        }
      }
    }
  }

  @include tablet {
    .article-container {
      grid-template-columns: 1fr 1fr;

      grid-template-rows: auto auto 4.5em 50px;

      grid-template-areas:
        'article-header article-header'
        'article-image article-image '
        'article-body article-body '
        'article-footer article-footer ';
        padding: 5px;;
      .article-header {
        text-align: center;
        .article-title {
          text-align: center;
          width: 95%;
          font-size: 22px;
          line-height: 1.3;
          padding-top: 10px;
        }
      }
      .article-image{
        place-self: center;
      }
      .content {
        padding: 10px;
        .article-body {
          height: 4.5em;
        }
      }

      .article-footer {
        flex-flow: column;
        align-items: center;
        bottom: 0;
                place-self: center;

        .article-bloggers {
          margin: 0 0 5px 0;
        }
      }
    }
  }

  @include phone {
    .article-container {
      grid-template-columns: 1fr 1fr;

      grid-template-rows: auto auto 50px;

      grid-template-areas:
        'article-header article-header'
        'article-image article-image '
        'article-footer article-footer ';

      .article-image {
        margin: 10px auto;
        width: 300px;
        min-width: 300px;
        height: 200px;
        min-height: 200px;
      }
      .article-header {
        text-align: center;

        .article-title {
          width: 90vw;
          margin: 0 auto;
          text-align: center;
          font-size: 18px;
          line-height: 1.3;
          padding-top: 10px;
        }
      }
      .content {
        display: none;
        padding: 10px;
        .article-body {
          height: 6em;
          width: 90vw;
        }
      }

      .article-footer {
        justify-content: center;
        align-items: center;
      }
    }
  }
  @include smallPhone {
    .article-container {
      grid-template-columns: 1fr 1fr;

      grid-template-rows: auto auto 50px;

      grid-template-areas:
        'article-header article-header'
        'article-image article-image '
        'article-footer article-footer ';

      .article-image {
        margin: 10px auto;
        min-width: 100%;
        width: 100%;
        min-height: 150px;
        height: 180px;
      }
      .article-header {
        text-align: center;

        .article-title {
          width: 95vw;
          margin: 0 auto;
          text-align: center;
          font-size: 12px;
          line-height: 1.3;
          padding-top: 10px;
        }
      }
      .content {
        display: none;
        padding: 10px;
        .article-body {
          height: 6em;
          width: 90vw;
        }
      }

      .article-footer {
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>