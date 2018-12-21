<template>
  <canvas id="canvas" ref="canvas" resize="true"></canvas>
</template>

<script>
import paper from 'paper/dist/paper-full.js';
import { getRandomInt } from '@/utils/random.js';
import throttle from 'lodash.throttle';

export default {
  name: 'Canvas',

  data() {
    return {
      currentWindowWidth: window.innerWidth,
      currentWindowHeight: window.innerHeight,
      circles: {
        elements: [],
        pageOffsetX: [5, 22],
        pageOffsetY: [5, 22],
        marginX: [120, 200],
        marginY: [120, 200],
        radius: 2
      },
      lines: [],
      mouse: {
        pageX: null,
        pageY: null,
        lastTarget: null
      },
      defaultCirclesDencity: 2,
      currentCirclesDencity: null,
      onMouseMoveThrottled: throttle(this.onMouseMove, 50)
    };
  },

  mounted() {
    window.addEventListener('mousemove', this.onMouseMoveThrottled);

    this.drawCanvas();
    this.animatingCircles();

    paper.view.onFrame = throttle(this.animatingCircles, 100);
  },

  beforeDestroy() {
    window.removeEventListener('mousemove', this.onMouseMoveThrottled);

    paper.view.onFrame = null;
  },

  methods: {
    onMouseMove(e) {
      if (e) {
        this.mouse.pageX = e.pageX;
        this.mouse.pageY = e.pageY;
        this.mouse.lastTarget = e.target;
      }

      this.lines.forEach(item => {
        item.remove();
      });

      this.lines = [];

      if (this.mouse.lastTarget === this.$refs['canvas']) {
        this.circles.elements.forEach(item => {
          if (
            Math.sqrt(
              Math.pow(item.position.x - this.mouse.pageX, 2) +
                Math.pow(item.position.y - this.mouse.pageY, 2)
            ) <= 100
          ) {
            this.lines.push(
              new paper.Path.Line({
                from: new paper.Point(this.mouse.pageX, this.mouse.pageY),
                to: new paper.Point(item.position.x, item.position.y),
                strokeColor: '#ffffff',
                strokeWidth: 1,
                shadowColor: '#ffffff',
                shadowBlur: 10
              })
            );
          }
        });
      }
    },

    drawCanvas() {
      paper.setup(this.$refs['canvas']);

      if (!Array.isArray(this.circles.marginX)) {
        this.circles.marginX = new Array(this.circles.marginX, this.circles.marginX);
      }

      this.drawCircles();
    },

    drawCircles() {
      let row = 1;
      let col = 1;
      let currentOffsetX = 0;
      let currentOffsetY = 0;
      let isDrawing = true;
      while (isDrawing) {
        currentOffsetX +=
          getRandomInt(this.circles.marginX[0], this.circles.marginX[1]) + this.circles.radius;
        if (col === 1) {
          currentOffsetX = getRandomInt(this.circles.pageOffsetX[0], this.circles.pageOffsetX[1]);
          col++;
        } else if (col > 1) {
          currentOffsetX += this.circles.radius;
          col++;
        }
        currentOffsetY = 0;
        if (row === 1) {
          currentOffsetY = getRandomInt(this.circles.pageOffsetY[0], this.circles.pageOffsetY[1]);
        } else if (row > 1) {
          for (let i = 0; i < row - 1; i++) {
            currentOffsetY +=
              getRandomInt(this.circles.marginY[0], this.circles.marginY[1]) + this.circles.radius;
          }
          currentOffsetY += this.circles.radius;
        }
        if (currentOffsetX + this.circles.radius > this.currentWindowWidth) {
          row++;
          col = 1;
          currentOffsetX = 0;
          currentOffsetY = 0;
          continue;
        }
        if (currentOffsetY + this.circles.radius > this.currentWindowHeight) {
          isDrawing = false;
        }
        this.circles.elements.push(
          new paper.Shape.Circle({
            center: new paper.Point(currentOffsetX, currentOffsetY),
            radius: this.circles.radius,
            fillColor: '#ffffff',
            shadowColor: '#ffffff',
            shadowBlur: 10,
            shadowOffset: new paper.Point(0, 0)
          })
        );
      }

      const area = this.currentWindowWidth * this.currentWindowHeight;
      this.currentCirclesDencity = Math.floor(area / (100 * 100)) * this.defaultCirclesDencity;
      Array.apply(null, new Array(this.currentCirclesDencity))
        .map(() => {
          const newPointX = getRandomInt(0, this.currentWindowWidth);
          const newPointY = getRandomInt(0, this.currentWindowHeight);

          return {
            center: new paper.Point(newPointX, newPointY),
            radius: 2
          };
        })
        .forEach(item => {
          this.circles.elements.push(
            new paper.Shape.Circle({
              center: item.center,
              radius: item.radius,
              fillColor: '#ffffff',
              shadowColor: '#ffffff',
              shadowBlur: 10,
              shadowOffset: new paper.Point(0, 0)
            })
          );
        });
    },

    animatingCircles() {
      this.circles.elements.forEach((item, index) => {
        item.position.x += (index % 3 === 0 ? 5 : 15) / 50;

        if (item.bounds.left > paper.view.size.width) {
          item.position.x = -item.bounds.width;
        }
      });

      if (this.mouse.pageX && this.mouse.pageY) {
        this.onMouseMove();
      }
    }
  }
};
</script>

<style>
#canvas {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: #000000;
}
</style>
