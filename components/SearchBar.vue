<template>
    <div class="join">
        <input class="input input-bordered join-item text-lg w-72" type="text" placeholder="Search Compound" required>
        <div class="indicator">
          <button type="submit" class="btn btn-primary join-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 m-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    typewriterEffect: Boolean
})

class Typerwriter {
    constructor(el, options){
      this.el = el;
      this.words = [...this.el.dataset.typewriter.split(';')];
      this.speed = options?.speed || 100;
      this.delay = options?.delay || 1500;
      this.repeat = options?.repeat;
      this.initTyping();
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    toggleTyping = () => this.el.classList.toggle('typing');

    async typewrite(word){
      await this.wait(this.delay);
      this.toggleTyping();
      let result = '|';
      for (const letter of word.split('')) {
        result = result.slice(0, result.length - 1) + letter + result.slice(result.length - 1, result.length);
        this.el.placeholder = result
        await this.wait(this.speed)
      }
      this.toggleTyping();
      await this.wait(this.delay);
      this.toggleTyping();
      while (this.el.placeholder.length !== 0){
        this.el.placeholder = this.el.placeholder.slice(0, -1);
        await this.wait(this.speed)
      }
      this.toggleTyping();
    }

    async initTyping() {
      for (const word of this.words){
        await this.typewrite(word);
      }
      if(this.repeat){
        await this.initTyping();
      } else {
        this.el.style.animation = 'none';
      }
    }
  }

  document.querySelectorAll('[data-typewriter]').forEach(el => {
    new Typerwriter(el, {
      repeat: true,
      speed: 100
    })
  })
</script>

<style>

</style>