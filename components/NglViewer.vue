<template>
  <div class="ngl-viewer w-full h-96 flex flex-col items-center justify-center">
    <div id="viewport" ref="viewport" class="w-full h-full bg-base-100 rounded-xl shadow-lg"></div>
  </div>
</template>

<script>
import * as NGL from 'ngl';

export default {
  name: 'NglViewer',
  methods: {
    initNGL() {
      this.stage = new NGL.Stage(this.$refs.viewport);

      window.addEventListener('resize', () => {
        this.stage.handleResize();
      });
    },
    loadMolecule(data) {
      this.stage.removeAllComponents();

      this.stage.loadFile(new Blob([data], { type: 'text/plain' }), { ext: 'sdf' }).then((o) => {
        o.addRepresentation('ball+stick', {
          aspectRatio: 2.0,
          multipleBond: 'symmetric',
          lineWidth: 2,
          roughness: 0.2,
          metalness: 0,
          radius: 0.15,
          scale: 0.1,
          radiusType: 'vdw',
          bondScale: 0.75,
          bondSpacing: 2,
          clipNear: 0
        });
        o.autoView();
      });
    },
    toggleSpin() {
      this.stage.toggleSpin()
    },
    toggleRock() {
      this.stage.toggleRock()
    }
   },
  mounted() {
    this.initNGL();
  }
};
</script>

<style scoped>
</style>
