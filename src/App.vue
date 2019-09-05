<template>
  <div id="app">
    <div class="wrapper">
      <form class="form" @submit.prevent>
          <input type="text" 
                 class="form-control" 
                 placeholder="Введите задачу..."
                 @keyup.enter="addTask($event.target)">
      </form>

      <ul class="list-group"
          v-for="(todo, key, index) in this.$store.state.todos">
        <li class="list-group__item"
            :class="{'line-through': todo.throughActive}"
            :key="key">
          <div class="todo">
            {{ todo.value }}
          </div>
          
          <div class="assets">
            <checkBox :checked=todo.throughActive
                      :index=+key
                      v-model="todo.throughActive">
            </checkBox>
            
            <btnDelete :index=+key
                       @remove="removeTask(key)">
            </btnDelete>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import checkBox from './components/checkBox.vue'
  import btnDelete from './components/btnDelete.vue'

  export default {
    data(){
      return {
        vx: this.$store.state
      }
    },
    methods: {
      addTask(target){
        if (/^\s*$/.test(target.value)) return;
        
        
        let obj = {
          'value': target.value,
          'throughActive': false
        }

        console.log('obj', obj);

        this.$set(this.vx.todos, this.vx.taskIterator, obj);
        console.log('todos', this.vx.todos);
        
        this.increment();
        console.log(this.vx.taskIterator);

        target.value = '';
      },
      increment () {
        this.$store.commit('increment');
      },
      removeTask(key){
        this.$delete(this.vx.todos, key);
      }
    },
    components: {
      checkBox,
      btnDelete
    }
}
</script>

<style lang="scss">
  @import 'bin/reset';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .line-through {
    text-decoration: line-through;
  }
  .wrapper {
    max-width: 1170px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .form {
    input{
      min-width: 300px;
      outline: none;
      border: none;
      height: 25px;
      padding-left: 5px;
      padding-right: 5px;
      border-bottom: 1px solid #2c3e50;
    }
  }
  .list-group {
    max-width: 500px;
    margin: 0 auto;
    margin-top: 25px;
    color: #a0a0a0;
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #d4d4d4;
      padding-bottom: 10px;
    }
  }
  .todo {
    text-align: left;
    width: 80%;
    word-break: break-word;
    padding-left: 10px;
  }
  .assets {
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
