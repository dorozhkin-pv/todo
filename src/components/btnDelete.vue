<template>
  <div>
    <button class="btn btn-delete"
            type="button" 
            @click="$emit('remove', index)">
      &#10006;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    index: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .btn {
    display: inline-block;
    width: 30px;
    height: 30px;   
    text-align: center;
    text-decoration: none;
  }
  .btn-delete {
    line-height: 30px;
    text-shadow: 0 1px rgba(255,255,255,.2), 0 -1px rgba(0,0,0,.8);
    outline: none;
    border: none;
    border-radius: 100px;
    background: rgb(28,107,114) radial-gradient(150% 100% at 50% 5px, rgba(255,255,255,.2), rgba(0,0,0,0));
    box-shadow: inset rgba(0,0,0,.6) 0 -2px 5px, inset rgba(252,255,255,.7) 0 2px 5px, rgba(0,0,0,.8) 0 2px 5px -1px;
    color: rgb(0,79,86);
  }
  .btn-delete:hover {
    color: rgb(0,59,66);
    cursor: pointer;
  }
  .btn-delete:active {
    padding-bottom: 1px;
    box-shadow:
     inset rgba(0,0,0,1) 0 1px 3px,
     inset rgba(0,0,0,.6) 0 -2px 5px,
     inset rgba(252,255,255,.7) 0 2px 5px,
     0 1px rgba(255,255,255,.08);
    color: rgb(128,207,214);
  }
</style>
