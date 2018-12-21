<template>
  <main class="page-content">
    <router-menu
      class="menu-list--centered"
      v-bind:menu-items="menuItems"
      v-if="currentPortfolio === undefined"
    />

    <div v-else-if="!redirection" class="portfolio">
      <p class="portfolio__title">{{ portfolio[currentPortfolio].title }}</p>

      <div
        v-for="(src, mockup, index) in portfolio[currentPortfolio].previews"
        v-bind:key="index"
        v-bind:class="`portfolio__${mockup}`"
      >
        <div v-bind:class="`portfolio__${mockup}-mockup`">
          <img
            v-bind:src="mockups[mockup].src"
            v-bind:alt="mockups[mockup].alt"
            v-bind:width="mockups[mockup].width"
            v-bind:height="mockups[mockup].height"
          >

          <div v-bind:class="`portfolio__${mockup}-preview`">
            <div
              v-bind:class="`portfolio__${mockup}-inner`"
              v-bind:ref="mockup"
              v-bind:style="`width: ${mockups[mockup].innerWidth}px`"
            >
              <picture>
                <source v-bind:srcset="src.webp" type="image/webp">
                <img v-bind:src="src.jpg" v-bind:alt="src.alt">
              </picture>
            </div>
          </div>
        </div>
      </div>

      <span class="portfolio__demo">
        <a
          class="portfolio__demo-link"
          v-bind:href="portfolio[currentPortfolio].demo"
          target="_blank"
          rel="noopener"
        >Demo</a>
      </span>

      <span class="portfolio__github">
        <a
          class="portfolio__github-link"
          v-bind:href="portfolio[currentPortfolio].github"
          target="_blank"
          rel="noopener"
        >View on GitHub</a>
      </span>

      <div class="portfolio__navigation">
        <button
          class="portfolio__navigation-button portfolio__navigation-button--prev"
          type="button"
          title="Previous"
          v-on:click="switchPortfolio('prev')"
        >Previous</button>
        <button
          class="portfolio__navigation-button portfolio__navigation-button--next"
          type="button"
          title="Next"
          v-on:click="switchPortfolio('next')"
        >Next</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Portfolio',

  components: {
    'router-menu': () => import('@/components/RouterMenu.vue')
  },

  data() {
    return {
      menuItems: [
        {
          href: '/portfolio/atlantida',
          text: 'Atlantida'
        },
        {
          href: '/portfolio/brume',
          text: 'Brume'
        },
        {
          href: '/portfolios/cakes',
          text: 'Cakes'
        },
        {
          href: '/portfolio/miushi',
          text: 'Miushi'
        },
        {
          href: '/portfolio/nerds',
          text: 'Nerds'
        },
        {
          href: '/portfolio/olimp',
          text: 'Olimp'
        },
        {
          href: '/portfolio/pex',
          text: 'Pex'
        },
        {
          href: '/portfolio/reen',
          text: 'Reen'
        }
      ],
      portfolioTitleParams: [
        'atlantida',
        'brume',
        'cakes',
        'glaccy',
        'mishka',
        'miushi',
        'nerds',
        'olimp',
        'pex',
        'reen'
      ],
      portfolio: {
        atlantida: {
          title: 'Atlantida',
          previews: {
            desktop: {
              webp: require('@/assets/img/portfolio/atlantida/atlantida-desktop.webp'),
              jpg: require('@/assets/img/portfolio/atlantida/atlantida-desktop.jpg'),
              alt: 'Desktop version of Atlantida site'
            }
          },
          demo: 'https://balanarunity1337.github.io/atlantida/',
          github: 'https://github.com/BalanarUnity1337/atlantida/'
        },
        brume: {
          title: 'Brume',
          previews: {
            mobile: {
              webp: require('@/assets/img/portfolio/brume/brume-mobile.webp'),
              jpg: require('@/assets/img/portfolio/brume/brume-mobile.jpg'),
              alt: 'Mobile version of Brume site'
            },
            tablet: {
              webp: require('@/assets/img/portfolio/brume/brume-tablet.webp'),
              jpg: require('@/assets/img/portfolio/brume/brume-tablet.jpg'),
              alt: 'Tablet version of Brume site'
            },
            desktop: {
              webp: require('@/assets/img/portfolio/brume/brume-desktop.webp'),
              jpg: require('@/assets/img/portfolio/brume/brume-desktop.jpg'),
              alt: 'Desktop version of Brume site'
            }
          },
          demo: 'https://balanarunity1337.github.io/brume/',
          github: 'https://github.com/BalanarUnity1337/brume/'
        },
        cakes: {
          title: 'Cakes',
          previews: {
            mobile: {
              webp: require('@/assets/img/portfolio/cakes/cakes-mobile.webp'),
              jpg: require('@/assets/img/portfolio/cakes/cakes-mobile.jpg'),
              alt: 'Mobile version of Cakes site'
            },
            tablet: {
              webp: require('@/assets/img/portfolio/cakes/cakes-tablet.webp'),
              jpg: require('@/assets/img/portfolio/cakes/cakes-tablet.jpg'),
              alt: 'Tablet version of Cakes site'
            },
            desktop: {
              webp: require('@/assets/img/portfolio/cakes/cakes-desktop.webp'),
              jpg: require('@/assets/img/portfolio/cakes/cakes-desktop.jpg'),
              alt: 'Desktop version of Cakes site'
            }
          },
          demo: 'https://balanarunity1337.github.io/cakes/',
          github: 'https://github.com/BalanarUnity1337/cakes/'
        },
        glaccy: {
          title: 'Glaccy',
          previews: {
            desktop: {
              webp: require('@/assets/img/portfolio/glaccy/glaccy-desktop.webp'),
              jpg: require('@/assets/img/portfolio/glaccy/glaccy-desktop.jpg'),
              alt: 'Desktop version of Glaccy site'
            }
          },
          demo: 'https://balanarunity1337.github.io/230508-gllacy/',
          github: 'https://github.com/BalanarUnity1337/230508-gllacy/'
        },
        mishka: {
          title: 'Mishka',
          previews: {
            mobile: {
              webp: require('@/assets/img/portfolio/mishka/mishka-mobile.webp'),
              jpg: require('@/assets/img/portfolio/mishka/mishka-mobile.jpg'),
              alt: 'Mobile version of Mishka site'
            },
            tablet: {
              webp: require('@/assets/img/portfolio/mishka/mishka-tablet.webp'),
              jpg: require('@/assets/img/portfolio/mishka/mishka-tablet.jpg'),
              alt: 'Tablet version of Mishka site'
            },
            desktop: {
              webp: require('@/assets/img/portfolio/mishka/mishka-desktop.webp'),
              jpg: require('@/assets/img/portfolio/mishka/mishka-desktop.jpg'),
              alt: 'Desktop version of Mishka site'
            }
          },
          demo: 'https://balanarunity1337.github.io/230508-mishka/',
          github: 'https://github.com/BalanarUnity1337/230508-mishka/'
        },
        miushi: {
          title: 'Miushi',
          previews: {
            mobile: {
              webp: require('@/assets/img/portfolio/miushi/miushi-mobile.webp'),
              jpg: require('@/assets/img/portfolio/miushi/miushi-mobile.jpg'),
              alt: 'Mobile version of Miushi site'
            },
            tablet: {
              webp: require('@/assets/img/portfolio/miushi/miushi-tablet.webp'),
              jpg: require('@/assets/img/portfolio/miushi/miushi-tablet.jpg'),
              alt: 'Tablet version of Miushi site'
            },
            desktop: {
              webp: require('@/assets/img/portfolio/miushi/miushi-desktop.webp'),
              jpg: require('@/assets/img/portfolio/miushi/miushi-desktop.jpg'),
              alt: 'Desktop version of Miushi site'
            }
          },
          demo: 'https://balanarunity1337.github.io/miushi/index.html',
          github: 'https://github.com/BalanarUnity1337/miushi/'
        },
        nerds: {
          title: 'Nerds',
          previews: {
            desktop: {
              webp: require('@/assets/img/portfolio/nerds/nerds-desktop.webp'),
              jpg: require('@/assets/img/portfolio/nerds/nerds-desktop.jpg'),
              alt: 'Desktop version of Nerds site'
            }
          },
          demo: 'https://balanarunity1337.github.io/nerds/',
          github: 'https://github.com/BalanarUnity1337/nerds/'
        },
        olimp: {
          title: 'Olimp',
          previews: {
            mobile: {
              webp: require('@/assets/img/portfolio/olimp/olimp-mobile.webp'),
              jpg: require('@/assets/img/portfolio/olimp/olimp-mobile.jpg'),
              alt: 'Mobile version of Olimp site'
            },
            tablet: {
              webp: require('@/assets/img/portfolio/olimp/olimp-tablet.webp'),
              jpg: require('@/assets/img/portfolio/olimp/olimp-tablet.jpg'),
              alt: 'Tablet version of Olimp site'
            },
            desktop: {
              webp: require('@/assets/img/portfolio/olimp/olimp-desktop.webp'),
              jpg: require('@/assets/img/portfolio/olimp/olimp-desktop.jpg'),
              alt: 'Desktop version of Olimp site'
            }
          },
          demo: 'https://balanarunity1337.github.io/olimp/index.html',
          github: 'https://github.com/BalanarUnity1337/olimp/'
        },
        pex: {
          title: 'Pex',
          previews: {
            desktop: {
              webp: require('@/assets/img/portfolio/pex/pex-desktop.webp'),
              jpg: require('@/assets/img/portfolio/pex/pex-desktop.jpg'),
              alt: 'Desktop version of Pex site'
            }
          },
          demo: 'https://balanarunity1337.github.io/pex/index.html',
          github: 'https://github.com/BalanarUnity1337/pex/'
        },
        reen: {
          title: 'Reen',
          previews: {
            desktop: {
              webp: require('@/assets/img/portfolio/reen/reen-desktop.webp'),
              jpg: require('@/assets/img/portfolio/reen/reen-desktop.jpg'),
              alt: 'Desktop version of Reen site'
            }
          },
          demo: 'https://balanarunity1337.github.io/reen/',
          github: 'https://github.com/BalanarUnity1337/reen/'
        }
      },
      mockups: {
        mobile: {
          src: require('@/assets/img/mockups/apple-iphone-se-silver.png'),
          width: 300,
          height: 628,
          innerWidth: 260,
          alt: 'Apple iPhone SE mockup'
        },
        tablet: {
          src: require('@/assets/img/mockups/apple-ipad-air-2-silver.png'),
          width: 407,
          height: 574,
          innerWidth: 358,
          alt: 'Apple iPad Air 2 mockup'
        },
        desktop: {
          src: require('@/assets/img/mockups/apple-macbook-pro-15.png'),
          width: 1200,
          height: 694,
          innerWidth: 916,
          alt: 'Apple Macbook Pro mockup'
        }
      },
      redirection: false
    };
  },

  computed: {
    currentPortfolio() {
      return this.$route.params.title;
    }
  },

  beforeMount() {
    if (
      this.currentPortfolio !== undefined &&
      !this.portfolio.hasOwnProperty(this.currentPortfolio.toLowerCase())
    ) {
      this.redirection = true;
      this.$router.push({ name: 'NotFound' });
    }
  },

  mounted() {
    const scrollWidth = this.getScrollWidth();

    this.mockups.mobile.innerWidth += scrollWidth;
    this.mockups.tablet.innerWidth += scrollWidth;
    this.mockups.desktop.innerWidth += scrollWidth;
  },

  beforeRouteUpdate(to, from, next) {
    if (
      to.params.title !== undefined &&
      !this.portfolio.hasOwnProperty(to.params.title.toLowerCase())
    ) {
      this.$router.push({ name: 'NotFound' });
    }

    next();
  },

  methods: {
    getScrollWidth() {
      const div = document.createElement('div');

      div.style.overflowY = 'scroll';
      div.style.width = '100px';
      div.style.height = '100px';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);

      const scrollWidth = div.offsetWidth - div.clientWidth;

      document.body.removeChild(div);

      return scrollWidth;
    },

    switchPortfolio(direction) {
      const currentIndex = this.portfolioTitleParams.indexOf(this.currentPortfolio);

      if (direction === 'prev') {
        const targetIndex =
          currentIndex === 0 ? this.portfolioTitleParams.length - 1 : currentIndex - 1;

        this.prevPortfolio(targetIndex);
      } else if (direction === 'next') {
        const targetIndex =
          currentIndex === this.portfolioTitleParams.length - 1 ? 0 : currentIndex + 1;

        this.nextPortfolio(targetIndex);
      }
    },

    prevPortfolio(index) {
      this.$router.push({ name: 'Portfolio', params: { title: this.portfolioTitleParams[index] } });
    },

    nextPortfolio(index) {
      this.$router.push({ name: 'Portfolio', params: { title: this.portfolioTitleParams[index] } });
    }
  }
};
</script>
