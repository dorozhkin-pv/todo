<template>
  <div class="checkbox">
    <input type="checkbox"
           :checked="checked"
           :id="index"
           @change="$emit('change', $event.target.checked)">
    <label class="checkboxLabel" :for="index"></label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    index: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  input[type=checkbox] {
    display: none;
  }
  .checkbox {
      input[type=checkbox]:checked + label:after {
          outline: 1px solid #939598;
          border: 2px solid #fff;
          width: 10px;
          height: 10px;
          background-color: #63849F;
        }
    }
  .checkbox label:after {
      content: '';
      display: block;
      height: 14px;
      width: 14px;
      outline: 1px solid #939598;
  }


</style>
