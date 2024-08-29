export default class Typerwriter {
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